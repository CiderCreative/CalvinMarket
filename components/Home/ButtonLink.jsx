import React from 'react'
import Link from 'next/link'

const ButtonLink = ({text, link, styles}) => {
  return (
    <button className={`py-2 rounded-xl transition-colors duration-100 text-md ${styles}`}>
      <Link href={link}>
        {text}
      </Link>
    </button>
  )
}

export default ButtonLink