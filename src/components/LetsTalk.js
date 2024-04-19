import React from 'react'
import { Link } from 'react-router-dom'

const LetsTalk = () => {
  return (
    <Link to={'/contact'}>
    <div className="rounded-full bg-black text-white py-2 px-8 text-base drop-shadow-xl hover:bg-white hover:text-black mb-20 md:mb-0">
      Want to work with us? Let&#x27;s Talk
    </div>
  </Link>
  )
}

export default LetsTalk