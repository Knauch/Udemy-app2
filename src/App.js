import './categories.styles.scss'


const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Caps and stuff',
    },

    {
      id: 2,
      title: 'Clifts like Jakets though',
    },

    {
      id: 3,
      title: 'Boots-Boots-Boots',
    },

    {
      id: 4,
      title: 'For Chiks and  stuff',
    },

    {
      id: 5,
      title: 'For Dude and stuff',
    },
  ]

  return (

    <div className="categories-container">
      
      {/*#1 product category*/}

      {categories.map(({title}) => {

        return (
          <div className="category-container">
            <div className="background-image" />
          {/*<img />  */}
  
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Check them OUT!</p>
          </div>
        </div>
        )
})}
      
    </div>
  )

}

export default App;
