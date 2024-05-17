import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nava from "./Nava";
import Footer from "./Footer";
import Select from "./Select";
import Nav from "./Nav";

const Pasos = () => {
  const location = useLocation();
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [showOnlyMessage, setShowOnlyMessage] = useState(false); // Estado para controlar qué mostrar
  const [showLoading, setShowLoading] = useState(false); // Estado para controlar la visualización del mensaje de carga

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.state) {
      const { img, title, finalPrice, discount } = location.state;
      setImg(img);
      setTitle(title);
      setFinalPrice(finalPrice);
      setDiscount(discount);
    }
  }, [location.state]);

  const handlePayClick = () => {
    setShowLoading(true); // Muestra el mensaje de carga
    // Espera 5 segundos antes de ejecutar la función handlePayClick
    setTimeout(() => {
      // Realiza las operaciones necesarias al hacer clic en pagar
      setShowOnlyMessage(true); // Cambia el estado para mostrar solo el mensaje
      setShowLoading(false); // Oculta el mensaje de carga después de 5 segundos
    }, 5000);
  };

  return (
    <div>
      {showLoading && <h1>Loading...</h1>}
      {!showLoading && !showOnlyMessage && (
        <>
          <Nava />
          <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
            <div className="py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
              <div className="relative">
                <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                  <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </a>
                    <span className="font-semibold text-gray-900">Comprar</span>
                  </li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                      href="#"
                    >
                      2
                    </a>
                    <span className="font-semibold text-gray-900">
                      Datos de envio
                    </span>
                  </li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                      href="#"
                    >
                      3
                    </a>
                    <span className="font-semibold text-gray-500">Pago</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
            <div className="px-4 pt-8">
              <p className="text-xl font-medium">Resumen del pedido</p>
              <p className="text-gray-400">
                Verifica tus artículos. Y selecciona un método de envío
                adecuado.
              </p>
              <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                  <img
                    className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src={img}
                    alt=""
                  />
                  <div className="flex w-full flex-col px-4 py-4">
                    <span className="font-semibold">{title}</span>
                    <p className="text-lg font-bold">
                      ARS ${finalPrice.toLocaleString("ars")}
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-lg font-medium">Metodos de Envio :</p>
              <form className="mt-5 grid gap-6">
                <div className="relative">
                  <input
                    className="peer hidden"
                    id="radio_1"
                    type="radio"
                    name="radio"
                    checked
                  />
                  <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                  <label
                    className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                    htmlFor="radio_1"
                  >
                    <img
                      className="w-14 object-contain"
                      src="https://geolupa.blob.core.windows.net/decultura/Images/Articles/Article_6068/Original/3e45245a-3fab-4a46-aa46-ea98817707ba.jpg"
                      alt=""
                    />
                    <div className="ml-5">
                      <span className="mt-2 font-semibold">Mercado Envios</span>
                      <p className="text-slate-500 text-sm leading-6">
                        Envio a Domicilio AMBA - Gratis
                      </p>
                    </div>
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="peer hidden"
                    id="radio_2"
                    type="radio"
                    name="radio"
                    checked
                  />
                  <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                  <label
                    className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                    htmlFor="radio_2"
                  >
                    <img
                      className="w-14 object-contain"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbbm8Hhyn1_9FQmqIPf_Jd6_GMDCtnMA56sa106tZ0EQoTdS3XkLDhzM6Hu8t3CQ8cng&usqp=CAU"
                      alt=""
                    />
                    <div className="ml-5">
                      <span className="mt-2 font-semibold">
                        Correo Argentino
                      </span>
                      <p className="text-slate-500 text-sm leading-6">
                        Envio a Domicilio AMBA - Gratis
                      </p>
                    </div>
                  </label>
                </div>
              </form>
            </div>
            <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
              <p className="text-xl font-medium">
                Datos personales y tipo de factura
              </p>
              <p className="text-gray-400">
                Verifica tus artículos. Y selecciona un método de envío
                adecuado.
              </p>
              <div className="">
                {/* <label
                  htmlFor="email"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full rounded-md border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Tu email"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12H8m8 0l-4-4m4 4l-4 4m0-4l-4-4m4 4l-4 4"
                      />
                    </svg>
                  </div>
                </div> */}
                <label
                  htmlFor="phone"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Nombre y Apellido
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full rounded-md border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Nombre y Apellido"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12H8m8 0l-4-4m4 4l-4 4m0-4l-4-4m4 4l-4 4"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="billing-address"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Número de Dni
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="billing-address"
                    name="billing-address"
                    className="w-full rounded-md border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Número de Dni
                    "
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12H8m8 0l-4-4m4 4l-4 4m0-4l-4-4m4 4l-4 4"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="billing-address"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Provincia
                </label>
                <div className="relative">
                  <select
                    id="billing-address"
                    name="billing-address"
                    className="w-full rounded-md border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Selecciona una provincia</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Catamarca">Catamarca</option>
                    <option value="Chaco">Chaco</option>
                    <option value="Chubut">Chubut</option>
                    <option value="Córdoba">Córdoba</option>
                    <option value="Corrientes">Corrientes</option>
                    <option value="Entre Ríos">Entre Ríos</option>
                    <option value="Formosa">Formosa</option>
                    <option value="Jujuy">Jujuy</option>
                    <option value="La Pampa">La Pampa</option>
                    <option value="La Rioja">La Rioja</option>
                    <option value="Mendoza">Mendoza</option>
                    <option value="Misiones">Misiones</option>
                    <option value="Neuquén">Neuquén</option>
                    <option value="Río Negro">Río Negro</option>
                    <option value="Salta">Salta</option>
                    <option value="San Juan">San Juan</option>
                    <option value="San Luis">San Luis</option>
                    <option value="Santa Cruz">Santa Cruz</option>
                    <option value="Santa Fe">Santa Fe</option>
                    <option value="Santiago del Estero">
                      Santiago del Estero
                    </option>
                    <option value="Tierra del Fuego">Tierra del Fuego</option>
                    <option value="Tucumán">Tucumán</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12H8m8 0l-4-4m4 4l-4 4m0-4l-4-4m4 4l-4 4"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="ciudad"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Ciudad
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    className="w-full rounded-md border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Ciudad / Barrio"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12H8m8 0l-4-4m4 4l-4 4m0-4l-4-4m4 4l-4 4"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="direccion"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Dirección
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    className="w-full rounded-md border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Tu dirección"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12H8m8 0l-4-4m4 4l-4 4m0-4l-4-4m4 4l-4 4"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="cp"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Codigo Postal
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="cp"
                    name="cp"
                    className="w-full rounded-md border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Codigo postal"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12H8m8 0l-4-4m4 4l-4 4m0-4l-4-4m4 4l-4 4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-6 border-t border-b py-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      Subtotal
                    </p>
                    <p className="font-semibold text-gray-900">${finalPrice}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Envio</p>
                    <p className="font-semibold text-gray-900">$0.00</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    ARS ${finalPrice.toLocaleString("ars")}
                  </p>
                </div>
              </div>
              <button
                className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
                onClick={handlePayClick} // Asocia la función al evento onClick
              >
                Pagar
              </button>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Pasos;
