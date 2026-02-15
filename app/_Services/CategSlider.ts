import { CategoryType } from "../_types/product.type";

export async function getCategSlider(): Promise<CategoryType[] | null> {

try {
    let response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/categories", );

    let data = await response.json();

    return data.data;
} catch (error) {
   return null;
}
}