import React from 'react'
import {Card as CardB}  from 'react-bootstrap';

const Card = ({id, imgPath, title, releaseDate} ) => {
  return (
/*     <CardB key={id} className='card-bg mt-1 pt-2' >
        <CardB.Img className='imagenCenter mx-auto d-block ' style={{ width: '14rem' }} variant="top" src={imgPath} />
        <CardB.Body>
            <CardB.Title className='text-center'>{title}</CardB.Title>
            <CardB.Text className='text-center'>{releaseDate}</CardB.Text>
        </CardB.Body>
    </CardB> */   
    <div className="gridmain_item_card imagenCenter mx-auto d-block">
      <img className="gridmain_item_card_img" src={imgPath} alt="" />
      <p className="gridmain_item_card_texto_title">{title}</p> 
      <p className="gridmain_item_card_texto_date">{releaseDate}</p>                  
    </div>
  )
}

export default Card
