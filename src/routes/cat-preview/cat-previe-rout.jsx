import { useContext } from 'react';
import { CategoriesContext } from '../../contex/categories.context';
import CategoryPreview from '../../components/category-preview/cat-prew';



const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

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