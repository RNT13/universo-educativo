import { continuousAnimations, transitions } from '@/styles/MAnimations'
import { sectionColors } from '@/styles/sectionColors'
import { media, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const FeatureContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${theme.grid.compact};
  gap: ${theme.spacing.md};

  ${media.tablet} {
    grid-template-columns: ${theme.grid.two};
  }

  ${media.mobile} {
    grid-template-columns: ${theme.grid.one};
  }
`

export const FeatureCard = styled.div<SectionVariantsProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: ${theme.spacing.md};
  border-radius: ${theme.radius.md};
  padding: ${theme.spacing.sm};

  background-color: ${props => sectionColors[props.$variant].bg};
  border: 2px solid ${props => sectionColors[props.$variant].border};
  box-shadow: 0 10px 0px ${props => sectionColors[props.$variant].border};
  ${transitions.default}

  div {
    display: flex;
    justify-content: start;

    svg {
      width: 45px;
      height: 45px;
      color: ${props => sectionColors[props.$variant].icon};
    }
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${props => sectionColors[props.$variant].icon};
  }

  h4 {
    font-size: 0.9rem;
    font-weight: 500;
    color: ${props => sectionColors[props.$variant].icon};
  }

  &:hover {
    translate: 0px -5px;
    background-color: ${props => sectionColors[props.$variant].bg};
    box-shadow: 0px 15px 0 0px ${props => sectionColors[props.$variant].border};
  }

  ${media.tablet} {
    width: 90%;
    height: 200px;
  }

  ${media.mobile} {
    width: 80%;
    height: 200px;
  }
`

export const Rocket = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  font-size: 4rem;
  opacity: 0.1;
  z-index: 1;
  ${continuousAnimations.float};

  ${media.tablet} {
    top: 3%;
  }

  &::before {
    content: '🚀';
  }
`
