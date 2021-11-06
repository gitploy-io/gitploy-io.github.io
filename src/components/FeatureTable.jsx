import React from "react"
import { Table } from "antd"
import { CheckOutlined } from '@ant-design/icons';

export default function FeaturesTable(props) {
  const columns = [
    {
      title: "FEATURE",
      dataIndex: "feature",
      key: "feature",
      align: "left",
      width: "40%" ,
    },
    {
      title: "OSS",
      dataIndex: "oss",
      key: "oss",
      align: "center",
      render: (ok) => (ok)? <CheckOutlined /> : null
    },
    {
      title: "ENTERPRISE",
      dataIndex: "enterprise",
      key: "enterprise",
      align: "center",
      render: (ok) => (ok)? <CheckOutlined /> : null
    },
  ]

  return (
    <Table 
      columns={columns}
      dataSource={props.datas.map((data, idx) => {
        const d =  {...data, key: idx}
        return d
      })} 
      pagination={false}
    />
  )
}