"use client";

import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#039C2533]">
      <div className="w-[322px] h-[320px] p-8 bg-white shadow-lg rounded-lg">
        <form className="space-y-7">
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <InputText
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className="h-8 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <InputText
              id="password"
              name="password"
              type="password"
              placeholder="Senha"
              required
              toggleMask
              className="h-8 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <Button
            label="Login"
            icon="pi pi-check"
            iconPos="right"
            className="bg-black w-full py-2 px-4  text-white rounded-lg shadow-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            type="submit"
          />
          <div className="flex justify-between mt-4">
            <Button
              className="text-black hover:underline "
              label="Esqueceu a senha?"
              link
              onClick={() => window.open("https://react.dev", "_blank")}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
