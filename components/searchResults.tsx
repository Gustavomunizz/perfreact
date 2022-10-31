import { ProductItem } from './productItem'

interface searchResultsProps {
  results: Array<{
    id: number
    price: number
    title: string
  }>
}

export function SearchResults({ results }: searchResultsProps) {
  return (
    <div>
      {results.map(product => {
        return <ProductItem product={product} />
      })}
    </div>
  )
}
