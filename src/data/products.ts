
export type Product = {
  id: number
  title: string
  price: string
  image: string
  category?: string
}

export const products: Product[] = [
  {
    id: 1,
    title: "Sage in the Woods",
    price: "$29.99",
    image: "/images/product/beard-oil.webp",
    category: "beard",
  },
  {
    id: 2,
    title: "Cedarwood & Orange Beard Butter",
    price: "$20.00",
    image: "/images/product/beard-butter.webp",
    category: "beard",
  },
  {
    id: 3,
    title: "Espresso Italiano",
    price: "$25.00",
    image: "/images/product/beard-oil.webp",
    category: "beard",
  },
  {
    id: 4,
    title: "Coffee & Cardamom Beard butter",
    price: "$20.00",
    image: "/images/product/beard-butter.webp",
    category: "beard",
  },
  {
    id: 5,
    title: "Beard Brush",
    price: "$35.00",
    image: "/images/product/beard-brush.webp",
    category: "beard",
  },

  {
    id: 6,
    title: "Beard Comb",
    price: "$15.00",
    image: "/images/product/beard-brush.webp",
    category: "beard",
  },
  {
    id: 7,
    title: "Mud Men",
    price: "$10.00",
    image: "/images/product/mud-men.webp",
    category: "skin",
  },
  {
    id: 8,
    title: "Midnight Rush",
    price: "$10.00",
    image: "/images/product/midnight-rush.webp",
    category: "skin",
  },
  {
    id: 9,
    title: "Fresh Meadows",
    price: "$10.00",
    image: "/images/product/fresh-meadows.webp",
    category: "skin",
  },
  {
    id: 10,
    title: "Freshly Minted",
    price: "$10.00",
    image: "/images/product/freshly-minted.webp",
    category: "skin",
  },
  {
    id:11,
    title: "Earl Gray Lip Balm",
    price: "$8.00",
    image: "/images/product/lip-balm.webp",
    category: "skin",
  },
  {
    id:12,
    title: "Clean Slate",
    price: "$10.00",
    image: "/images/product/fresh-meadows.webp",
    category: "skin",
  },
  {
    id:13,
    title: "Vanilla Lip Balm",
    price: "$8.00",
    image: "/images/product/lip-balm.webp",
    category: "skin",
  },
  {
    id:14,
    title: "Soap Anchor",
    price: "$8.00",
    image: "/images/product/anchor.webp",
    category: "skin",
  },
  {
    id:15,
    title: "Spearmint Lip Balm",
    price: "$8.00",
    image: "/images/product/lip-balm.webp",
    category: "skin",
  },
]
