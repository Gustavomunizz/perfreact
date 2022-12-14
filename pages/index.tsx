import { FormEvent, useCallback, useState } from 'react'
import { SearchResults } from '../components/searchResults'
import styles from '../styles/home.module.css'

export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

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

  const addToWishList = useCallback(async (id: number) => {
    console.log(id)
  }, [])

  return (
    <>
      <h1 className={styles.title}>Search</h1>

      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>

      <SearchResults results={results} onAddToWishList={addToWishList} />
    </>
  )
}
