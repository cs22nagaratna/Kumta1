import React from "react";
import "./Kumta.css"
import { linkTo } from "@storybook/addon-links"; 
import { AiOutlineBell } from "react-icons/ai";
import { LuUserRound } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { FiMic } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BiBulb } from "react-icons/bi";
const Kumta = () => {
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
                <div className="search">
                    <div className="search1">
                        <div className="search-i"><IoSearch /></div>
                        <div className="here">Search here...</div>
                        <div className="voice"><FiMic /></div>
                    </div>
                </div>
                <div className="images">
                    <div className="images1">
                        <div className="row1">
                            <div className="hospital">
                                <img src="https://pics.craiyon.com/2024-09-06/QDWqBYpMTZ-vJVFdzuN7GA.webp"/>
                            </div>
                            <div className="departments">
                                <img src="https://cbin.b-cdn.net/img/GO/Government-of-India01_9CFDJ_800x582.jpeg" />
                            </div>
                            <div className="associations">
                                <img src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"  />
                            </div>
                            <div className="banks">
                                <img src="https://t4.ftcdn.net/jpg/00/61/06/27/360_F_61062796_NF87GPnWV0fQ2LhoYNlyjev0PocRwZj9.jpg" />
                            </div>
                            <div className="tourism">
                                <img src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=600" />
                            </div>
                            <div className="hotels">
                                <img src="https://images.otstatic.com/prod/24065351/1/large.jpg" />
                            </div>
                            <div className="rent-vehicles">
                                <img src="https://img.freepik.com/premium-photo/car-rental-k%E2%80%A6-hand-rent-car-from-rental-agency_294383-9193.jpg" />
                            </div>
                            <div className="weddingplan">
                                <img src="https://i.pinimg.com/236x/86/04/60/8604607fbce1a7515824ada352bdbd51.jpg" />
                            </div>
                            <div className="shops">
                                <img src="https://cdn.pixabay.com/photo/2020/11/20/17/15/local-store-5762254_640.png" />
                            </div>
                            <div className="servies">
                                <img src="https://blog.renovationfind.com/wp-content/uploads/2023/12/Handyman-Services-800x450-2.jpg.avif" />
                            </div>
                        </div>
                        <div className="row2">
                            <div className="emergency">
                                <button onClick={linkTo("Components/Home")}>
                                    <img src="https://media.istockphoto.com/id/498429644/vector/empty-red-box-with-in-case-of-emergency.jpg?s=612x612&w=0&k=20&c=MADP-BKUiwEHcm959qrO1et81GU9FwskpAk0ALniXxA="/>
                                </button>
                                <p>Emergency</p>
                            </div>
                            <div className="school-colleges">
                                <img src="https://img.freepik.com/premium-photo/schoolboys-near-school-building-india_78361-13841.jpg" />
                            </div>
                            <div className="culturalprogram">
                                <img src="https://media.istockphoto.com/id/1648171369/photo/yakshagana-artist-showing-happiness.jpg?b=1&s=612x612&w=0&k=20&c=mh9VdX2Kc9mCLWLkCv5k16pgTcaJnsfVwP4QK9nS8Ek=" />
                            </div>
                            <div className="sports-equipment">
                                <img src="https://media.istockphoto.com/id/2002620668/photo/female-runner-in-a-park-stock-photo.jpg?b=1&s=612x612&w=0&k=20&c=fKpqpuW7gGl0lZTyQknr-e9TDL2-M3rfOXsNu9hSowI=" />
                            </div>
                            <div className="more"></div>
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
export default Kumta