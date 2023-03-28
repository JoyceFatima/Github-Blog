import Theme from '../styles/themes/default'

export type ITheme = typeof Theme

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}