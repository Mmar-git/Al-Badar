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
          backgroundImage: "url('/tipsdesk.jpg')",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-8 p-6 w-full h-full bg-black bg-opacity-40">
          <h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-white font-thin text-white"
            style={{
              fontFamily: '"Alumni Sans Pinstripe", serif',
            }}
          >
            Fragrance Care Tips for Long-lasting Enjoyment
          </h1>
        </div>
      </div>
      <div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            1. Store Your Attars in a Cool, Dark Place
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            Heat, sunlight, and humidity can alter the delicate balance of
            natural ingredients in attars. Store your bottles in a cool, dry
            area away from direct sunlight. A cupboard or drawer works best,
            keeping the fragrance in its purest form.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            2. Keep Bottles Tight and Sealed
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            Ensure that the bottle cap is tightly sealed after each use.
            Exposure to air can cause the oils to oxidize and lose their
            fragrance over time. A well-sealed bottle helps to maintain the
            potency and longevity of the scent.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            3. Avoid Storing Attars in the Bathroom
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            While it may seem convenient, bathrooms are often humid and
            fluctuate in temperature, which can negatively impact the fragrance.
            It&apos;s better to keep your attars in a stable environment away
            from moisture.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            4. Don’t Expose to Extreme Temperatures
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            Extreme cold or heat can alter the fragrance notes in your attars.
            Keep your fragrance bottles away from sources of intense heat (like
            radiators) or freezing temperatures (such as a fridge or freezer).
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            5. Use Attars Sparingly
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            Attars are concentrated natural perfumes, so a little goes a long
            way. Applying too much at once can overwhelm your senses. Use only a
            few drops, and you&apos;ll enjoy the full depth of the fragrance.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            6. Avoid Contact with Skin Directly
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            When applying your attar, try to avoid direct contact with your skin
            as much as possible. Instead, dab a little on pulse points (wrists,
            behind the ears) or use a cotton pad. This minimizes skin exposure
            and helps to preserve the fragrance for longer.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            7. Pair Fragrances for a Personal Signature
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            Mixing two or more attars can create a unique fragrance signature
            just for you. However, it&apos;s essential to test combinations on a
            small patch before applying them more generously. This ensures you
            get a balanced, harmonious scent without overpowering any of the
            notes.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            8. Keep Away from Strong Scents
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            Attars are delicate, and strong-smelling substances like lotions,
            deodorants, or other perfumes can alter their original scent. Apply
            attars before any other scented products to allow the full fragrance
            to shine.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            9. Don’t Shake Your Bottle
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            Shaking your attar bottle can cause the oils to break down and alter
            the fragrance. Instead, gently swirl the bottle if you want to mix
            the contents.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            10. Enjoy Your Attar Regularly
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            The more often you use your attar, the better you’ll get to know its
            nuances. Regular use allows you to enjoy its evolving notes and
            ensure it stays in perfect condition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
