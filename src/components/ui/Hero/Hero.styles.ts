import { continuousAnimations } from '@/styles/MAnimations'
import { media, pastelTheme, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const HeroContainer = styled.div`
  background-color: ${pastelTheme.colors.pastelGreen.soft};
  width: 100%;
  position: relative;
  z-index: 0;
  overflow: hidden;
`

export const HeroContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 24px 0px;
  gap: 24px;
  z-index: 1;

  ${media.tablet} {
    flex-direction: column-reverse;
  }

  ${media.mobile} {
    flex-direction: column-reverse;
  }
`

export const HeroTagline = styled.div`
  display: flex;
  align-items: start;

  div {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
    width: fit-content;
    padding: ${theme.spacing.xs} ${theme.spacing.md};
    background-image: linear-gradient(70deg, ${pastelTheme.colors.pastelBlue.dark}, ${pastelTheme.colors.pastelRed.dark});
    color: ${pastelTheme.colors.pastelBlue.soft};
    border-radius: ${theme.radius.xl};
    border: 2px dotted ${pastelTheme.colors.pastelBlue.soft};

    h2 {
      font-size: ${theme.fontSize.sm};
      color: ${pastelTheme.colors.pastelBlue.soft};
    }

    svg {
      color: ${pastelTheme.colors.pastelYellow.base};
      font-size: ${theme.fontSize['3xl']};
    }
  }

  ${media.tablet} {
    justify-content: center;
    div {
      padding: ${theme.spacing.xs} ${theme.spacing.sm};

      h2 {
        font-size: ${theme.fontSize.md};
      }
    }
  }
`

export const HeroInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;

  ${media.tablet} {
    width: 90%;
    align-items: center;
  }
`

export const HeroVideo = styled.video`
  width: 100%;
  height: 90%;
  transform: rotate(-10deg);
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid ${pastelTheme.colors.pastelBlue.soft};
  box-shadow: 20px 20px 0px ${pastelTheme.colors.pastelPurple.base};
  margin: 70px;

  ${media.tablet} {
    width: 80%;
    height: 80%;
    margin: 50px;
  }

  ${media.mobile} {
    width: 80%;
    height: 80%;
    margin: 30px;
  }
`

export const HeroTitle = styled.h2`
  font-size: ${theme.fontSize['2xl']};
  font-weight: 900;
  color: ${pastelTheme.colors.pastelBlue.base};
  text-align: left;
  text-shadow: 0px 0px 3px ${theme.colors.baseBlack.base};

  span {
    color: ${pastelTheme.colors.pastelRed.base};
  }

  ${media.tablet} {
    font-size: ${theme.fontSize.xl};
    text-align: center;
  }
`

export const HeroDescription = styled.h3`
  font-weight: 600;
  font-size: ${theme.fontSize.lg};
  color: ${theme.colors.baseBlack.dark04};
  text-align: left;

  ${media.tablet} {
    font-size: ${theme.fontSize.md};
    text-align: center;
  }
`

export const HeroButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};

  ${media.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const HeroDisclaimer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;

  div {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1rem;
    color: ${pastelTheme.colors.pastelGreen.dark};
    background-color: ${pastelTheme.colors.pastelGreen.soft};
    padding: 4px 12px;
    border-radius: 24px;
    border: 2px solid ${pastelTheme.colors.pastelGreen.dark};

    svg {
      font-size: 24px;
    }
  }

  ${media.tablet} {
    justify-content: center;
  }
`

export const Circle1 = styled.div`
  position: absolute;
  top: -130px;
  left: -130px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background-color: ${pastelTheme.colors.pastelRed.base};
  z-index: -1;
  opacity: 0.3;

  ${media.mobile} {
    width: 300px;
    height: 300px;
  }
`

export const Circle2 = styled.div`
  position: absolute;
  bottom: -130px;
  right: -130px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background-color: ${pastelTheme.colors.pastelBlue.base};
  z-index: -1;
  opacity: 0.3;

  ${media.mobile} {
    width: 300px;
    height: 300px;
  }
`

export const Star = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  font-size: 4rem;
  opacity: 0.1;
  z-index: 1;
  ${continuousAnimations.float};

  &::before {
    content: '⭐️';
  }

  ${media.tablet} {
    top: 0%;
    left: 0%;
  }
`
