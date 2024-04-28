import React from "react";
import { useParams } from "react-router-dom";
import { getEgyptData, getTurkeyData } from "../../constants/data";

const CompanyPage = () => {
  // Accessing the company ID from the URL params
  const { id } = useParams();
  console.log("companyId:", id);

  // Assuming getEgyptData() returns an array of company objects
  const companies = getEgyptData();
  console.log("companies:", companies);

  // Finding the company object with the matching ID
  const company = companies.find((company) => company.id === parseInt(id));

  // Handling case when company is not found
  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div>
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      {/* Render other details of the company */}
    </div>
  );
};

export default CompanyPage;
