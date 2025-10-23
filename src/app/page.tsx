import Categories from "@/components/Categories";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import Slider3 from "@/components/Slider3";
import Skeleton from "@/components/Skeleton";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { Suspense, useContext, useEffect } from "react";
import { wixClientServer } from "@/lib/wixClientServer";
import Slider2 from "@/components/Slider2";
import ExploreProd from "@/components/ExploreProd";
import FeaturedProducts from "@/components/FeaturedProducts";
import Link from "next/link";
const HomePage = async () => {
  // const wixClient = useWixClient();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();

  //     console.log(res);
  //   };

  //   getProducts();
  // }, [wixClient]);

  // const wixClient = await wixClientServer();

  // const res = await wixClient.products.queryProducts().find();

  // console.log(res);

  return (
    <div className="">
      <Slider />
      <div className="h-26 px-4 py-4 bg-[#040404]">
        <div className="flex flex-col items-center text-center max-w-full justify-center bg-[#040404] border border-[#B68D3B] overflow-hidden p-4 gap-0.5">
          <p
            className="text-[1.2rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] text-[#B68D3B]"
            style={{
              fontFamily: '"Alex Brush", serif',
            }}
          >
            Modern Fragrance Ritual. Scent more with less.
          </p>
          <a
            className="text-[1.3rem] text-[#B68D3B]"
            href="/products"
            style={{
              fontFamily: '"Alumni Sans Pinstripe", serif',
            }}
          >
            explore
          </a>
        </div>
      </div>
      <div className="relative p-8 md:p-2 lg:p-8 xl:p-12 2xl:p-16">
        <div className="flex items-center justify-between mb-6">
          <h1
            className="text-3xl"
            style={{
              fontFamily: '"Alumni Sans Pinstripe", serif',
            }}
          >
            A Taste of Elegance
          </h1>
          <Link href="/products12ml">
            <button
              className="w-32 rounded-md border border-white text-white bg-transparent py-3 px-4 text-xl hover:bg-white hover:text-black transition-colors duration-300"
              style={{
                fontFamily: '"Alumni Sans Pinstripe", serif',
              }}
            >
              SHOW MORE
            </button>
          </Link>
        </div>

        <Suspense fallback={<Skeleton />}>
          <FeaturedProducts
            categoryId={process.env.TWELVE_ML_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>

      <Slider2 />
      <div className="relative p-8 md:p-2 lg:p-8 xl:p-12 2xl:p-16">
        <div className="flex items-center justify-between mb-6">
          <h1
            className="text-3xl"
            style={{
              fontFamily: '"Alumni Sans Pinstripe", serif',
            }}
          >
            Own the Essence Of <br />
            Luxury
          </h1>
          <Link href="/products50ml">
            <button
              className="w-32 rounded-md border border-white text-white bg-transparent py-3 px-4 text-xl hover:bg-white hover:text-black transition-colors duration-300"
              style={{
                fontFamily: '"Alumni Sans Pinstripe", serif',
              }}
            >
              SHOW MORE
            </button>
          </Link>
        </div>

        <Suspense fallback={<Skeleton />}>
          <FeaturedProducts
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="h-26 px-4 py-4 bg-[#040404]">
        <div className="flex flex-col items-center text-center max-w-full justify-center bg-[#040404] border border-[#B68D3B] overflow-hidden p-4 gap-0.5">
          <p
            className="text-[1.2rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] text-[#B68D3B]"
            style={{
              fontFamily: '"Alex Brush", serif',
            }}
          >
            “Perfume is the most intense form of memory.”
          </p>
          <p
            className="text-[1.3rem] text-[#B68D3B]"
            style={{
              fontFamily: '"Alumni Sans Pinstripe", serif',
            }}
          >
            — Jean Paul Guerlain
          </p>
        </div>
      </div>
      {/* <Slider3 /> */}
      {/* <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"Loading"}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div> */}
      <div className="p-8 md:p-2 lg:p-8 xl:p-12 2xl:p-16">
        <h1
          className="text-3xl"
          style={{
            fontFamily: '"Alumni Sans Pinstripe", serif',
          }}
        >
          The House of Al-Badar
        </h1>
        <Suspense fallback={<Skeleton />}>
          <Categories />
        </Suspense>
      </div>
      <div className="h-26 px-4 py-4 bg-[#040404]">
        <div className="flex flex-col items-center text-center max-w-full justify-center bg-[#040404] border border-[#B68D3B] overflow-hidden p-4 gap-0.5">
          <p
            className="text-[1.2rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] text-[#B68D3B]"
            style={{
              fontFamily: '"Alex Brush", serif',
            }}
          >
            &quot;In every bottle of perfume lies an unspoken poem, waiting to
            be released.&quot;
          </p>
          <p
            className="text-[1.3rem] text-[#B68D3B]"
            style={{
              fontFamily: '"Alumni Sans Pinstripe", serif',
            }}
          >
            — Annick Goutal
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-row gap-24">
        <div className="flex items-center flex-start w-1/2 h-screen">
          <div className="flex flex-col ml-12">
            <h2
              className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-[#FFFFF0]"
              style={{
                fontFamily: '"Alumni Sans Pinstripe", serif',
              }}
            >
              More to
            </h2>
            <h1
              className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFFFF0] bold"
              style={{
                fontFamily: '"Alumni Sans Pinstripe", serif',
              }}
            >
              Explore
            </h1>
            <p
              className="text-lg sm:text-lg md:text-xl lg:text-2xl text-[#FFFFF0]"
              style={{
                fontFamily: '"Alumni Sans Pinstripe", serif',
              }}
            >
              Discover curated scents and seasonal fragrances, crafted to
              capture the essence of every moment.
            </p>
          </div>
        </div>
        <Suspense fallback={<Skeleton />}>
          <ExploreProd
            categoryId={process.env.EXPLORE_PRODUCTS_CATEGORY_ID!}
            limit={3}
          />
        </Suspense>
      </div>

      <div className="flex flex-col mt-16 md:hidden">
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center">
            <h2
              className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl text-[#FFFFF0]"
              style={{
                fontFamily: '"Alumni Sans Pinstripe", serif',
              }}
            >
              More to
            </h2>
            <h1
              className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFFFF0] bold"
              style={{
                fontFamily: '"Alumni Sans Pinstripe", serif',
              }}
            >
              Explore
            </h1>
            <p
              className="text-lg sm:text-lg md:text-xl lg:text-2xl text-[#FFFFF0] text-center px-6"
              style={{
                fontFamily: '"Alumni Sans Pinstripe", serif',
              }}
            >
              Discover curated scents and seasonal fragrances, crafted to
              capture the essence of every moment.
            </p>
          </div>
        </div>
        <div className="p-8">
          <Suspense fallback={<Skeleton />}>
            <ExploreProd
              categoryId={process.env.EXPLORE_PRODUCTS_CATEGORY_ID!}
              limit={2}
            />
          </Suspense>
        </div>
      </div>
      <div className="h-26 px-4 py-4 bg-[#040404]">
        <div className="flex flex-col items-center max-w-full text-center justify-center bg-[#040404] border border-[#B68D3B] overflow-hidden p-4 gap-0.5">
          <p
            className="text-[1.2rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] text-[#B68D3B]"
            style={{
              fontFamily: '"Alex Brush", serif',
            }}
          >
            “Smell is a word, perfume is literature.”
          </p>
          <p
            className="text-[1.3rem] text-[#B68D3B]"
            style={{
              fontFamily: '"Alumni Sans Pinstripe", serif',
            }}
          >
            — Jean Claude Ellena
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
