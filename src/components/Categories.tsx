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

  // ✅ Filter to include only categories present in labelMapping
  const filteredCategories = cats.items.filter((item) => {
    const slug = item.slug?.toLowerCase().trim().replace(/\s+/g, "-") || "";
    return slug in labelMapping;
  });

  return (
    <div
      className="scrollbar-hide py-12"
      style={{
        fontFamily: '"Alumni Sans Pinstripe", serif',
      }}
    >
      <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {filteredCategories.map((item) => {
          const normalizedSlug =
            item.slug?.toLowerCase().trim().replace(/\s+/g, "-") || "";

          const categoryInfo = labelMapping[normalizedSlug];
          const heading = categoryInfo?.heading || item.name;
          const description =
            categoryInfo?.description || "Description not available";

          return (
            <Link
              href={`/list?cat=${item.slug || ""}`}
              className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] group"
              key={item._id}
            >
              <div className="relative w-full h-[28rem]">
                <Image
                  src={`${
                    item.media?.mainMedia?.image?.url || "/cat.png"
                  }?q=100&w=1200&h=2400`}
                  alt="image"
                  fill
                  className="object-cover rounded-md transition-transform duration-500"
                />

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
