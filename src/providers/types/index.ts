export type ThemeType = "light" | "dark"  | undefined;
export type ThemeContextType = [ThemeType, React.Dispatch<React.SetStateAction<ThemeType>>] | undefined;