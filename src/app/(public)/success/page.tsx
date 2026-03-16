
'use client'

import { MButton } from "@/components/ui/MaskedButton/MaskedButton"
import { TitleH2, TitleH3 } from "@/styles/globalStyles"
import Image from "next/image"
import { FaArrowLeft } from "react-icons/fa"
import { ImageDiv, SuccessContainer, SuccessContent } from "./success.styles"


export default function Success() {
  return (
    <SuccessContainer>
      <SuccessContent className="container">
        <TitleH2>Parabéns</TitleH2>
        <ImageDiv>
          <Image src="/parabens2.png" alt="success" fill sizes="1000px" priority />
        </ImageDiv>
        <TitleH3>Seu pedido foi realizado com sucesso!</TitleH3>
        <TitleH3>Em breve, você receberá um email com o link de acesso ao seu material</TitleH3>

        <MButton $variant="outline" shapes="circle" size="lg" href="/" leftIcon={<FaArrowLeft />} />
      </SuccessContent>
    </SuccessContainer>
  )
}
