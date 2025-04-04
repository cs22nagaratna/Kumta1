import React from "react";
import "./Subtitle.css"
import { AiOutlineBell } from "react-icons/ai";
import { LuUserRound } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiMic } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BiBulb } from "react-icons/bi";


const Subtitle=()=>{
    return(
        <div className="z">
            <div className="namma-kumta">
                <img src="https://png.pngtree.com/png-vector/20240822/ourmid/pngtree-beach-logo-design-inspiration-sunset-coconut-trees-palms-on-the-vector-png-image_13564239.png" alt="logo" />
                <div className="type">Namma Kumata</div>
                <div className="i">
                    <div className="bell"><AiOutlineBell /></div>
                    <div className="user"><LuUserRound /></div>
                    <div className="global"><AiOutlineGlobal /></div>
                </div>
            </div>
            <div className="ambulance-list">
                <h1>Ambulance</h1>
            </div>
            <div className="icons">
                <div className="icons1">
                    <div className="home">
                        <div className="home1"><FiHome/></div>
                        <div className="home2">Home</div>
                    </div>
                    <div className="search11">
                        <div className="search111"><IoSearch/></div>
                        <div className="search112">Search</div>
                    </div>
                    <div className="add">
                        <div className="add1"><IoIosAddCircleOutline /></div>
                        <div className="add2">Add/Join</div>
                    </div>
                    <div className="alert">
                        <div className="alert1"><BiBulb/></div>
                        <div className="alert2">Alerts</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Subtitle