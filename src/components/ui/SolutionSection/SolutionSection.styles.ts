import { continuousAnimations, transitions } from '@/styles/MAnimations'
import { sectionColors } from '@/styles/sectionColors'
import { media, pastelTheme, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const SolutionContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.md};

  ${media.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing.md};
    justify-items: center;
  }

  ${media.mobile} {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing.md};
    justify-items: center;
  }
`

export const SolutionCard = styled.div<SectionVariantsProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${theme.spacing.md};
  border-radius: ${theme.radius.md};
  padding: ${theme.spacing.sm};
  background-color: ${pastelTheme.colors.pastelYellow.soft};
  box-shadow: -10px 0px 0 0px ${props => sectionColors[props.$variant].border};
  border: 2px solid ${props => sectionColors[props.$variant].border};
  ${transitions.default}

  h2 {
    color: ${props => sectionColors[props.$variant].icon};
  }

  h4 {
    color: ${props => sectionColors[props.$variant].border};
    margin-bottom: 0px;
    ${transitions.default}
  }

  &:hover {
    translate: -3px 0px;
    background-color: ${props => sectionColors[props.$variant].bg};
    box-shadow: -15px 0px 0 0px ${props => sectionColors[props.$variant].border};

    h2 {
      color: ${props => sectionColors[props.$variant].icon};
    }

    h4 {
      color: ${props => sectionColors[props.$variant].icon};
    }

    svg {
      color: ${props => sectionColors[props.$variant].bg};
    }

    div {
      background-color: ${props => sectionColors[props.$variant].border};
    }
  }

  ${media.tablet} {
    width: 90%;
    margin: 0 auto;
  }
`

export const SolutionCardIcon = styled.div<SectionVariantsProps>`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => sectionColors[props.$variant].icon};
  padding: ${theme.spacing.xs};
  border-radius: ${theme.radius.md};
  ${transitions.default}

  svg {
    font-size: 48px;
    width: 30px;
    height: 30px;
    color: ${props => sectionColors[props.$variant].bg};
    ${transitions.default}
  }
`

export const Moon = styled.div`
  &::before {
    content: '🌙';
    position: absolute;
    top: 5%;
    right: 5%;
    font-size: 4rem;
    opacity: 0.1;
    z-index: 1;
    ${continuousAnimations.float};
  }
`

export const Pen = styled.div`
  &::before {
    content: '🖊️';
    position: absolute;
    bottom: -40px;
    left: 5%;
    font-size: 4rem;
    opacity: 0.1;
    z-index: 1;
    ${continuousAnimations.float};
  }
`

export const SolutionDisclaimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 12px;
  border-radius: 16px;
  padding: 12px;
  background-image: linear-gradient(180deg, ${pastelTheme.colors.pastelGreen.soft}, ${pastelTheme.colors.pastelGreen.base});
  border: 2px solid ${pastelTheme.colors.pastelGreen.base};

  svg {
    font-size: 84px;
    color: ${pastelTheme.colors.pastelGreen.dark};
  }
`
