import axios from 'axios'
import endPoints from '@services/api'

export const ERROR = 'Error'
export const PRODUCT_CREATED = 'Product_Created'
export const PRODUCT_ERRASED = 'Porduct_Errased'
export const SUCCESS = 'Success'

export const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  }
  const response = await axios.post(endPoints.products.createProduct, body, config)
  return response.data
}

export const getProducts = async (PRODUCTS_LIMIT, offset) => {
  const response = await axios.get(endPoints.products.getProducts(PRODUCTS_LIMIT, offset))
  return response
}

export const getAllProducts = async () => {
  const response = await axios.get(endPoints.products.getAllProducts)
  return response
}

export const deleteProduct = async (id) => {
  const response = await axios.delete(endPoints.products.deleteProduct(id))
  return response
}
