/* eslint-disable react/prop-types */
export default function Footer(props) {
  return (
    <div className='flex flex-col justify-center text-[12px] mt-8'>
      <img className='w-4 h-4 mb-3' src={props.img} alt="" />
      <p className=''>{props.head}</p>
      <span className='font-extralight'>
        {props.body}
      </span>
    </div>
  )
}
