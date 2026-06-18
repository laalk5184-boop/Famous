import { Product, Category, Review } from './types';

export const categories: Category[] = [
  { id: 'cat-1', name: 'Executive Office Furniture', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800' },
  { id: 'cat-2', name: 'Office Chairs', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800' },
  { id: 'cat-3', name: 'Office Tables', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800' },
  { id: 'cat-4', name: 'Workstations', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800' },
  { id: 'cat-5', name: 'Sofa Sets', image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=800' },
  { id: 'cat-6', name: 'Bedroom Furniture', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800' },
  { id: 'cat-7', name: 'Dining Furniture', image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=800' },
  { id: 'cat-8', name: 'Custom Furniture', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800' },
];

export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'The Empire Executive Desk',
    category: 'Executive Office Furniture',
    price: 125000,
    shortDescription: 'Command respect with this solid wood executive desk featuring gold accents.',
    description: 'The Empire Executive Desk is the pinnacle of office luxury. Crafted from premium mahogany with refined gold-plated handles and genuine leather inlay, it provides an expansive workspace while making a powerful statement. Built to last generations.',
    features: ['Solid Mahogany Wood', 'Genuine Leather Inlay', 'Soft-close Drawers', 'Integrated Wire Management', 'Gold-plated Hardware'],
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.9
  },
  {
    id: 'prod-2',
    name: 'Aura Ergonomic Office Chair',
    category: 'Office Chairs',
    price: 45000,
    shortDescription: 'Stay comfortable during long working hours with our premium ergonomic chair.',
    description: 'Designed for ultimate comfort, the Aura Ergonomic Chair features adaptive lumbar support, breathable mesh, and multi-directional armrests. It promotes healthy posture, making 8-hour shifts feel effortless.',
    features: ['Adaptive Lumbar Support', 'High-density Molded Foam', 'Breathable Mesh Back', '4D Adjustable Armrests', 'Heavy-duty Aluminum Base'],
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.8
  },
  {
    id: 'prod-3',
    name: 'Royale Velvet Sofa Set (7 Seater)',
    category: 'Sofa Sets',
    price: 285000,
    shortDescription: 'Transform your living room with this ultra-luxurious velvet sofa set.',
    description: 'The Royale Velvet Sofa Set brings elegance and unmatched comfort to your home. Upholstered in premium stain-resistant velvet with high-resilience foam, it offers a plush seating experience accompanied by elegant golden metallic legs.',
    features: ['Premium Stain-resistant Velvet', 'High-Resilience Foam Cushions', 'Kiln-dried Wood Frame', 'Golden Metallic Legs', 'Includes Throw Pillows'],
    image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 5.0
  },
  {
    id: 'prod-4',
    name: 'Victoria King Size Bed Set',
    category: 'Bedroom Furniture',
    price: 320000,
    shortDescription: 'Experience royal slumbers with this exquisitely carved tufted bed set.',
    description: 'The Victoria King Size Bed Set features a striking tall headboard with button tufting and elaborate wood carving details. Package includes the bed, two matching nightstands, and a sophisticated dresser with a mirror.',
    features: ['King Size Dimensions', 'Deep Button Tufted Headboard', 'Matching Nightstands Included', 'Premium Paint Finish', 'Solid Wood Construction'],
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.7
  },
  {
    id: 'prod-5',
    name: 'Signature Marble Dining Table (8 Seater)',
    category: 'Dining Furniture',
    price: 195000,
    shortDescription: 'A stunning modern dining table featuring a real marble top and gold base.',
    description: 'Host memorable dinners with the Signature Marble Dining Table. Featuring an authentic Turkish marble top resting on a stunning geometric gold-finished stainless steel base. Paired perfectly with plush dining chairs.',
    features: ['Authentic Turkish Marble Top', 'Gold-finished Stainless Steel Base', 'Seats 8 Comfortably', 'Heat and Scratch Resistant', 'Modern Geometric Design'],
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.9
  },
  {
    id: 'prod-6',
    name: 'Collaborative Team Workstation',
    category: 'Workstations',
    price: 85000,
    shortDescription: 'Maximize office productivity with our 4-person collaborative workstation.',
    description: 'Designed for modern open-plan offices, this 4-person workstation includes privacy screens, integrated wire management, and individual storage pedestals. A space-efficient solution that doesn\'t compromise on comfort.',
    features: ['4-Person Configuration', 'Acoustic Privacy Screens', 'Built-in Wire Management Hubs', 'Scratch-resistant Melamine Surface', 'Lockable Storage Pedestals'],
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.6
  }
];

export const reviews: Review[] = [
  {
    id: 'rev-1',
    author: 'Ali Raza',
    rating: 5,
    text: 'Excellent service and great quality furniture. We furnished our entire new office in Karachi with Famous Furnishers and the quality of the executive desks is phenomenal.'
  },
  {
    id: 'rev-2',
    author: 'Sarah Ahmed',
    rating: 5,
    text: 'Value for money products and long-lasting furniture. I bought a velvet sofa set last year and it still looks brand new. The gold accents perfectly match my living room.'
  },
  {
    id: 'rev-3',
    author: 'Tariq Mehmood',
    rating: 4,
    text: 'Professional staff and excellent customer support. Delivery was prompt and they assembled everything perfectly on site. Highly recommended for premium home furniture.'
  }
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1586105251261-72a7564d4203?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600"
];
