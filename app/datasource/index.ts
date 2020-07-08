export interface Seller {
  id: number;
  name: string;
  company: string;
  department: string;
  country: string;
  email: string;
  sales: number;
  rating: number;
  feedback: number;
  address: string;
}

export async function getSellers(): Promise<Seller[]> {
  return Promise.resolve(require('./sellers.json'));
}