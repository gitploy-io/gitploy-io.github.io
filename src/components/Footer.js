import React from 'react'
import { Typography } from 'antd'

const { Text } = Typography

export default function Footer() {
  return (
    <div style={{textAlign: "center"}}>
      <Text type="secondary" style={{padding: "50px 0"}}>© 2021 Gitploy.io, Inc All rights reserved.</Text>
    </div>
  )
}
