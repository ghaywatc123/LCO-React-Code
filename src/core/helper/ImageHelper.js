import React from 'react'

const ImageHelper = ({product}) => {
  const imageUrl = product 
        ? product.image : `https://pixabay.com/vectors/warning-exclamation-caution-sign-34621/`
  return (
    <div className='rounded border border-success p-2'>
      <img 
        style = {{width:"100%", height:"100%", objectFit:"cover"}}
        src={imageUrl}
        className="mb-3 rounded"
      />
    </div>
  )
}

export default ImageHelper