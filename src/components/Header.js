import React from 'react'
import { 
  Row, 
  Col,
} from 'antd'

import { Link } from 'components/Router'
import HeaderLink from 'components/HeaderLink'

export default function Header() {
  return (
    <Row style={{marginTop: "50px"}}>
      <Col offset={1} span={22} lg={{span: 14, offset: 5}}>
        <Row >
          <Col lg={12}>
            Logo
          </Col>
          <Col lg={3}>
            <HeaderLink>
              <a href="https://cloud.gitploy.io/">Cloud</a>
            </HeaderLink>
          </Col>
          <Col lg={3}>
            <HeaderLink>
              <a href="https://doc.gitploy.io/">Docs</a>
            </HeaderLink>
          </Col>
          <Col lg={{span: 3}}>
            <HeaderLink>
              <Link to="/pricing">Pricing</Link>
            </HeaderLink>
          </Col>
          <Col lg={{span: 3}}>
            <HeaderLink>
              <a href="https://github.com/gitploy-io/gitploy/discussions">Community</a>
            </HeaderLink>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}