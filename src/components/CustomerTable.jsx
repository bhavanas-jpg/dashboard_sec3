import React from 'react'
import  {Table} from 'antd';
import { customersData } from '../data/customersData';

const {Column, columnGroup} = Table;

const CustomerTable = () => {
  
  return (
    <div style={{marginTop: "5rem"}}>
        <h3>Active Members</h3>
        <Table dataSource={customersData}
        pagination={{ defaultPageSize: 6 }}
        >
        <Column title="Customer Name" dataIndex="name" key="name" />
        <Column title="Company" dataIndex="company" key="company" />
        <Column title="Phone Number" dataIndex="phoneNumber" key="phoneNumber" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Country" dataIndex="country" key="country" />
        <Column title="Status" dataIndex="status" key="status" />
        </Table>
    </div>
  )
}

export default CustomerTable;