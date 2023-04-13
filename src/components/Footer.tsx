import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

//TODO
const Footer = () => {
  const { text } = useContext(LanguageContext)
  return (
    <div className='bg-gray-100 py-6 flex justify-center items-center gap-2'>
      <a
        href='https://github.com/santiagomanso'
        target='_blank'
        rel='noreferrer'
        className='text-gray-600 md:text-xl font-medium font-mono flex items-center gap-2'
      >
        <span className='duration-200'>{text.developBy}</span>
        <span>Santiago Manso Castro</span>
      </a>
      <a
        href='https://www.linkedin.com/in/santimanso/'
        target='_blank'
        rel='noreferrer'
      >
        <i className='fa-brands fa-linkedin text-2xl text-sky-600 duration-300 hover:-translate-y-1'></i>
      </a>
      <a
        href='https://github.com/santiagomanso'
        target='_blank'
        rel='noreferrer'
      >
        <i className='fa-brands fa-square-github text-2xl text-sky-600 duration-300 hover:-translate-y-1'></i>
      </a>
    </div>
  )
}

export default Footer
