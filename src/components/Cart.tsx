import { NoProps } from '../types/types'
import LeftCol from './LeftCol'
import RightCol from './RightCol'

const Cart = (props: NoProps) => {
  return (
    <section className='grid grid-cols-2 h-full'>
      <LeftCol />

      <RightCol />
    </section>
  )
}
export default Cart
