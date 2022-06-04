import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import cn from 'classnames'
import styles from './solid-button.scss'
import { ButtonProps, ButtonRef } from './button'

export interface SolidButtonProps extends ButtonProps {}

const BUTTON_COLORS: Record<string, string> = {
  main: styles.main,
  red: styles.red,
  orange: styles.orange,
  blue: styles.blue,
  green: styles.green,
}

export const SolidButton = forwardRef<ButtonRef, SolidButtonProps>(({
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
