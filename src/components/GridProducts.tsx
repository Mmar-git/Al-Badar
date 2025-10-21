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

const GridProducts = async ({
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
      className={`grid grid-cols-2 gap-4 w-full h-full ${
        limit === 4
          ? "lg:h-full" // ✅ ensures it stretches vertically
          : "mt-12 max-w-6xl gap-x-6 gap-y-10"
      }`}
      style={{
        fontFamily: '"Alumni Sans Pinstripe", serif',
      }}
    >
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          key={product._id}
          className={`relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-black group ${
            limit === 4
              ? "aspect-square w-full h-full" // ✅ make perfect squares
              : "w-full sm:w-[90%] md:w-[80%] lg:w-[75%] gap-4"
          }`}
        >
          {/* Primary Image */}
          <Image
            src={`${product.media?.mainMedia?.image?.url}?q=100&w=800`}
            alt=""
            fill
            className="absolute object-cover rounded-xl z-10 opacity-100 group-hover:opacity-0 transition-opacity ease duration-500"
          />

          {/* Hover Image */}
          {product.media?.items?.[1]?.image?.url && (
            <Image
              src={`${product.media?.items[1].image.url}?q=100&w=800`}
              alt=""
              fill
              className="absolute object-cover rounded-xl opacity-100"
            />
          )}
        </Link>
      ))}
    </div>
  );
};

export default GridProducts;
