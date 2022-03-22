import { useState, useEffect } from 'react'
import endPoints from '@services/api'
import axios from 'axios'

const useProducts = () => {
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(0)
  const PRODUCTS_LIMIT = 5
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(endPoints.products.getProducts(PRODUCTS_LIMIT, offset))
      setProducts(res)
    }
    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [offset, PRODUCTS_LIMIT])

  return {
    page,
    products,
    setOffset,
    setPage,
    PRODUCTS_LIMIT,
  }
}

export default useProducts
