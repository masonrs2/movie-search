import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Search from '../components/Search'
import Main from '../components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Main />
    </>
  )
}
