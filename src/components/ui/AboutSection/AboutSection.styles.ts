import { continuousAnimations, transitions } from '@/styles/MAnimations'
import { media, pastelTheme, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const AboutContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`

export const AboutContent = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: ${theme.grid.two};
  gap: ${theme.spacing.lg};

  ${media.tablet} {
    grid-template-columns: ${theme.grid.one};
  }
`

export const AboutCard = styled.div`
  width: 400px;
  height: 500px;

  border-radius: ${theme.radius.md};
  overflow: hidden;

  background-color: ${pastelTheme.colors.pastelCyan.glow};
  border: 2px solid ${pastelTheme.colors.pastelCyan.glow};

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  ${transitions.slow}

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.15);

    background-color: ${pastelTheme.colors.pastelCyan.base};
    border-color: ${pastelTheme.colors.pastelPurple.base};

    img {
      transform: scale(1.08);
    }
  }

  ${media.tablet} {
    width: 100%;
    height: 400px;
  }
`

export const AboutCardContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${transitions.slow}
  }
`

export const Rainbow = styled.div`
  position: absolute;
  top: -120px;
  right: 0;

  font-size: 4rem;
  opacity: 0.08;
  z-index: 1;

  ${continuousAnimations.float}

  &::before {
    content: '🌈';
  }
`
