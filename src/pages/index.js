import React from 'react'
import { 
  Row, 
  Col, 
  Typography,
  Button,
  Space,
  Image,
} from 'antd'

import RocketIcon from '../assets/rocket-icon.png'
import GithubLogo from '../assets/github.jpeg'
import CodeHighliter from '../components/CodeHighliter'

const colorDeepPurple = "#120338"
const { Title, Text } = Typography

export default () => (
  <div >
    <div style={{ marginTop: "60px", textAlign: "center"}} >
      <Row >
        <Col lg={{offset: 5, span: 14}}>
          <Title style={{color: "#120338"}} level={1}>Build advanced deployment pipeline in minutes.</Title>
          <Title type="secondary" level={4}>Gitploy enables teams to deploy with lower risk and faster.</Title>
        </Col>
      </Row>
      <Row style={{marginTop: "20px"}}>
        <Col span={24}style={{textAlign: "center"}}>
          <Space>
            <Button size="large" type="primary" >
              <a href="https://docs.gitploy.io/" target="_blank">
                Start Building
              </a>
            </Button>
            <Button size="large" type="text" >
              <a href="https://docs.gitploy.io/" target="_blank">
                Read Docs
              </a>
            </Button>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col>
        {/* TODO: Add Image */}
        </Col>
      </Row>
    </div>
    <Row style={{ marginTop: "150px"}}>
      <Col offset={1} span={22} lg={{span: 14, offset: 5}}>
        <Row>
          <Col span={24} md={{span: 11}}>
            <Title style={{color: colorDeepPurple}} level={2}>Configuration as code</Title>
            <Title type="secondary" level={5}>Pipelines are configured with a simple, easy‑to‑read file that you commit to your git repository.</Title>
            <Title type="secondary" level={5}>Build an advanced deployment pipeline from scratch in minutes.</Title>
          </Col>
          <Col span={24} md={{span: 11, offset: 2}}>
            <CodeHighliter 
              lines={[
                <p className="gitploy-yaml-code">
                  <span className="gitploy-yaml-code-key">envs: </span>
                </p>,
                <p className="gitploy-yaml-code">
                  <span className="gitploy-yaml-code-key">- name: </span><span className="gitploy-yaml-code-value"> prod</span>
                </p>,
                <p className="gitploy-yaml-code">
                  <span className="gitploy-yaml-code-key">&nbsp;&nbsp; auto_merge: </span><span className="gitploy-yaml-code-value"> false</span>
                </p>,
                <p className="gitploy-yaml-code">
                  <span className="gitploy-yaml-code-key">&nbsp;&nbsp; required_contexts: </span><span className="gitploy-yaml-code-value"> ['lint', 'test']</span>
                </p>,
                <p className="gitploy-yaml-code">
                  <span className="gitploy-yaml-code-key">&nbsp;&nbsp; approval: </span>
                </p>,
                <p className="gitploy-yaml-code">
                  <span className="gitploy-yaml-code-key">&nbsp;&nbsp; - enabled: </span> <span className="gitploy-yaml-code-value"> true</span>
                </p>,
                <p className="gitploy-yaml-code">
                  <span className="gitploy-yaml-code-key">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; required_count: </span> <span className="gitploy-yaml-code-value"> 1</span>
                </p>,
              ]}
            />
          </Col>
        </Row>
      </Col>
    </Row>
    {/* <div style={{ marginTop: "150px"}} >
      <Row>
        <Col span={24}>
          <div style={{textAlign: "center", marginBottom: "50px"}}>
            <Title style={{color: colorDeepPurple}} level={2}>Features</Title>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24} md={8}>
          <div style={{textAlign: "center", padding: "10px"}}>
            <Image width={110} src={RocketIcon} preview={false}/>
            <Title style={{color: colorDeepPurple}} level={3}>Deploy</Title>
            <Text type="secondary">Click the commit, branch, or tag in the Gitploy to deploy your code. It doesn't get any simpler than that.</Text>
          </div>
        </Col>
        <Col span={24} md={8}>
          <div style={{textAlign: "center", padding: "10px"}}>
            <Image width={110} src={RocketIcon} preview={false}/>
            <Title style={{color: colorDeepPurple}} level={3}>Rollback</Title>
            <Text type="secondary">Click the release you want to rollback in the Gitploy. It is the best way to recover while you fix the problems.</Text>
          </div>
        </Col>
        <Col span={24} md={8}>
          <div style={{textAlign: "center", padding: "10px"}}>
            <Image width={110} src={RocketIcon} preview={false}/>
            <Title style={{color: colorDeepPurple}} level={3}>Promote</Title>
            <Text type="secondary">Click the release from one evironment in the Gitploy. Promote saves you the trouble of bugs.</Text>
          </div>
        </Col>
      </Row>
    </div> */}
    <Row style={{ marginTop: "150px"}}>
      <Col offset={1} span={22} lg={{span: 14, offset: 5}}>
        <Row>
          <Col span={24} md={{span: 11}}>
            <Title style={{color: colorDeepPurple}} level={2}>Powered By Github</Title>
            <Title type="secondary" level={5}>Gitploy dispatches a Github deployment event that external services can listen and act.</Title>
            <Title type="secondary" level={5}>You can build loosely coupled tooling around deployments.</Title>
          </Col>
          <Col span={24} md={{span: 11, offset: 2}}>
            <Image src={GithubLogo} preview={false}/>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
)
