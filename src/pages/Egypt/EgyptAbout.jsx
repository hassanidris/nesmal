import React from "react";
import { getEgyptData } from "../../constants/data";
import { getImageURL } from "../../utils/image-util";
import { Link, NavLink } from "react-router-dom";
import { egyptAboutBanner, nesmalLogo } from "../../constants/images";

const EgyptAbout = () => {
  const data = getEgyptData();

  return (
    <>
      <div className=" text-center p-12 bg-gray-300">
        <h2 className=" text-6xl font-bold uppercase">about nesmal egypt</h2>
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
          / about
        </p>
      </div>
      <div className=" max-w-[1290px] w-full m-auto">
        <div className=" w-full h-[400px]">
          <img
            className=" h-full w-full object-cover"
            src={egyptAboutBanner}
            alt=""
          />
        </div>
        <div className="content flex flex-col sm:flex-row gap-10 px-4 my-10">
          <div className="left flex-[3]">
            <div>
              <h2 className=" text-3xl font-bold mb-3">Nesmal Egypt</h2>
              <p className=" text-lg mb-4 leading-relaxed">
                Nesma’s operations in Egypt were established in 1997 following
                the purchase of the Mawaddah Hotel business in Makkah and
                Madinah. Since Egyptians were a significant group of our guests
                at these hotels, we established the NAMMA TOURS travel agency to
                serve our customers in Egypt and market our hotel services. In
                2005 we determined that there was an opportunity in transporting
                our Umrah guests from Egypt to Saudi Arabia by sea. So as a
                result we established the NAMMA SHIPPING LINES company. As our
                cargo customers increased we added two cargo ferries to our
                fleet, the NAMMA EXPRESS, and the AL NAWA EXPRESS.
              </p>
              <p className=" text-lg mb-4 leading-relaxed">
                In the meantime we established the Namma Shipping Agency to
                provide marine services to our vessels, as well as others in the
                Egyptian ports and the Suez Canal.
              </p>
              <p className=" text-lg mb-4 leading-relaxed">
                In 2008 we established the Namma Container Lines Company to
                transport fresh fruits and vegetables between Egypt and Europe.
                For this project we purchased 50 refrigerated containers.
              </p>
              <p className=" text-lg mb-4 leading-relaxed">
                Another investment by NESMA in Egypt but not related to our
                logistics and transportation business is the Ommat Company.
                Ommat was founded in 1998 and is in the business of selling one
                day old chicks to chicken farmers who grow the chickens for sale
                to consumers. The Ommat operation produces about 50 million
                chicks per year. Most of its sales are in Egypt but some of its
                production is also sold to Sudan and the Emirates.
              </p>
              <p className=" text-lg mb-4 leading-relaxed">
                In 2008 we established NESMA Airlines by leasing 3 Airbus A320’s
                to complement our passenger transportation business.The airline
                currently has several scheduled flights between Egypt and Saudi
                Arabia serving Jeddah, Hail, Yanbu, El Gouf, Najran, Al Ahsaa
                and Gizan. Soon we will add Medina, and Kuwait from Alexandria,
                Sohag, Luxor and Assiut airports.
              </p>
              <p className=" text-lg mb-4 leading-relaxed">
                All of these companies are managed and monitored by NESMAL
                Investment Company.
              </p>
              <p className=" text-lg mb-4 leading-relaxed">
                NESMAL is consistently looking for new investment opportunities
                in Egypt
              </p>
            </div>
            <div className=" mt-10">
              <h2 className=" text-3xl font-bold mb-3">Message From Ceo</h2>
              <p className=" text-lg mb-4 leading-relaxed">
                Based in Egypt, we draw on deep local knowledge and networks to
                identify and source promising investments in companies and
                projects in high-potential sectors and markets. We have a strong
                track record of growing our companies, adding value to our
                investments and delivering solid returns for our stakeholders.
              </p>
              <p className=" text-lg mb-4 leading-relaxed">
                We see high potential for growth in Egypt, particularly in areas
                such as Religious tourism, and transportation, for both Cargo
                and Passengers. In line with that, our investment portfolio
                revolves around the Logistics and Transportation business. With
                subsidiary companies in Tourism, Freight Forwarding, Air
                Transport, Ocean Transport, Inland waterways, and Road
                transport, we are able to offer a complete logistical solution
                to our guests.
              </p>
              <p className=" text-lg mb-4 leading-relaxed">
                We look forward to strengthening our reputation for successfully
                carrying out unique investment opportunities, growing assets and
                delivering strong returns to our investors and shareholders
              </p>
            </div>
          </div>
          <div className="right flex-1">
            <div className="logo w-36 m-auto mb-10">
              <img src={nesmalLogo} />
            </div>
            <div>
              <h3 className=" text-4xl mb-2 border-b-2 pb-2 border-green-700">
                Companies
              </h3>
              {data.map((company) => (
                <Link to={`/egypt/company/${company.id}`} key={company.id}>
                  <div className=" flex items-center gap-1 hover:bg-green-500 px-1 py-2">
                    <div className=" w-[30px]">
                      <img
                        className=" w-full h-auto"
                        src={getImageURL(company.logo)}
                      />
                    </div>
                    <p className=" text-sm">{company.name}</p>
                  </div>
                </Link>
              ))}
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

export default EgyptAbout;
