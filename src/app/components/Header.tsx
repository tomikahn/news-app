import '../styles/header.css'
import NewsSearch from './NewsSearch'
import Link from 'next/link'

function Header() {
  return (
    <header className='header'>
      <div>
        <Link href="/" style={{textDecoration:"none"}}>
          <h2 className='logo'>News app</h2>
        </Link>
          <NewsSearch/>
      </div>
    </header>
  )
}

export default Header