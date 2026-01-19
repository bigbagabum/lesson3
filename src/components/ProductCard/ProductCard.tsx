import type { FC } from "react";
import type Product from "../../types/Product";
import { Link } from "react-router-dom";
import {ROUTES as R} from "../../shared/routes/index"

export const ProductCard: FC<Product> = (product) => {
  return (
    <div>
      <h3><Link to={R.PRODUCT_PAGE(product.id)}>{product.title}</Link></h3>
      <img src={product.images[0]} alt={product.title} width={200}/>
      <p>{product.price}</p>
    </div>
  );
};