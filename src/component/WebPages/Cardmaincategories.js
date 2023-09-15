import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../AppContext';

function Cardmaincategories({img,title,content,Url}) {
    // const { setUrl } = useAppContext();
    
  return (
    
    <div>
       <div className="card" style={{ width: '21.5rem' ,  }}>
        <img className="card-img-top" src={img} alt="Card image cap" style={{ height: '171px'   }} />
        <div className="card-body">
          <h5 className="card-title aligntext-left"><h3>{title}</h3></h5>
          <p className="card-text aligntext-left ">{content}</p>
          
        </div>
        <Link className="arrowbtn fontsize20" to={"/maincategories/"+ title}>ALL<i class="far fa-arrow-alt-circle-right"></i></Link>
      </div>
    </div>
  )
}

export default Cardmaincategories
