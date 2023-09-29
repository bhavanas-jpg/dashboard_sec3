import React, { useState } from "react";
import { Table } from "antd";
import { customersData } from "../data/customersData";

const { Column, columnGroup } = Table;

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState(customersData);

  const handleChange = (e) => {
    const searchData = e.target.value;
    const searchedData = searchData.length
      ? customersData.filter((elem) =>
          elem.name.toLowerCase().includes(searchData.toLowerCase())
        )
      : customersData;
    setCustomerData(searchedData);
  };

  return (
    <div style={{ marginTop: "5rem" }}>
      <h3>Active Members</h3>

      <input type="search" onChange={handleChange} />

      <Table dataSource={customerData} pagination={{ defaultPageSize: 6 }}>
        <Column title="Customer Name" dataIndex="name" key="name" />
        <Column title="Company" dataIndex="company" key="company" />
        <Column
          title="Phone Number"
          dataIndex="phoneNumber"
          key="phoneNumber"
        />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Country" dataIndex="country" key="country" />
        <Column title="Status" dataIndex="status" key="status" />
      </Table>
    </div>
  );
};

export default CustomerTable;
