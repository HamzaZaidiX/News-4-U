import Link from 'next/link'
import {FC} from 'react'

const Navbar:FC = () => {
  return (
    <nav className=''>
      <ul className='py-2 border-t border-gray-300 sticky'>
        <li className='space-x-6 text-xs text-center'>
          <Link aria-current className='text-black hover:text-[#23a8d4] hover:underline' href="/">Home</Link>
          <Link className='text-black hover:text-[#23a8d4] hover:underline' href="/world">World</Link>
          <Link className='text-black hover:text-[#23a8d4] hover:underline' href="/business">Business</Link>
          <Link className='text-black hover:text-[#23a8d4] hover:underline' href="/science">Science</Link>
          <Link className='text-black hover:text-[#23a8d4] hover:underline' href="/health">Health</Link>
          <Link className='text-black hover:text-[#23a8d4] hover:underline' href="/sports">Sports</Link>
          <Link className='text-black hover:text-[#23a8d4] hover:underline' href="/">Books</Link>
          <Link className='text-black hover:text-[#23a8d4] hover:underline' href="/">Lifestyle</Link>
          <Link className='text-black hover:text-[#23a8d4] hover:underline' href="/">Food</Link>
          <Link className='text-black hover:text-[#23a8d4] hover:underline' href="/">Travel</Link>
          <Link className='text-black hover:text-[#23a8d4] hover:underline' href="/">Bitcoin</Link>
          <Link className='text-black hover:text-[#23a8d4] hover:underline' href="/entertainment">Entertainment</Link>
          <Link className='text-black hover:text-[#23a8d4] hover:underline' href="/movies">Movies</Link>
          <Link className='text-black hover:text-[#23a8d4] hover:underline' href="/Pakistan">Pakistan</Link>
        </li>
        
      </ul>
      <div className='w-full h-[1px] bg-black mb-1' />
      <div className='w-full h-[1px] bg-black' />
    </nav>
  )
}

export default Navbar