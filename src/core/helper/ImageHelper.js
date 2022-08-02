import React from 'react'

const ImageHelper = ({product}) => {
  const imageUrl = product ? product.image : `https://pixabay.com/vectors/warning-exclamation-caution-sign-34621/`
  return (
    <div className='rounded border border-success p-2'>
      <img 
        src={imageUrl}
        style={{maxHeight:"100%" , maxWidth:"100%"}}
        className="mb-3 rounded"
      />
    </div>
  )
}

export default ImageHelper