import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'
import { Playground } from 'xueyan-react-playground'
import { Button, SolidButton } from 'xueyan-react-button'

const MARK1 = `
按钮组件库

## 示例
`

const CODE1 = `
import React from 'react'
import { Button } from 'xueyan-react-button'

export default function Example() {
  return (
    <Button
      style={{ width: '100px' }}
      onClick={() => { 
        console.log('hello world')
      }}
    >
      按钮
    </Button>
  )
}
`

const MARK2 = `
## 样式
`

export default function Main() {
  const scope = { React, Button, SolidButton }
  return (
    <Article>
      <Segment>{MARK1}</Segment>
      <Playground scope={scope}>
        {CODE1}
      </Playground>
      <Segment>{MARK2}</Segment>
      <table>
        <tr>
          <th></th>
          <th>Button</th>
          <th>SolidButton</th>
        </tr>
        {['none', 'main', 'red', 'orange', 'blue', 'green'].map((color: any) => (
          <tr key={color}>
            <td>{color}</td>
            <td>
              <Button color={color} style={{ marginRight: '16px' }}>我是按钮</Button>
              <Button color={color} disabled={true}>我是按钮</Button>
            </td>
            <td>
              <SolidButton color={color} style={{ marginRight: '16px' }}>我是按钮</SolidButton>
              <SolidButton color={color} disabled={true}>我是按钮</SolidButton>
            </td>
          </tr>
        ))}
      </table>
    </Article>
  )
}
