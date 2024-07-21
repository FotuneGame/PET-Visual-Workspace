export type ThemeType = "light" | "dark" | "system" | undefined;
export type ThemeContextType = [ThemeType, React.Dispatch<React.SetStateAction<ThemeType>>] | undefined;