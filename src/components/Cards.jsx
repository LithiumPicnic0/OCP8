import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom"


export function Cards({data}) {

  return  <>
            <article className="gallery">
                {data.map(data => (          
                    <figure key={data.id} className="card">
                        <img src={data.cover} alt={data.title} />
                        <figcaption>{data.title}</figcaption>
                        <NavLink to={`/Lodging/${data.id}`} />
                    </figure>
                ))}
            </article>      
          </>

}


Cards.propTypes = {
  data: PropTypes.array
}