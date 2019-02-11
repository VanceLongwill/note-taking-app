import React from 'react';

export function ColorPicker({ value, colors, onChange, ...props }) {
  return (
    <select value={value} onChange={onChange} {...props}>
      {colors.map(color => 
        <option key={color.id} value={color.id}>
          {color.name}
        </option>
      )}
    </select>
  )
}
