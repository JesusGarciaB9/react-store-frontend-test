import React from 'react';
import Products from '../pages/Products/Products';
import ProductDetail from '../pages/Products/[id]/[id]';
import ShopCart from '../pages/ShopCart/ShopCart';

export const routes = [
  {
    path: "/",
    element: <Products />,
    redirect: "",
    children: [
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/shop-cart",
        element: <ShopCart />,
      },
    ],
  },
];
