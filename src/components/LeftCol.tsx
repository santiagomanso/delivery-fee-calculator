import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { LanguageContext } from '../context/LanguageContext'
import { fnBoolean, fnStrEventToVoid, NoProps } from '../types/types'

const LeftCol = (props: NoProps) => {
  const {
    value,
    setValue,
    distance,
    setDistance,
    amountItems,
    setAmountItems,
    date,
    setDate,
    time,
    setTime,
    calculate,
    total,
  } = useContext(CartContext)

  const { text } = useContext(LanguageContext)

  useEffect(() => {
    isDisabled()
  }, [value])

  //i switch because i only want one handleChange fn, and i want to check that the e.target.value is > 0 here
  const handleChange: fnStrEventToVoid = (state, e) => {
    switch (state) {
      case 'value': {
        const newValue = Number(e.target.value)
        if (newValue >= 0) {
          setValue(newValue)
        }
        break
      }
      case 'distance': {
        const newDistance = Number(e.target.value)
        if (newDistance >= 0) {
          setDistance(newDistance)
        }
        break
      }
      case 'amount': {
        const newAmountItems = Number(e.target.value)
        if (newAmountItems >= 0) {
          setAmountItems(newAmountItems)
        }
        break
      }
      case 'date': {
        setDate(e.target.value) //TODO user can change date to future and set time to past.
        break
      }
      case 'time': {
        const todaysDate = new Date().getTime() //permanent
        const stateDate = new Date(date).getTime() //Changes with input
        console.log('fecha del estado:', stateDate)
        console.log('fecha de HOY', todaysDate)

        //NOTE only allow user to store past time if the date is in the future, there are no time travelers ;)
        if (stateDate >= todaysDate) {
          setTime(e.target.value)
        } else {
          alert('Back in the future error: Cant go back in time Marty McFly')
        }
        break
      }
      default:
        break
    }
  }

  const isDisabled: fnBoolean = () => {
    if (value > 0 && distance > 0 && amountItems > 0) {
      return false
    } else {
      return true
    }
  }

  //today in order to prevent past days to be selected
  const today = new Date().toISOString().substring(0, 10)

  return (
    <article className='relative grid grid-cols-1 place-content-center items-center space-y-3 z-0'>
      <div className='grid grid-cols-3 text-xl items-center justify-center px-5'>
        <label htmlFor='cartValue'>{text.cartValue}</label>
        <input
          onChange={(e) => handleChange('value', e)}
          type='number'
          value={value}
          className='rounded p-1  focus:outline focus:outline-[1px] focus:outline-indigo-500 w-[130px] md:w-3/4 flex items-center justify-center text-center'
        />
        <span className='pl-5 md:pl-0'>€</span>
      </div>
      <div className='grid grid-cols-3 text-xl items-center justify-center px-5'>
        <label htmlFor='deliveryDistance' className='flex flex-col items-start'>
          <span>{text.distance}</span>
        </label>
        <input
          className='w-[130px] md:w-3/4 cursor-pointer'
          type='range'
          min={0}
          max={3000}
          value={distance}
          onChange={(e) => handleChange('distance', e)}
        />
        <span className='pl-5 md:pl-0'>{distance}m</span>
      </div>
      <div className='grid grid-cols-3 text-xl items-center justify-center px-5'>
        <label htmlFor='cartValue' className='flex flex-col items-start'>
          <span>{text.amountItems}</span>
        </label>
        <input
          onChange={(e) => handleChange('amount', e)}
          type='number'
          value={amountItems}
          className='rounded p-1  focus:outline focus:outline-[1px] focus:outline-indigo-500 w-[130px] md:w-3/4 flex items-center justify-center text-center'
        />
      </div>
      <div className='grid grid-cols-3 text-xl items-center justify-center px-5'>
        <label htmlFor='cartValue'>{text.date}</label>
        <input
          onChange={(e) => handleChange('date', e)}
          type='date'
          value={date}
          min={today}
          name='datePicker'
          id='datePicker'
          className='py-1 rounded w-[130px] md:w-3/4'
        />
      </div>
      <div className='grid grid-cols-3 text-xl items-center justify-center px-5'>
        <label htmlFor='cartValue'>{text.time}</label>
        <input
          onChange={(e) => handleChange('time', e)}
          type='time'
          value={time}
          name=''
          id=''
          className='py-1 rounded w-[130px] md:w-3/4'
        />
      </div>
      <button
        onClick={calculate}
        disabled={isDisabled()}
        className={` place-self-center w-2/4 duration-300 flex items-center gap-2 justify-center  ${
          isDisabled()
            ? 'from-red-500 to-rose-500 font-bold  outline-red-500 opacity-50 cursor-not-allowed active:translate-x-2 active:translate-y-0'
            : 'opacity-100 font-bold  '
        }`}
      >
        <span className='text-xl text-gray-200'>
          {isDisabled() ? text.orderIncomplete : text.buttonCalculate}
        </span>
        <i
          className={` fa-solid ${
            isDisabled() ? 'fa-ban' : 'fa-sack-dollar'
          }  text-gray-200 text-2xl`}
        ></i>
      </button>
      {total !== 0 ? (
        <div className='absolute bottom-3 left-0  lowercase  flex items-center text-xl gap-2 justify-start px-5'>
          <span className='rounded py-1 px-3 outline outline-2 outline-green-600 text-gray-100 font-medium tracking-wide  bg-gradient-to-tl from-teal-700 to-emerald-500 duration-300 '>
            {text.fee} €{total.toLocaleString()}
          </span>
        </div>
      ) : (
        ''
      )}
    </article>
  )
}

export default LeftCol
