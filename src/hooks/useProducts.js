import { useState, useEffect } from 'react'
import endPoints from '@services/api'
import axios from 'axios'

const useProducts = () => {
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(0)
  const PRODUCTS_LIMIT = 5
  const [products, setProducts] = useState([])
  const [dataChart, setDataChart] = useState([])

  useEffect(() => {
    const categoryNames = products.data?.map((product) => product.category)
    const categoryCount = categoryNames?.map((category) => category.name)

    const countOccurrences = (arr) => arr?.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {})
    setDataChart(countOccurrences(categoryCount))
  }, [products])

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
    dataChart,
  }
}

export default useProducts
