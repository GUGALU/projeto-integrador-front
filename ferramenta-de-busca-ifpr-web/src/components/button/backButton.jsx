import React from 'react'
// import { FaArrowLeft } from "react-icons/fa6";
import { Button } from '@mui/base/Button';


const BackButton = () => {
  return (
    <div className='flex border bg-blue-400 border-white text-white gap-2'>
        {/* <FaArrowLeft /> */}
        <h1>Voltar</h1>
        <Button />
    </div>
  )
}

export {BackButton}