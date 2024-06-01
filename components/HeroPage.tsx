import Image from 'next/image'
import React from 'react'

export default function HeroPage() {
  return (
    <section className='h-[35rem] my-10'>
      <div className="flex h-full">
        <div className="flex-1  flex justify-start items-start">
          <div className='flex h-full  flex-col justify-center'>
            <div className='bg-primary-blue/20 rounded-full px-2 py-1 w-36 text-center'>
              <p className='text-primary-blue text-sm'>Explore the world</p>
            </div>
            <div className='capitalize my-3'>
              <p className="text-5xl font-extrabold">
                Discover and enjoy
              </p>
              <p className='text-5xl font-bold'>
                your new place and
                <br />
                <span className='text-text-highlight'>
                  Experience
                </span>
              </p>
            </div>
            <div className='text-[12px] text-slate-500 max-w-[420px] pt-10'>
              We always make our customer happy by providing as many chooses as Possible customer happy by providing.
            </div>
            {/* <div>Search area</div> */}
          </div>

        </div>
        <div className="flex-1 flex justify-end items-center relative">
          <div className='image  grid grid-cols-2 gap-4'>
            <div className="flex justify-end">
              <Image src={"/assets/photo1.png"} alt="photo" width={180} height={200} />
            </div>
            <div className='flex justify-end'>
              <Image src={"/assets/photo2.png"} alt="photo" width={350} height={200} />
            </div>
            <div>
              <Image src={"/assets/photo3.png"} alt="photo" width={300} height={100} />
            </div>
            <div>
              <Image src={"/assets/photo4.png"} alt="photo" width={200} height={200} />
            </div>
          </div>
          <div className='absolute top-1/4 left-0 w-36 h-24  rounded-lg backdrop-blur-sm bg-white/50 text-center p-2 gap-2 shadow-xl'>
            <p className="font-bold text-[12px] pt-1">1,000+ Destination</p>
            <p className='text-[12px]'>More Than 1000 Travelers Use This Platform</p>
          </div>
          <div className='absolute top-8 right-[30%] w-16 h-14 rounded-lg bg-primary-blue text-white text-center p-2'>
            <p className='text-[16px] font-bold '>100%</p>
            <p className='text-[10px]'>Verified</p>
          </div>
        </div>
      </div>
    </section>
  )
}
