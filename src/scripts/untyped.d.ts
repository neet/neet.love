declare module 'simple-icons' {
  interface SimpleIcon {
    title: string;
    hex: string;
    source: string;
    svg: string;
  }

  interface SimpleIcons {
    [s: string]: SimpleIcon;
  }

  const simpleIcon: SimpleIcons;
  export = simpleIcon;
}
