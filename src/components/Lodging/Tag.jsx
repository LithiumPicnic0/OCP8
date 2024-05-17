import PropTypes from 'prop-types'

export default function Tag({content}) {

  return <>
    <span className="tag_content">{content}</span>
  </>
}

Tag.propTypes = {
  content: PropTypes.string
}