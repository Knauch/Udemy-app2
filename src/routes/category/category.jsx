import { useParams } from 'react-router-dom';
import {  useState, useEffect } from 'react';
import ProductCard from '../../components/product-card/product-card';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store(redux)/categories/category.selector';

import { CategoryContainer, Title } from './category-style';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
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