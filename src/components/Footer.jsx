import React from 'react'
import { Typography } from 'antd'

const { Text } = Typography

export default function Footer() {
  return (
    <div style={{textAlign: "center", padding: "100px 0"}}>
      <Text type="secondary">© 2021 Gitploy.io, Inc All rights reserved.</Text>
    </div>
  )
}
