import React from "react";

const FaqPage = () => {
  return (
    <div
      className="px-4 md:px-8 lg:px-6 xl:px-10 2xl:px-24 w-full flex flex-col items-center overflow-hidden"
      style={{ fontFamily: '"Alumni Sans Pinstripe", serif' }}
    >
      {" "}
      <div
        className="w-screen h-screen xl:flex-row bg-cover bg-center fade-in"
        style={{
          backgroundImage: "url('/FAQdesk.jpg')",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-8 p-6 w-full h-full bg-black bg-opacity-40">
          <h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-white font-thin text-white"
            style={{
              fontFamily: '"Alumni Sans Pinstripe", serif',
            }}
          >
            Frequently Asked Questions
          </h1>
        </div>
      </div>
      <div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            1. What types of fragrances do you offer?
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            We offer a diverse range of fragrances, including Oceanic, Fresh,
            Citrus and Woody notes curated to suit every preference and
            occasion.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            2. How do I choose the right fragrance?
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            Selecting a fragrance is a personal journey! If you&apos;re new to
            perfumes you can refer to our Fragrance Guide, available on the
            footer of the website, which explains the top, middle, and base
            notes to help you find the perfect match.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            3. Do you offer samples?
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            No, currently we are not offering any samples for the product but we
            have a vision to offer sample sets so you can experience different
            fragrances before committing to a full-size bottle.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            4. Are your fragrances long-lasting?
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            Absolutely. We design our perfumes with high-quality, concentrated
            ingredients to ensure a long-lasting scent experience. However,
            longevity can vary based on the fragrance type and your skin
            chemistry.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            5. What is the difference between Attar and Eau de Parfum?
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            Attar is a pure, alcohol-free fragrance oil, traditionally made from
            natural ingredients, and is highly concentrated. Eau de Parfum
            contains a mixture of fragrance oils and alcohol, offering a lighter
            application but still providing a lasting scent. Each offers a
            unique way to wear fragrance.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            6. Are your perfumes natural or synthetic?
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            We use a blend of high-quality natural and safe synthetic
            ingredients to create complex, balanced scents. Our goal is to offer
            a luxurious fragrance experience while ensuring the safety and
            sustainability of our ingredients.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            7. How should I apply my Attar for the best results?
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            Apply Attar to pulse points like the wrists, neck, and behind the
            ears, as these areas emit warmth, helping the fragrance to diffuse.
            Avoid rubbing your wrists together, as this can break down the
            scent. For a lighter effect, try spritzing your hair or clothing.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            8. Do you offer any seasonal or limited-edition collections?
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            Yes, we release seasonal collections to capture the essence of
            different times of the year, as well as occasional limited-edition
            fragrances. Sign up for our newsletter to stay updated on new
            launches and exclusive releases.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            9. Can I layer different perfumes?
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            Certainly! Layering can be a wonderful way to create a personalized
            fragrance. Start with a lighter scent as a base, and add a more
            intense fragrance on top. Experiment with different combinations to
            find a unique blend that suits your mood.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            10. How can I keep my fragrance fresh for longer?
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            To maintain your fragrance&apos;s quality, store it in a cool, dry
            place, away from direct sunlight and extreme temperatures. Avoid
            storing it in the bathroom or other humid areas, as this can impact
            the scent’s longevity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
