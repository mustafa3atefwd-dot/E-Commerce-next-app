import React from 'react'
import { FidgetSpinner } from 'react-loader-spinner'

export default function loading() {
  return (
    <div className='h-screen flex items-center justify-center bg-emerald-100'>
        <FidgetSpinner
            visible={true}
            height="100"
            width="100"
            ariaLabel="fidget-spinner-loading"
            wrapperStyle={{}}
            wrapperClass="fidget-spinner-wrapper"
            />
    </div>
  )
}
