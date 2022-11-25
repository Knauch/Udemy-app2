files in src forlder
*ass - png and logo files
components:
    *button - ???
    *cart-dropdown - part of the Navbar - ?
    *cart-icon - part of the Navbar - ?
    *cart-item - used in cart-dropdown 
    *category-priview - shop page 
    *checkout-item - 
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext) - ???
    *directory - main page
    *directory-item - parts of main page
    *form-input - simple component just a form with some input styled and all
    *product-card - 1 product card with image price name and button over it (button is "add to cart")
    *sign-in-form - instruction from video sign in with Firebase, this component is conected only with Firebase and form-input where is just the form with the lines for name, pass and stuff
    *sign-up-form - sign up form with conditions with sign up if user already exest and other. Using firebase async func.
routes:
    *auth - SIGN IN/OUT PAge with 2 components signInForm and signUpForm
    *cat-preview -
        { categoriesMap } = useContext(CategoriesContext) - ???
        -returns Object.keys ? 
            which returns component CategoryPreview 

    *category - 
    *checkout - 
    const { cartItems, cartTotal } = useContext(CartContext) - ??? conected to checkout-item component
    *home - have 1 component Directory - which is explained in Home PAge components
    *navigation 
        -Links created trough styled 
        -logic for sign in/out menu on the navbar 
    *shop - containe 2 routes CategoriesPreview


CONTEXT
    *card-context - context for product what we can do with products in deferent places 
    isCartOpen
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
    cartTotal,
    removeItemFromCart,
    clearItemFromCart

    *categories-context - categories context (mapping the categories from firebase)

    *user-context   - stoage for default value of the user and function that deal with User - point of the context is that User functionality is availible in any OTHER component in which we adding the context

*utils/firebase -  all settings for conection with firebase DB to store our website info(products) and all sign in stuff
*reducers - helper functions for the context files. USed instead of the 'dispatch' function body. 


Redux folder
*store
    *store.js - file whre all happening, all state, and where we reciving the actions
    *root-reducer.js - main reducer where are all other reducers - it importing into store.js
    *user-reducer.js - file with ewxactly user-reducer functionality  - it importing into root-reducer.js

HOME PAGE
*Routes/home - home page with 1 component Directory
*components/directory:
 - categories - title, photo, and clickble route link for the home page. photos that are cliclble to redirect us to deferent other screens of website
 - Directory items (out 5 deferent menus with deferent product categories )
 - 
*components/directory-item: 
 -component representing each of 5 clicble stuf on the home page. has Image, title, description. 
 -functinal hook useNavigate: 
  - ???
At the top of the screen NAV bar
*routes/navigation: LINK is coded inside of Styles file thanks to styled techniques so functionality of Link is inside of style file
 - 4 objects represents each route to deferent website screen like [ HOME, SHOP, SIGN IN(or SIGN OUT if curent user is authenticated) and CART LOGO (with component cartDropdown)]
    Hook useContext with 2 functions
    useContext(UserContext) - setting curent user with reducers information about curent user stored in the COntext and all functionalyty is the UserProvider part
    useContext(CartContext) --all what we can do with products inside of card dropdown

 *cart-icon 
    - has a number with item qty that is based on component cartItemCount
    - has onClick witch toogling open or cloused cart 
    - useContext(CartContext) -all what we can do with products inside of card dropdown

 * CartDropdown component - 
    - useContext(CartContext) -all what we can do with products inside of card dropdown
    - navigate = useNavigate() --????
  - CartItem - simple component with image name qty price ant total sum (qty x price)

SHOP PAGE - 4 categories of DEFERENT products, each one have 4 products as a preview with title and button add to cart
components:
*category-priview 
    - maping products from ProductCard components 
    - filtering maped results with first 4 elements from map
    - geting the title from firebase part (name of the title are the name of the categories inside firebase)
- title is a link which go to 1 of categories PAGE 
- 4 products cards are components ProductCard

*productCard 
  - component for 1 product with image price name and button over it (button is "add to cart")
  -button add to cart
    - { addItemToCart } = useContext(CartContext) - all what we can do with products 

HOOKS
useState - for state storaging
useEfects - for action 1 time when loads or multiple times when last argument in [] changes
useContext - storage for action if value of Provider changes and efect the {children} - any component in hich we using useContext
useParam - saing which parameter should go to functions for our needed actions
useNavigate - passing the function navigate to tell to which url it should be navigated 
    const navigate = useNavigate()
    const goToCheckoutHandler = () => { - handler for onClick
        navigate('/checkout');



REDUCERS - has to update the state with what we have in payload
 -has an action 
    - type, string - for discribing what is happening for example 'TOOGLE_CART_IS_OPEN'
    - payload - object whcih be updated acordingly by type - UPDATING THE STATE WITH PAYLOAD
       exmpl currentUser: payload
    - action will update values inside of reducers
- Object with all stuff
-store only redable values

REDUX(redux store) - reduc is deferent to Context = reduxt raping around whole application. 
Context can rap araound specific element (component)
stuf that can be acsesseble from any place so we need to go to our index.js 
import Provider and wrap around entire application (Provider will have store props)

Redux store - containes ALL reducers and combine them to ROOT REDUCER \
RootReducer -  pass the state to all components 
Components dispatch the ACTONS that updates proper Reducers 

*STORE - combine place for all REDUX

action with reducers

creatint user.reducer file with setcurent user stuff

useSelector - huk that allows to interact from component with REDUX store - extract the value that you want from the Redux store




