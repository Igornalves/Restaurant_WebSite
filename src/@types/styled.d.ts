import 'styled-components'
import { themeDefault } from '../global/themes/default'

type ThemeType = typeof themeDefault

declare module 'styled-components' {
  export interface themeDefault extends ThemeType {}
}