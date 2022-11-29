import { createSelector } from 'reselect';

//input Selectors - giving us the parameters for the output

//initial selector for first data
const selectCategoryReducer = (state) => state.categories;

//memoizaition function that takes 2 arguments 1st - input and 2nd - output
export const selectCategories = createSelector(
  [selectCategoryReducer], 
  (categoriesSlice) => categoriesSlice.categories
)


export const selectCategoriesMap = (state) => 
state.categories.categories.reduce( (acc, category) => {
    const { title, items} = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});