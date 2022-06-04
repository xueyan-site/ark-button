import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import cn from 'classnames'
import styles from './button.scss'

export type ButtonOnClick = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void

export type ButtonColor =
  | 'none'
  | 'main' 
  | 'red' 
  | 'orange' 
  | 'blue' 
  | 'green' 

export interface ButtonProps {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: React.CSSProperties
  /** 开关状态 */
  children?: React.ReactNode
  /** 禁用 */
  disabled?: boolean
  /** 按钮颜色 */
  color?: ButtonColor
  /** 更改开关状态 */
  onClick?: ButtonOnClick
}

export interface ButtonRef {
  /** 根节点 */
  rootNode: HTMLButtonElement | null
}

const BUTTON_COLORS: Record<string, string> = {
  main: styles.main,
  red: styles.red,
  orange: styles.orange,
  blue: styles.blue,
  green: styles.green,
}

export const Button = forwardRef<ButtonRef, ButtonProps>(({
  className,
  style,
  children,
  color,
  disabled,
  onClick,
}, ref) => {
  const rootRef = useRef<HTMLButtonElement>(null)

  useImperativeHandle(ref, () => ({
    rootNode: rootRef.current
  }), [rootRef.current])

  return (
    <button
      ref={rootRef}
      style={style}
      className={cn(
        className, 
        styles.xrbutton,
        disabled && styles.disabled,
        BUTTON_COLORS[color || ''],
      )}
      onClick={event => {
        if (!disabled && onClick){
          onClick(event)
        }
      }}
    >
      {children}
    </button>
  )
})
