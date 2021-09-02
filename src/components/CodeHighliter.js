import React from 'react'
import { 
  Row, 
  Col, 
} from 'antd'

export default function CodeHighliter(props) {
  return <div className="gitploy-yaml-block">
		<Row>
			<Col className="gitploy-yaml-divider" span={1}>
				{props.lines.map((_, idx) => {
					return <p key={idx} className="gitploy-yaml-line-number">{idx+1}</p>
				})}
			</Col>
			<Col span={22}>
				{props.lines.map((value, idx) => {
					return <div key={idx}>{value}</div>
				})}
			</Col>
  	</Row>
	</div>
}