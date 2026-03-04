import { media, pastelTheme, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export type BgColor = 'pastelRed' | 'pastelBlue' | 'pastelGreen' | 'pastelYellow' | 'pastelPurple'

type BgType = 'solid' | 'gradient'

const bgColorVariants = {
  pastelRed: pastelTheme.colors.pastelRed.soft,
  pastelBlue: pastelTheme.colors.pastelBlue.soft,
  pastelGreen: pastelTheme.colors.pastelGreen.soft,
  pastelYellow: pastelTheme.colors.pastelYellow.soft,
  pastelPurple: pastelTheme.colors.pastelPurple.soft
}

type BaseSectionProps = {
  $bgType?: BgType
  $bgVariant: BgColor
  $bgVariant2?: BgColor
}

export const BaseSectionContainer = styled.div<BaseSectionProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0px;

  ${({ $bgType = 'solid', $bgVariant, $bgVariant2 }) => {
    if ($bgType === 'gradient') {
      return `
        background-image: linear-gradient(
          90deg,
          ${bgColorVariants[$bgVariant]},
          ${bgColorVariants[$bgVariant2!]}
        );
      `
    }

    return `
      background-color: ${bgColorVariants[$bgVariant]};
    `
  }}
`

export const BaseSectionContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};

  h2 {
    font-size: ${theme.fontSize['2xl']};
    font-weight: 600;
    text-shadow: 0px 0px 1px ${theme.colors.baseBlack.base};
    color: ${pastelTheme.colors.pastelPurple.dark};

    span {
      font-size: ${theme.fontSize.xl};
      font-weight: 600;
      color: ${pastelTheme.colors.pastelRed.base};
    }

    ${media.tablet} {
      font-size: ${theme.fontSize.lg};
      text-align: center;
    }
  }

  h4 {
    font-size: ${theme.fontSize.md};
    font-weight: 600;
    color: ${pastelTheme.colors.pastelBlue.dark};
    margin-bottom: ${theme.spacing.sm};

    ${media.tablet} {
      font-size: ${theme.fontSize.md};
      text-align: center;
    }
  }
`
