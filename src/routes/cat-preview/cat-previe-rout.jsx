import { selectCategoriesMap } from '../../store(redux)/categories/category.selector';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/cat-prew';



const CategoriesPreview = () => {
    
    const categoriesMap = useSelector(selectCategoriesMap)

    return (
        <>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                
                return <CategoryPreview key={title} title={title} products={products} />
            })}

        </>
    )
}

export default CategoriesPreview