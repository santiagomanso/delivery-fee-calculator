import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

//TODO
const Navbar = () => {
  //TODO
  const { text, language } = useContext(LanguageContext)
  return (
    <nav className='bg-gray-100 shadow py-6 flex items-center gap-5 px-5 capitalize text-xl'>
      <span
        className='w-[200px]  font-medium
      '
      >
        {text.checkOut}
      </span>
      <LanguageSwitcher />
    </nav>
  )
}

export default Navbar
