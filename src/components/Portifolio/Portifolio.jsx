import React, { useState } from 'react'
import "./portifolio.css"
import Menu from './Menu';

export default function Portifolio() {
  const [items,setItems] = useState(Menu);
  return (
   <section className="work container section" id="work">
      <h2 className="section_title">Recent Works</h2>
      <div className="work_filters">
        <span className="work_item">Everything</span>
        <span className="work_item">Creative</span>
        <span className="work_item">Art</span>
        <span className="work_item">Design</span>
        <span className="work_item">Branding</span>
      </div>
      <div className="work_container grid">
        {items.map((key, item)=>{
          
        })}
      </div>
   </section>
  )
}
