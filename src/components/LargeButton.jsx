import React from 'react'
import { 
  Button,
} from 'antd'

export default function LargeButton(props) {
  const {children, ... buttonProps} = props
  return (
    <Button
      {...buttonProps}
      style={{
        width: 282,
        height: 84,
        fontSize: 24,
      }}
    >
        {props.children}
    </Button>
  )
}