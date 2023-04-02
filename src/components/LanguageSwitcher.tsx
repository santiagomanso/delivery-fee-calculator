import { useEffect, useState, useContext, useRef } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { ContextLanguageData, Country } from '../interfaces/interfaces'
import { NoProps } from '../types/types'
import { countries } from '../data/countries'

//TODO -
const LanguageSwitcher = (props: NoProps) => {
  // to manage open/close of the <ul>
  const [open, setOpen] = useState(false)

  //TODO
  const { text, language, name, flag, changeLanguage } =
    useContext<ContextLanguageData>(LanguageContext)

  return (
    <div
      className='relative  rounded-md cursor-pointer z-10'
      onClick={() => setOpen(!open)}
    >
      <div className='flex items-center justify-start gap-2 hover:bg-white duration-200  rounded-lg p-2 w-32'>
        <img src={flag} alt='english' />
        {/* <span>{name[language]}</span> */}
      </div>
      <ul
        className={`absolute duration-100 ${
          open ? ' scale-100' : 'scale-0'
        } bg-gradient-to-br from-slate-100 to-slate-400/90 capitalize w-40 flex flex-col justify-start items-start gap-4 rounded-md overflow-hidden`}
      >
        {countries.map((country: Country) => {
          return (
            <li
              key={country.id}
              onClick={() => {
                changeLanguage(
                  country.flag,
                  country.language,
                  country.name[language],
                )
              }}
              className='flex items-center justify-start gap-2 hover:bg-white hover:translate-x-1 duration-200 p-3 rounded-lg w-[90%]'
            >
              <img src={country.flag} alt={country.name[language]} />
              <span>{country.name[language]}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LanguageSwitcher
