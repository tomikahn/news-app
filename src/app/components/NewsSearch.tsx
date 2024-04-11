"use client"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

function NewsSearch() {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!searchValue) return;
    router.push(`/search?search=${searchValue}`)
    setSearchValue('')
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <div className="container">
        <input type="text" id="search-input" value={searchValue} className='search-input' placeholder='Search...' onChange={(e) => setSearchValue(e.target.value)}/>
        <button type='submit' className="search-btn">
            <div className="pajamas--search-sm"></div>
        </button>
        </div>
    </form>
  )
}

export default NewsSearch