import { ProductType } from "../_types/product.type";

export default async function getSingleProduct(id: string): Promise<ProductType | null> {
  try {
    let response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`,
    );

    let data = await response.json();
    return data.data;

  } catch (error) {
    console.log("error in fetching data", error);

    return null;
  }
}
