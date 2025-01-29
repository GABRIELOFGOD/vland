interface NFTAttribute {
  trait_type: string;
  value: string;
}

export interface NFT {
  id: number;
  name: string;
  category: string[]; // Array of categories like "popular", "recent", etc.
  image: string; // URL of the NFT image
  price: number; // Price of the NFT
  creator: string; // Creator's wallet address
  owner: string; // Current owner's wallet address
  attributes: NFTAttribute[]; // Array of attributes for the NFT
  description: string; // Description of the NFT
  isListed: boolean; // Whether the NFT is currently listed for sale
  createdAt: string; // ISO date string for when the NFT was created
  lastSold: string | null; // ISO date string for the last sale or null if not sold yet
}
