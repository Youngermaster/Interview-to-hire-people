import React from 'react';
import { InfoSection } from '../../components';
import { productsObjOne, productsObjTwo, productsObjThree } from './Data';

function Products() {
  return (
    <>
      <InfoSection {...productsObjOne} />
      <InfoSection {...productsObjTwo} />
      <InfoSection {...productsObjThree} />
    </>
  );
}

export default Products;
