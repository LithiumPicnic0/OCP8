import PropTypes from "prop-types"


export function NavigateCarousel({leftClick, rightClick, index, picturesLength}){

  return <>
          <img 
          className="arrow_left" 
          src="/src/assets/icons/arrow_left.png" 
          alt="arrow_left"
          onClick={leftClick} />
          <img 
          className="arrow_right" 
          src="/src/assets/icons/arrow_right.png" 
          alt="arrow_right"
          onClick={rightClick} />
          <figcaption className="carousel_index">
          {index}/{picturesLength}
          </figcaption>
  </>
}

NavigateCarousel.propTypes = {
  leftClick: PropTypes.any,
  rightClick: PropTypes.any,
  index: PropTypes.number,
  picturesLength: PropTypes.any,
}