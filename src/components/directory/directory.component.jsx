import DirectoryItem from "../directory-item/directory-item";
import { DirectoryContainer } from './directory-style'

const categories = [
    {
      id: 1,
      title: 'Caps and stuff',
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      route: 'shop/hats'
    },

    {
      id: 2,
      title: 'Jakets though',
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      route: 'shop/jackets'
    },

    {
      id: 3,
      title: 'Boots-Boots-Boots',
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      route: 'shop/sneakers'
    },

    {
      id: 4,
      title: 'For Chiks and  stuff',
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      route: 'shop/womens'
    },

    {
      id: 5,
      title: 'For Dudes and stuff',
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      route: 'shop/mens'
    },
  ]
 
const Directory = () => {

    return(
        <DirectoryContainer>
        {categories.map((category) => (
            <DirectoryItem  key={category.id} category={category} />
        ))}
      </DirectoryContainer>
    )
}

export default Directory