import Link from 'next/link'
import React from 'react'
import features from '@/app/lib/features'


const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 mx-4" >
      {features.map((feature) => {
        return (
            <div className="bg-cyan-50 opacity-80 p-4 rounded-lg shadow-md" key={feature.title}>
              <h5 className="text-xl text-black font-semibold mb-2">{feature.title}</h5>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link href={feature.url} className="text-blue-500 hover:underline">{feature.linkdesc}</Link>
            </div>
        
        )
      })
      }
        

    </div>
  )
}

export default Features