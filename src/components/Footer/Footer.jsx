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
    
    </section>
  )
}
