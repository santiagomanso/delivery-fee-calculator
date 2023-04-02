import { useState, createContext } from 'react'
import { diccionary } from '../data/diccionary'
import {
  fnStrStrStrToVoid,
  LanguageContextValueObj,
  WithProps,
} from '../types/types'

export const LanguageContext = createContext<any | null>(null)

export const LanguageProvider = ({ children }: WithProps) => {
  const [language, setLanguage] = useState<string>('en')
  const [text, setText] = useState(diccionary.en)

  //flag
  const [flag, setFlag] = useState(
    'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png',
  )

  //country name
  const [name, setName] = useState<string>('United States')

  const changeLanguage: fnStrStrStrToVoid = (flag, language, name) => {
    setFlag(flag)
    setLanguage(language)
    setName(name)
    setText(diccionary[language])
  }

  const data: LanguageContextValueObj = {
    text,
    language,
    flag,
    name,
    changeLanguage,
  }
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  )
}
