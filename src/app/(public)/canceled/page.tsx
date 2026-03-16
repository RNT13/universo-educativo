
'use client'

import { MButton } from "@/components/ui/MaskedButton/MaskedButton"
import { TitleH2, TitleH3 } from "@/styles/globalStyles"
import Image from "next/image"
import { FaArrowLeft } from "react-icons/fa"
import { CanceledContainer, CanceledContent, ImageDiv } from "./canceled.styles"


export default function Canceled() {
  return (
    <CanceledContainer>
      <CanceledContent className="container">
        <TitleH2>Ops!</TitleH2>
        <ImageDiv>
          <Image src="/error.png" alt="canceled" fill sizes="1000px" priority />
        </ImageDiv>
        <TitleH3>Algo deu errado :(</TitleH3>
        <TitleH3>Por favor verifique seus dados e tente novamente</TitleH3>

        <MButton $variant="outline" shapes="circle" size="lg" href="/" leftIcon={<FaArrowLeft />} />
      </CanceledContent>
    </CanceledContainer>
  )
}
