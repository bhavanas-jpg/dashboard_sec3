import React from "react";
import AllCustomers from "../components/AllCustomers";
import StatsOverview from "../components/StatsOverview";
import CustomerTable from "../components/CustomerTable";

const Customer = () => {
  return (
    <div className="customer__container">
      <div className="customer__header">
        <h3>Orders</h3>
        <button className="add__order--btn">+ Add Order</button>
      </div>
      <div className="customer__overview">
        <AllCustomers />
        <StatsOverview />
      </div>
      <CustomerTable />
    </div>
  );
};

export default Customer;
