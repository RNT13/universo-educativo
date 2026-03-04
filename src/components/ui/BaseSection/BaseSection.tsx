import { MinorTextH4, TitleH2 } from "@/styles/globalStyles"
import { BaseSectionContainer, BaseSectionContent, BgColor } from "./BaseSection.styles"



type Props = {
  title1: string
  titleHighlight: string
  title2: string
  subTitle: string
  children?: React.ReactNode
  bgType: 'solid' | 'gradient'
  bgColor: BgColor
  bgColor2?: BgColor
}

export default function BaseSection({ bgType, bgColor, bgColor2, title1, titleHighlight, title2, subTitle, children }: Props) {
  return (
    <BaseSectionContainer $bgType={bgType} $bgVariant={bgColor} $bgVariant2={bgColor2}>
      <BaseSectionContent className="container">
        <TitleH2>{title1} <span>{titleHighlight}</span> {title2}</TitleH2>
        <MinorTextH4>{subTitle}</MinorTextH4>
        {children}
      </BaseSectionContent>
    </BaseSectionContainer>
  )
}
