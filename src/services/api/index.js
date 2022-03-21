const API = process.env.NEXT_PUBLIC_API_URL
const VERSION = process.env.NEXT_PUBLIC_API_VERSION

const endPoints = {
  auth: {
    login: `${API}/${VERSION}/auth/login`,
    profile: `${API}/${VERSION}/auth/profile`,
  },
  products: {
    getProducts: (limit, offset) => `${API}/${VERSION}/products?limit=${limit}&offset=${offset}`, // GET
    createProduct: `${API}/${VERSION}/products`, // POST JSON
    getProduct: (id) => `${API}/${VERSION}/products/${id}`, // GET
    updateProduct: (id) => `${API}/${VERSION}/products/${id}`, // PUT
    deleteProduct: (id) => `${API}/${VERSION}/products/${id}`, // DELETE
  },
  users: {
    createUser: `${API}/${VERSION}/users`, // POST JSON
    emailIsAvailable: `${API}/${VERSION}/users/is-available`, // POST JSON
  },
  categories: {
    getCategories: `${API}/${VERSION}/categories`, // GET
    createCategorie: `${API}/${VERSION}/categories`, // POST JSON
    getCategoriesById: (id) => `${API}/${VERSION}/categories/${id}/products`, // GET
    updateCategorie: (id) => `${API}/${VERSION}/categories/${id}`, // PUT
  },
  files: {
    uploadFile: `${API}/${VERSION}/files/upload`, // POST
    getFile: (fileName) => `${API}/${VERSION}/files/${fileName}`, // GET
  },
}

export default endPoints
