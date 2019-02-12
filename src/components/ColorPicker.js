import React, { useState } from 'react';

export function ColorPicker({ selected, colors, onChange, ...props }) {
  const [isExpanded, toggleDropdown] = useState(false);
  return (
    <div className="ColorPicker" onClick={() => toggleDropdown(!isExpanded)} {...props}>
      {isExpanded 
        ? colors.map(color => 
          <div className="ColorPicker-option" onClick={() => onChange(color)} key={color.id} value={color}>
            {color.name}
          </div>)
        : selected
      }
    </div>
  )
}
