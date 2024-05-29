/* eslint-disable react/prop-types */
import starImg from '../Components/star.png'
import page from '../Components/document.png'
import card from '../Components/atm-card.png'

export default function ModelCard(props) {
  return (
    <div className='mt-2 flex flex-col'>
        <h1 className='font-extrabold text-[16px] md:text-lg text-green-700  my-3'>{props.title}</h1>
        <p className='text-gray-300 font-semibold md:text-lg md:text-gray-100 text-[11px]'>{props.body}</p>
        <ul className='mt-2 font-light text-xs  flex flex-col gap-3'>
            <li className='flex gap-1 items-center'>
                {/* <img className='w-3 h-3'  src={starImg} alt="" /> */}
                <span>
                {props.f1}
                </span>
            </li>
            <li className='flex items-center gap-1'>
                   {/* <img className='w-3 h-3'  src={page} alt="" /> */}
                   <span>
                 {props.f2}
                   </span>
            </li>
            <li className='flex items-center gap-1'>
                {/* <img className='w-3 h-3' src={card} alt="" /> */}
                <span>
                 {props.f3}
                </span>
            </li>
        </ul>
    </div>
  )
}
