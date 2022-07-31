import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'
import { Playground } from 'xueyan-react-playground'
import { Button } from 'ark-button'

const MARK1 = `
基础按钮组件

\`\`\`
type Button = React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<ButtonRef>
>
\`\`\`

## 示例
`

const CODE1 = `
import React from 'react'
import { Button } from 'ark-button'

export default function Example() {
  return (
    <Button
      color="main"
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
## ButtonRef

\`\`\`
interface ButtonRef {
  /** 根节点 */
  rootNode: HTMLButtonElement | null
}
\`\`\`

## ButtonProps

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| className | 类名 | \`? string\` |  |
| style | 样式 | \`? React.CSSProperties\` |  |
| children | 开关状态 | \`? React.ReactNode\` |  |
| disabled | 禁用 | \`? boolean\` |  |
| color | 按钮颜色 | \`? ButtonColor\` | 默认值为 none |
| onClick | 点击事件 | \`? ButtonOnClick\` |  |

## ButtonColor

按钮颜色

\`\`\`
type ButtonColor =
  | 'none'    // 透明底色（Normal）
  | 'main'    // 主色（Primary）
  | 'red'     // 红色（Error）
  | 'orange'  // 橙色（Warning）
  | 'blue'    // 蓝色（Info）
  | 'green'   // 绿色（Success）
\`\`\`

## ButtonOnClick

点击事件触发的回调

\`\`\`
type ButtonOnClick = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void
\`\`\`
`

export default function Main() {
  const scope = { React, Button }
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
