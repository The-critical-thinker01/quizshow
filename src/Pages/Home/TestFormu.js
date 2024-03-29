import React from "react";

const TestFormu = () => {
  return (
    <div class="flex items-center justify-center h-screen">
      <div class="bg-gray-800 flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
        <div class="text-white mt-10">
          <h1 class="font-bold text-4xl">Welcome</h1>
          <p class="font-semibold">Let's create your account!</p>
        </div>
        <form class="flex flex-col space-y-8 mt-10">
          <input
            type="text"
            placeholder="First name"
            class="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Last name"
            class="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Email"
            class="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500"
          />
          <button class="border border-blue-500 bg-blue-500 text-white rounded-lg py-3 font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestFormu;
