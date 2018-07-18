import React from 'react';
import { ProductImage, ProductTileTitle, ProductTileWrapper } from './styled/ProductTile';

const ProductTile = (props) => {
  const { productName, imgSrc } = props;
  return (
    <ProductTileWrapper>
      <ProductImage src={imgSrc} alt="logo"/>
      <ProductTileTitle>You have applied for {productName}</ProductTileTitle>
    </ProductTileWrapper>
  )
}

export default ProductTile;
