import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <img src={assets.logo} alt="" width={150} />
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden mt-2'>Copyright @CreativeSolutions.dev | All right reserved.</p>
      <div className='flex gap-2.5'>
        <Link to="https://www.facebook.com/nurieicloud">
          <img src={assets.facebook_icon} alt="" width={35} />
        </Link>
        <Link to="https://x.com/?lang=en&mx=2">
          <img src={assets.twitter_icon} alt="" width={35} />
        </Link>
        <Link to="https://www.instagram.com/nuriell7/">
          <img src={assets.instagram_icon} alt="" width={35} />
        </Link>
      </div>
    </div>
  )
}

export default Footer