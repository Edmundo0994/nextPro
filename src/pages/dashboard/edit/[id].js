import FormProduct from '@components/FormProduct'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getProductById } from '@services/api/products'

export default function Edit() {
  const [product, setProduct] = useState({})
  const [notFound, setNotFound] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const { id } = router.query
    const fetchData = async () => {
      try {
        const res = await getProductById(id)
        setProduct(res.data)
      } catch (err) {
        err.response.status === 404 && setNotFound(true)
      }
    }
    router.isReady && fetchData()
  }, [router?.isReady, router])
  return notFound ? <div>No se encontró el producto</div> : <FormProduct product={product} />
}
