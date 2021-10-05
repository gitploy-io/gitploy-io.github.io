import React from 'react'
import { Typography, Space } from 'antd'

const { Paragraph, Text, Link } = Typography

export default function Footer() {
  return (
    <div style={{
        textAlign: "center",
        paddingTop: "100px", 
        paddingBottom: "50px",
      }}
    >
      <div >
        <Paragraph>
          <Text type="secondary">© 2021 Gitploy.IO, Inc All rights reserved. <br/></Text>
        </Paragraph>
      </div>
      <div>
        <Paragraph
          style={{
            fontSize: 12
          }}
        >
          <Space>
            <Link type="secondary" href="/terms" >Terms of Service</Link>
            <Text type="secondary"> | </Text>
            <Link type="secondary" href="https://github.com/gitploy-io/gitploy/discussions" >Community</Link>
          </Space>
        </Paragraph>
      </div>
    </div>
  )
}
