import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import ProductCard from '../../components/product-card/product-card';

import { CategoriesContext } from '../../contex/categories.context';

import { CategoryContainer, Title } from './category-style';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>
        </>
    )

}

export default Category;