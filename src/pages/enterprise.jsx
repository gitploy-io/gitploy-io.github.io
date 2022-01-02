import React from 'react'
import { 
  Row, 
  Col, 
  Typography,
  Space,
} from 'antd'

import Header from 'components/Header'
import Footer from 'components/Footer'
import FeatureTable from '../components/FeatureTable'
import PricingCard from '../components/PricingCard'
import LargeButton from '../components/LargeButton'

const { Title, Text } = Typography

const colorDeepPurple = "#120338"

export default function Pricing() {
  return (
    <div>
      <div style={{padding: "50px 0"}}>
        <Header />
      </div>
      <div>
        <Row style={{ marginTop: "120px"}}>
          <Col span={24} md={{span: 12, offset: 6}} style={{textAlign: "center"}}>
            <Title style={{color: colorDeepPurple}} level={1}>ENTERPRISE EDITION</Title>
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
            <LargeButton size="large" type="primary" >
              <a href="https://docs.gitploy.io/" target="_blank">
                INSTALL NOW
              </a>
            </LargeButton>
            <LargeButton size="large" type="text" 
              style={{ 
                color: "#766D8A",
                boxShadow: "4px 4px 66px rgba(154, 147, 196, 0.2)",
              }}
            >
              <a href="mailto:support@gitploy.io" target="_blank">
                CONTACT SALES
              </a>
            </LargeButton>
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
                oss: true,
                enterprise: true,
              },
              {
                feature: "GitHub Enterprise",
                oss: true,
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
                oss: true,
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
                oss: true,
                enterprise: true
              },
              {
                feature: "Auto Deploy",
                oss: true,
                enterprise: true
              },
              {

                feature: "Deployment Safety",
                oss: true,
                enterprise: true
              },
              {
                feature: "Rollback",
                oss: true,
                enterprise: true
              },
              {
                feature: "Locking",
                enterprise: true
              },
              {
                feature: "Review",
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
            DevOps Metrics
          </Title>
          <FeatureTable 
            datas={[
              {
                feature: "Prometheus",
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
            Push Notification
          </Title>
          <FeatureTable 
            datas={[
              {
                feature: "Browser",
                enterprise: true
              },
              {
                feature: "Slack",
                enterprise: true
              },
            ]}
          />
        </Col>
      </Row>
      <div>
        <Footer />
      </div>
    </div>
  )
}
