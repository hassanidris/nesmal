import React from "react";
import { nesmalLogo } from "../constants/images";
import { NavLink } from "react-router-dom";

const EgyptContact = () => {
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
            to="/egypt"
          >
            egypt
          </NavLink>{" "}
          / contact
        </p>
      </div>
      <div className=" max-w-[1290px] w-full m-auto">
        <div className=" w-full h-[400px]">
          <iframe
            className=" w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.80997522853573!2d31.37663874846424!3d30.125616121817078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458168b54857289%3A0x10198a95305e019b!2sNesma%20Airlines!5e0!3m2!1sen!2sse!4v1714316828509!5m2!1sen!2sse"
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
              <h4 className=" font-bold">Egypt, Cairo Office</h4>
              <p className=" text-gray-500">
                54,Road 261,New Maadi, Cairo, Egypt
              </p>
              <p className=" text-gray-500">
                <span className=" font-bold">Tel:</span> +202 25202272
              </p>
              <p className=" text-gray-500">
                <span className=" font-bold">Fax:</span> +202 25170461
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EgyptContact;
