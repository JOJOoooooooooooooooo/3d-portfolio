import React from 'react'
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />

      <div className="footer-container flex flex-wrap gap-7 items-center justify-between pb-10 mt-10">
        <p className="text-slate-500">
          © 2026 <span className="font-semibold">Jonathan Ghattas</span>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-6 h-6 object-contain hover:opacity-70 transition-opacity"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer