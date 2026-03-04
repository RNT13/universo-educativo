import { continuousAnimations, transitions } from '@/styles/MAnimations'
import { media, pastelTheme, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const AboutContainer = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: ${theme.grid.autoFit};
  justify-content: center;
  gap: ${theme.spacing.lg};

  padding: ${theme.spacing.lg} 0;
`

export const AboutCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

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

    h4 {
      color: ${pastelTheme.colors.pastelRed.base};
    }
  }
`

export const AboutCardHeader = styled.div`
  position: relative;
  width: 100%;
  height: 190px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${transitions.slow}
  }
`

export const AboutCardBody = styled.div`
  width: 100%;
  padding: ${theme.spacing.md};

  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};

  h4 {
    font-size: ${theme.fontSize.lg};
    font-weight: 600;
    color: ${pastelTheme.colors.pastelPurple.base};
    text-align: left;
    ${transitions.fast}
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }

  span {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};

    padding: ${theme.spacing.xs} ${theme.spacing.sm};

    border-radius: 999px;
    font-size: ${theme.fontSize.xs};
    font-weight: 500;

    width: fit-content;

    ${transitions.fast}

    svg {
      font-size: ${theme.fontSize.lg};
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  .span-green {
    border: 2px solid ${pastelTheme.colors.pastelGreen.soft};
    color: ${pastelTheme.colors.pastelGreen.soft};
    background-color: ${pastelTheme.colors.pastelGreen.base};
  }

  .span-red {
    border: 2px solid ${pastelTheme.colors.pastelRed.soft};
    color: ${pastelTheme.colors.pastelRed.soft};
    background-color: ${pastelTheme.colors.pastelRed.base};
  }

  .span-yellow {
    border: 2px solid ${pastelTheme.colors.pastelYellow.soft};
    color: ${pastelTheme.colors.pastelYellow.soft};
    background-color: ${pastelTheme.colors.pastelYellow.base};
  }

  .span-blue {
    border: 2px solid ${pastelTheme.colors.pastelBlue.soft};
    color: ${pastelTheme.colors.pastelBlue.soft};
    background-color: ${pastelTheme.colors.pastelBlue.base};
  }

  ${media.tablet} {
    align-items: center;

    h4 {
      text-align: center;
    }

    div {
      align-items: center;
    }
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
