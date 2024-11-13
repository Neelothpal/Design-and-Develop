import React from 'react'
import Profile from '../assets/profile.png'

const ProfileCard = () => {
    return (
        <div className='bg-[#1E1E2E] text-[#E0E0E0] w-80 h-[400px] py-12 flex flex-col justify-center items-center rounded-xl font-[inter]'>
            <img src={Profile} alt="profile image" className='w-20 h-20 rounded-full border-2 border-[#454E61]' />
            <h1 className='text-3xl font-semibold mt-3'>Aron Martin</h1>
            <h2 className='text-lg mt-1 opacity-80'>Product Designer</h2>
            <h3 className='text-sm mt-0  opacity-65'>San Francisco, CA</h3>
            <div className='w-full flex justify-center gap-6 items-center mt-4'>
                <a href="">
                    <img src="./socials/linkedin.svg" alt="" />
                </a>
                <a href="">
                    <img src="./socials/dribbble.svg" alt="" />
                </a>
                <a href="">
                    <img src="./socials/X(light).svg" alt="" />
                </a>
                <a href="">
                    <img src="./socials/discord.svg" alt="" />
                </a>
            </div>
            <h2 className='text-sm mt-3 opacity-65'>1.2k followers</h2>
            <button className='bg-[#FF6B6B] text-base w-32 py-[10px] px-[30px] rounded-lg text-white mt-4'>Follow</button>
        </div>
    )
}

export default ProfileCard