import React from 'react'
import { 
  Row, 
  Col,
  Typography
} from 'antd'

import { Link } from 'components/Router'
import HeaderLink from 'components/HeaderLink'

import LogoImage from '../assets/logo.png'

const { Text } = Typography

export default function Header() {
  return (
    <Row>
      <Col offset={1} span={22} lg={{span: 14, offset: 5}}>
        <Row >
          <Col lg={12}>
            <a
              href="/"
            >
              <img 
                src={LogoImage}
                style={{
                  width: 52
                }}
              />
              &nbsp;&nbsp;
              <Text style={{
                  fontSize: 32,
                  verticalAlign: "bottom",
                }}
                strong
              >
                GITPLOY
              </Text>
            </a>
          </Col>
          <Col lg={3}>
            <HeaderLink>
              <a href="https://cloud.gitploy.io/">Cloud</a>
            </HeaderLink>
          </Col>
          <Col lg={3}>
            <HeaderLink>
              <a href="https://docs.gitploy.io/">Docs</a>
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