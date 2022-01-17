/* eslint-disable quotes */
interface ResponsiveData {
  isMovil: boolean;
  winSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export interface Action {
  type: string;
  payload: boolean | string | ResponsiveData;
}

export interface ReducerState {
  isMovil: boolean;
  winSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  isLoading: boolean;
  currentPath: string;
  currentParams: string;
}
export interface Images {
  cover: string;
  mini?: string;
  extra?: [string]
}

export interface Product {
  _id: string;
  nombre: string;
  marca: string;
  descripcion: string;
  estetica?: string;
  precioOnline: number;
  descuento: number;
  disponibles: number;
  categoria: Array<string>;
  images: Images;
  nuevo: boolean;
  countPurchases?: number;
}
export interface SearchParams{
  categoria: string;
  pageNumber?: number;
  pageSize?: number;
  descuento?: string;
  sortBy?: "{ \"nombre \": 1 }" | "{ \"nombre \": -1 }" | "{ \"marca\": 1 }" | "{ \"marca\": -1 }" | "{ \"precioOnline\": -1 }" | "{ \"precioOnline\": 1 }" | "{ \"countVisits\": 1 }" | "{ \"countVisits\": -1 }" | "{ \"countQuestions\": 1 }" | "{ \"countQuestions\": -1 }" | "{ \"countPurchases\": 1 }" | "{ \"countPurchases\": -1 }";
}
export interface ProductPayload {
  products: Array<Product> | [];
  productCount: number;
}
