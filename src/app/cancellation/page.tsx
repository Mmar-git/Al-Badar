import React from "react";

const CancellationPage = () => {
  return (
    <div
      className="px-4 md:px-8 lg:px-6 xl:px-10 2xl:px-24 w-full flex flex-col items-center overflow-hidden"
      style={{ fontFamily: '"Alumni Sans Pinstripe", serif' }}
    >
      {" "}
      <div
        className="w-screen h-screen xl:flex-row bg-cover bg-center fade-in"
        style={{
          backgroundImage: "url('/canceldesk.png')",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-8 p-6 w-full h-full bg-black bg-opacity-40">
          <h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-white font-thin text-white"
            style={{
              fontFamily: '"Alumni Sans Pinstripe", serif',
            }}
          >
            Order Cancellation
          </h1>
        </div>
      </div>
      <div>
        <div className="py-6">
          <p className="text-xl text-[#FFFFF0] ">
            At Al Badar, we strive to offer the best shopping experience for our
            customers. We understand that sometimes plans change, and you may
            need to cancel your order. Below is our cancellation policy to guide
            you through the process.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            How to Cancel an Order
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            If you wish to cancel an order, please reach out to our customer
            service team as soon as possible. You can contact us via: Email:
            support@Al Badar.in We recommend you contact us within 24 hours of
            placing the order for the best chance to process the cancellation.
            Once the order has been shipped, it cannot be canceled.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            When Can You Cancel an Order?
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            Before Shipment: You can cancel your order if it hasn&apos;t been
            shipped yet. To ensure this, contact us as soon as possible.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            Order Cancellation Charges
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            No Charge: If the cancellation request is made before the order is
            shipped, you will not incur any charges. Non-refundable Shipping
            Charges: If your order has been dispatched before you request
            cancellation, any shipping charges paid will not be refunded.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">Refund Process</h2>
          <p className="text-xl text-[#FFFFF0] ">
            Once your cancellation request is successfully processed, we will
            issue a refund to your original payment method. Please note that it
            may take 5-7 business days for the refund to reflect in your
            account, depending on your payment provider.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            How to Cancel an Order After It Has Been Dispatched
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            If your order has already been shipped, you can refuse the package
            at the time of delivery. Once the item is returned to us, we will
            process your cancellation and refund as per the above process.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">
            Exceptions to Cancellation
          </h2>
          <p className="text-xl text-[#FFFFF0] ">
            Custom Products: Any custom or personalized products cannot be
            canceled once the order is confirmed. Sale Items: Orders placed
            during promotional events or sales may have different cancellation
            terms. Please refer to the specific event terms for details.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl text-bold text-[#B68D3B]">Contact Us</h2>
          <p className="text-xl text-[#FFFFF0] ">
            For any questions or concerns regarding cancellations, please feel
            free to contact us. We are here to help! Email:
            al.badarperfumeries@gmail.in We appreciate your understanding and
            thank you for shopping with Al Badar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CancellationPage;
