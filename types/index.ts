export interface Parrot {
  id: number;
  name: string;
  species: string;
  age: string;
  image: string;
  personality: string;
  rescueStory: string;
  status: 'available' | 'in-recovery' | 'adopted' | 'pending';
  arrivalDate: string;
  specialNeeds?: string;
  adoptionFee: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'toys' | 'food' | 'cages' | 'health' | 'accessories' | 'adoption';
  description: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface WishlistItem extends Product {}

export interface DonationGoal {
  id: number;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  urgency: 'low' | 'medium' | 'high';
}