import { FormEvent, useState } from 'react'
import { SearchResults } from '../components/searchResults'
import styles from '../styles/home.module.css'

type ResultsProps = {
  id: number
  price: number
  title: string
}

export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<ResultsProps[]>([])

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if (!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    setResults(data)
    console.log(results)
  }

  return (
    <>
      <h1 className={styles.title}>Search</h1>

      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>

      <SearchResults key={results.id} results={results} />
    </>
  )
}
