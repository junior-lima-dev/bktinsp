/* eslint-disable react/jsx-key */
import React from "react";
import { NextPage } from "next";

import Logo from "../logo-inverse.png";

const Login: NextPage = () => {
  return (
    // <main className="bg-purple-800">
    <div className="mx-auto h-screen flex flex-col justify-center items-center px-6 pt:mt-0">
      <div className="bg-white shadow-2xl shadow-gray-400 rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
        <div className="p-6 sm:p-8 lg:p-16 space-y-8">
          <div className="flex justify-center items-center mb-8 lg:mb-10">
            <img
              src="https://dashboard.inspiracontabilidade.com.br/packs/media/images/2-layers-67b690ef36392aa2b5039e1066b76851.png"
              className="h-20"
              alt="Inspira"
            />
            {/* <span className="self-center text-2xl font-bold whitespace-nowrap">
              Windster
            </span> */}
          </div>
          {/* <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Sign in to platform
            </h2> */}
          <form className="mt-8 space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Senha
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-row items-center justify-start sm:w-1/2 w-full">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    name="remember"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
                    required
                  />
                </div>
                <div className="text-sm ml-3">
                  <label
                    htmlFor="remember"
                    className="font-medium text-gray-900"
                  >
                    Mantenha-me conectado
                  </label>
                </div>
              </div>

              <a
                href="#"
                className="flex text-sm text-teal-500 hover:underline ml-auto sm:w-1/2 w-full justify-start sm:justify-end mt-4 sm:mt-0"
              >
                Esqueceu sua senha?
              </a>
            </div>
            <button
              type="submit"
              className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
            >
              Entar no sistema
            </button>
            {/* <div className="text-sm font-medium text-gray-500">
                Not registered?{" "}
                <a
                  href="https://demo.themesberg.com/windster/authentication/sign-up/"
                  className="text-teal-500 hover:underline"
                >
                  Create account
                </a>
              </div> */}
          </form>
        </div>
      </div>
    </div>
    // </main>
  );
};

export default Login;
