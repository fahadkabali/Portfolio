import React from 'react'
import './footer.css'

export default function Footer() {
    const date = new Date().getFullYear();
  return (
    <section>
        <div className='footer'>
        <a href="https://react.dev/learn" className="footer-link" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-react"></i>
        </a>
        <a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" className="footer-link" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-node"></i>
        </a>
        <a href="https://expressjs.com/en/starter/installing.html" className="footer-link" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-node-js"></i>
        </a>
        <a href="https://web.dev/learn/css" className="footer-link" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-css3-alt"></i>
        </a>
        <a href="https://www.python.org/about/gettingstarted/" className="footer-link" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-python"></i>
        </a>
        <a href="https://ethereum.org/en/" className="footer-link" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-ethereum"></i>
        </a>
        <a href="https://ethereum.org/en/" className="footer-link" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-bitcoin"></i>
        </a>
        <a href="https://dfinity.org/svelte/" className="footer-link" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-infinity"></i>
        </a>
        </div>
        <p className='copy'><span> Copyright &copy;{date} All Right Reserved</span></p>
        <div className="relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Kiwatule,+Kampala,+Uganda&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
    /></div>
    </section>
  )
}
