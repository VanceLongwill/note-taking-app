import React, { useState } from 'react';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

export function ColorPicker({ selected, colors, onChange, ...props }) {
  const [isExpanded, toggleDropdown] = useState(false);
  return (
    <div className="ColorPicker" onClick={() => toggleDropdown(!isExpanded)} {...props}>
      {isExpanded 
        ? colors.map(color => 
          <div className="ColorPicker-option" onClick={() => onChange(color)} key={color.id} value={color}>
            {color.name}
          </div>)
        : <span>{selected}</span>
      }
      {isExpanded
          ? <FaCaretUp />
          : <FaCaretDown />
      }
    </div>
  )
}
