
import { useState } from 'react';
import './Post.scss'

const Post = ( { setProductChecked, index, categories, subcategory, brand, items, cashback } ) => {

    const [isChecked, setIsChecked]= useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(prev => {
          const newChecked = !prev;
          if (newChecked) {
            setProductChecked(prev => [...prev, index]);
          } else {
            setProductChecked(prev => prev.filter(item => item !== index));
          }
          return newChecked;
        });
      };



    return (
        <div className='posts'>
            <input className='input__post' type='checkbox' checked={isChecked} onChange={handleCheckboxChange}/>
            <span>{categories}</span>
            <span>{subcategory}</span>
            <span>{brand!== null ? brand : "-"}</span>
            <span>{items!== null ? items : "-"}</span>
            <span>{cashback}</span>
        </div>
    )
}

export default Post;