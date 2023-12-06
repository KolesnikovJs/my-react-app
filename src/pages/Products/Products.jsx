/* eslint-disable no-unused-vars */
import Button from "../Button/Button";
import MenuItems from "../MenuItems/MenuItems";
import Search from "../Search/Search";
import Post from "../Posts/Post";
import ModalDelete from "../ModalDelete/ModalDelete"
import  productsList  from "../Products/ProductsList";
import "./Products.scss"
 import { useEffect, useState } from "react";


const Products = () => {
     const [productState, setProductState]= useState(productsList);
     const [productsChecked, setProductsChecked] = useState([]);
     const [displayProducts, serDisplayProducts] = useState(10);


     useEffect(()=>{
    },[productState, displayProducts])

    const handleDisplayChange = (event) => {
        serDisplayProducts(Number(event.target.value))
    }
   
    return (
        <>
            <Search onDisplayChange={handleDisplayChange}/>
            <Button/>
            <MenuItems/>
            <div className="posts__products">
            {productsList.slice(0, displayProducts).map((item, index) => <Post key={index} index={index} productsChecked={productsChecked} setProductChecked={setProductsChecked} id={item.id} categories={item.categories} subcategory={item.subcategory} brand={item.brand} items={item.items} cashback={item.cashback}/>)}
            </div>
            {/* {productsChecked.length > 0 ? <ModalDelete/> : ''} */}
            {productsChecked.length > 0 && <ModalDelete  productsChecked={productsChecked} />}
        </>
    )
}

export default Products;