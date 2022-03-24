import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, BadgeCheckIcon, InformationCircleIcon } from '@heroicons/react/outline'
import { ERROR, PRODUCT_CREATED, PRODUCT_ERRASED, SUCCESS } from '@services/api/products'

const ModalInfo = ({ modalInfo, toggleModalInfo, handleDelete, productId }) => {
  const { active, message, type } = modalInfo
  let classesButton = ''
  let classesIcon = ''
  if (type === ERROR) {
    classesButton = 'hover:bg-red-700 bg-red-600 focus:ring-red-500'
    classesIcon = 'bg-red-10'
  } else if (type === PRODUCT_ERRASED) {
    classesButton = 'hover:bg-yellow-700 bg-yellow-600 focus:ring-yellow-500'
    classesIcon = 'bg-yellow-10'
  } else if (type === PRODUCT_CREATED || type === SUCCESS) {
    classesButton = 'hover:bg-green-700 bg-green-600 focus:ring-green-500'
    classesIcon = 'bg-green-10'
  }
  return (
    <Transition.Root show={active || false} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={toggleModalInfo}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div
                    className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full 0 sm:mx-0 sm:h-10 sm:w-10 ${classesIcon}`}
                  >
                    {/* Icon */}
                    {type === ERROR && <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />}
                    {(type === PRODUCT_CREATED || type === SUCCESS) && (
                      <BadgeCheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    )}
                    {type === PRODUCT_ERRASED && (
                      <InformationCircleIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                    )}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      {/* Title for the modalInfo */}
                      {type === ERROR && '¡Ups!'}
                      {(type === PRODUCT_CREATED || type === SUCCESS) && "¡That's great!"}
                      {type === PRODUCT_ERRASED && '¡Caution!'}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {/* Message for the modalInfo */}
                        {message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                {(type === ERROR || type === PRODUCT_CREATED || type === SUCCESS) && (
                  <>
                    <button
                      type="button"
                      className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm ${classesButton}`}
                      onClick={async () => {
                        toggleModalInfo()
                      }}
                    >
                      {/* Button text to close */}
                      <span>Ok</span>
                    </button>
                  </>
                )}
                {type === PRODUCT_ERRASED && (
                  <>
                    <button
                      type="button"
                      className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm ${classesButton}`}
                      onClick={() => handleDelete(productId)}
                    >
                      {/* Button text to close */}
                      <span>Ok</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ModalInfo
