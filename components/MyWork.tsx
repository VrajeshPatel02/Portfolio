import React from 'react'
import Heading from '@/components/ui/Heading'
import ProjectGrid from './ProductGrid'

const MyWork = () => {
  return (
    <>
    <section>
        <Heading badge='my work' heading='Selected Projects' subHeading={`Here's a curated selection showcasing my expertise and the achieved results.`} />
        <ProjectGrid />
    </section>
    </>
  )
}

export default MyWork;