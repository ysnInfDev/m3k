import React from 'react'
import logo1 from "../assets/logo1.png"
import { SiAdidas, SiBrave, SiAdobeacrobatreader, Si3M, SiAcer, SiAcura, SiAdminer } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaHandshakeSimple } from "react-icons/fa6";

const Services = () => {
    const services = [
        {
            id: 1, title: "Membership", description: "Benefits of Membership: Access to resources, networking opportunities, industry updates.",
            image: <FaPeopleGroup className=' m-auto w-16 h-16 text-brandPrimary' />
        },
        {
            id: 2, title: "National associations", description: "National associations serve a variety of purposes and functions across different industries and sectors",
            image: <BsFillBuildingsFill className='m-auto w-12 h-12 text-brandPrimary' />
        },
        {
            id: 3, title: "Clubs and Groups", description: "These associations provide resources, guidance, and a sense of community for their member clubs or groups.",
            image: <FaHandshakeSimple className='m-auto w-16 h-16 text-brandPrimary' />
        }
    ]
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'> Our clients </h2>
                <p className=' text-neutralGrey'>We have been working with some fortune 100+ clients</p>
            </div>

            {/* company logo */}
            <div className='my-12 mx-24 flex flex-wrap justify-between items-center gap-8'>
                <SiAdidas className='h-16 w-16' />
                <SiBrave className='h-16 w-16' />
                <SiAdobeacrobatreader className='h-16 w-16 -ml-5' />
                <Si3M className='h-16 w-16' />
                <SiAcer className='h-16 w-16' />
                <SiAcura className='h-16 w-16' />
                <SiAdminer className='h-16 w-16' />
            </div>

            {/* services card */}
            <div className='mt-20 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-neutralDGrey font font-semibold mb-3'>
                    Manage our entire community in a single system
                </h2>
                <p className='text-neutralDGrey'> Who is Machari3 Alkair suitable for?</p>
            </div>
            {/* card */}
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80
                    rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-neutralSilver transition-all
                     duration-300 flex items-center justify-center h-full'>
                        <div >
                            <div className='mb-4 h-14 mx-auto rounded-tl-3xl rounded-br-3xl'>{service.image} </div>
                            <h4 className=' text-2xl font-blod text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm text-neutralGrey'>{service.description}</p>
                        </div>

                    </div>)
                }
            </div>

        </div>
    )
}

export default Services
