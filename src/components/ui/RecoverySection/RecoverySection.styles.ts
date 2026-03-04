import { continuousAnimations, transitions } from '@/styles/MAnimations'
import { sectionColors } from '@/styles/sectionColors'
import { media, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const RecoverySectionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};

  ${media.tablet} {
    flex-direction: column;
    gap: ${theme.spacing.md};
  }

  .popular {
    height: 500px;
    ${continuousAnimations.goldBorderPremium};

    ${media.tablet} {
      width: 100%;
    }

    &::after {
      content: 'POPULAR';
      position: absolute;
      top: -10px;
      right: -8px;

      padding: 6px 18px;
      font-size: 11px;
      font-weight: 900;
      letter-spacing: 1px;

      color: #5a3d00;

      background: linear-gradient(135deg, #b8860b 0%, #ffbf00 40%, #ffd700 60%, #fff6cc 100%);

      border-top-left-radius: 20px;
      border-bottom-right-radius: 20px;

      box-shadow:
        0 4px 10px rgba(0, 0, 0, 0.15),
        0 0 8px rgba(255, 215, 0, 0.6);

      text-transform: uppercase;
      z-index: 3;
    }
  }
`

export const RecoverySectionCards = styled.div<SectionVariantsProps>`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.md};
  background: linear-gradient(180deg, ${props => sectionColors[props.$variant].bg}, ${props => sectionColors[props.$variant].bg});
  border-radius: ${theme.radius.md};
  border: 2px solid ${props => sectionColors[props.$variant].border};
  box-shadow: 0px 10px 0px 0px ${props => sectionColors[props.$variant].border};
  ${transitions.default}

  &:hover {
    background-color: ${props => sectionColors[props.$variant].icon};
    color: ${props => sectionColors[props.$variant].bg};
    background-image: linear-gradient(
      180deg,
      ${props => sectionColors[props.$variant].bg},
      ${props => sectionColors[props.$variant].icon},
      ${props => sectionColors[props.$variant].icon},
      ${props => sectionColors[props.$variant].bg}
    );
    box-shadow: 0px 15px 0px 0px ${props => sectionColors[props.$variant].border};
    transform: translateY(-5px);

    button {
      box-shadow: 0px 0px 30px 0px ${props => sectionColors[props.$variant].bg};
    }

    h2,
    h3 {
      color: ${props => sectionColors[props.$variant].bg};

      span {
        color: ${props => sectionColors[props.$variant].bg};
      }
    }

    li {
      p {
        color: ${props => sectionColors[props.$variant].bg};
        text-shadow: 0px 0px 1px ${theme.colors.baseBlack.base};
      }
      svg {
        color: ${props => sectionColors[props.$variant].bg};
      }
    }
  }
`

export const RecoverySectionCardHeader = styled.div<SectionVariantsProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};

  h2 {
    font-size: ${theme.fontSize['2xl']};
    color: ${props => sectionColors[props.$variant].border};
    ${transitions.default}

    span {
      position: relative;
      top: 25px;
      font-size: ${theme.fontSize['3xl']};
      color: ${props => sectionColors[props.$variant].icon};
      ${transitions.default}
    }
  }

  h3 {
    font-size: ${theme.fontSize.lg};
    color: ${props => sectionColors[props.$variant].icon};
    ${transitions.default}
  }
`

export const RecoverySectionCardBody = styled.div<SectionVariantsProps>`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.sm};

    li {
      display: flex;
      align-items: center;
      gap: ${theme.spacing.sm};

      p {
        font-size: ${theme.fontSize.md};
        color: ${props => sectionColors[props.$variant].icon};
        font-weight: 900;
        ${transitions.default}
      }

      svg {
        width: 25px;
        color: ${props => sectionColors[props.$variant].icon};
        ${transitions.default}
      }
    }
  }
`

export const RecoverySectionCardFooter = styled.div<SectionVariantsProps>`
  width: 100%;
  display: flex;
  justify-content: center;
`
