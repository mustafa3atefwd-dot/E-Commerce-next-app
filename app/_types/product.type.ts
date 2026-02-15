export type ProductType = {
  id: string,
  title: string,
  description: string,
  price: number,
  priceAfterDiscount: number,
  brand: BrandType,
  category: CategoryType,
  imageCover: string,
  ratingsAverage: number,
} ;


export type BrandType = {
  _id: string,
  name: string,
  image: string,
  slug: string,
} ;

export type CategoryType = {
  _id: string,
  name: string,
  image: string,
  slug: string,
} ;


