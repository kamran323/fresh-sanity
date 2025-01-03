import React,{FC} from 'react'

const Button:FC<{text:string}> = (props) => {
  return (
    <div>
        <button className='px-7 py-4 bg-[#00616c] rounded-full hover:shadow-lg text-white text-lg font-semibold z-0 hover:scale-105 duration-300 capitalize accent-slate-100'>{props.text}</button>
    </div>
  )
}

export default Button