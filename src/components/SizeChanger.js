import React from 'react';

export default function SizeChanger(props) {
  return (
    <select className="dropDownContainer" onChange={(e) => {
        let num = parseInt(e.target.value)
        props.update(num)
      }}
      disabled={props.allowEdit === "false"}
    >
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
      <option value="16"> 16 </option>
      <option value="18"> 18 </option>
      <option value="24"> 24 </option>
    </select>
  )
}