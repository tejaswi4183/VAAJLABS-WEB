import React from 'react'
import Vaaj from '../assests/vaaj.png'
import './about.css'
import {FaFacebookSquare,FaTwitter,FaInstagramSquare} from "react-icons/fa";
export default function About() {
  return (
    <div className='about-us'>
        <div className='container'>
            <div className='row'>
                <div className='flex'>
                    <h2 className='head'>ABOUT US</h2>
                    <h3>Discover our Team's Story</h3>
                    <p>
                    Providing Technical Needs to Custmers -Application Development & Cybersecurity Solutions.<br></br>We partner in digital innovation for enterprises and technology companies, utilizing emerging technologies for creating engaging customers experiences. Being a customer-focused and technology-driven company, we always help clients in crafting holistic business value for the software developments efforts. We offer Cyber Security, software development and IT Consulting services.
                    </p>
                    <p>-&nbsp;“Business Success does not lie in something Growing Quickly and Massively. But rather than in building something that’s both remarkable and resilient over the Long Term” </p>
                    <div className='social-links'>
                        <a href=""><FaFacebookSquare /></a>
                        <a href=""><FaTwitter /></a>
                        <a href=""><FaInstagramSquare /></a>   
                    </div>
                </div>
                <div className='flex'>
                   <img src={Vaaj} /> 
                </div>
            </div>
        </div>
    </div>
  )
}
