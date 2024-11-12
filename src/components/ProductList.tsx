import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import dynamic from "next/dynamic";

const Pagination = dynamic(() => import("../components/Pagination"), {
  ssr: false,
});
const PRODUCT_PER_PAGE = 8;
const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();

  const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    if (sortType === "asc") {
      productQuery.ascending(sortBy);
    }
    if (sortType === "desc") {
      productQuery.descending(sortBy);
    }
  }

  const res = await productQuery.find();

  return (
    <div
      className="mt-12 flex justify-around items-center gap-y-5 lg:gap-y-8 flex-wrap"
      style={{
        fontFamily: '"Alumni Sans Pinstripe", serif',
      }}
    >
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="w-1/2 md:w-1/3 flex flex-col p-2 gap-4"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={`${product.media?.mainMedia?.image?.url}?q=100&w=1600`} // Add high quality and large width parameters
              alt="image"
              fill // Allow image to take up full width on mobile
              className="absolute object-cover z-10 hover:opacity-0 transition-opacity ease duration-500"
            />
            {product.media?.items && (
              <Image
                src={`${product.media?.items[1]?.image?.url}?q=100&w=1600`}
                alt="image"
                fill
                className="absolute object-cover"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-2xl">{product.name}</span>
            <span className="font-semibold text-xl">
              ₹{product.price?.discountedPrice}
            </span>
          </div>
          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "shortDesc"
                  )?.description || ""
                ),
              }}
            ></div>
          )}
          <button className="rounded-2xl ring-1 ring-yellow text-yellow w-max py-2 px-4 text-lg hover:bg-yellow hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
      {searchParams?.cat || searchParams?.name ? (
        <Pagination
          currentPage={res.currentPage || 0}
          hasPrev={res.hasPrev()}
          hasNext={res.hasNext()}
        />
      ) : null}
    </div>
  );
};

export default ProductList;
