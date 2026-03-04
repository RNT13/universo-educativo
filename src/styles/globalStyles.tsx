'use client'

// 🎨 GLOBAL STYLES - Estilos globais com Styled Components

import DefaultButton from '@/components/ui/MaskedButton/variants/Default/DefaultButton';
import styled, { createGlobalStyle } from 'styled-components';
import { continuousAnimations, transitions } from './MAnimations';
import { media, pastelTheme, theme, themeConfig } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @property --gold-angle {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
  }

  @property --silver-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${pastelTheme.colors.pastelYellow.glow};
    color: ${theme.colors.baseBlue.dark50};
    font-family: var(--primary-font);
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;

    ${media.pc}{
      width: 95%;
    }

    ${media.tablet}{
      width: 95%;
    }

    ${media.mobile}{
      width: 95%;
    }
  }
`;

export const RedButton = styled(DefaultButton)`
  background-color: ${pastelTheme.colors.pastelRed.base};
  color: ${pastelTheme.colors.pastelRed.soft};
  border: 2px solid ${pastelTheme.colors.pastelRed.base};
  border-radius: ${theme.radius.lg};
  font-size: ${theme.fontSize.sm};
  padding: ${theme.spacing.md} ${theme.spacing.lg};

  &:hover {
    background-color: ${pastelTheme.colors.pastelRed.soft};
    color: ${pastelTheme.colors.pastelRed.base};
    border: 2px solid ${pastelTheme.colors.pastelRed.base};
    ${continuousAnimations.glow}
  }
  ${continuousAnimations.shineInfinite}
`

export const BlueButton = styled(DefaultButton)`
  background-color: ${pastelTheme.colors.pastelBlue.base};
  color: ${pastelTheme.colors.pastelBlue.soft};
  border: 2px solid ${pastelTheme.colors.pastelBlue.base};
  border-radius: ${theme.radius.lg};
  font-size: ${theme.fontSize.sm};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  ${continuousAnimations.shineInfinite}

  &:hover {
    background-color: ${pastelTheme.colors.pastelBlue.soft};
    color: ${pastelTheme.colors.pastelBlue.base};
    border: 2px solid ${pastelTheme.colors.pastelBlue.base};
    ${continuousAnimations.glow}
  }
`

export const YellowButton = styled(DefaultButton)`
  background-color: ${pastelTheme.colors.pastelYellow.base};
  color: ${pastelTheme.colors.pastelYellow.soft};
  border: 2px solid ${pastelTheme.colors.pastelYellow.base};
  border-radius: ${theme.radius.lg};
  font-size: ${theme.fontSize.sm};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  ${continuousAnimations.goldBorderPremium}

  &:hover {
    background-color: ${pastelTheme.colors.pastelYellow.soft};
    color: ${pastelTheme.colors.pastelYellow.base};
    border: 2px solid ${pastelTheme.colors.pastelYellow.base};
    ${continuousAnimations.glow}
  }
`

export const GreenButton = styled(DefaultButton)`
  background-color: ${pastelTheme.colors.pastelGreen.base};
  color: ${pastelTheme.colors.pastelGreen.soft};
  border: 2px solid ${pastelTheme.colors.pastelGreen.base};
  border-radius: ${theme.radius.lg};
  font-size: ${theme.fontSize.sm};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  ${continuousAnimations.shineInfinite}

  &:hover {
    background-color: ${pastelTheme.colors.pastelGreen.soft};
    color: ${pastelTheme.colors.pastelGreen.base};
    border: 2px solid ${pastelTheme.colors.pastelGreen.base};
    ${continuousAnimations.glow}
  }
`

export const OverlayBlur = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    z-index: 100;
  `

export const OverlayDarck = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10;
  `

export const CloseButton = styled.button`
    border-radius: 50%;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: transparent;
    border: transparent;
    cursor: pointer;

    svg {
      font-size: 24px;
      color: ${theme.colors.baseBlue.dark20};
    }

    &:hover {
      svg {
        color: ${theme.colors.baseBlue.light};
      }
    }
  `

export const TitleH2 = styled.h2`
  font-size: ${theme.fontSize.xl};
  font-weight: 600;
  color: ${pastelTheme.colors.pastelBlue.base};
  ${transitions.default};
`

export const TitleH3 = styled.h3`
  font-size: ${theme.fontSize.lg};
  font-weight: 600;
  text-align: justify;
  color: ${pastelTheme.colors.pastelBlue.base};
  ${transitions.default};
`

export const MinorTextH4 = styled.h4`
  font-size: ${theme.fontSize.sm};
  font-weight: 300;
  color: ${theme.colors.baseBlue.dark30};
  ${transitions.default};
`

export const GradientTextH2 = styled.h2`
  color: ${theme.colors.baseBlue.base};
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(180deg, ${themeConfig.neon.colors.neonPink.base}, ${themeConfig.neon.colors.neonBlue.base});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const GradientSpan = styled.span`
  color: ${theme.colors.baseBlue.base};
  font-size: ${theme.fontSize.xl};
  font-weight: 700;
  background: linear-gradient(135deg, ${themeConfig.neon.colors.neonPink.base}, ${themeConfig.neon.colors.neonBlue.base});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &:hover {
    background: linear-gradient(360deg, ${themeConfig.neon.colors.neonBlue.base}, ${themeConfig.neon.colors.neonPink.base});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

export const Line = styled.span.attrs({ 'aria-hidden': true })`
  width: 80px;
  height: 2px;
  background: ${({ theme }) => theme.colors.baseBlack.light50};
  margin: 0 2px;
`

export const Dot = styled.span.attrs({ 'aria-hidden': true })`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.baseBlue.base};
  margin: 0 2px;
`
