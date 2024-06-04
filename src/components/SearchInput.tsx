"use client"

import { useState, FormEvent} from 'react'
import { BiSearch } from 'react-icons/bi'
import { useRouter } from 'next/navigation'

const SearchInput = () => {
  const [keywords,setKeywords] = useState<string>("")
  const router = useRouter()

  const searchKeywords = (e:FormEvent) => {
    e.preventDefault()
    if(!keywords) {
      router.push('/')
    }
    else {
      router.push(`/search?q=${keywords}`)
    }
  }

  return (
    <form className='flex space-x-2 items-center' onSubmit={searchKeywords}>
      <input type="text" placeholder='Search Any News e.g. sports, lifestyle' className='w-100% px-2 py-1 outline-none border border-[#0e0e0e] text-sm rounded-md' onChange={(e) => setKeywords(e.target.value)} />
      <button type="submit">
        <BiSearch className="text-black text-xl hover:text-[#23a8d4]" />
      </button>
    </form>
  )
}

export default SearchInput