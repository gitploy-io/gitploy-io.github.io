import React from 'react'
import { 
  Row, 
  Col,
  Typography,
  Dropdown,
  Menu,
} from 'antd'
import { MenuOutlined } from '@ant-design/icons'

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
          <Col span={0} lg={3}>
            <HeaderLink>
              <a href="https://cloud.gitploy.io/">Cloud</a>
            </HeaderLink>
          </Col>
          <Col span={0} lg={3}>
            <HeaderLink>
              <a href="https://docs.gitploy.io/">Docs</a>
            </HeaderLink>
          </Col>
          <Col span={0} lg={{span: 3}}>
            <HeaderLink>
              <Link to="/pricing">Pricing</Link>
            </HeaderLink>
          </Col>
          <Col span={0} lg={{span: 3}}>
            <HeaderLink>
              <a href="https://github.com/gitploy-io/gitploy/discussions">Community</a>
            </HeaderLink>
          </Col>
          {/* Mobile view */}
          <Col span={3} offset={8} lg={0} style={{paddingTop: 10}}>
            <Dropdown overlay={
              <Menu>
                <Menu.Item key={0}>
                  <HeaderLink>
                    <a href="https://cloud.gitploy.io/">Cloud</a>
                  </HeaderLink>
                </Menu.Item>
                <Menu.Item key={1}>
                  <HeaderLink>
                    <a href="https://docs.gitploy.io/">Docs</a>
                  </HeaderLink>
                </Menu.Item>
                <Menu.Item key={2}>
                  <HeaderLink>
                    <Link to="/pricing">Pricing</Link>
                  </HeaderLink>
                </Menu.Item>
                <Menu.Item key={3}>
                  <HeaderLink>
                    <a href="https://github.com/gitploy-io/gitploy/discussions">Community</a>
                  </HeaderLink>
                </Menu.Item>
              </Menu>
            }>
              <MenuOutlined />
            </Dropdown>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}