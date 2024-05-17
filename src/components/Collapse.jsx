import PropTypes from 'prop-types'


export function Collapse({id,label,content,contentList}) {

  return <>      
          <article className="tab" key={id}>
              <input type="checkbox" name={label} id={id}/>
              <label htmlFor={id} className="tab__label" ><span>{label}</span></label>

              {contentList ? 
                <ul className="tab__content">
                  {contentList.map(list => (<li key={list}>{list}</li>))}
                </ul> 
                : <p className="tab__content">{content}</p>}
          </article>
  </>
}


Collapse.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  content: PropTypes.string,
  contentList: PropTypes.array,
}