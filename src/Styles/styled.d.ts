import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    primary: string;
    secundary: string;
    tertiary: string;
    background: string;
    black: string;
    white: string;
    gray: string;
    info: string;
    warning: string;
    success: string;
    shadow: string;
  }
}
