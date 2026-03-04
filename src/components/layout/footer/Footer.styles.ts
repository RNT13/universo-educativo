import { continuousAnimations } from '@/styles/MAnimations'
import { pastelTheme, theme } from '@/styles/theme'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background-color: ${pastelTheme.colors.pastelBlue.dark};
`

export const FooterContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};

  h2 {
    font-size: ${theme.fontSize['2xl']};
    color: ${pastelTheme.colors.pastelBlue.soft};
    text-align: center;
    text-shadow: 0px 0px 1px ${theme.colors.baseBlack.base};
    margin-bottom: ${theme.spacing.lg};
  }

  h3 {
    color: ${pastelTheme.colors.pastelBlue.soft};
  }
`

export const FooterButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};

  a {
    background-color: ${pastelTheme.colors.pastelBlue.base};
    border: none;
    ${continuousAnimations.shineInfinite}
    ${continuousAnimations.float}
  }

  svg {
    color: ${pastelTheme.colors.pastelBlue.soft};
  }
`

export const Planet = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 0;
  right: -50px;
  opacity: 0.3;
  ${continuousAnimations.float};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
