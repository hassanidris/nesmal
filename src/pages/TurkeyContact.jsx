import React from "react";
import { nesmalLogo } from "../constants/images";
import { NavLink } from "react-router-dom";

const TurkeyContact = () => {
  return (
    <>
      <div className=" text-center p-12 bg-gray-300">
        <h2 className=" text-6xl font-bold uppercase">contact us</h2>
        <p className=" capitalize mt-3 text-gray-500">
          <NavLink
            className=" underline text-gray-600 hover:text-gray-800"
            to="/"
          >
            Home
          </NavLink>
          {" / "}
          <NavLink
            className=" underline text-gray-600 hover:text-gray-800"
            to="/turkey"
          >
            turkey
          </NavLink>{" "}
          / contact
        </p>
      </div>
      <div className=" max-w-[1290px] w-full m-auto">
        <div className=" w-full h-[400px]">
          <iframe
            className=" w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.7260049588!2d29.065862007333944!3d40.994112182613144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7de62a07683%3A0x7fdbcc4fba685c80!2zTmVzbWFsIFlhdMSxcsSxbSBIb2xkaW5nIEEuxZ4u!5e0!3m2!1sen!2sse!4v1714316646868!5m2!1sen!2sse"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="content flex flex-col sm:flex-row gap-10 px-4 my-16">
          <div className="left flex-[3]">
            <div>
              <div>
                <form>
                  <div className="space-y-12">
                    {/* <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label
                        for="cover-photo"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Cover photo
                      </label>
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-300"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              for="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                    <div className="border-b border-gray-900/10 pb-12">
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label
                            for="first-name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            First name
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autocomplete="given-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            for="last-name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Last name
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              autocomplete="family-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-full">
                          <label
                            for="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autocomplete="email"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="col-span-full">
                          <label
                            for="about"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Message
                          </label>
                          <div className="mt-2">
                            <textarea
                              id="about"
                              name="about"
                              rows="3"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    {/* <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button> */}
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="right flex-1">
            <div className="logo w-36 m-auto mb-10">
              <img src={nesmalLogo} />
            </div>
            <div className="address mt-10">
              <h3 className=" text-4xl mb-2 border-b-2 pb-2 border-green-700">
                Contact Us
              </h3>
              <h4 className=" font-bold">Nesmal Yatırım Holding A.Ş.</h4>
              <p className=" text-gray-500">
                Merdivenköy Mahallesi Bora Sokak, Nida Kule Göztepe, 25. kat,
                No:92 / Kadıköy/ Istanbul
              </p>
              <p className=" text-gray-500">
                <span className=" font-bold">Tel:</span> 0 216 343 02 40
              </p>
              <p className=" text-gray-500">
                <span className=" font-bold">Fax:</span> 0 216 530 07 83
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TurkeyContact;
