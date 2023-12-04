import Button from "../Button/Button";
import MenuItems from "../MenuItems/MenuItems";
import Search from "../Search/Search";
import Post from "../Posts/Post";
import ModalDelete from "../ModalDelete/ModalDelete"
import "./Products.scss"
// import { useState } from "react";

const Products = () => {
        
    return (
        <>
            <Search/>
            <Button/>
            <MenuItems/>
            <div className="posts__products">
            <Post categories="Эстетический уход" subcategory="Очищение" brand="-" items="-" cashback="20%"/>
            <Post categories="Эстетический уход" subcategory="Очищение" brand="-" items="-" cashback="20%"/>
            <Post categories="Эстетический уход" subcategory="Очищение" brand="-" items="-" cashback="20%"/>
            <Post categories="Эстетический уход" subcategory="Очищение" brand="-" items="-" cashback="20%"/>
            <Post categories="Эстетический уход" subcategory="Очищение" brand="-" items="-" cashback="20%"/>
            <Post categories="Эстетический уход" subcategory="Очищение" brand="-" items="-" cashback="20%"/>
            <Post categories="Эстетический уход" subcategory="Очищение" brand="-" items="-" cashback="20%"/>
            <Post categories="Эстетический уход" subcategory="Очищение" brand="-" items="-" cashback="20%"/>
            <Post categories="Эстетический уход" subcategory="Очищение" brand="-" items="-" cashback="20%"/>
            <Post categories="Эстетический уход" subcategory="Очищение" brand="-" items="-" cashback="20%"/>
            <Post categories="Эстетический уход" subcategory="Очищение" brand="-" items="-" cashback="20%"/>
            </div>
            <ModalDelete/>
        </>
    )
}

export default Products;