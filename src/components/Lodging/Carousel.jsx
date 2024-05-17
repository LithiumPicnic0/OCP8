import PropTypes from "prop-types"
import { useState } from "react"
import { NavigateCarousel } from "./NavigateCarousel"



export function Carousel({pictures, title}) {

  const [index, setIndex] = useState(0)

  function leftClick() {
    setIndex(index - 1)
    if (index <= 0) {
      setIndex(pictures.length -1)
    }
  }

  function rightClick() {
    setIndex(index + 1)
    if (index >= pictures.length -1) {
      setIndex(0)
    }
  }

  
  // Condition d'affichage de la navigation du carousel
  let hidden = false
  
  if(pictures.length > 1){
    hidden = true
  }else if(pictures.length == 1){
    hidden = false
  }else{
    console.log(`image manquante`)
  }


  return <>
      <figure className="carousel">
      <img className="carousel_img" src={pictures[index]} alt={`Photo n°${index + 1} de "${title}"`} />

        {hidden 
          && 
          <NavigateCarousel 
                leftClick={leftClick} 
                rightClick={rightClick} 
                index={index +1} 
                picturesLength={pictures.length}
              />
            }
    </figure>
  </>
} 


Carousel.propTypes = {
  pictures: PropTypes.array,
  title: PropTypes.string,
}
