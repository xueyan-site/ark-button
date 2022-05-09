import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'
import { Button, SolidButton } from 'xueyan-react-button'

const MARK1 = `
## xueyan-react-button

按钮组件

## 用法
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
      <Button>我是按钮</Button>
      <Button disabled={true} style={{ marginLeft: '8px' }}>我是按钮</Button>
      <SolidButton style={{ marginLeft: '8px' }}>我是按钮</SolidButton>
      <SolidButton disabled={true} style={{ marginLeft: '8px' }}>我是按钮</SolidButton>
      <div style={{ marginTop: '8px' }}></div>
      <Button color="main">我是按钮</Button>
      <Button color="main" disabled={true} style={{ marginLeft: '8px' }}>我是按钮</Button>
      <SolidButton color="main" style={{ marginLeft: '8px' }}>我是按钮</SolidButton>
      <SolidButton color="main" disabled={true} style={{ marginLeft: '8px' }}>我是按钮</SolidButton>
      <div style={{ marginTop: '8px' }}></div>
      <Button color="red">我是按钮</Button>
      <Button color="red" disabled={true} style={{ marginLeft: '8px' }}>我是按钮</Button>
      <SolidButton color="red" style={{ marginLeft: '8px' }}>我是按钮</SolidButton>
      <SolidButton color="red" disabled={true} style={{ marginLeft: '8px' }}>我是按钮</SolidButton>
      <div style={{ marginTop: '8px' }}></div>
      <Button color="orange">我是按钮</Button>
      <Button color="orange" disabled={true} style={{ marginLeft: '8px' }}>我是按钮</Button>
      <SolidButton color="orange" style={{ marginLeft: '8px' }}>我是按钮</SolidButton>
      <SolidButton color="orange" disabled={true} style={{ marginLeft: '8px' }}>我是按钮</SolidButton>
      <div style={{ marginTop: '8px' }}></div>
      <Button color="blue">我是按钮</Button>
      <Button color="blue" disabled={true} style={{ marginLeft: '8px' }}>我是按钮</Button>
      <SolidButton color="blue" style={{ marginLeft: '8px' }}>我是按钮</SolidButton>
      <SolidButton color="blue" disabled={true} style={{ marginLeft: '8px' }}>我是按钮</SolidButton>
      <div style={{ marginTop: '8px' }}></div>
      <Button color="green">我是按钮</Button>
      <Button color="green" disabled={true} style={{ marginLeft: '8px' }}>我是按钮</Button>
      <SolidButton color="green" style={{ marginLeft: '8px' }}>我是按钮</SolidButton>
      <SolidButton color="green" disabled={true} style={{ marginLeft: '8px' }}>我是按钮</SolidButton>
    </Article>
  )
}
