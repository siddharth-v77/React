import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    
    <div className='card'>
        <img src={props.img} alt="" />
      <h1>{props.user}</h1>
<p>Lorem ipsum dolor nima,  tenetur delectus voluptatibus eos pariatur fugit enim quis quibusdam amet incidunt possimus explicabo.
</p>
<button>Veiw Profile </button>

</div>
  )
}

export default Card