import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (endPoint) => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const res = await axios(endPoint)
    setData(res)
  }

  useEffect(() => {
    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return data
}

export default useFetch
