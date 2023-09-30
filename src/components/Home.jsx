import React from 'react'
import { Carousel } from 'flowbite-react'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

const Home = () => {
    return (
        <div className=' bg-neutralSilver' id='home' >
            <div className='px-4 lg:px-14 max-w-screen-exl mx-auto min-h-screen h-screen '>
                <Carousel className=' bg-green-50 w-full mx-auto'>
                    <div className="w-4/6 my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div >
                            <img src={img1} alt='' />
                        </div>

                        {/* hero text */}
                        <div className=' md:w-1/2'>
                            <h1 className='text-4xl font-semibold mb-4 text-neutralDGrey md_w-3/4 leading-snug'>
                                Application: <span className='text-brandPrimary text-3xl' leading-snug>Kafil-alyatim</span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8'>Serving The best interest of poor orphaned Childre</p>
                            <button className='btn-primary'>Download</button>
                        </div>
                    </div>
                    <div className="w-4/6 my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={img2} alt='' />
                        </div>

                        {/* hero text */}
                        <div className=' md:w-1/2'>
                            <h1 className='text-4xl font-semibold mb-4 text-neutralDGrey md_w-3/4 leading-snug'>
                                Application: <span className='text-brandPrimary text-3xl' leading-snug>Kafil-alyatim</span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8'>Serving The best interest of poor orphaned Childre</p>
                            <button className='btn-primary'>Download</button>
                        </div>
                    </div>
                    <div className="w-4/6 my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={img3} alt='' />
                        </div>

                        {/* hero text */}
                        <div className=' md:w-1/2'>
                            <h1 className='text-4xl font-semibold mb-4 text-neutralDGrey md_w-3/4 leading-snug'>
                                Application: <span className='text-brandPrimary text-3xl' leading-snug>Kafil-alyatim</span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8'>Serving The best interest of poor orphaned Childre</p>
                            <button className='btn-primary'>Download</button>
                        </div>
                    </div>


                </Carousel>
            </div>
        </div>
    )
}

export default Home
