import React from 'react'
import {FiTwitter} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {TbBrandDiscord} from "react-icons/tb"
import "./Navbar.css"
import {AiOutlineMail} from  "react-icons/ai"
import { Link } from 'react-router-dom'
import {GoThreeBars} from "react-icons/go"
import { useState } from 'react'
const Navbar = () => {


const [expand,setExpand] = useState(false);
  return (
    <div className=' flex flex-col  relative  z-[999]  w-full h-auto  justify-center items-center  text-white'>

        <nav className=' flex flex-row  w-full h-[99px] mt-6  md:container md:mx-auto  bg-dark_1  justify-between items-center'>
            <div className='flex flex-wrap md:w-1/5 justify-end items-end    '>
                <img src={require("../../assets/images/logo-1.png")} alt='logo' className='  relative xxs:-left-12 sm:left-0 top-1  bg-cover cursor-pointer  w-[200px]  h-[85px] z-40'/>
             
            </div>
            <div className={`${expand?"navbar  ":"flex-row   w-4/5   h-auto  justify-between mx-16   items-center xxs:hidden xl:flex"} `}>
       
                    <ul className={`${expand?"flex flex-col items-center":" flex flex-row"}   font-custome font-bold xl:text-sm 2xl:text-base pl-4 ` }>
                        <li className=' cursor-pointer uppercase px-5 py-2 nav-item  relative z-40'><Link to="/" onClick={()=>{setExpand(false)}} >Home</Link></li>
                        <li className=' cursor-pointer uppercase px-5 py-2 nav-item  relative z-40'><Link to="/about"  onClick={()=>{setExpand(false)}}>About us</Link></li>
                        <li className=' cursor-pointer uppercase px-5 py-2 nav-item relative z-40'><Link to="/aboutNFT"  onClick={()=>{setExpand(false)}}>About the NFT</Link></li>
                        <li className=' cursor-pointer uppercase px-5 py-2 nav-item relative z-40'><Link to="/roadmap" onClick={()=>{setExpand(false)}} >Roadmap</Link></li>
                        <li className=' cursor-pointer uppercase px-5 py-2 nav-item relative z-40'><Link to="/mint" onClick={()=>{setExpand(false)}} >Mint</Link></li>
                        <li className=' cursor-pointer uppercase px-5 py-2 nav-item relative z-40'><Link to="/ask"  onClick={()=>{setExpand(false)}}>FAQ</Link></li>
                        <li className=' cursor-pointer uppercase px-5 py-2 nav-item relative z-40'><Link to="/team" onClick={()=>{setExpand(false)}} >Team</Link></li>
                    </ul>
                    <div className=' flex-row flex flex-wrap justify-center items-center text-xl'>
                       <a href='https://twitter.com/Resilient_her?s=20&t=BuBvFVvzcEoadls1LcW9Pw'target="_blank"><FiTwitter  onClick={()=>{setExpand(false)}} className=' mx-2 cursor-pointer nav-icon z-40'/></a>
                       <a href='https://www.instagram.com/resilient.her.nft/?igshid=YmMyMTA2M2Y%3D'target="_blank"> <AiOutlineInstagram  onClick={()=>{setExpand(false)}} className=' mx-2 cursor-pointer nav-icon z-40'/></a>
                       <a href='https://instagram.com/resilient.her.nft?igshid=YmMyMTA2M2Y='target="_blank"><TbBrandDiscord  onClick={()=>{setExpand(false)}} className=' mx-2 cursor-pointer nav-icon z-40'/></a>
                       <a href = "mailto:resilient.her.nft@gmail.com"><AiOutlineMail className=' mx-2 cursor-pointer nav-icon z-40'/></a>
                    </div>
                
                      
           
            </div>
            <div className='flex flex-row   w-auto h-auto cursor-pointer text-3xl  justify-between xxs:mx-4 sm:mx-16   items-center xxs:flex xl:hidden' >
                          <GoThreeBars onClick={()=>{setExpand(!expand)}}/>
            </div>
        
        </nav>
    </div>
  )
}

export default Navbar