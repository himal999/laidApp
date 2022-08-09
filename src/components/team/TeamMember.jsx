import React from 'react'
import {FiTwitter} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"

const TeamMember = (props) => {
  return (
    <div className=' flex flex-col w-[210px] h-[330px]   relative'>
        <div className=' flex w-full flex-col h-auto container mx-auto'>
            <div className=' flex flex-col w-[210px] h-[190px]  bg-blue-700 border-[2px] border-white relative'>
                <img src={require("../../assets/images/slide.webp")} alt='team' className=' -top-10  absolute bg-cover flex  w-full h-[225px] z-40'/>
            </div>
            <div className=' flex flex-col w-full h-auto justify-center items-center mt-1'>
                <h3 className=' text-white text-2xl  font-bold  font-sourceCode z-40'>{props.name}</h3>
                <p className=' text-white text-center mt-1 z-40'>{props.position}</p>
                <div className=' flex flex-row  mt-1 text-white text-xl z-40'>
                    <FiTwitter className=' mx-4'/>
                    <AiOutlineInstagram/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamMember