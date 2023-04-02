import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { LanguageContext } from '../context/LanguageContext'
import { NoProps } from '../types/types'

//TODO
const RightCol = (props: NoProps) => {
  const { text } = useContext(LanguageContext)
  const [active, setActive] = useState(false)
  const {
    randomValue,
    randomDistance,
    randomItems,
    surchargeFee,
    deliveryFee,
    weightFee,
    checkRush,
  } = useContext(CartContext) //TODO
  return (
    <article className='relative group'>
      <button
        className={`absolute duration-700 from-gray-700 to-slate-500 outline-slate-700 opacity-0 group-hover:opacity-40 ${
          active
            ? 'top-3 right-10 p-0 px-[0.2rem]'
            : 'top-[40%] left-[50%] -translate-x-[50%]'
        } z-50`}
        onClick={() => {
          setActive(!active)
        }}
      >
        {active ? (
          <span className='text-gray-200'>X</span>
        ) : (
          <span className='text-gray-200'>
            {text.enable}{' '}
            <i className='fa-solid fa-triangle-exclamation text-xl'></i>
          </span>
        )}
      </button>
      <div
        className={` z-0 flex flex-col justify-between h-full duration-700 bg-slate-400/30 rounded-md p-2 ${
          active
            ? 'blur-none opacity-100 bg-transparent'
            : 'blur-md opacity-40 bg-black/40'
        } `}
      >
        <h2 className='text-center mb-3 uppercase text-gray-600 shadow-md rounded font-semibold text-2xl'>
          {text.playground}
        </h2>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-wrap justify-center items-center h-1/2 space-x-3'>
            <span className='w-50 flex items-center justify-center rounded bg-gray-500/40 text-gray-700 font-medium p-2 shadow-lg'>
              {text.cartValueFee} {surchargeFee}
            </span>
            <span className='w-50 flex items-center justify-center rounded bg-gray-500/40 text-gray-700 font-medium p-2 shadow-lg'>
              {text.distanceFee} {deliveryFee}
            </span>
            <span className='w-50 flex items-center justify-center rounded bg-gray-500/40 text-gray-700 font-medium p-2 shadow-lg'>
              {text.amountItemsFee} {weightFee}
            </span>
            <span
              className={`${
                checkRush() ? 'bg-blue-200 text-sky-500' : ''
              } duration-500 flex items-center justify-center gap-1 rounded bg-gray-500/40 text-gray-700 font-medium p-2 shadow-lg `}
            >
              <span
                className={`${
                  checkRush() ? 'bg-blue-200 text-sky-500' : 'text-gray-700'
                }`}
              >
                {checkRush() ? text.rushHour : text.normalHour}
              </span>
              <i className='fa-solid fa-clock text-lg'></i>
            </span>
          </div>
          <div className='bg-gradient-to-tl from-gray-600 to-slate-700/30 h-[30%] rounded'>
            <div className='flex justify-center gap-5 items-center h-full'>
              <button
                onClick={randomValue}
                className='from-gray-700 to-slate-500 outline-slate-700 text-gray-200'
              >
                {text.randomValue}
              </button>
              <button
                onClick={randomDistance}
                className='from-gray-700 to-slate-500 outline-slate-700 text-gray-200'
              >
                {text.randomDistance}
              </button>
              <button
                onClick={randomItems}
                className='from-gray-700 to-slate-500 outline-slate-700 text-gray-200'
              >
                {text.randomItems}
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default RightCol
