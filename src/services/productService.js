import axios from "axios";


export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:51169/api/Products")
    }

    getProductById(id){
        return axios.get("http://localhost:51169/api/Products/getById/?id=" + id)
    }
}