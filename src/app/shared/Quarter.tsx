/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'

interface IProps{
 title:string| undefined;
 paragraph:string | undefined;
 num:number | undefined;
 haveBorder?:boolean   
}
const Quarter:FC<IProps> = ({title,paragraph,num,haveBorder='True'}) => {
  return (
    <div>
        <div className={'${haveBorder && "border"} rounded-md basis-4/12 md:w-96 md:h-48 relative px-8 py-12 flex flex-col justify-center'}>
            <h4 className='font-bold text-lg'>{title}</h4>
            <p className='mt-2 text-slate-600'>{paragraph}</p>
            <span className='abslolute -top-10 text-[170px] font-bold -z-10 opacity-10'>{num}</span>

        </div>
    </div>
  )
}

export default Quarter