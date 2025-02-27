import React, { useState } from 'react'
import ErrorBox from '../../components/errorBox/ErrorBox'
import AddNewProduct from '../../components/addNewProduct/AddNewProduct'
import ProductsTable from '../../components/productsTable/ProductsTable'

export default function Products() {
    const url = "http://localhost:3000/products"

    const [allProducts, setAllProducts] = useState([])

    useState(() => {
        fetch(`${url}`)
            .then(res => res.json())
            .then(datas => setAllProducts(datas))
    }, [allProducts])

    return (
        <div> 
            <AddNewProduct url={url} />
            {allProducts.length === 0 ? <ErrorBox message="هیچ محصولی وجود ندارد!" /> : <ProductsTable products={allProducts} url={url} />}
        </div>
    )
}
