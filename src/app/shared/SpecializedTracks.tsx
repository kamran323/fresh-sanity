"use client"
import React, {useState} from 'react'
import Image from 'next/image';
import Wrapper from './Wrapper';
import QuarterBox from './Quarter';


//images
import metaverse0 from "@/app/assets/metaverse0.png"
import metaverse1 from "@/app/assets/metaverse1.png"
import metaverse2 from "@/app/assets/metaverse2.png"
import metaverse3 from "@/app/assets/metaverse3.png"
import metaverse4 from "@/app/assets/metaverse4.png"
import metaverse5 from "@/app/assets/metaverse5.png"

export const data=[
{
    slug:"wmd",
    header:"Web 3.0 (Blockchain) and Metaverse Specialization",
    description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image:metaverse0,
    quarters:[
    {
        header:"Quarter IV",
        description:"W3-351: Developing Smart Contracts and planet-Scale Web 3.0 Dapps",
        number:4

    },
    {
        header:"Quarter V",
        description:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number:5

    }
]
},
{
    slug:"metaverse1",
    header:"Artificial Intelligence (AI) and Deep Learning Specialization",
    description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image:metaverse1,
    quarters:[
    {
        header:"Quarter IV",
        description:"W3-351: Developing Smart Contracts and planet-Scale Web 3.0 Dapps",
        number:4

    },
    {
        header:"Quarter V",
        description:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number:5

    }
]
},
{
    slug:"metaverse2",
    header:"Artificial Intelligence (AI) and Deep Learning Specialization",
    description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image:metaverse2,
    quarters:[
    {
        header:"Quarter IV",
        description:"W3-351: Developing Smart Contracts and planet-Scale Web 3.0 Dapps",
        number:4

    },
    {
        header:"Quarter V",
        description:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number:5

    }
]
},
{
    slug:"metaverse3",
    header:"Artificial Intelligence (AI) and Deep Learning Specialization",
    description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image:metaverse3,
    quarters:[
    {
        header:"Quarter IV",
        description:"W3-351: Developing Smart Contracts and planet-Scale Web 3.0 Dapps",
        number:4

    },
    {
        header:"Quarter V",
        description:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number:5

    }
]
},
{
    slug:"metaverse4",
    header:"Artificial Intelligence (AI) and Deep Learning Specialization",
    description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image:metaverse4,
    quarters:[
    {
        header:"Quarter IV",
        description:"W3-351: Developing Smart Contracts and planet-Scale Web 3.0 Dapps",
        number:4

    },
    {
        header:"Quarter V",
        description:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number:5

    }
]
},
{
    slug:"metaverse5",
    header:"Artificial Intelligence (AI) and Deep Learning Specialization",
    description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image:metaverse5,
    quarters:[
    {
        header:"Quarter IV",
        description:"W3-351: Developing Smart Contracts and planet-Scale Web 3.0 Dapps",
        number:4

    },
    {
        header:"Quarter V",
        description:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number:5

    }
]
},
];

 const SpecializedTracks = () => {

    const[selecteditem,setSelectedItem]=useState("wmd")
    const selectedItemData = data.find((item)=>item.slug === selecteditem)
    // console.log(selectedItemData)


  return (
    <section>
        <Wrapper>
            {/* header */}
           <div>
           <h2 className='text-4xl font-bold'>Specialized Track</h2>
           <p className='mt-3 text-lg text-slate-600 leading-[30px] max max-w-screen-sm'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each</p>

           </div>

           <div className='mt-10 flex flex-col-reverse md:flex-row gap-x-6 pag-y-8'>
            {/* content left */}
            <div className='shadow-xl self-start sticky top-28 basis-8/12 rounded-xl border-slate-200 py-8 px-8'>
            <h4 className='text-teal-700 text-lg font-medium'>Specialized Program</h4>
                <h3 className='text-2xl font-bold'>{selectedItemData?.header} </h3>
                <p className='text-lg text-slate-600 mt-2'>{selectedItemData?.description}
                </p>
            <button className='text-teal-700 text-xl mt-4 underline flex gap-x-2 items-end'>Learn more
            <svg className='mb-1.5' width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" stroke-width="2"/>
</svg>
</button><br /><br /><br /><br /> <br /><br /><br />
        <div className='flex gap-4 flex-col md:flex-row'> {selectedItemData?.quarters.map((quarter, index) => ( <QuarterBox key={index} title={quarter.header} paragraph={quarter.description} num={quarter.number} haveBorder={false} /> ))} </div>
            </div>

            {/* content right */}
            <div className='px-4 py-6 space-y-4 basis-4/12'>
            {
                data.map((item,index)=>(
                    (
                        <>
                        <div onClick={()=>setSelectedItem(item.slug)} key={index} className='flex gap-x-3 items-center groupe cursor-pointer'>
                            <div>
                                <div className='w-20 h-48 object-cover rounded-md '> <Image src={item.image} alt={item.header}  /></div>

                            </div>
                            <div>
                                <h4 className='text-teal-700 font-medium'>Specialized Program</h4>
                                <h3 className='text-16 xs:text-18  font-bold text-black'>{item.header}</h3>
                            </div>


                        </div>
                        <div className='border-b border-slate-200'></div>
                        </>
                    )
                ))}


            </div>

           </div>
            <div className='h-screen'></div>
        </Wrapper>

    </section>
)
}
export default SpecializedTracks;
