import React from "react";

const ShippingPage = () => {
  return (
    <div
      className="px-4 md:px-8 lg:px-6 xl:px-10 2xl:px-24 w-full flex flex-col items-center overflow-hidden"
      style={{ fontFamily: '"Alumni Sans Pinstripe", serif' }}
    >
      {" "}
      <div
        className="w-screen h-screen xl:flex-row bg-cover bg-center fade-in"
        style={{
          backgroundImage: "url('/shippingdesk.jpg')",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-8 p-6 w-full h-full bg-black bg-opacity-40">
          <h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-white font-thin text-white"
            style={{
              fontFamily: '"Alumni Sans Pinstripe", serif',
            }}
          >
            Shipping Policy
          </h1>
        </div>
      </div>
      <div>
        <div className="py-6">
          <p className="text-xl text-[#FFFFF0] ">
            At Al Badar, we aim to provide a smooth and reliable shopping
            experience. Our shipping policy ensures that your attars and
            fragrances are delivered safely and promptly to your doorstep. We
            offer various shipping options, including standard and expedited
            services, to meet your needs.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            ORDER PROCESSING:
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            Please allow 36-48 hrs to process your order. Expect an email to let
            you know your order is on the way!
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">DELIVERY:</h2>
          <p className="text-xl text-[#FFFFF0] ">
            During checkout, enter your address and choose the ship option.
            Click the &quot;continue to shipping&quot; button. Orders placed
            before 2 pm, will be dispatched the same day. Orders placed after
            this hour will be dispatched the next day we are open. When your
            order is ready for delivery, you will receive an email with
            real-time tracking information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
