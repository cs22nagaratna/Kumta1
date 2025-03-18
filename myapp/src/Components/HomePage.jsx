import React from "react";
import { linkTo } from "@storybook/addon-links";
import { AiOutlineBell } from "react-icons/ai";
import { LuUserRound } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BiBulb } from "react-icons/bi";


const HomePage = () => {
  return (
    <div className="container">
      <div className="boxes">
        <div className="namma-kumta">
          <img src="https://png.pngtree.com/png-vector/20240822/ourmid/pngtree-beach-logo-design-inspiration-sunset-coconut-trees-palms-on-the-vector-png-image_13564239.png" alt="logo" />
          <div className="type">Namma Kumata</div>
          <div className="i">
            <div className="bell"><AiOutlineBell /></div>
            <div className="user"><LuUserRound /></div>
            <div className="global"><AiOutlineGlobal /></div>
          </div>
        </div>
        
        
      </div>
      <button onClick={linkTo("Components/Kumta")}></button>
    </div>
  );
};

export default HomePage;
