import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import Skeleton from "@/components/Skeleton";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Suspense } from "react";
const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];
  let recommendedCategoryId = process.env.FEATURED_PRODUCTS_CATEGORY_ID!;

  if (product.price?.discountedPrice === 399) {
    recommendedCategoryId = process.env.EXPLORE_PRODUCTS_CATEGORY_ID!;
  }
  return (
    <div className="flex flex-col px-4 md:px-8 mt-8 lg:px-16 xl:px-32 2xl:px-64 relative gap-8">
      <div
        className="flex flex-col lg:flex-row gap-16"
        style={{
          fontFamily: '"Alumni Sans Pinstripe", serif',
        }}
      >
        {/*IMAGE*/}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages items={product.media?.items} />
        </div>
        {/*TEXT*/}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-6xl font-medium text-yellow">{product.name}</h1>
          <p
            className="text-gray-300 text-2xl lg:text-xl"
            dangerouslySetInnerHTML={{ __html: product.description || "" }}
          />
          <div className="h-[1px] bg-[#FFFFF0]" />
          {product.price?.price === product.price?.discountedPrice ? (
            <h2 className="font-medium text-2xl">₹{product.price?.price}</h2>
          ) : (
            <div className="flex items-center gap-4">
              <h3 className="text-3xl text-gray-500 line-through">
                ₹{product.price?.price}
              </h3>
              <h2 className="font-medium text-5xl text-yellow">
                ₹{product.price?.discountedPrice}
              </h2>
            </div>
          )}
          <div className="h-[1px] bg-[#FFFFF0]" />
          {product.variants && product.productOptions ? (
            <CustomizeProducts
              productId={product._id!}
              variants={product.variants}
              productOptions={product.productOptions}
            />
          ) : (
            <Add
              productId={product._id!}
              variantId="00000000-0000-0000-0000-000000000000"
              stockNumber={product.stock?.quantity || 0}
            />
          )}
          <div className="h-[1px] bg-[#FFFFF0]" />
          {product.additionalInfoSections?.map((section: any) => (
            <div className="text-sm" key={section.title}>
              <h4 className="font-medium mb-4 text-2xl">{section.title}</h4>
              <p
                className="text-gray-300 text-xl lg:text-xl"
                dangerouslySetInnerHTML={{ __html: section.description || "" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-[#FFFFF0]" />
      <div className="">
        <h1
          className="text-3xl"
          style={{
            fontFamily: '"Alumni Sans Pinstripe", serif',
          }}
        >
          Also Experience
        </h1>
        <Suspense fallback={<Skeleton />}>
          <FeaturedProducts categoryId={recommendedCategoryId} limit={4} />
        </Suspense>
      </div>
    </div>
  );
};

export default SinglePage;
