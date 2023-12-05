
import { useEffect, useState } from 'react';
import './Post.scss'
// import productsList from '../Products/ProductsList';

const Post = ( { productsChecked,setProductChecked, index, categories, subcategory, brand, items, cashback } ) => {

    const [isChecked, setIsChecked]= useState(false)

    useEffect(() => {
        if(isChecked) {
            productsChecked.push(index);
            setProductChecked(productsChecked);
            console.log(productsChecked);
        }
    }, [isChecked, index, productsChecked])
   


    return (
        <div className='posts'>
            <input className='input__post' type='checkbox' onChange={()=>setIsChecked(!isChecked)}/>
            <span>{categories}</span>
            <span>{subcategory}</span>
            <span>{brand!== null ? brand : "-"}</span>
            <span>{items!== null ? items : "-"}</span>
            <span>{cashback}</span>
        </div>
    )
}

export default Post;