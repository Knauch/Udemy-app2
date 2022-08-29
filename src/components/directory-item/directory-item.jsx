import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item-style";

const DirectoryItem = ({category}) => {

    const { imageUrl, title } = category;

    return(
        <DirectoryItemContainer>
            <BackgroundImage
              imageUrl={imageUrl}
            />
              
          <Body>
            <h2>{title}</h2>
            <p>Check them OUT!</p>
          </Body>
        </DirectoryItemContainer>
    )

}

export default DirectoryItem