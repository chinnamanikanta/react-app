import AuthStore from './AuthStore/AuthStore';
import AuthAPI from './AuthServices/AuthAPI';
import ProductStore from '../E-Commerce/Stores/ProductStore/ProductStore'
import ProductService from '../E-Commerce/Services/ProductServices/ProductService'
const productService = new ProductService();
const productStore = new ProductStore(productService);
const authService = new AuthAPI();
const authStore = new AuthStore(authService);
export default {authStore,productStore};