import './Post.scss'
const Post = ( {categories, subcategory, brand, items, cashback } ) => {
    return (
        <div className='posts'>
            <input className='input__post' type='checkbox'/>
            <span>{categories}</span>
            <span>{subcategory}</span>
            <span>{brand}</span>
            <span>{items}</span>
            <span>{cashback}</span>
        </div>
    )
}

export default Post;