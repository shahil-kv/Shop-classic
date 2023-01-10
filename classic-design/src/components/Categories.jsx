
import { categories } from '../data'
import CategoryItem from './CategoryItem'

/**
 *  why we are using the two components first one is used for sharing the one by product to the categoryItem
 * we map through the categories in the categories data and then pass every item into like a prop like object
 * */


const Categories = () => {
    return <div className='flex '>
        {categories.map(item => (
            <CategoryItem item={item} />
        ))}
    </div>

}

export default Categories;