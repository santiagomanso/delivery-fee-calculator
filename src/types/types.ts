export type WithProps = React.PropsWithChildren<{}>
export type NoProps = {}

export type CartContextValueObj = {
  value: number
  date: string
  time: string
  amountItems: number
  distance: number
  surchargeFee: number
  deliveryFee: number
  weightFee: number
  total: number
  setWeightFee: fnNumberToVoid
  setValue: fnNumberToVoid

  setDate: fnString | any
  setTime: fnString | any

  setDistance: fnNumberToVoid
  setAmountItems: fnNumberToVoid
  randomValue: fnNumberToVoid
  randomDistance: fnNumberToVoid
  randomItems: fnNumberToVoid
  calculate: fnNumberToVoid
  resetTotal: fnNumberToVoid
  checkRush: fnNumberToVoid
}

export type LanguageContextValueObj = {
  text: object
  language: string
  flag: string
  name: string
  changeLanguage: fnStrStrStrToVoid
}

export type fnNumberToVoid = (arg: number) => void

export type fnVoid = () => void
export type fnBoolean = () => boolean
export type fnString = () => string

export type fnStrStrStrToVoid = (
  arg1: string,
  arg2: string,
  arg3: string,
) => void

export type fnStrEventToVoid = (
  arg1: string,
  arg2: React.ChangeEvent<HTMLInputElement>,
) => void
