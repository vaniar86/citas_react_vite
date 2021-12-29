import React from 'react'
import { Children } from 'react/cjs/react.production.min'

const Error = ({children}) => {
    return (
        <div className='bg-red-800 text-white text-center p-3 font-bold mb-3 '>
            {children}
       </div>
    )
}

export default Error
