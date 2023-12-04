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
            <Post categories="Эстетический уход" subcategory="Скрабы" brand="Academie" items="Гоммаж с кремом и витамином У, 50мл" cashback="10%"/>
            <Post categories="Эстетический уход" subcategory="Тонизация" brand="Academie" items="Нормализующий лосьон, 200мл" cashback="10%"/>
            <Post categories="Эстетический уход" subcategory="Кремы и гели" brand="Academie" items="Восстанавливающий уход с кальцием, 50мл" cashback="15%"/>
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