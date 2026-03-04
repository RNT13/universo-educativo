import { continuousAnimations, transitions } from '@/styles/MAnimations'
import { sectionColors } from '@/styles/sectionColors'
import { media, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const ExampleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.lg};

  .reverseColumn {
    flex-direction: row-reverse;

    ${media.tablet} {
      flex-direction: column;
    }
  }
`

export const ExampleCard = styled.div<SectionVariantsProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  border-radius: 16px;
  padding: 24px;
  background-color: ${props => sectionColors[props.$variant].bg};

  &:hover {
    img {
      rotate: 0deg;
      scale: 1.03;
    }
  }

  ${media.tablet} {
    flex-direction: column;
  }
`

export const ExampleCardImg = styled.div<SectionVariantsProps>`
  position: relative;
  width: 100%;
  height: 300px;

  .rotateLeft {
    rotate: -4deg;

    ${media.tablet} {
      rotate: -1deg;
    }
  }

  .rotateRight {
    rotate: 4deg;

    ${media.tablet} {
      rotate: 1deg;
    }
  }

  img {
    border: 2px solid ${props => sectionColors[props.$variant].border};
    box-shadow: 10px 10px 0px 0px ${props => sectionColors[props.$variant].border};
    border-radius: 16px;
    width: 100%;
    height: 100%;
    ${transitions.default};
    object-fit: cover;
  }
`

export const ExampleCardBody = styled.div<SectionVariantsProps>`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${theme.spacing.md};

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: ${props => sectionColors[props.$variant].icon};
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.md};

    li {
      display: flex;
      align-items: center;
      gap: ${theme.spacing.xs};
      color: ${props => sectionColors[props.$variant].border};

      h4 {
        font-size: ${theme.fontSize.md};
        color: ${props => sectionColors[props.$variant].border};
        margin-bottom: 0px;
      }

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  ${media.tablet} {
    width: 100%;
  }
`

export const Book = styled.div`
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
    content: '📚';
  }
`
