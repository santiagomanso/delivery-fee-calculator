import { useState, createContext, useEffect } from 'react'
import {
  CartContextValueObj,
  fnBoolean,
  fnNumberToVoid,
  fnVoid,
  WithProps,
} from '../types/types'

export const CartContext = createContext<any>(null) //REVIEW any

export const CartProvider = ({ children }: WithProps) => {
  const initialDate = (): string => {
    const curr = new Date()
    curr.setDate(curr.getDate())
    const dateToday = curr.toISOString().substring(0, 10)
    return dateToday
  }

  const initialTime = (): string => {
    const date = new Date()
    let hours: number | string = date.getHours()
    let minutes: number | string = date.getMinutes()
    if (hours < 10) {
      hours = `0${hours}`
    }
    if (minutes < 10) {
      minutes = `0${minutes}`
    }
    return `${hours}:${minutes}`
  }

  const [value, setValue] = useState<number>(0)
  const [distance, setDistance] = useState<number>(0)
  const [amountItems, setAmountItems] = useState<number>(0)
  const [date, setDate] = useState<string>(initialDate())
  const [time, setTime] = useState<string>(initialTime())
  const [surchargeFee, setSurchargeFee] = useState<number>(0)
  const [deliveryFee, setDeliveryFee] = useState<number>(0)
  const [weightFee, setWeightFee] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    addRecharge()
    addDeliveryFee(2)
    addWeightFee()
    checkRush()
  }, [value, distance, amountItems, date, time])

  //  Functions that calculates fees based on user inputs (value, distance, amount of items, date/time)

  //NOTE - calculate surcharge based on value
  const addRecharge: fnVoid = () => {
    if (value === 0 || value >= 10) {
      setSurchargeFee(0)
    } else {
      if (value >= 100) {
        setDeliveryFee(0)
      } else {
        setSurchargeFee(10 - value)
      }
    }
  }

  //NOTE  calculate fee based on amount of items
  const addWeightFee: fnVoid = () => {
    const baseSurcharge = 0.5
    const extraBulk = 1.2
    if (amountItems > 4 && amountItems < 12) {
      setWeightFee((amountItems - 4) * baseSurcharge)
    } else {
      if (amountItems > 11) {
        setWeightFee((amountItems - 4) * baseSurcharge + extraBulk)
      } else setWeightFee(0)
    }
  }

  //NOTE calculate fee based on distance (range input)
  const addDeliveryFee: fnNumberToVoid = (distanceFee) => {
    if (distance <= 1000 && value < 100) {
      setDeliveryFee(2)
    } else {
      if (value < 100) {
        let fee = Math.ceil((distance - 1000) / 500) + distanceFee
        setDeliveryFee(fee)
      } else {
        setDeliveryFee(0)
      }
    }
  }

  //NOTE validate if the date/time entered corresponds to rush time!
  const checkRush: fnBoolean = () => {
    // if i try to use getUTC methods without new Date() error
    const deliveryDateTime = new Date(`${date}T${time}`)
    const day = deliveryDateTime.getDay()
    const hour = deliveryDateTime.getHours()
    return day === 5 && hour > 15 && hour <= 19
  }

  //NOTE - BUTTON calculate delivery fee
  const calculate: fnVoid = () => {
    let fee = surchargeFee + deliveryFee + weightFee
    if (checkRush()) fee = fee * 1.2
    if (fee > 14) fee = 15

    setTotal(fee)
  }

  // feature functions are meant to randomize and test random scenarios, they all call reset in order
  //to get the user to trigger the calculate button and not loose track of the delivery price.

  //NOTE reset state that holds the total amount of delivery fee
  const resetTotal: fnVoid = () => {
    setTotal(0)
  }

  //NOTE random cart value from 0-12 euros
  const randomValue: fnVoid = () => {
    resetTotal()
    setValue(Math.floor(Math.random() * 12))
  }

  //NOTE random distance from 0-3000 mts
  const randomDistance: fnVoid = () => {
    resetTotal()
    setDistance(Math.floor(Math.random() * 3000))
  }

  //NOTE random amount of items 0-13
  const randomItems: fnVoid = () => {
    resetTotal()
    setAmountItems(Math.floor(Math.random() * 13))
  }

  const data: CartContextValueObj = {
    value,
    date,
    time,
    amountItems,
    distance,
    surchargeFee,
    deliveryFee,
    weightFee,
    total,
    setWeightFee,
    setValue,
    setTime,
    setDistance,
    setAmountItems,
    setDate,
    randomValue,
    randomDistance,
    randomItems,
    calculate,
    resetTotal,
    checkRush,
  }
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}
