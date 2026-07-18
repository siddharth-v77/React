import React from 'react'
import {BookmarkIcon} from 'lucide-react'

const Card = (props) => {
  // console.log(props);
  
  return (
    <div className='card'>
        <div>
          <div className="top">
          <img src={props.Logo} alt="" />
          <button>Save <BookmarkIcon size={10} color='#bdbbbb'  /></button>
          
        </div>
        
        <div className="center">
          <h3>{props.company} <span>5 days ago</span></h3>
          <h2>{props.post} </h2>
          <div className="tag">
            <h4>{props.tag[0]}</h4>
            <h4>{props.tag[1]}</h4>
          </div>
        </div>
        </div>
        
        <div className="bottom">
            <div>
            <h2>{props.pay}</h2>
          <h5>{props.location}</h5>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card