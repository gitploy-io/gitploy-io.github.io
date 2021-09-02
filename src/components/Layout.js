import React from 'react'
import { Row, Col } from 'antd'

export function Base(props) {
  return <Row>
    <Col 
      xs={{span: 22, offset: 1}}
      xl={{span: 14, offset: 5}}
    >
      {props.children}
    </Col>
  </Row>
}

export function Header(props) {
  return <Base>
    <div 
      style={{marginTop: "40px"}}
    >
      {props.children}
    </div>
  </Base> 
}

export function Content(props) {
  return <Base>
    <div>
      {props.children}
    </div>
  </Base> 
}

export function Footer(props) {
  return <Base>
    <div>
      {props.children}
    </div>
  </Base> 
}