import PropTypes from 'prop-types'


export function Banner({background, caption}) {
  
    return <>
      <figure className="banner">
        <img className={caption ? "bright-40" : "bright-70"} src={background} alt="Paysage de Nature" />
        <figcaption>{caption}</figcaption>
      </figure> 
    </>
}


Banner.propTypes = {
  background: PropTypes.any,
  caption: PropTypes.string,
}