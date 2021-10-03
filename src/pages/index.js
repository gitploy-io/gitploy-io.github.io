import React from 'react'
import { 
  Row, 
  Col, 
  Typography,
  Button,
  Space,
  Image,
} from 'antd'

import Header from 'components/Header'
import GithubLogo from '../assets/github.jpeg'
import CodeHighliter from '../components/CodeHighliter'
import DeployForm from '../components/DeployForm'
import LargeButton from '../components/LargeButton'

import BackgroundImage from '../assets/background.png'

const colorDeepPurple = "#120338"
const { Title, Text, Paragraph } = Typography

export default () => (
  <div >
    <div style={{ 
      backgroundImage: `url(${BackgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPositionY: "-100px",    // Move the image top.
    }} 
    >
      <div style={{padding: "50px 0"}}>
        <Header />
      </div>
      <Row >
        <Col span={24} md={{span: 8, offset: 8}} style={{textAlign: "center"}}>
          <Title style={{color: colorDeepPurple}} level={1}>Builds your deployment system around GitHub.</Title>
        </Col>
      </Row>
      <Row >
        <Col span={24} md={{span: 8, offset: 8}} style={{textAlign: "center"}}>
          <Text type="secondary" style={{fontSize: 24}}>Gitploy is the easiest way to build an advanced deployment system around Github deployment API.</Text>
        </Col>
      </Row>
      <Row style={{marginTop: "20px"}}>
        <Col span={24}style={{textAlign: "center"}}>
          <Space>
            <LargeButton
              size="large"
              type="primary"
            >
              <a href="https://docs.gitploy.io/">
                START BUILDING
              </a>
            </LargeButton>
            <LargeButton 
              size="large" 
              type="text" 
            >
              <a href="https://docs.gitploy.io/">
                READ DOCS
              </a>
            </LargeButton>
          </Space>
        </Col>
      </Row>
      <Row style={{marginTop: "100px"}}>
        <Col span={22} offset={1} md={{span: 16, offset: 4}} lg={{span: 12, offset: 6}}>
          <DeployForm />
        </Col>
      </Row>
    </div>
    <Row style={{ marginTop: "200px"}}>
      <Col offset={1} span={22} lg={{span: 16, offset: 4}}>
        <Row>
          <Col span={24} md={{span: 11}} style={{paddingTop: "30px"}}>
            <Title style={{color: colorDeepPurple}} level={3}>Powered By GitHub</Title>
            <Paragraph><Text type="secondary" strong>Gitploy enable teams or organizations to build loosely coupled tooling around GitHub deployment API.</Text></Paragraph>
            <Paragraph><Text type="secondary" strong>Do not worry about the implementation details of deploying different types of applications.</Text></Paragraph>
          </Col>
          <Col span={24} md={{span: 11, offset: 2}}>
            <Image src={GithubLogo} preview={false}/>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row style={{ marginTop: "100px"}}>
      <Col offset={1} span={22} lg={{span: 16, offset: 4}}>
        <Row>
          <Col span={0} md={{span: 11}} >
            <CodeHighliter />
          </Col>
          <Col span={24} md={{span: 11, offset: 2}}>
            <Title style={{color: colorDeepPurple}} level={3}>Configuration as code</Title>
            <Paragraph><Text type="secondary" strong>Pipeline is configured with a simple, easy‑to‑read file that you commit to your git repository.</Text></Paragraph>
            <Paragraph><Text type="secondary" strong>Build an advanced deployment pipeline from scratch in minutes.</Text></Paragraph>
          </Col>
          <Col span={24} md={0}>
            <CodeHighliter />
          </Col>
        </Row>
      </Col>
    </Row>
    <div style={{ marginTop: "200px"}}>
      <Row>
        <Col span={24} md={{span: 12, offset: 6}} style={{textAlign: "center"}}>
          <Paragraph>
            <Title style={{color: colorDeepPurple}} level={2}>Install Gitploy in Minutes</Title>
          </Paragraph>
        </Col>
      </Row>
      <Row>
        <Col span={18} offset={3} md={{span: 8, offset: 8}} style={{textAlign: "center"}}>
          <Paragraph>
            <Title type="secondary" level={5}>Download our official Docker image or build from source. <br /> No need to talk with sales or request a trial license.</Title>
          </Paragraph>
        </Col>
      </Row>
      <Row style={{marginTop: "20px"}}>
        <Col span={24}style={{textAlign: "center"}}>
          <Space>
            <Button size="large" type="primary" >
              <a href="https://docs.gitploy.io/" target="_blank">
                Install Gitploy
              </a>
            </Button>
            <Button size="large" type="text" >
              <a href="https://cloud.gitploy.io/" target="_blank">
                Try free cloud offering
              </a>
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  </div>
)
