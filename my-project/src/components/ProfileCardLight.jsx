import React from 'react'
import Profile from '../assets/profile.png'

const ProfileCard = () => {
    return (
        <div className='bg-[#F0EBE3] w-80 h-[400px] py-12 flex flex-col justify-center items-center rounded-xl font-[inter]'>
            <img src={Profile} alt="profile image" className='w-20 h-20 rounded-full border-2 border-[#F9F6F2]' />
            <h1 className='text-3xl font-semibold text-[#3e3e3e] mt-3'>Aron Martin</h1>
            <h2 className='text-lg mt-1 text-[#3E3E3E] opacity-80'>Product Designer</h2>
            <h3 className='text-sm mt-0 text-[#3E3E3E] opacity-65'>San Francisco, CA</h3>
            <div className='w-full flex justify-center gap-6 items-center mt-4'>
                <a href="">
                    <img src="./socials/linkedin.svg" alt="" />
                </a>
                <a href="">
                    <img src="./socials/dribbble.svg" alt="" />
                </a>
                <a href="">
                    <img src="./socials/X(black).svg" alt="" />
                </a>
                <a href="">
                    <img src="./socials/discord.svg" alt="" />
                </a>
            </div>
            <h2 className='text-sm mt-3 text-[#3E3E3E] opacity-65'>1.2k followers</h2>
            <button className='bg-[#FF6B6B] text-base w-32 py-[10px] px-[30px] rounded-lg text-white mt-4'>Follow</button>
        </div>
    )
}

export default ProfileCard