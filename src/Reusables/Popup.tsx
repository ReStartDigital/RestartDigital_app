import React from 'react'
import Community from './Community';

export type Prop = {
    initial: any
}
const Popup: React.FunctionComponent<Prop> = ({ initial }) => {
  return (
    <section className='fixed inset-0 w-screen h-screen flex justify-center items-center bg-gray-200 bg-opacity-90 z-50'>
        <div className='relative flex justify-center items-center h-[100%]  z-50 w-full'>
            <Community initial={initial}/>
        </div>
    </section>
  )
}

export default Popup;
