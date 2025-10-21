import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Pagination = dynamic(() => import("../components/Pagination"), {
  ssr: false,
});

const PRODUCT_PER_PAGE = 8;

const ExploreProd = async ({
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

  // Filters (same as FeaturedProducts)
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
    <div className="mt-12 flex justify-center items-center gap-x-3 flex-nowrap">
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="w-[16rem] h-[20rem] lg:w-[16rem] lg:h-[28rem] flex items-center"
          key={product._id}
        >
          <div className="relative w-full h-full">
            <Image
              src={`${
                product.media?.mainMedia?.image?.url || "/product.png"
              }?q=100&w=1200&h=2400`}
              alt=""
              fill
              className="absolute object-cover z-10 hover:opacity-0 transition-opacity ease duration-500"
            />
            {product.media?.items?.[1]?.image?.url && (
              <Image
                src={`${
                  product.media?.items[1].image.url || "/product.png"
                }?q=100&w=1200&h=2400`}
                alt=""
                fill
                className="absolute object-cover"
              />
            )}
          </div>
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

export default ExploreProd;
