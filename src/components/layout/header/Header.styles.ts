import { continuousAnimations } from '@/styles/MAnimations'
import { media, pastelTheme, theme } from '@/styles/theme'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${pastelTheme.colors.pastelYellow.soft};
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md} ${theme.spacing.lg};

  ${media.tablet} {
    padding: ${theme.spacing.sm};
  }
`

export const ButtonDiv = styled.div`
  display: flex;

  ${media.tablet} {
    button {
      font-size: ${theme.fontSize.sm};
      gap: ${theme.spacing.sm};
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
    }
  }
`

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  font-size: ${theme.fontSize.sm};

  h1 {
  }

  svg {
    font-size: ${theme.fontSize['2xl']};
    color: ${pastelTheme.colors.pastelRed.dark};
    ${continuousAnimations.rocketLaunchLoop}
  }

  ${media.tablet} {
    h1 {
      font-size: ${theme.fontSize.lg};
    }
    svg {
      font-size: ${theme.fontSize['3xl']};
    }
  }
`

export const Span1 = styled.span`
  color: ${pastelTheme.colors.pastelRed.dark};
  font-weight: 600;
`

export const Span2 = styled.span`
  color: ${pastelTheme.colors.pastelBlue.dark};
  font-weight: 600;
`
