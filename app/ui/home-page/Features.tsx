import Link from 'next/link'
import React from 'react'
import features from '@/app/lib/features'
import Feature from './Feature'


const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 my-4 mx-4 md:my-6  md:mx-6 lg:mx-16 " >
      {features.map((feature) => {
        return (
            <div className="bg-cyan-50 opacity-80 p-4 rounded-lg shadow-md" key={feature.title}>
              <Feature {...feature} />
            </div>
        
        )
      })
      }
        

    </div>
  )
}

export default Features