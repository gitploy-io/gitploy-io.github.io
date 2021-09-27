import React, { useState } from 'react'
import { 
  Card,
  PageHeader,
  Form,
  Select,
  Radio,
  Typography,
  Button,
  message
} from 'antd'

const { Text } = Typography

export default function DeployForm() {

  const tabList = [
    {key: "home", tab: "Home"},
    {key: "deploy", tab: "Deploy"},
    {key: "rollback", tab: "Rollback"},
    {key: "settings", tab: "Settings"},
  ]

  const [ type, setType ] = useState("")

  const onChangeType = (e) => {
    setType(e.target.value)
  }

  const onFinishDeploy = () => {
    message.info(<span>Let's build your first deployment pipeline! <a href="https://docs.gitploy.io/">#1</a> </span>)
  }

  return (
    <Card
      style={{ width: '100%' }}
      tabList={tabList}
      activeTabKey={"deploy"}
    >
      <PageHeader title="Deploy"/>
      <Form 
        name="form"
        style={{marginTop: "20px"}}
        onFinish={onFinishDeploy}
      >
        <Form.Item
          labelCol={{span: 5}}
          wrapperCol={{span: 10}}
          rules={[{required: true}]}
          label="Environment"
          name="Environment"
        >
          <Select
            size="large"
            placeholder="Select target environment"
          >
            <Select.Option key={0}>dev</Select.Option>
            <Select.Option key={1}>staging</Select.Option>
            <Select.Option key={2}>production</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          labelCol={{span: 5}}
          wrapperCol={{span: 12}}
          rules={[{required: true}]}
          label="Type"
          name="Type"
        >
          <Radio.Group 
            size="large"
            onChange={onChangeType}
          >
            <Radio.Button value="commit">Commit</Radio.Button>
            <Radio.Button value="branch">Branch</Radio.Button>
            <Radio.Button value="tag">Tag</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {(["commit", "branch"].includes(type)) ?
          <Form.Item
            labelCol={{span: 5}}
            wrapperCol={{span: 10}}
            rules={[{required: true}]}
            label="Branch"
            name="Branch"
          >
            <Select
              size="large"
              placeholder="Select branch"
            >
              <Select.Option key={0}>
                <Text code className="gitploy-code">main</Text>
              </Select.Option>
              <Select.Option key={1}>
                <Text code className="gitploy-code">new-feature</Text>
              </Select.Option>
            </Select>
          </Form.Item> : 
          null}
        {(["commit"].includes(type)) ?
          <Form.Item
            labelCol={{span: 5}}
            wrapperCol={{span: 16}}
            rules={[{required: true}]}
            label="Commit"
            name="Commit"
          >
            <Select
              size="large"
              placeholder="Select commit"
            >
              <Select.Option key={0}>
                <Text code className="gitploy-code">3fa3dbb</Text> - Evaluate the env field
              </Select.Option>
              <Select.Option key={1}>
                <Text code className="gitploy-code">7b35d8c</Text> - Remove the rollback method
              </Select.Option>
              <Select.Option key={2}>
                <Text code className="gitploy-code">77bb4b7</Text> - Fix the bug of rollback URL
              </Select.Option>
              <Select.Option key={3}>
                <Text code className="gitploy-code">ac866c4</Text> - Add installation documentation
              </Select.Option>
            </Select>
          </Form.Item> : 
          null}
        {(["tag"].includes(type)) ?
          <Form.Item
            labelCol={{span: 5}}
            wrapperCol={{span: 10}}
            rules={[{required: true}]}
            label="Tag"
            name="Tag"
          >
            <Select
              size="large"
              placeholder="Select tag"
            >
              <Select.Option key={0}>
                <Text code className="gitploy-code">v0.4.1</Text>
              </Select.Option>
              <Select.Option key={1}>
                <Text code className="gitploy-code">v0.4.0</Text>
              </Select.Option>
              <Select.Option key={2}>
                <Text code className="gitploy-code">v0.3.2</Text>
              </Select.Option>
              <Select.Option key={3}>
                <Text code className="gitploy-code">v0.3.1</Text>
              </Select.Option>
              <Select.Option key={4}>
                <Text code className="gitploy-code">v0.3.0</Text>
              </Select.Option>
            </Select>
          </Form.Item> : 
          null}
          <Form.Item 
            wrapperCol={{offset:5, span: 10}}
          >
            <Button 
              size="large"
              type="primary" 
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
      </Form>
    </Card>
  ) 
}
