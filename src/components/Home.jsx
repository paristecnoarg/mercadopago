// "use strict";
import React from "react";
import { Link } from "react-router-dom";
import banerCelu from "../imgs/baner1.png";
import banerPC from "../imgs/banerpc.png";

const Home = () => {
  const cards = [
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      discount: 50,
      originalPrice: "$319.000",
      finalPrice: 198000.0,
      link: "/detail/Televisor%20Kanji%2032%E2%80%B3%20Led%20Hd%20TV-32MT005/500",
    },
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      discount: 50,
      originalPrice: "$319.000",
      finalPrice: 198000.0,
      link: "/detail/Televisor%20Kanji%2032%E2%80%B3%20Led%20Hd%20TV-32MT005/500",
    },
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      discount: 50,
      originalPrice: "$319.000",
      finalPrice: 198000.0,
      link: "/detail/Televisor%20Kanji%2032%E2%80%B3%20Led%20Hd%20TV-32MT005/500",
    },
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      discount: 50,
      originalPrice: "$319.000",
      finalPrice: 198000.0,
      link: "/detail/Televisor%20Kanji%2032%E2%80%B3%20Led%20Hd%20TV-32MT005/500",
    },
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      discount: 50,
      originalPrice: "$319.000",
      finalPrice: 198000.0,
      link: "/detail/Televisor%20Kanji%2032%E2%80%B3%20Led%20Hd%20TV-32MT005/500",
    },
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      discount: 50,
      originalPrice: "$319.000",
      finalPrice: 198000.0,
      link: "/detail/Televisor%20Kanji%2032%E2%80%B3%20Led%20Hd%20TV-32MT005/500",
    },
    // Agrega más objetos con la información de las demás cards aquí
  ];

  const otherCards = [
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      originalPrice: "$479.000",
      finalPrice: 216000.0,
      discount: 50,
    },
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      originalPrice: "$479.000",
      finalPrice: 216000.0,
      discount: 50,
    },
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      originalPrice: "$479.000",
      finalPrice: 216000.0,
      discount: 50,
    },
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      originalPrice: "$479.000",
      finalPrice: 216000.0,
      discount: 50,
    },
    // Agrega más objetos con la información de las demás cards aquí
  ];

  return (
    <div className="bg-white font-proxima">
      <div className="mx-auto max-w-screen-xl bg-slate-100">
        <div className=" flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
          <div className="  max-w-xl mt-5">
            <span className="flex">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png"
                className="w-8 h-5 ml-2 mt-2 mr-2"
                alt=""
              />
              <h1 className="text-2xl font-bold text-gray-800">
                Paris Tecno | Kanji
              </h1>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png"
                className="w-8 h-5 ml-2 mt-2"
                alt=""
              />
            </span>
            <p className="mt-2 text-lg text-gray-600 ">
              Descubri nuestras ofertas exclusivas en productos tecnologicos
              importados.{" "}
              <span className="underline"> Envios a toda la Argentina.</span>
              Paga con <span className="font-medium">Mercado Pago</span> hasta
              24 cuotas sin interés 🏡💖
            </p>
          </div>
        </div>

        <div className="mb-10 max-w-screen">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <img
              src={banerCelu}
              alt=""
              className="object-cover w-full h-auto lg:hidden"
            />
            <img
              src={banerPC}
              alt=""
              className="object-cover w-full h-auto hidden lg:block lg:h-auto max-w-full"
            />
          </div>
        </div>

        <section className="bg-slate-50 py-12 text-red-400 sm:py-16 lg:py-20 mt-[-70px]">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center">
              <h2 className="font-mono text-2xl font-bold sm:text-3xl">
                {">"} ¡OFERTAS HOT SALE! {"<"}
              </h2>
              <p className="mt-4 text-base text-gray-700">
                ¡No te quedes afuera del partido! Llevate tu SMART TV FULL HD
                32" en 3, 6, 12, 18 o 24 cuotas sin interés. 🎉⚽️
                <br />
                <span className="text-gray-500">
                  (Oferta válida hasta agotar stock 18/05/2024).
                </span>
              </p>
            </div>

            {/* <!-- TARJETAS DE OFERTA --> */}

            <div className="mt-10 justify-center grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
              {otherCards.map((card, index) => (
                <article className="relative" key={index}>
                  <div className="aspect-square overflow-hidden">
                    <Link
                      to="/detail"
                      state={{
                        img: card.img,
                        title: card.title,
                        finalPrice: card.finalPrice,
                        discount: card.discount,
                      }}
                    >
                      <img
                        className="h-full w-full object-cover hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                        src={card.img}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="absolute top-0 m-1 rounded-full bg-white">
                    <p className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                      {card.discount}% de descuento
                    </p>
                  </div>
                  <div className="mt-4 flex items-start justify-between">
                    <div className="">
                      <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                        <Link
                          to="/detail"
                          state={{
                            img: card.img,
                            title: card.title,
                            finalPrice: card.finalPrice,
                            discount: card.discount,
                          }}
                        >
                          <span className="text-gray-600">{card.title}</span>
                        </Link>
                        <span className="absolute" aria-hidden="true"></span>
                      </h3>
                      <div className="mt-2 flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="block h-3 w-3 align-middle text-yellow-500 sm:h-4 sm:w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              className=""
                            ></path>
                          </svg>
                        ))}
                      </div>
                    </div>

                    <div className="text-right">
                      <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
                        {card.originalPrice}
                      </del>
                      <p className="text-base font-bold md:text-base">
                        ${card.finalPrice.toLocaleString("es-AR")}
                      </p>
                    </div>
                  </div>
                  <button class="cursor-pointer w-full h-8 mt-2 bg-sky-500 text-white rounded-xl hover:bg-sky-600 hover:shadow-lg  ">
                    <svg
                      class="animate-spin hidden group-active:block mx-auto"
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.1792 0.129353C10.6088 0.646711 8.22715 1.74444 6.16886 3.36616C4.13416 4.96799 2.42959 7.14686 1.38865 9.48493C0.202866 12.1414 -0.241805 15.156 0.125386 18.0413C0.684593 22.4156 3.02922 26.3721 6.63375 29.0186C8.01155 30.0301 9.65549 30.8757 11.2725 31.3997C12.0405 31.6518 13.4857 32 13.7518 32H13.8361V30.7232V29.4464L13.762 29.4331C11.8485 29.0252 10.2787 28.3818 8.7493 27.3802C7.50961 26.5644 6.29688 25.4402 5.40416 24.2794C3.88824 22.3095 2.98206 20.0908 2.66203 17.5736C2.57781 16.8905 2.57781 15.1029 2.66203 14.4396C2.88773 12.7317 3.31556 11.3288 4.06678 9.863C5.88589 6.3045 9.23103 3.67791 13.1286 2.746C13.4352 2.67303 13.7182 2.60671 13.762 2.59676L13.8361 2.58349V1.29009C13.8361 0.577066 13.8327 -0.00330353 13.8293 1.33514e-05C13.8226 1.33514e-05 13.5329 0.0597076 13.1792 0.129353Z"
                        fill="white"
                      ></path>
                      <path
                        d="M19.563 1.38627V2.67967L19.7078 2.71615C20.8768 3.01463 21.7527 3.32968 22.6723 3.78071C24.8249 4.84528 26.6878 6.467 28.042 8.47011C29.248 10.251 29.9858 12.2375 30.2654 14.4562C30.3126 14.831 30.326 15.1792 30.326 16.0149C30.326 17.169 30.2923 17.5869 30.1205 18.5022C29.7365 20.575 28.8404 22.5681 27.5266 24.2761C26.8158 25.2014 25.8019 26.2029 24.862 26.9027C23.3056 28.0634 21.7324 28.7997 19.7078 29.3137L19.563 29.3502V30.6436V31.9403L19.691 31.9204C20.0616 31.8541 21.1362 31.5689 21.6516 31.4031C24.8216 30.365 27.6041 28.3951 29.6152 25.7652C30.2789 24.8996 30.7337 24.1667 31.2356 23.1618C31.8959 21.8419 32.3102 20.6479 32.5999 19.2318C33.4354 15.1394 32.6606 10.9441 30.417 7.40886C28.4126 4.24833 25.3067 1.8373 21.692 0.640079C21.1867 0.470943 20.038 0.169149 19.7078 0.112772L19.563 0.0895557V1.38627Z"
                        fill="white"
                      ></path>
                    </svg>
                    <Link
                      to="/detail"
                      state={{
                        img: card.img,
                        title: card.title,
                        finalPrice: card.finalPrice,
                        discount: card.discount,
                      }}
                    >
                      <span class="group-active:hidden font-mono font-bold">
                        VER MÁS
                      </span>
                    </Link>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* <!-- MITAD DE LAS CARDS --> */}

        <div className="mx-auto max-w-md text-center mt-5">
          <h2 className="font-mono text-2xl font-bold sm:text-3xl">
            - Nuestros productos -
          </h2>
          <p className="font-bold text-sky-500">( Envios a todo el país )</p>
          <p className="mt-4 text-base text-gray-700">
            Los mejores precios y ofertas en Televisores. ¡Aprovechá nuestras
            cuotas sin interés!
          </p>
        </div>

        {/* <!-- TODAS LAS CARDS --> */}

        <main className="grid bg-slate-50 grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0 mt-5">
          {" "}
          {cards.map((card, index) => (
            <article className="relative" key={index}>
              <div className="aspect-square overflow-hidden">
                <Link
                  to="/detail"
                  state={{
                    img: card.img,
                    title: card.title,
                    finalPrice: card.finalPrice,
                    discount: card.discount,
                  }}
                >
                  <img
                    className="h-full w-full object-cover hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                    src={card.img}
                    alt=""
                  />
                </Link>
              </div>
              <div className="absolute top-0 m-1 rounded-full bg-white">
                <p className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  {card.discount}% de descuento
                </p>
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                    <Link
                      to="/detail"
                      state={{
                        img: card.img,
                        title: card.title,
                        finalPrice: card.finalPrice,
                        discount: card.discount,
                      }}
                    >
                      <span className="text-gray-600">{card.title}</span>
                    </Link>
                    <span className="absolute" aria-hidden="true"></span>
                  </h3>
                  <div className="mt-2 flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="block h-3 w-3 align-middle text-yellow-500 sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          className=""
                        ></path>
                      </svg>
                    ))}
                  </div>
                </div>

                <div className="text-right">
                  <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
                    {card.originalPrice}
                  </del>
                  <p className="text-base font-bold md:text-base text-red-400">
                    ${card.finalPrice.toLocaleString("es-AR")}
                  </p>
                </div>
              </div>
              <button class="cursor-pointer w-full  h-8 mt-2 bg-sky-500 text-white rounded-xl hover:bg-sky-600 hover:shadow-lg transition-all ">
                <svg
                  class="animate-spin hidden group-active:block mx-auto"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1792 0.129353C10.6088 0.646711 8.22715 1.74444 6.16886 3.36616C4.13416 4.96799 2.42959 7.14686 1.38865 9.48493C0.202866 12.1414 -0.241805 15.156 0.125386 18.0413C0.684593 22.4156 3.02922 26.3721 6.63375 29.0186C8.01155 30.0301 9.65549 30.8757 11.2725 31.3997C12.0405 31.6518 13.4857 32 13.7518 32H13.8361V30.7232V29.4464L13.762 29.4331C11.8485 29.0252 10.2787 28.3818 8.7493 27.3802C7.50961 26.5644 6.29688 25.4402 5.40416 24.2794C3.88824 22.3095 2.98206 20.0908 2.66203 17.5736C2.57781 16.8905 2.57781 15.1029 2.66203 14.4396C2.88773 12.7317 3.31556 11.3288 4.06678 9.863C5.88589 6.3045 9.23103 3.67791 13.1286 2.746C13.4352 2.67303 13.7182 2.60671 13.762 2.59676L13.8361 2.58349V1.29009C13.8361 0.577066 13.8327 -0.00330353 13.8293 1.33514e-05C13.8226 1.33514e-05 13.5329 0.0597076 13.1792 0.129353Z"
                    fill="white"
                  ></path>
                  <path
                    d="M19.563 1.38627V2.67967L19.7078 2.71615C20.8768 3.01463 21.7527 3.32968 22.6723 3.78071C24.8249 4.84528 26.6878 6.467 28.042 8.47011C29.248 10.251 29.9858 12.2375 30.2654 14.4562C30.3126 14.831 30.326 15.1792 30.326 16.0149C30.326 17.169 30.2923 17.5869 30.1205 18.5022C29.7365 20.575 28.8404 22.5681 27.5266 24.2761C26.8158 25.2014 25.8019 26.2029 24.862 26.9027C23.3056 28.0634 21.7324 28.7997 19.7078 29.3137L19.563 29.3502V30.6436V31.9403L19.691 31.9204C20.0616 31.8541 21.1362 31.5689 21.6516 31.4031C24.8216 30.365 27.6041 28.3951 29.6152 25.7652C30.2789 24.8996 30.7337 24.1667 31.2356 23.1618C31.8959 21.8419 32.3102 20.6479 32.5999 19.2318C33.4354 15.1394 32.6606 10.9441 30.417 7.40886C28.4126 4.24833 25.3067 1.8373 21.692 0.640079C21.1867 0.470943 20.038 0.169149 19.7078 0.112772L19.563 0.0895557V1.38627Z"
                    fill="white"
                  ></path>
                </svg>
                <Link
                  to="/detail"
                  state={{
                    img: card.img,
                    title: card.title,
                    finalPrice: card.finalPrice,
                    discount: card.discount,
                  }}
                >
                  <span class="group-active:hidden font-bold font-mono">
                    VER MÁS
                  </span>
                </Link>
              </button>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Home;
