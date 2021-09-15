import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { 
  Typography
} from 'antd'

import { Router } from 'components/Router'
import Header from 'components/Header'
import { Content, Footer } from 'components/Layout'
import Dynamic from 'containers/Dynamic'

import './app.less'

const { Text } = Typography

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Header />
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
