/** @format */

import React from "react";
import logo from "../assets/logo.png";
import { AiFillFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=' bg-[#07245C] text-white flex justify-between'>
        <div className=' p-6 flex flex-col items-center'>
          <img src={logo} className=' h-10 object-cover w-10' alt='logo' />
          <p className=' mb-3'>Hamro patro</p>
          <p>
            {" "}
            &copy; Hamro patro 2023 <br />
            All rights reserved | <br />
          </p>
          <span className=' flex gap-3'>
            <span className=' underline'>Privacy</span>|
            <span>Terms of service</span>
          </span>
        </div>
        <div className=' p-6'>
          <span className=' underline'>Features</span>
          <ul className=' list-none flex flex-col gap-1'>
            <li>Gold/Silver</li>
            <li>Blog</li>
            <li>Date Converter</li>
            <li>Forex</li>
            <li>Feature Request</li>
          </ul>
        </div>
        <div className=' p-6'>
          <span className=' underline'>Hamro Apps</span>
          <ul className=' list-none flex flex-col gap-1'>
            <li>Hamro Keyboard</li>
            <li>Hamro Pay</li>
            <li>Hamro Gifts</li>
            <li>Hamro Magazine</li>
          </ul>
        </div>
        <div className=' p-6 flex flex-col items-center gap-2'>
          <span className=' underline '>Social</span>
          <span className=' flex gap-2 text-xl'>
            <AiFillFacebook />
            <FaXTwitter />
            <FaLinkedin />
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
