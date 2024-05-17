import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-gray-200">
        <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
          <div class="max-w-sm">
            <div class="mb-6 flex h-12 items-center space-x-2">
              <span class="text-2xl font-bold flex">
                Paris<span class="text-blue-600"> Tecno </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mt-2 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </span>
            </div>
            <div class="text-gray-500">
              ¡París Tecno! Tecnología rápida, segura y a tu puerta en 24 horas.
            </div>
          </div>
          <div class="">
            <div class="mt-4 mb-2 font-medium xl:mb-4">Dirección</div>
            <div class="text-gray-500">
              Av Cabildo, <br />
              4332, <br />
              Buenos Aires, Argentina
            </div>
          </div>
          <div class="">
            <div class="mt-4 mb-2 font-medium xl:mb-4">Enlaces</div>
            <nav aria-label="Footer Navigation" class="text-gray-500">
              <ul class="space-y-3">
                <li>
                  <a class="hover:text-blue-600 hover:underline" href="#">
                    Soporte en linea
                  </a>
                </li>
                <li>
                  <a class="hover:text-blue-600 hover:underline" href="#">
                    Contacto (0800-333-664)
                  </a>
                </li>
                <li>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJcjSboBJmuzjH5jfKetR3MSyh5djaf_mujsuncm_DQ&s"
                    alt=""
                    className="w-8 h-10"
                  />
                </li>
              </ul>
            </nav>
          </div>
          <div class="">
            <div class="mt-4 mb-2 font-medium xl:mb-4">
              Subscribite a nuestro Newsletter
            </div>
            <div class="flex flex-col">
              <div class="mb-4">
                <input
                  type="email"
                  class="focus:outline mb-2 block h-14 w-full rounded-xl bg-white px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Ingresa tu email"
                />
                <button class="block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">
                  Subscribirse
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
            <div class="">© 2024 ParisTecno | All Rights Reserved</div>
            <div class="">
              <a class="" href="#">
                Privacy Policy
              </a>
              <span> | </span>
              <a class="" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
