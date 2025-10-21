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

const FeaturedProducts = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();

  let productQuery = wixClient.products.queryProducts();

  // Filters (only applied when relevant)
  if (searchParams?.name) {
    productQuery = productQuery.startsWith("name", searchParams.name);
  }

  if (categoryId) {
    productQuery = productQuery.hasSome("collectionIds", [categoryId]);
  }

  if (searchParams?.type) {
    productQuery = productQuery.hasSome("productType", [searchParams.type]);
  } else {
    productQuery = productQuery.hasSome("productType", ["physical", "digital"]);
  }

  if (searchParams?.min !== undefined) {
    productQuery = productQuery.gt("priceData.price", searchParams.min);
  }

  if (searchParams?.max !== undefined) {
    productQuery = productQuery.lt("priceData.price", searchParams.max);
  }

  productQuery = productQuery
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");
    if (sortType === "asc") productQuery = productQuery.ascending(sortBy);
    if (sortType === "desc") productQuery = productQuery.descending(sortBy);
  }

  const res = await productQuery.find();

  return (
    <div
      className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12"
      style={{
        fontFamily: '"Alumni Sans Pinstripe", serif',
      }}
    >
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="flex flex-col gap-4"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={`${product.media?.mainMedia?.image?.url}?q=100&w=1600`}
              alt=""
              fill
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
            />
            {product.media?.items?.[1]?.image?.url && (
              <Image
                src={`${product.media?.items[1].image.url}?q=100&w=1200&h=2400`}
                alt=""
                fill
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-xl">{product.name}</span>
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
            />
          )}
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-md hover:bg-lama hover:text-white">
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

export default FeaturedProducts;
