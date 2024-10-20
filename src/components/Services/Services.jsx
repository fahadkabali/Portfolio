import React from 'react'
import "./services.css"
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/backend.svg';
import Image3 from '../../assets/blockchain.svg';
import Image4 from '../../assets/mobileApp.svg'
import Image5 from '../../assets/service-3.svg';
import Image6 from '../../assets/service-2.svg';

const data =[
  {
    id: 1,
    image: Image6,
    title: "Front-End Development",
    description:
    "I'm a front-end wizard ready to craft delightful user experiences with my expertise in HTML, CSS, and JavaScript.",
  },
  {
    id: 2,
    image: Image2,
    title: "Back-End Development",
    description:
    "Equipped with robust backend skills, I engineer scalable solutions to power seamless operations and elevate user experiences.",
  },
  {
    id: 3,
    image: Image3,
    title: "Blockchain Development",
    description:
    "As a Web3 enthusiast, I specialize in harnessing blockchain technology to build decentralized applications that revolutionize digital ecosystems.",
  },
  {
    id: 4,
    image: Image4,
    title: "Mobile App Development",
    description:
      "I'm a mobile app maestro, crafting intuitive experiences with a keen eye for design and functionality, ensuring seamless performance across platforms.",
  },
  {
    id: 5,
    image: Image1,
    title: "Web Application Security",
    description:
      "I safeguard digital realms, fortifying websites against cyber threats to ensure data privacy and integrity.",
  },
  {
    id: 6,
    image: Image5,
    title: "API Development & Security",
    description:
      "I specialize in API security, implementing robust measures to protect data integrity and user privacy, ensuring seamless and secure communication between applications.",
  },

]

export default function Services() {
  return (
    <section className="services container section" id ="services">
      <h2 className="section_title">Services</h2>
      <div className="services_container grid">
        {data.map(({id,image,title,description})=>{
          return(
            <div className="services_card" key={id}>
              <img src={image} alt="" className="services_img" />

              <h3 className="services_title">{title}</h3>
              <p className="services_description">{description}</p>

            </div>
          )
        })}
      </div>
    </section>
  )
}
