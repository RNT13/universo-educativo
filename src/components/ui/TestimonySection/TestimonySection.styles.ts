import { continuousAnimations, transitions } from '@/styles/MAnimations'
import { media, pastelTheme, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const TestimonySectionContainer = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: ${({ theme }) => theme.grid.adaptive};
  justify-content: center;
  gap: ${theme.spacing.md};
`

export const TestimonyCard = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${theme.radius.md};
  padding: ${theme.spacing.md};
  background-color: ${pastelTheme.colors.pastelYellow.soft};
  box-shadow: 0px -10px 0 0px ${pastelTheme.colors.pastelYellow.base};
  ${transitions.default}

  h2 {
    font-size: ${theme.fontSize.lg};
    color: ${pastelTheme.colors.pastelPurple.dark};
  }

  h3 {
    font-size: ${theme.fontSize.md};
    color: ${pastelTheme.colors.pastelPurple.dark};
  }

  h4 {
    font-size: ${theme.fontSize.sm};
    color: ${pastelTheme.colors.pastelPurple.dark};
  }

  &:hover {
    translate: 0px -3px;
    box-shadow: 0px -15px 0 0px ${pastelTheme.colors.pastelYellow.dark};
    background-image: linear-gradient(
      180deg,
      ${pastelTheme.colors.pastelYellow.soft},
      ${pastelTheme.colors.pastelYellow.dark},
      ${pastelTheme.colors.pastelYellow.dark},
      ${pastelTheme.colors.pastelYellow.dark}
    );

    h2 {
      color: ${pastelTheme.colors.pastelYellow.soft};
    }

    h3 {
      color: ${pastelTheme.colors.pastelYellow.soft};
    }

    h4 {
      color: ${pastelTheme.colors.pastelYellow.soft};
    }
  }
`

export const TestimonyCardStars = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  ${continuousAnimations.shineInfinite};

  svg {
    font-size: ${theme.fontSize.lg};
    color: ${pastelTheme.colors.pastelYellow.dark};
  }
`

export const TestimonyCardTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  font-size: ${theme.fontSize.lg};
  font-weight: 600;
  color: ${pastelTheme.colors.pastelPurple.dark};
  ${transitions.default};
`

export const TestimonyCardName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xs};
`

export const TestimonyCardAvatar = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background-image: linear-gradient(180deg, ${pastelTheme.colors.pastelBlue.base}, ${pastelTheme.colors.pastelRed.base});
  ${continuousAnimations.InfinityGlow};

  span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${pastelTheme.colors.pastelYellow.soft};
  }
`

export const RightColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: ${theme.spacing.md};
  border-radius: ${theme.radius.md};
`
export const Clock = styled.div`
  position: absolute;
  top: -120px;
  right: -0px;
  font-size: 4rem;
  opacity: 0.1;
  z-index: 1;
  ${continuousAnimations.float}

  &::before {
    content: '🕒';
  }

  ${media.tablet} {
    &::before {
      top: -150px;
      right: -20px;
    }
  }
`
