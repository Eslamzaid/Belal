import React from 'react'
 import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function ThemeButton(props) {
  return (
    <div>
        <div>
            <button >hi</button>
        </div>
        <DarkModeSwitch onClick={props.touched}  size={120} checked={props.checkedd} moonColor={'black'}/>
    </div>
  )
}
