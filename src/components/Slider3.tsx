import { wixClientServer } from "@/lib/wixClientServer";
import GridProducts from "../components/GridProducts";

const Slider3 = async () => {
  const wixClient = await wixClientServer();

  return (
    <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-6 p-4 lg:p-8">
      {/* VIDEO SECTION */}
      <div className="w-full lg:w-2/3 aspect-video border-2 border-black flex items-center justify-center text-gray-600 text-3xl font-serif rounded-xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-xl"
        >
          <source src="/timeline3.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* PRODUCTS SECTION (Replaces Categories) */}
      <div className="w-full lg:w-1/3 flex items-stretch">
        <GridProducts
          categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
          limit={4}
        />
      </div>
    </div>
  );
};

export default Slider3;
