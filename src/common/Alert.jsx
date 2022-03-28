import { XCircleIcon } from '@heroicons/react/solid'
import { useAlert } from '@hooks/useAlert'
import { ERROR, PRODUCT_CREATED } from '@services/api/products'

const Alert = () => {
  const { alert, toggleAlert } = useAlert()
  const { active, message, type, autoClose } = alert
  if (alert && autoClose && type === PRODUCT_CREATED) {
    setTimeout(() => {
      toggleAlert()
    }, 9000)
  }
  let classesBg = ''
  let classesText = ''

  if (type === PRODUCT_CREATED) {
    classesBg = 'bg-green-100'
    classesText = 'text-gray-600'
  } else if (type === ERROR) {
    classesBg = 'bg-red-100'
    classesText = 'text-gray-600'
  }

  return (
    <>
      {active && (
        <div x-data className={`p-5 w-full rounded mb-8 ${classesBg}`}>
          <div className="flex space-x-3">
            <div className={`flex-1 leading-tight text-sm font-medium ${classesText}`}>{message}</div>
            <button type="button">
              <XCircleIcon className="w-6 h-6 text-gray-600" onClick={toggleAlert} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Alert
