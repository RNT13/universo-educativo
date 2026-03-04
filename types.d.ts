import 'styled-components'
import { store } from './src/redux/store'

// Tipagem do Redux
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Tipagem global pro React-Redux + RTK
declare module 'react-redux' {
  type DefaultRootState = RootState
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      baseGlass: ColorVariants
      baseBlack: ColorVariants
      baseBlue: ColorVariants
      baseGreen: ColorVariants
      baseRed: ColorVariants
      baseCyan: ColorVariants
      baseYellow: ColorVariants
    }
    spacing: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
    }
    radius: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
    }
    boxShadow: {
      sm: string
      md: string
      lg: string
    }
    fontSize: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
    }

    grid: {
      adaptive: string
      autoFit: string
      one: string
      two: string
      three: string
      four: string
      compact: string
      maxWidth: string
    }
  }
}

declare global {
  declare interface ColorVariants {
    base: string
    light: string
    light02: string
    light04: string
    light08: string
    light20: string
    light30: string
    light40: string
    light50: string
    dark: string
    dark02: string
    dark04: string
    dark08: string
    dark20: string
    dark30: string
    dark40: string
    dark50: string
  }

  type SectionVariants = 'pink' | 'purple' | 'blue' | 'green' | 'red' | 'yellow' | 'cyan'

  declare interface SectionVariantsProps {
    $variant: SectionVariants
  }

  // -------------------------------------
  // Payloads e Respostas de API
  // -------------------------------------

  interface RefreshResponse {
    access: string
  }

  interface LoginRequest {
    email: string
    password: string
  }

  interface LoginResponse {
    user: User
    message: string
    access: string
    refresh: string
    success: boolean
  }

  interface RegisterRequest {
    id?: number
    email: string
    full_name: string
    username: string
    password: string
    confirm_password: string
  }

  interface RegisterResponse {
    message: string
    access: string
    refresh: string
  }

  interface PaginatedResponse<T> {
    count: number
    next: string | null
    previous: string | null
    results: T[]
  }

  interface ApiResponse {
    status: number
    data: {
      detail: string
      [key: string]: string
    }
    statusText: string
    message: string
    success: boolean
    error: string
  }
}
