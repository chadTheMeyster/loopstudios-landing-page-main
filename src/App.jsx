import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(isMenuOpen);

  const isDesktop = useMediaQuery({ minWidth: 768 });

  const imagesDetails = [
    {
      imageSourceDesktop: "./images/desktop/image-deep-earth.jpg",
      imageSourceMobile: "./images/mobile/image-deep-earth.jpg",
      text: "DEEP EARTH",
    },
    {
      imageSourceDesktop: "./images/desktop/image-night-arcade.jpg",
      imageSourceMobile: "./images/mobile/image-night-arcade.jpg",
      text: "NIGHT ARCADE",
    },
    {
      imageSourceDesktop: "./images/desktop/image-soccer-team.jpg",
      imageSourceMobile: "./images/mobile/image-soccer-team.jpg",
      text: "SOCCER TEAM VR",
    },
    {
      imageSourceDesktop: "./images/desktop/image-grid.jpg",
      imageSourceMobile: "./images/mobile/image-grid.jpg",
      text: "THE GRID",
    },
    {
      imageSourceDesktop: "./images/desktop/image-from-above.jpg",
      imageSourceMobile: "./images/mobile/image-from-above.jpg",
      text: "FROM UP ABOVE VR",
    },
    {
      imageSourceDesktop: "./images/desktop/image-pocket-borealis.jpg",
      imageSourceMobile: "./images/mobile/image-pocket-borealis.jpg",
      text: "POCKET BOREALIS",
    },
    {
      imageSourceDesktop: "./images/desktop/image-curiosity.jpg",
      imageSourceMobile: "./images/mobile/image-curiosity.jpg",
      text: "THE CURIOSITY",
    },
    {
      imageSourceDesktop: "./images/desktop/image-fisheye.jpg",
      imageSourceMobile: "./images/mobile/image-fisheye.jpg",
      text: "MAKE IT FISHEYE",
    },
  ];

  const creations = imagesDetails.map((imageDetail) => {
    const { imageSourceDesktop, imageSourceMobile, text } = imageDetail;

    return (
      <figure
        key={text}
        className="relative mt-6 group
      md:m-0
      hover:bg-primaryGrey-200"
      >
        <img
          src={isDesktop ? imageSourceDesktop : imageSourceMobile}
          alt={text}
          className="group-hover:opacity-50"
        />
        <figcaption className="absolute bottom-0 text-white font-extralight p-6 text-2xl
        group-hover:text-black">
          {text}
        </figcaption>
      </figure>
    );
  });

  return (
    <div
      className="w-96 font-JosefinSans
    md:w-screen md:flex md:justify-center md:flex-col"
    >
      <div className="relative">
        <img
          src={`${
            isDesktop
              ? "./images/desktop/image-hero.jpg"
              : "./images/mobile/image-hero.jpg"
          }`}
          alt="hero image"
          className="w-screen"
        />
        <div
          className="absolute top-0 p-8 w-96
        md:w-full md:p-20 md:pr-40 md:pl-40"
        >
          <div className="flex justify-between w-full items-center">
            <img
              src="./images/logo.svg"
              alt="logo"
              className="h-6
            md:h-10"
            />

            {isDesktop ? (
              <nav className="md:text-white md:w-100 md:flex md:justify-between">
                <a href="" className="relative
                after:absolute after:h-0.5 after:w-6 after:bg-white after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100">
                  About
                </a>
                <a href="" className="relative
                after:absolute after:h-0.5 after:w-6 after:bg-white after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100">
                  Careers
                </a>
                <a href="" className="relative
                after:absolute after:h-0.5 after:w-6 after:bg-white after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100">
                  Events
                </a>
                <a href="" className="relative
                after:absolute after:h-0.5 after:w-6 after:bg-white after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100">
                  Products
                </a>
                <a href="" className="relative
                after:absolute after:h-0.5 after:w-6 after:bg-white after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100">
                  Supports
                </a>
              </nav>
            ) : (
              <button
                onClick={() => {
                  setIsMenuOpen(true);
                }}
              >
                <img
                  src="./images/icon-hamburger.svg"
                  alt="menu"
                  className="h-4"
                />
              </button>
            )}
          </div>
          <div
            className="text-white mt-40 border p-6 text-4xl font-extralight
          md:w-150 md:p-10 md:text-7xl md:mt-36"
          >
            IMMERSIVE EXPERIENCES THAT DELIVER
          </div>
        </div>

        {!isDesktop && isMenuOpen && (
          <div
            className="bg-black text-white p-8 fixed top-0 w-96 z-10"
          >
            <div className="flex justify-between w-full items-center">
              <img src="./images/logo.svg" alt="logo" className="h-6" />
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <img src="./images/icon-close.svg" alt="menu" className="h-4" />
              </button>
            </div>
            <nav className="flex flex-col mt-30 mb-30 text-2xl font-extralight">
              <a href="">ABOUT</a>
              <a href="" className="mt-4 ">
                CAREERS
              </a>
              <a href="" className="mt-4">
                EVENTS
              </a>
              <a href="" className="mt-4">
                PRODUCTS
              </a>
              <a href="" className="mt-4">
                SUPPORTS
              </a>
            </nav>
          </div>
        )}
      </div>

      <div className="md:relative">
        <img
          src="./images/mobile/image-interactive.jpg"
          alt="interactive"
          className="mt-20 p-5
        md:mt-30 md:ml-60"
        />
        <div className="md:absolute md:w-150 md:bottom-0 md:right-[13%] md:bg-white md:pl-15 md:pt-15">
          <h1
            className="text-center text-4xl font-extralight p-6
          md:text-5xl md:text-left"
          >
            THE LEADER IN INTERACTIVE VR
          </h1>

          <p
            className="text-center p-6 pt-0 text-gray-500
          md:text-justify"
          >
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>

      <div className="md:flex md:justify-between md:mt-15 md:pl-60 md:pr-60 md:items-center">
        <h2
          className="text-center text-4xl font-extralight p-6 mt-5 mb-5
        md:text-5xl"
        >
          OUR CREATIONS
        </h2>
        {isDesktop && (
          <button className="text-center text-black text-bold mt-10 border-2 border-black p-2 pr-12 pl-12 font-Alata
          hover:text-white hover:bg-black">
            SEE ALL
          </button>
        )}
      </div>

      <div className="md:grid md:grid-cols-4 md:grid-rows-2 md:mr-59 md:ml-67 md:gap-6 md:mt-15">
        {creations}
      </div>

      {!isDesktop && (
        <div className="flex justify-center">
          <button className="text-center text-black text-bold mt-10 border-2 border-black p-2 pr-12 pl-12 font-Alata
          hover:text-white hover:bg-black ">
            SEE ALL
          </button>
        </div>
      )}

      <footer
        className="mt-10 text-white bg-black flex flex-col justify-center items-center
      md:mt-40"
      >
        <div className="md:flex md:items-center md:justify-between md:w-full md:pr-60 md:pl-60 md:mt-12">
          <img
            src="./images/logo.svg"
            alt="Loopstudios"
            className="h-6 mt-10
            md:m-0"
          />
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:w-96">
            <a
            href=""
            className="mt-8 relative md:m-0
    after:absolute after:h-0.5 after:w-6 after:bg-white after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100"
          >
            About
          </a>
          <a
            href=""
            className="mt-6 relative md:m-0
          after:absolute after:h-0.5 after:w-6 after:bg-white after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100
    "
          >
            Careers
          </a>
          <a
            href=""
            className="mt-6 relative md:m-0
          after:absolute after:h-0.5 after:w-6 after:bg-white after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100"
          >
            Events
          </a>
          <a
            href=""
            className="mt-6 relative md:m-0
          after:absolute after:h-0.5 after:w-6 after:bg-white after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100"
          >
            Products
          </a>
          <a
            href=""
            className="mt-6 relative md:m-0
          after:absolute after:h-0.5 after:w-6 after:bg-white after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100"
          >
            Support
          </a>
          </div>
          
        </div>

        <div className="flex items-center flex-col md:flex-row md:justify-between md:w-full md:pr-60 md:pl-60 md:mb-12">
          <p className="mt-10 flex justify-between w-40">
          <a
            href=""
            className="relative
          after:absolute after:h-0.5 after:w-6 after:bg-white after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100"
          >
            <img src="./images/icon-facebook.svg" alt="facebook" />
          </a>
          <a
            href=""
            className="relative
          after:absolute after:h-0.5 after:w-6 after:bg-white after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100"
          >
            <img src="./images/icon-twitter.svg" alt="X/twitter" />
          </a>
          <a
            href=""
            className="relative
          after:absolute after:h-0.5 after:w-6 after:bg-white after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100"
          >
            <img src="./images/icon-pinterest.svg" alt="pinterest" />
          </a>
          <a
            href=""
            className="relative
          after:absolute after:h-0.5 after:w-6 after:bg-white after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100"
          >
            <img src="./images/icon-instagram.svg" alt="instagram" />
          </a>
        </p>
        <p className="mt-8 text-primaryGrey-200">© 2021 Loopstudios. All rights reserved.</p>
        </div>

        
      </footer>
    </div>
  );
}

export default App;
