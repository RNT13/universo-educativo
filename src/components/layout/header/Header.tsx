'use client'

import { useScrollTrigger } from "@/hooks/useScrollTop";
import { RedButton } from "@/styles/globalStyles";
import { MAnimation } from "@/styles/MAnimations";
import { IoRocketOutline } from "react-icons/io5";
import { ButtonDiv, HeaderContainer, HeaderContent, LogoDiv, Span1, Span2 } from "./Header.styles";


export default function Header() {
  const onTop = useScrollTrigger(0);
  const onSection = useScrollTrigger("83%");

  return (
    <HeaderContainer $onTop={onTop} $onSection={onSection}>
      <HeaderContent className="container">
        <LogoDiv>
          <IoRocketOutline />
          <h1><Span1>Universo</Span1> <Span2>Educativo</Span2></h1>
        </LogoDiv>

        <ButtonDiv>
          <MAnimation type="reveal" animation="fadeInUp">
            <RedButton $variant="default" href="#recovery" >Economizar Tempo Agora!</RedButton>
          </MAnimation>
        </ButtonDiv>
      </HeaderContent>
    </HeaderContainer>
  )
}

