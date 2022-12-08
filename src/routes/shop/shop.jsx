import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, } from 'react-router-dom';
import CategoriesPreview from '../cat-preview/cat-previe-rout';
import Category from '../category/category';
import { fetchCategoriesStart } from '../../store(redux)/categories/category.actions';


const Shop = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, [])


    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop