/* eslint-disable no-unused-vars */
import Button from '../../components/Button/Button';
import MenuItems from '../../components/MenuItems/MenuItems';
import Search from '../../components/Search/Search';
import Post from '../../components/Posts/Post';
import ModalDelete from '../../components/ModalDelete/ModalDelete';
import productsList from '../Products/ProductsList';
import Modal from '../Modal/Modal';
import './Products.scss';
import { useEffect, useState } from 'react';

const Products = () => {
    const [productState, setProductState] = useState(productsList);
    const [productsChecked, setProductsChecked] = useState([]);
    const [displayProducts, serDisplayProducts] = useState(10);
    const [addModal, setAddModal] = useState(false);
    const [addModalDelete, setAddModalDelete] = useState(true);
    const [product, setProducts] = useState({
        categories: '',
        subcategory: '',
        brand: '',
        cashback: '',
        id: '',
    });

    const openModal = () => {
        setAddModal(true);
    };
    const closeModal = () => {
        let products = {
            id: productState.length + 1,
            categories: product.categories,
            subcategory: product.subcategory,
            brand: product.brand,
            cashback: product.cashback,
        };
        setAddModal(false);
        setProductState([...productState, products]);
        console.log(products);
    };

    const closeModalDelete = () => {
        setAddModalDelete(productsChecked.slice(0, length));
    };

    useEffect(() => {}, [productState, displayProducts]);

    const handleDisplayChange = (event) => {
        serDisplayProducts(Number(event.target.value));
    };

    return (
        <>
            <Search onDisplayChange={handleDisplayChange} />
            <Button onClick={openModal} />
            <MenuItems />
            <div className="posts__products">
                {productsList.slice(0, displayProducts).map((item, index) => (
                    <Post
                        key={index}
                        index={index}
                        productsChecked={productsChecked}
                        setProductChecked={setProductsChecked}
                        id={item.id}
                        categories={item.categories}
                        subcategory={item.subcategory}
                        brand={item.brand}
                        items={item.items}
                        cashback={item.cashback}
                    />
                ))}
            </div>
            {/* {productsChecked.length > 0 ? <ModalDelete/> : ''} */}
            {productsChecked.length > 0 && (
                <ModalDelete
                    closeModalDelete={closeModalDelete}
                    productsChecked={productsChecked}
                />
            )}
            {addModal && (
                <Modal
                    closeModal={closeModal}
                    productState={productState}
                    setProductState={setProductState}
                    setProducts={setProducts}
                />
            )}
        </>
    );
};

export default Products;
