import React from 'react'
import { Button, Badge } from 'react-bootstrap'

const MyBadge = ({text, color}) => {
    return (
        <Button variant="red">
            {text} <Badge style={{backgroundColor: {color}}}>9</Badge>
        </Button>
    )
}

export default MyBadge
