import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'

import { Router } from 'components/Router'
import { Content } from 'components/Layout'
import Dynamic from 'containers/Dynamic'

import './app.less'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Content>
        <React.Suspense fallback={<em></em>}>
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
