import React from 'react'
import { 
  Row, 
  Col, 
  Typography,
  Space,
  Button,
} from 'antd'

import FeatureTable from '../components/FeatureTable'
import PricingCard from '../components/PricingCard'

const { Title, Text } = Typography

const colorDeepPurple = "#120338"

export default function Pricing() {
  return (
    <div>
      <div>
        <Row style={{ marginTop: "120px"}}>
          <Col span={24} md={{span: 12, offset: 6}} style={{textAlign: "center"}}>
            <Title style={{color: colorDeepPurple}} level={1}>Pricing</Title>
          </Col>
        </Row>
        <Row >
          <Col span={18} offset={3} md={{span: 6, offset: 9}} style={{textAlign: "center"}}>
            <Text type="secondary" strong>Gitploy provides many features to deploy the application with lower risk and faster.</Text>
          </Col>
        </Row>
        <Row style={{marginTop: "20px"}}>
          <Col span={24}style={{textAlign: "center"}}>
          <Space>
            <Button size="large" type="primary" >
              <a href="https://docs.gitploy.io/" target="_blank">
                INSTALL NOW
              </a>
            </Button>
            <Button size="large" type="text" >
              <a href="mailto:opsdownn@gmail.com" target="_blank">
                CONTACT SALES
              </a>
            </Button>
          </Space>
          </Col>
        </Row>
      </div>
      <Row style={{marginTop: "100px"}}>
        <Col span={22} offset={1} md={{span: 16, offset: 4}} lg={{span: 12, offset: 6}}>
          <PricingCard />
        </Col>
      </Row>
      <Row style={{marginTop: "100px"}}>
        <Col span={22} offset={1} md={{span: 16, offset: 4}} lg={{span: 10, offset: 7}}>
          <Title 
            type="secondary" 
            level={5} 
            style={{textAlign: "center"}}
          >
            SOURCE CODE MANAGEMENT
          </Title>
          <FeatureTable 
            datas={[
              {
                feature: "GitHub",
                enterprise: true,
              },
            ]}
          />
        </Col>
      </Row>
      <Row style={{marginTop: "100px"}}>
        <Col span={22} offset={1} md={{span: 16, offset: 4}} lg={{span: 10, offset: 7}}>
        <Title 
            type="secondary" 
            level={5} 
            style={{textAlign: "center"}}
          >
            DATA STORAGE
          </Title>
          <FeatureTable 
            datas={[
              {
                feature: "SQLite",
                enterprise: true
              },
              {
                feature: "MySQL",
                enterprise: true
              },
              {
                feature: "Postgres",
                enterprise: true
              },
            ]}
          />
        </Col>
      </Row>
      <Row style={{marginTop: "100px"}}>
        <Col span={22} offset={1} md={{span: 16, offset: 4}} lg={{span: 10, offset: 7}}>
        <Title 
            type="secondary" 
            level={5} 
            style={{textAlign: "center"}}
          >
            DEPLOYMENT FEATURE
          </Title>
          <FeatureTable 
            datas={[
              {
                feature: "Deploy",
                enterprise: true
              },
              {
                feature: "Rollback",
                enterprise: true
              },
              {
                feature: "Locking",
                enterprise: true
              },
              {
                feature: "Approval",
                enterprise: true
              },
            ]}
          />
        </Col>
      </Row>
      <Row style={{marginTop: "100px"}}>
        <Col span={22} offset={1} md={{span: 16, offset: 4}} lg={{span: 10, offset: 7}}>
        <Title 
            type="secondary" 
            level={5} 
            style={{textAlign: "center"}}
          >
            INTEGRATION
          </Title>
          <FeatureTable 
            datas={[
              {
                feature: "Slack",
                enterprise: true
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  )
}
