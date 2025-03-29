import React from 'react'

const Header = () => {
  return (
    <header className='flex lg:items-end items-start justify-between lg:flex-row flex-col gap-5 sm:mb-5 mb-2'>
        <div>
            <h2 className='font-semibold text-2xl'>Olá Igor 👋</h2>
            <p className='text-slate-800 text-base'>Fique por dentro das próximas atividades do capítulo!</p>
        </div>
    </header>
  )
}

export default Header
