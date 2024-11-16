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
