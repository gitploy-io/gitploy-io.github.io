import React from 'react'
import { 
  Row, 
  Col, 
  Typography,
  Space,
} from 'antd'

import Header from 'components/Header'
import Footer from 'components/Footer'
import CodeHighliter from '../components/CodeHighliter'
import DeployForm from '../components/DeployForm'
import LargeButton from '../components/LargeButton'

import BackgroundImage from '../assets/background.png'
import DispatchIconImage from '../assets/dispatch-icon.png'
import CodeIconImage from '../assets/code-icon.png'
import GithubImage from '../assets/github.png'

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
        <Col span={22} offset={1} md={{span: 8, offset: 8}} style={{textAlign: "center"}}>
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
              type="primary"
            >
              <a href="https://docs.gitploy.io/">
                START BUILDING
              </a>
            </LargeButton>
            <LargeButton 
              type="text" 
              style={{ 
                color: "#766D8A",
                boxShadow: "4px 4px 66px rgba(154, 147, 196, 0.2)",
              }}
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
    <Row style={{ marginTop: "150px"}}>
      <Col span={22} offset={1}  md={{span: 16, offset: 4}} lg={{span: 12, offset: 6}}>
        <div>
          <img src={DispatchIconImage} />
        </div>
        <Row>
          <Col span={24} md={{span: 11}}>
            <Title style={{color: colorDeepPurple}} level={2}>Powered By GitHub</Title>
            <Paragraph>
              <Text type="secondary" style={{fontSize: 24}}>Gitploy enable teams or organizations to build loosely coupled tooling around GitHub deployment API.</Text>
            </Paragraph>
            <Paragraph>
              <Text type="secondary" style={{fontSize: 24}}>Do not worry about the implementation details of deploying different types of applications.</Text>
            </Paragraph>
          </Col>
          <Col span={24} md={0} className="gitploy-shadow" >
            <div style={{textAlign: "center"}}>
              <img src={GithubImage}/>
            </div>
          </Col>
          <Col span={0} md={{span: 11, offset: 2}} className="gitploy-shadow" >
            <img src={GithubImage} style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              margin: "auto",
            }}/>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row style={{ marginTop: "150px"}}>
      <Col span={22} offset={1} md={{span: 16, offset: 4}} lg={{span: 12, offset: 6}}>
        <Row>
          <Col span={0} md={{span: 11, offset: 13}} >
            <img src={CodeIconImage} />
          </Col>
          <Col span={24} md={0}>
            <img src={CodeIconImage} />
          </Col>
        </Row>
        <Row>
          <Col span={0} md={{span: 11}} >
            <CodeHighliter />
          </Col>
          <Col span={24} md={{span: 11, offset: 2}}>
            <Title style={{color: colorDeepPurple}} level={2}>Configuration as code</Title>
            <Paragraph>
              <Text type="secondary" style={{fontSize: 24}}>Pipeline is configured with a simple, easy‑to‑read file that you commit to your git repository.</Text>
            </Paragraph>
            <Paragraph>
              <Text type="secondary" style={{fontSize: 24}}>Build an advanced deployment pipeline from scratch in minutes.</Text>
            </Paragraph>
          </Col>
          <Col span={24} md={0}>
            <CodeHighliter />
          </Col>
        </Row>
      </Col>
    </Row>
    <div style={{ marginTop: "150px", padding: "85px 0", backgroundColor: "#5A2EAB"}}>
      <Row>
        <Col span={24} md={{span: 12, offset: 6}} style={{textAlign: "center"}}>
          <Paragraph>
            <Title style={{ color: "white"}} level={2}>Install Gitploy in Minutes</Title>
          </Paragraph>
        </Col>
      </Row>
      <Row>
        <Col span={18} offset={3} md={{span: 8, offset: 8}} style={{textAlign: "center"}}>
          <Paragraph>
            <Text type="secondary" style={{ fontSize: 24, color: "#AB9AD0"}}>Download our official Docker image or build from source. No need to talk with sales or request a trial license.</Text>
          </Paragraph>
        </Col>
      </Row>
      <Row style={{marginTop: "20px"}}>
        <Col span={24} style={{textAlign: "center"}}>
          <Space>
            <LargeButton 
              size="large"  
              style={{ 
                color: "#766D8A",
              }}
            >
              <a href="https://docs.gitploy.io/">
                INSTALL GITPLOY
              </a>
            </LargeButton>
            <LargeButton 
              size="large" 
              type="text"
              style={{ 
                backgroundColor: colorDeepPurple, 
                color: "#766D8A",
              }}
            >
              <a href="https://cloud.gitploy.io/" style={{fontSize: 16}}>
                TRY FREE CLOUD 
              </a>
            </LargeButton>
          </Space>
        </Col>
      </Row>
    </div>
    <div>
      <Footer />
    </div>
  </div>
)
