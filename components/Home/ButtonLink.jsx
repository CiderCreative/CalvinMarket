import React from 'react'
import Link from 'next/link'

const ButtonLink = ({text, link, styles}) => {
  return (
    <button className={`py-2 rounded-md hover:scale-[103%] transition-all duration-100 text-sm ${styles}`}>
      <Link href={link}>
        {text}
      </Link>
    </button>
  )
}

export default ButtonLink