import { useMemo } from 'react'
import { ProductItem } from './productItem'

interface searchResultsProps {
  results: Array<{
    id: number
    price: number
    title: string
  }>
  onAddToWishList: (id: number) => void
}

export function SearchResults({ results, onAddToWishList }: searchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, products) => {
      return total + products.price
    }, 0)
  }, [results])
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => {
        return <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList} />
      })}
    </div>
  )
}
