import React from 'react'

function Card({values , id}) {
    
  return (
    <>
      {values.map((currentCard , index) => (
        <div key={index} className='w-70 min-h-90 rounded lg:w-70 lg:min-h-80 mx-auto overflow-hidden bg-red-100 pb-4'>
            <img className='w-full h-35 lg:h-40 content-fit '  src={currentCard.urlToImage} alt="" />
            <h1 className='font-bold mt-5'>{currentCard.title}</h1>
            <p className='mt-3 text-sm px-2'>Description : {currentCard.description}</p>
            <a href={currentCard.url}><button className='mt-4 ml-3 bg-blue-500 text-white px-1 py-1 rounded'>Read more</button></a>
        </div>
      ))}
    </>
  )
}

export default Card
