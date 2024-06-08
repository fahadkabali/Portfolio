import React, { useState } from 'react'
import "./portifolio.css"
import Menu from './Menu';

export default function Portifolio() {
  const [items,setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const filteredItems = Menu.filter((curElem) => curElem.category === categoryItem);
    setItems(filteredItems); 
  };
  return (
   <section className="work container section" id="work">
      <h2 className="section_title">Recent Works</h2>
      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}>Everything</span>
        <span className="work_item" onClick={()=>filterItem("FRONTEND")}>FrontEnd</span>
        <span className="work_item" onClick={()=>filterItem("BACKEND")}>BackEnd</span>
        <span className="work_item" onClick={()=>filterItem("WEB3")}>Web3</span>
        <span className="work_item" onClick={()=>filterItem("WEB3")}>Favorite</span>
      </div>
      <div className="work_container grid">
        {items.map((elem)=>{
          const {id,image,title,category,link1, link2} = elem;
          return(
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="Project" className="work_img"/>
                <div className="work_mask"></div>
              </div>
              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <div className="link-work">
                <a href={link1} target="_blank" rel="noopener noreferrer" className="work_button">
                  <i class="fa-solid fa-eye fa-2xl"></i>                
                  </a>
                <a href={link2} target="_blank" rel="noopener noreferrer" className="work_button">
                  <i class="fa-brands fa-github fa-2xl"></i>                
                  </a>
              </div>
            </div>
          )
        })}
      </div>
   </section>
  )
}
