import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../cat-preview/cat-previe-rout';
import Category from '../category/category';

import './shop.styles.scss'

const Shop = () => {
    

    return (
        <Routes>
       <Route index element={<CategoriesPreview />}/>
       <Route path=':category' element = {<Category />} />
       </Routes>
    )
}

export default Shop