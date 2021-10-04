import React from 'react'
import { 
  Button,
} from 'antd'

export default function LargeButton(props) {
  const {children, style, ... buttonProps} = props
  const newStyle = {
    ...style,
    height: 80,
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.09em"
  }

  return (
    <Button
      {...buttonProps}
      style={newStyle}
    >
        {props.children}
    </Button>
  )
}