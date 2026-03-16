import { media, pastelTheme, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const CanceledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(180deg, ${pastelTheme.colors.pastelBlue.dark} 10%, ${pastelTheme.colors.pastelBlue.soft} 100%);
  padding: ${theme.spacing.xl} 0;
`

export const CanceledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h2 {
    font-size: 3rem;
    color: ${pastelTheme.colors.pastelBlue.soft};
    margin-bottom: 20px;
  }

  h3 {
    font-size: 2rem;
    color: ${pastelTheme.colors.pastelBlue.dark};
    margin-bottom: 20px;
  }
`

export const ImageDiv = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${media.mobile} {
    width: 400px;
    height: 400px;
  }
`
