import { createSelector } from 'reselect';

//input Selectors - giving us the parameters for the output

//initial selector for first data
const selectCategoryReducer = (state) => state.categories;

//memoizaition function that takes 2 arguments 1st - input and 2nd - output
//placing changing of category in memo func IF selectCategoryReducer stay the same (state.categories DO NOT update) - it will run func 1 time and than take the output from there
export const selectCategories = createSelector(
  [selectCategoryReducer], 
  (categoriesSlice) => categoriesSlice.categories
)

//injecting memo style func to the selector like 2nd level memo func
export const selectCategoriesMap = createSelector(
  //taking as input stuff from previous func
  [selectCategories],
  (categories) => categories.reduce( (acc, category) => {
    const { title, items} = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);
