import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { 
  Row, 
  Col,
  Button,
} from 'antd'

import { Link, Router } from 'components/Router'
import { Header, Content } from 'components/Layout'
import HeaderLink from 'components/HeaderLink'
import Dynamic from 'containers/Dynamic'

import './app.less'

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
              <Link to="/">Home</Link>
            </HeaderLink>
          </Col>
          <Col 
            lg={{span: 3}}
          >
            <HeaderLink>
              <Link to="/about">About</Link>
            </HeaderLink>
          </Col>
          <Col 
            lg={{span: 3}}
          >
            <HeaderLink>
              <Link to="/blog">Blog</Link>
            </HeaderLink>
          </Col>
          <Col 
            lg={{span: 3}}
          >
            <HeaderLink>
              <Link to="/dynamic">Dynamic</Link>
            </HeaderLink>
          </Col>
        </Row>
      </Header>
      <Content>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Content>
    </Root>
  )
}

export default App
