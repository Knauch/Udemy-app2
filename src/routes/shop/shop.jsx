import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, } from 'react-router-dom';
import CategoriesPreview from '../cat-preview/cat-previe-rout';
import Category from '../category/category';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { setCategoriesMap } from '../../store(redux)/categories/category.actions';


const Shop = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            dispatch(setCategoriesMap(categoryMap))
        }
        getCategoriesMap();
    }, [])


    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop