import { continuousAnimations, revealAnimations, transitions } from '@/styles/MAnimations'
import { media, pastelTheme, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const FinalSectionContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.lg};
`

export const FinalSectionContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${theme.grid.compact};
  align-items: center;
  gap: ${theme.spacing.lg};
`

export const FinalInfoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: ${theme.spacing.lg};

  button {
    font-size: ${theme.fontSize.xl};
    border-radius: ${theme.radius.lg};
    padding: ${theme.spacing.sm} ${theme.spacing.lg};

    svg {
      color: ${pastelTheme.colors.pastelRed.soft};
      stroke-width: 1.5px;
      width: 45px;
      height: 45px;
    }

    &:hover {
      svg {
        color: ${pastelTheme.colors.pastelRed.base};
        ${continuousAnimations.spin}
      }
    }
  }
`

export const ThunterSection = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.md};
  background-color: ${pastelTheme.colors.pastelBlue.dark};
  border-radius: ${theme.radius.lg};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  ${continuousAnimations.InfinityGlow}

  svg {
    width: 50px;
    height: 50px;
    color: ${theme.colors.baseYellow.base};
    ${continuousAnimations.lightningStrikeLoop}

    ${media.tablet} {
      width: 80px;
      height: 80px;
    }
  }

  h3 {
    color: ${theme.colors.baseYellow.base};
  }
`

export const FinalSectionCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
  border-radius: ${theme.radius.md};
  border: 2px solid ${pastelTheme.colors.pastelBlue.dark};
  padding: ${theme.spacing.md};
  background-color: ${pastelTheme.colors.pastelBlue.soft};

  &:hover {
    svg {
      color: ${pastelTheme.colors.pastelBlue.soft};
      ${revealAnimations.flipY}
    }
  }
`

export const FinalSectionCardIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${pastelTheme.colors.pastelBlue.base};

  svg {
    font-size: 45px;
    color: ${pastelTheme.colors.pastelBlue.dark};
    stroke-width: 1px;
    ${transitions.default}
  }
`

export const FinalSectionCardText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};

  h3,
  h4 {
    text-align: center;
    color: ${pastelTheme.colors.pastelBlue.dark};
  }
`

export const Target = styled.div`
  position: absolute;
  top: -185px;
  right: -0px;
  font-size: 12rem;
  opacity: 0.1;
  z-index: 1;

  &::before {
    content: '🎯';
  }

  ${media.tablet} {
    &::before {
      top: -150px;
      right: -20px;
      font-size: 8rem;
    }
  }
`

export const Book = styled.div`
  position: absolute;
  bottom: -60px;
  left: -0px;
  font-size: 12rem;
  opacity: 0.1;
  z-index: 1;
  rotate: -15deg;

  &::before {
    content: '📚';
  }

  ${media.tablet} {
    &::before {
      top: -150px;
      right: -20px;
      font-size: 8rem;
    }
  }
`
