import React from "react";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div
      className="px-4 md:px-8 lg:px-6 xl:px-10 2xl:px-24 w-full flex flex-col items-center overflow-hidden"
      style={{
        fontFamily: '"Alumni Sans Pinstripe", serif',
      }}
    >
      <div
        className="w-screen h-screen xl:flex-row bg-cover bg-center fade-in"
        style={{
          backgroundImage: "url('/AboutDesk.jpg')",
        }}
      >
        {" "}
        <div className="flex flex-col items-center justify-center text-center gap-8 p-6 w-full h-full bg-black bg-opacity-40">
          <h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-white font-thin text-white"
            style={{
              fontFamily: '"Alumni Sans Pinstripe", serif',
            }}
          >
            About Us
          </h1>
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-8 mt-12">
        <div className="flex gap-4">
          <Image
            src="/About1.jpeg"
            alt="image"
            width={1000}
            height={1200}
            className="h-[26rem] w-[34rem]"
          />
          <div className="flex flex-col">
            <h2 className="text-[#B68D3B] text-3xl px-8 flex items-center">
              Our Story
            </h2>
            <p className="text-[#B68D3B] text-2xl px-8 flex items-center">
              At Al Badar, our passion for perfumes began with a deep
              appreciation for the ancient art of attar-making. Rooted in
              centuries of tradition, attars have been cherished for their
              purity, elegance, and deep connection to nature. The name Al Badar
              symbolizes &quot;the full moon,&quot; representing the beauty,
              clarity, and natural elegance we aim to capture in each of our
              scents. <br />
              Our journey started with a desire to offer more than just
              perfumes; we wanted to share the essence of nature’s finest
              botanical ingredients. Using only the highest quality natural
              flowers, herbs, and essential oils, our artisanal attars are free
              from alcohol and synthetic additives, providing a pure and
              long-lasting fragrance experience.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <h2 className="text-[#B68D3B] text-3xl px-8 flex items-center">
              Our Craft
            </h2>
            <p className="text-[#B68D3B] text-2xl px-8 flex items-center">
              Each attar at Al Badar is meticulously handcrafted using
              traditional distillation techniques. Our skilled artisans
              carefully blend precious flowers, plants, and essential oils to
              create fragrances that are unique, enchanting, and unforgettable.
              From the first note to the lingering finish, our attars offer a
              multisensory experience, connecting the wearer to nature in its
              most beautiful form.
            </p>
          </div>
          <Image
            src="/About2.jpeg"
            alt="image"
            width={1000}
            height={1200}
            className="h-[26rem] w-[32rem]"
          />
        </div>
        <div className="flex gap-4">
          <Image
            src="/About3.jpeg"
            alt="image"
            width={1000}
            height={1200}
            className="h-[26rem] w-[34rem]"
          />
          <div className="flex flex-col">
            <h2 className="text-[#B68D3B] text-3xl px-8 flex items-center">
              Our Values
            </h2>
            <p className="text-[#B68D3B] text-2xl px-8 flex items-center">
              Purity: We are committed to offering attars made with the finest
              natural ingredients, free from synthetic chemicals and alcohol.{" "}
              <br />
              Craftsmanship: Every bottle of Al Badar attar is crafted with care
              and precision, preserving the traditional art of perfumery that
              has been passed down through generations. <br />
              Sustainability: We prioritize sustainability, using eco-friendly
              practices and packaging to minimize our impact on the planet.{" "}
              <br />
              Exclusivity: Our attars are crafted in small batches, ensuring
              each fragrance is a unique and special experience. <br />
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <h2 className="text-[#B68D3B] text-3xl px-8 flex items-center">
              Our Promise
            </h2>
            <p className="text-[#B68D3B] text-2xl px-8 flex items-center">
              At Al Badar, we promise to deliver perfumes that are not just
              scents, but an experience. Whether you&apos;re seeking a fragrance
              for daily wear, a special occasion, or a meaningful gift, our
              attars are designed to elevate every moment. Join us in embracing
              the beauty of nature&apos;s fragrances. Explore our collection and
              discover your signature scent today.
            </p>
          </div>
          <Image
            src="/About4.jpeg"
            alt="image"
            width={1000}
            height={1200}
            className="h-[26rem] w-[32rem]"
          />
        </div>
      </div>

      <div className="flex md:hidden flex-col gap-8 mt-12">
        <div className="flex flex-col gap-4 items-center">
          <Image
            src="/About1.jpeg"
            alt="image"
            width={1000}
            height={1200}
            className="h-auto w-[24rem]"
          />
          <div className="flex flex-col">
            <h2 className="text-[#B68D3B] text-3xl px-8 flex items-center">
              Our Story
            </h2>
            <p className="text-[#B68D3B] text-2xl px-8 flex items-center">
              At Al Badar, our passion for perfumes began with a deep
              appreciation for the ancient art of attar-making. Rooted in
              centuries of tradition, attars have been cherished for their
              purity, elegance, and deep connection to nature. The name Al Badar
              symbolizes &quot;the full moon,&quot; representing the beauty,
              clarity, and natural elegance we aim to capture in each of our
              scents. <br />
              Our journey started with a desire to offer more than just
              perfumes; we wanted to share the essence of nature’s finest
              botanical ingredients. Using only the highest quality natural
              flowers, herbs, and essential oils, our artisanal attars are free
              from alcohol and synthetic additives, providing a pure and
              long-lasting fragrance experience.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Image
            src="/About2.jpeg"
            alt="image"
            width={1000}
            height={1200}
            className="h-auto w-[24rem]"
          />
          <div className="flex flex-col">
            <h2 className="text-[#B68D3B] text-3xl px-8 flex items-center">
              Our Craft
            </h2>
            <p className="text-[#B68D3B] text-2xl px-8 flex items-center">
              Each attar at Al Badar is meticulously handcrafted using
              traditional distillation techniques. Our skilled artisans
              carefully blend precious flowers, plants, and essential oils to
              create fragrances that are unique, enchanting, and unforgettable.
              From the first note to the lingering finish, our attars offer a
              multisensory experience, connecting the wearer to nature in its
              most beautiful form.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Image
            src="/About3.jpeg"
            alt="image"
            width={1000}
            height={1200}
            className="h-auto w-[24rem]"
          />
          <div className="flex flex-col">
            <h2 className="text-[#B68D3B] text-3xl px-8 flex items-center">
              Our Values
            </h2>
            <p className="text-[#B68D3B] text-2xl px-8 flex items-center">
              Purity: We are committed to offering attars made with the finest
              natural ingredients, free from synthetic chemicals and alcohol.{" "}
              <br />
              Craftsmanship: Every bottle of Al Badar attar is crafted with care
              and precision, preserving the traditional art of perfumery that
              has been passed down through generations. <br />
              Sustainability: We prioritize sustainability, using eco-friendly
              practices and packaging to minimize our impact on the planet.{" "}
              <br />
              Exclusivity: Our attars are crafted in small batches, ensuring
              each fragrance is a unique and special experience. <br />
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Image
            src="/About4.jpeg"
            alt="image"
            width={1000}
            height={1200}
            className="h-auto w-[24rem]"
          />
          <div className="flex flex-col">
            <h2 className="text-[#B68D3B] text-3xl px-8 flex items-center">
              Our Promise
            </h2>
            <p className="text-[#B68D3B] text-2xl px-8 flex items-center">
              At Al Badar, we promise to deliver perfumes that are not just
              scents, but an experience. Whether you&apos;re seeking a fragrance
              for daily wear, a special occasion, or a meaningful gift, our
              attars are designed to elevate every moment. Join us in embracing
              the beauty of nature&apos;s fragrances. Explore our collection and
              discover your signature scent today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
