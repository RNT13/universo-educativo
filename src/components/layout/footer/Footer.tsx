'use client'

import { MButton } from "@/components/ui/MaskedButton/MaskedButton";
import { TitleH2, TitleH3 } from "@/styles/globalStyles";
import { MAnimation } from "@/styles/MAnimations";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FooterButtons, FooterContainer, FooterContent, Planet } from "./Footer.styles";

export default function Footer() {
  const getCurrentYear = () => {
    const date = new Date()
    return date.getFullYear()
  }

  return (
    <FooterContainer>
      <FooterContent>
        <MAnimation type="reveal" animation="blurIn">
          <Planet >
            <Image src="/planet.png" alt="planet" fill sizes="500px" priority />
          </Planet>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInUp">
          <TitleH2>Universo Educativo</TitleH2>
          <TitleH3>Facilitando a vida do professor e colorindo o aprendizado dos alunos.</TitleH3>
        </MAnimation>

        <FooterButtons>
          <MAnimation type="reveal" animation="fadeInUp">
            <MButton $variant="outline" shapes="circle" size="lg" href="instagram" target="_blank" rel="noopener noreferrer" leftIcon={<FaInstagram />} />
          </MAnimation>

          <MAnimation type="reveal" animation="fadeInUp">
            <MButton $variant="outline" shapes="circle" size="lg" href="whatsapp" target="_blank" rel="noopener noreferrer" leftIcon={<FaWhatsapp />} />
          </MAnimation>
        </FooterButtons>

        <TitleH3>&copy; {getCurrentYear()} RNT Projects. Todos os direitos reservados.</TitleH3>
      </FooterContent>
    </FooterContainer>
  )
}
