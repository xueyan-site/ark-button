import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import cn from 'classnames'
import styles from './solid-button.scss'

export type SolidButtonOnClick = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void

export interface SolidButtonProps {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: React.CSSProperties
  /** 开关状态 */
  children?: React.ReactNode
  /** 按钮颜色 */
  color?: 'main' | 'red' | 'orange' | 'blue' | 'green' | 'none'
  /** 禁用 */
  disabled?: boolean
  /** 更改开关状态 */
  onClick?: SolidButtonOnClick
}

export interface SolidButtonRef {
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

export const SolidButton = forwardRef<SolidButtonRef, SolidButtonProps>(({
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
        styles.xrsolidbutton,
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
