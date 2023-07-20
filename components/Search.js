import React from "react";

export default function SearchEvents({ searchFunction }) {
  return (
    <div className="block md:flex justify-start items-center md:px-0 ">
      <p className="mr-5 md:block text-white">Search</p>

      <div className="block md:flex ">
        <div className="block md:flex border-1  rounded-lg  rounded-lg w-96">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative w-full">
            <input
              type="search"
              onChange={(e) => searchFunction(e.target.value)}
              id="default-search"
              className="block p-4 pr-9 w-full text-lg border-black text-black rounded-lg border border-gray-300 "
              defaultValue=""
              required
            />

            <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
