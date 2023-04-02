import { WithProps } from '../types/types'

const Container = ({ children }: WithProps) => {
  return (
    <div className='bg-gradient-to-br from-gray-700  to-sky-400 h-screen flex justify-center items-center'>
      <main
        className='max-w-7xl mx-auto h-[62%] w-4/6 bg-slate-300 rounded-md shadow-2xl 
        outline-2 outline outline-slate-500 flex flex-col justify-between overflow-hidden'
      >
        {children}
      </main>
    </div>
  )
}

export default Container
