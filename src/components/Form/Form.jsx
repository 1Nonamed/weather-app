import { useState } from 'react'

function SearchIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className='hover:stroke-2 w-5 h-5'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
      />
    </svg>
  )
}

export function Form({ searchCity }) {
  const [inputValue, setInputValue] = useState('')

  const handleChange = ({ target }) => {
    setInputValue(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValueTrim = inputValue.trim()
    if (inputValueTrim <= 2) return
    searchCity(inputValueTrim)
    setInputValue('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center h-[60px] px-4 py-3'
    >
      <div className='flex w-full'>
        <input
          type='text'
          name='city'
          id='city'
          placeholder='London'
          onChange={handleChange}
          value={inputValue}
          className='flex-1 pl-2 py-1 text-sm bg-slate-200 border border-transparent rounded-tl rounded-bl focus:outline-none focus:border-teal-400'
        />
        <button
          type='submit'
          title='submit'
          className='bg-slate-700 p-1 border border-transparent rounded-tr rounded-br cursor-pointer focus:outline-none focus:border-teal-400'
        >
          <SearchIcon />
        </button>
      </div>
    </form>
  )
}
