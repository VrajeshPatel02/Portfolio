import Image from 'next/image'
import CircularText from '@/components/CircularText'

const About = () => {
  return (
    <div className="page-padding px-4 md:px-0">
      <div className='pt-20 md:pt-32 flex flex-col md:flex-row justify-between gap-10 md:gap-20 items-center'>
        <div className='relative'>
          <div className='image-wrapper'>
            <Image
              src="/vrajesh.jpg"
              alt="About"
              fill
              className='object-cover object-top'
            />
          </div>
          {/* Circular Text Component */}
          <div className="absolute -bottom-6 md:bottom-2 -right-6 md:right-12 z-30 scale-75 md:scale-110">
            <CircularText />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-sans-bold text-4xl md:text-6xl leading-[1.1] max-w-2xl">
            A <span className="text-highlight">creative developer</span> & digital designer
          </h1>
          <p className="w-full text-pretty text-gray-700 dark:text-gray-500 mt-6 text-base md:text-lg max-w-xl">
            I collaborate with brands globally to design impactful, mission-focused websites that drive results and achieve business goals.
          </p>
          <button className="mt-8 px-8 py-3 rounded-full border border-gray-300 font-medium hover:bg-black hover:text-white transition-all duration-300">
            My Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default About