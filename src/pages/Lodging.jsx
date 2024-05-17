import { Carousel } from "../components/Lodging/Carousel";
import { Collapse } from "../components/Collapse";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types'

import Tag from "../components/Lodging/Tag";
import ErrorPage from "./Error";
import { Stars } from "../components/Lodging/Stars";
import { AddLineBreak } from "../components/AddLineBreak";





export function Lodging({data}) {


  const {id} = useParams()
  const lodging = data.find((currentData) => currentData.id === id)


  //On vérifie si "lodging" est bien défini avant d'accéder au données
  if(!lodging || !id){
    console.log("error")
    return(<ErrorPage/>)
  }


  return <>
    <Carousel pictures={lodging.pictures} title={lodging.title}/>  

      <section className="lodging_info">

        <article className="lodging_titles">
          <h2>{lodging.title}</h2>
          <p>{lodging.location}</p>
          
          <div className="lodging_tags">
            {lodging.tags.map((value) => (
                <Tag key={value} content={value} />
            ))}
          </div>
        </article>

        <article className="lodging_host">

          <figure className="host_info">
            <img src={lodging.host.picture} alt={`Photo de profil de ${lodging.host.name}`} />
            {/* Ajout d'un retour à la ligne entre le prénom et le nom de l'hôte */}
            {/* alternative: dangerouslySetInnerHTML={{__html:lodging.host.name.replace(` `,`<br/>`)}}*/}
            <figcaption className="host_name" >{AddLineBreak((lodging.host.name), (' '))}</figcaption>
          </figure>

          <Stars rating={lodging.rating}/>
        </article>
      </section>

    <section className="lodging_desc">       
        <Collapse key={"Description"} id={"Description"} label={"Description"} content={lodging.description}/>
        <Collapse key={"Equipements"} id={"Equipements"} label={"Equipements"} contentList={lodging.equipments}/>
    </section>
  
  </>
}




Lodging.propTypes = {
  data: PropTypes.array,
}
