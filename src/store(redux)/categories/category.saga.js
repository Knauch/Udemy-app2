import { takeLatest, all, call, put} from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase'; 
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.actions';
import { CATEGORIES_ACTION_TYPES } from './category.types';


export function* fetchCategoriesAsync(){
    //call meens run "calleble" function (method) and second parametr is parametr to that calleble func
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        //put is the same as dispatch function
        yield put(fetchCategoriesSuccess(categoriesArray));
        
    } catch (error) {
        yield put(fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories(){
    //takeLatest meens we recieve actions, and taking the LATEST one. 2 arguments the action and what to return
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    //yield all meens - all other code will be done only after yield finished/ all meens it will be array and it all should be finished
    yield all([call(onFetchCategories)])
}