
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
    return <div className='flex '>
        {categories.map(item => (
                <CategoryItem item={item} />
            )) }
    </div>

}

export default Categories;