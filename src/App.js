import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { 
  Row, 
  Col,
  Typography
} from 'antd'

import { Link, Router } from 'components/Router'
import { Header, Content, Footer } from 'components/Layout'
import HeaderLink from 'components/HeaderLink'
import Dynamic from 'containers/Dynamic'

import './app.less'

const { Text } = Typography

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Header>
        <Row>
          <Col
            lg={12}>
            Logo
          </Col>
          <Col 
            lg={{span: 3}}
          >
            <HeaderLink>
              <a href="https://cloud.gitploy.io/">Cloud</a>
            </HeaderLink>
          </Col>
          <Col 
            lg={{span: 3}}
          >
            <HeaderLink>
              <a href="https://doc.gitploy.io/">Docs</a>
            </HeaderLink>
          </Col>
          <Col 
            lg={{span: 3}}
          >
            <HeaderLink>
              <Link to="/about">Pricing</Link>
            </HeaderLink>
          </Col>
          <Col 
            lg={{span: 3}}
          >
            <HeaderLink>
              <a href="https://github.com/gitploy-io/gitploy/discussions">Community</a>
            </HeaderLink>
          </Col>
        </Row>
      </Header>
      <Content>
        <React.Suspense fallback={<em></em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Content>
      <Footer>
        <div style={{textAlign: "center", margin: "50px 0"}}>
          <Text type="secondary">© 2021 Gitploy.io, Inc All rights reserved.</Text>
        </div>
      </Footer>
    </Root>
  )
}

export default App
