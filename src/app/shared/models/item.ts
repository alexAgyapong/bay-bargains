export interface Image {
  imageUrl: string;
}

export interface Price {
  value: string;
  currency: string;
}

export interface Seller {
  username: string;
  feedbackPercentage: string;
  feedbackScore: number;
}

export interface ShippingCost {
  value: string;
  currency: string;
}

export interface ShippingOption {
  shippingCostType: string;
  shippingCost: ShippingCost;
}

export interface ItemLocation {
  postalCode: string;
  country: string;
}

export interface Category {
  categoryId: string;
}

export interface AdditionalImage {
  imageUrl: string;
}

export interface ItemSummary {
  itemId: string;
  title: string;
  image: Image;
  price: Price;
  itemHref: string;
  seller: Seller;
  condition: string;
  conditionId: string;
  shippingOptions: ShippingOption[];
  buyingOptions: string[];
  itemAffiliateWebUrl: string;
  itemWebUrl: string;
  itemLocation: ItemLocation;
  categories: Category[];
  additionalImages: AdditionalImage[];
  adultOnly: boolean;
}

export interface ItemSummaryResult {
  href: string;
  total: number;
  next: string;
  limit: number;
  offset: number;
  itemSummaries: ItemSummary[];
}

export interface RequestOption {
  query: string;
  limit: number;
}
