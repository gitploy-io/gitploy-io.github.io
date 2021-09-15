import React from 'react'
import { 
  Row, 
  Col, 
} from 'antd'

export default function CodeHighliter() {
  const lines=[
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
  ]

  return <div className="gitploy-yaml-block">
		<Row>
			<Col className="gitploy-yaml-divider" span={1}>
				{lines.map((_, idx) => {
					return <p key={idx} className="gitploy-yaml-line-number">{idx+1}</p>
				})}
			</Col>
			<Col span={22}>
				{lines.map((value, idx) => {
					return <div key={idx}>{value}</div>
				})}
			</Col>
  	</Row>
	</div>
}