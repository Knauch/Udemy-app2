import { createAction } from "../../utils/reducers/reducers.utils";

import CATEGORIES_ACTION_TYPES from './category.types';

export const setCategoriesMap = (categoriesMap) => 
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)