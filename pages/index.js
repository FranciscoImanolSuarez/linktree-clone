import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import List from '../components/List/List.js'
import Header from '../components/Header/Header.js'
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
    const { data, error } = useSWR('/api/links', fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className={styles.container}>
    <Header/>
    <ul>
      {data.map((p, i) => (
        <List key={i} links={p} />
      ))}
    </ul>
    </div>
  )
}
