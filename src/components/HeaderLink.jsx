import React from 'react'
import { Button } from 'antd'

export default function HeaderLink(props) {
    return <Button 
        type="text"
        size="large"
    >
        {props.children}
    </Button>
}