/** @format */

import React from "react";
import logo from "../assets/logo.png";
import { Input, Button, Tag } from "antd";
import { FaUser } from "react-icons/fa";
const { Search } = Input;

const Navbar = () => {
  return (
    <>
      <nav className=' container mx-auto flex items-center gap-4 justify-between'>
        <img className=' h-10 w-10' src={logo} alt='' />
        <ul className=' list-none flex gap-10 font-semibold'>
          <li>Home</li>
          <li>Jyotishi</li>
          <li>Rashifal</li>
          <li>News</li>
          <li>App</li>
          <li>Games</li>
        </ul>
        <div className=' flex items-center gap-5'>
          <Search
            placeholder='search'
            onSearch={(value) => console.log(value)}
            style={{ width: 200 }}
          />
          <Tag className=' w-8 text-md font-semibold'>EN</Tag>
          <Button className=' bg-slate-200' icon={<FaUser />}>
            Guest
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
