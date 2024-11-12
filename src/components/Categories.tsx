import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";

const Categories = async () => {
  const wixClient = await wixClientServer();
  const cats = await wixClient.collections.queryCollections().find();

  // Define custom labels for specific categories
  const labelMapping: Record<string, { heading: string; description: string }> =
    {
      citrus: {
        heading: "Zestful Bliss",
        description: "Revitalize with Citrus & Fresh Aromas",
      },
      woody: {
        heading: "Earth's Embrace",
        description: "Grounded in Woody Depth & Resilience",
      },
      aquatic: {
        heading: "Aqua Veil",
        description: "Refresh with Cool, Misty & Aquatic Notes",
      },
      floral: {
        heading: "Petal Serenity",
        description: "Bloom with Delicate Floral Fragrances",
      },
    };

  // Filter out the "all-products" category
  const filteredCategories = cats.items.filter(
    (item) => item.slug?.toLowerCase() !== "all-products"
  );

  return (
    <div
      className="scrollbar-hide"
      style={{
        fontFamily: '"Alumni Sans Pinstripe", serif',
      }}
    >
      <div className="flex flex-wrap">
        {filteredCategories.map((item) => {
          const normalizedSlug =
            item.slug?.toLowerCase().trim().replace(/\s+/g, "-") || "";

          // Check if the current slug exists in the labelMapping
          const categoryInfo = labelMapping[normalizedSlug];
          const heading = categoryInfo?.heading || item.name; // Default to item.name if no mapping
          const description =
            categoryInfo?.description || "Description not available";

          return (
            <Link
              href={`/list?cat=${item.slug || ""}`}
              className="flex w-1/2 sm:w-1/2 lg:w-1/2 xl:w-1/2"
              key={item._id}
            >
              <div className="relative bg-slate-100 w-full h-[36rem] overflow-hidden group">
                {/* Image */}
                <Image
                  src={`${
                    item.media?.mainMedia?.image?.url || "/cat.png"
                  }?q=100&w=1200&h=2400`}
                  alt="image"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay and Text */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out flex items-center justify-center">
                  <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out text-center">
                    <h1 className="text-6xl">{heading}</h1>
                    <p className="text-xl">{description}</p>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
