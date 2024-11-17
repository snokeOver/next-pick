export interface LogoProps {
  showFullSearch?: boolean;
  footer?: boolean;
}

export interface SearchBoxProps {
  showFullSearch: boolean;
  setShowFullSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ThemeStore {
  theme: string;
  setTheme: (theme: string) => void;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface BannerProps {
  bannerItmes: Product[];
}

export interface SectionContainerProps {
  title: string;
  isLoading?: boolean;
  products: Product[];
}

export interface ProductDetailsProps {
  params: {
    id: string;
  };
}
