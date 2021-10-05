import React, { useState } from "react"
import { 
  Row, 
  Col, 
  Card,
  Select,
  Button,
  Divider
} from "antd"


export default function PricingCard() {
  const price = 60
  const options = [10, 15, 20, 25, 30, 35, 40, 45, 50];

  const [ cnt, setCnt ] = useState(10);

  const onSelectCnt = (value) => {
    setCnt(value)
  }

  return (
    <Card>
      <Row>
        <Col 
          span={12}
          style={{padding: "16px"}}
        >
          <p style={{fontSize: 14}}>Choose the number of Developers:</p>
          <Select 
            style={{width: "100%"}}
            defaultValue={cnt}
            onSelect={onSelectCnt}
          >
            {options.map((value, idx) => {
              return <Select.Option key={idx} value={value}>{value} developers</Select.Option>
            })}
          </Select>
          <p
            style={{fontSize: 14, marginTop: 10}}
          >
            If you would like to purchase a subscription for 50+ developers please <a href="mailto:opsdownn@gmail.com" target="_blank">Contact Sales.</a>
          </p>
        </Col>
        <Col 
          span={12}
          style={{padding: "16px", textAlign: "center"}}
        >
          <p >
            <span style={{fontSize: 30}}>$ {cnt * price}</span> <span style={{fontSize: 30, color: "gray"}}> / year</span>
          </p>
          <Button type="primary" size="large" href="https://forms.gle/DcR2jbF3mZMATTGF9">PURCHASE</Button>
        </Col>
      </Row>
    </Card>
  )
}