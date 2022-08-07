import React from 'react'
import { Article, Segment } from 'ark-markdown'
import { Playground } from 'ark-playground'
import { SolidButton } from 'ark-button'

const MARK1 = `
实心按钮组件（无边框）

\`\`\`
type SolidButton = React.ForwardRefExoticComponent<
  SolidButtonProps & React.RefAttributes<ButtonRef>
>
\`\`\`

> 其他类型：[ButtonRef](?doc=0002#buttonref)

## 示例
`

const CODE1 = `
import React from 'react'
import { SolidButton } from 'ark-button'

export default function Example() {
  return (
    <SolidButton
      color="main"
      style={{ width: '100px' }}
      onClick={() => { 
        console.log('hello world')
      }}
    >
      按钮
    </SolidButton>
  )
}
`

const MARK2 = `
## SolidButtonProps

继承 [ButtonRef](?doc=0002#buttonprops) 全部属性
`

export default function Main() {
  const scope = { React, SolidButton }
  return (
    <Article>
      <Segment>{MARK1}</Segment>
      <Playground scope={scope}>
        {CODE1}
      </Playground>
      <Segment>{MARK2}</Segment>
    </Article>
  )
}
