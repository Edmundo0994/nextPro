import { useState, useEffect } from 'react'
import Modal from '@common/Modal'
import FormProduct from '@components/FormProduct'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/solid'
import useModalInfo from '@hooks/useModalInfo'
import { getAllProducts } from '@services/api/products'
import { PRODUCT_ERRASED, deleteProduct, ERROR, SUCCESS } from '@services/api/products'
import ModalInfo from '@common/ModalInfo'
import useAlert from '@hooks/useAlert'
import Alert from '@common/Alert'

export default function Products() {
  const [openForm, setOpenForm] = useState(false)
  const [products, setProducts] = useState([])
  const { setModalInfo, toggleModalInfo, modalInfo } = useModalInfo()
  const { alert, setAlert, toggleAlert } = useAlert()
  const [productToDelete, setProductToDelete] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllProducts()
      setProducts(res.data)
    }
    fetchData()
  }, [modalInfo, alert])

  const handleDeleteToogle = (id) => {
    setModalInfo({
      active: true,
      type: PRODUCT_ERRASED,
      message: "¿Are you sure that you want to delete this item? Once deleted you can't recover it",
    })
    setProductToDelete(id)
  }

  const handleDelete = async (id) => {
    try {
      const res = await deleteProduct(id)
      res.data.rta &&
        setModalInfo({
          active: true,
          type: SUCCESS,
          message: 'Item was deleted successfully',
        })
    } catch (err) {
      setModalInfo({
        active: true,
        type: ERROR,
        message: 'There was an error trying to delete the item',
      })
    }
  }

  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert} />
      <div className="lg:flex lg:items-center lg:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">List of products</h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setOpenForm(true)}
            >
              <PlusCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              Add product
            </button>
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Id
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products?.map((product) => (
                    <tr key={`Product-item-${product.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={product.images[0]} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{product.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.category.name}</div>
                        <div className="text-sm text-gray-500">Id: #{product.category.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          $ {product.price}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/edit" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleDeleteToogle(product.id)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <TrashIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-500" aria-hidden="true" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal openForm={openForm} setOpenForm={setOpenForm}>
        <FormProduct
          setOpenForm={setOpenForm}
          setAlert={setAlert}
          setModalInfo={setModalInfo}
          toggleModalInfo={toggleModalInfo}
          modalInfo={modalInfo}
        />
      </Modal>
      <ModalInfo
        toggleModalInfo={toggleModalInfo}
        modalInfo={modalInfo}
        handleDelete={handleDelete}
        productId={productToDelete}
      />
    </>
  )
}
