import React from 'react'

const ReviewN = () => {
  return (
    <div className='h-1/4'>
      <h1 className='flex flex-row justify-center mt-32 mb-32 text-4xl'>What people say about our service</h1>
      <div className='mt-23 flex h-96 flex-row justify-center gap-16 ml-52 mr-52 mb-52'>
        <div className='w-9/12 flex flex-col justify-evenly pl-10  rounded-3xl bg-blue-200 Fdiv hover:animate-shahil p-5 item'>
          <img className='w-24 text-center' src={window.location.origin + '/Files/Stars.svg'} alt="ratings" />
          <p className='w-96 font-normal text-lg'>I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. </p>
          <div className='flex flex-row gap-36'>
            <img className='w-14 rounded-full h-14 ' src={window.location.origin + '/Files/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'} alt='shahil' />
            <div>
              <h5 className='text-xl font-medium w-6/6'>Shahil</h5>
              <h6 className='text-sm font-light'>Software Developer</h6>
            </div>
          </div>
        </div>
        <div className='w-9/12 flex flex-col justify-evenly pl-10 rounded-3xl bg-blue-200 p-5'>
          <img className='w-24 text-center' src={window.location.origin + '/Files/Stars.svg'} alt="ratings" />
          <p className='w-96 font-normal text-lg'>“Wow. I just updated my site and it was SO SIMPLE. I am blown away. You guys truly kick ass. Thanks for being so awesome. High fives!”</p>
          <div className='flex flex-row  gap-36'>
            <img className='w-14 rounded-full h-14 ' src={window.location.origin + '/Files/mediamodifier-0UBg7jhsSxs-unsplash.jpg'} alt='shahil' />
            <div>
              <h5 className='text-xl font-medium w-6/6'>Lionel Messi</h5>
              <h6 className='text-sm font-light'>Argentinian Footballer</h6>
            </div>
          </div>
        </div>
        <div className='w-9/12 flex flex-col justify-evenly pl-10 rounded-3xl bg-blue-200 p-5'>
          <img className='w-24 text-center' src={window.location.origin + '/Files/Stars.svg'} alt="ratings" />
          <p className='w-96 font-normal text-lg'>“I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great </p>
          <div className='flex flex-row  gap-36'>
            <img className='w-14 rounded-full h-14 ' src={window.location.origin + '/Files/jurica-koletic-7YVZYZeITc8-unsplash.jpg'} alt='shahil' />
            <div>
              <h5 className='text-xl font-medium w-6/6'>Hisham Kannapi</h5>
              <h6 className='text-sm font-light'>Team lead of kannapi gang</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewN