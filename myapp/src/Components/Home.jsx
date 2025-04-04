import React from "react";
import "./Home.css"
import { linkTo } from "@storybook/addon-links"; 
import { AiOutlineBell } from "react-icons/ai";
import { LuUserRound } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BiBulb } from "react-icons/bi";
import { MdOutlineArrowBackIos } from "react-icons/md";
const Home=()=>{
    return(
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

                <div className="em">
                    <div className="em-icon">
                        <div className="e-ic">
                          <a onClick={linkTo("Components/Kumta")}>
                            <a><MdOutlineArrowBackIos /></a>
                            <p>Emergency</p>
                          </a>
                        </div>
                    </div>
                    <div className="sub-icon">
                        <div className="ambulance">
                          <a onClick={linkTo("Components/Subtitle")}>
                            <img src="https://img.freepik.com/premium-vector/flat-style-icon-hospital-ambulance_67813-6242.jpg" alt="" />
                            <p>Ambulance</p>
                          </a>
                        </div>
                        <div className="fire">
                            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/fire-sign-4549959-3804270.png" alt="" />
                            <p>FireEmergency</p>
                        </div>
                        <div className="police">
                            <img src="https://cdn-icons-png.flaticon.com/512/4814/4814020.png" alt="" />
                            <p>PoliceEmergency</p>
                        </div>
                        <div className="rescue">
                            <img src="https://thumbs.dreamstime.com/b/rescue-operation-c%E2%80%A6r-illustration-sign-isolated-symbol-248158512.jpg" alt="" />
                            <p>RescueOperations</p>
                        </div>
                        <div className="cyber">
                            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/emergency-data-recovery-4645302-3859784.png" alt="" />
                            <p>CybersecurityEmergency</p>
                        </div>
                        <div className="traffic">
                            <img src="https://cdn-icons-png.flaticon.com/512/3119/3119374.png" alt="" />
                            <p>TrafficAccidents</p>
                        </div>
                    </div>
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
        </div>
    )
}
export default Home