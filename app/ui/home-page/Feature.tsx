import Link from 'next/link';
import React from 'react'

const Feature = ({title, description, linkdesc, url}) => {
  return (
    <div>
        <h5 className="text-xl text-black font-semibold mb-2">{title}</h5>
              <p className="text-gray-600 mb-4">{description}</p>
              <Link href={url} className="text-cyan-500 hover:underline">{linkdesc}</Link>
    </div>
  )
}

export default Feature;