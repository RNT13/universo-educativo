'use client'

import { BlueButton, RedButton, TitleH3 } from "@/styles/globalStyles";
import { MAnimation } from "@/styles/MAnimations";
import { GoCheckCircleFill } from "react-icons/go";
import { WiStars } from "react-icons/wi";
import { Circle1, Circle2, HeroButton, HeroContainer, HeroContent, HeroDescription, HeroDisclaimer, HeroInfo, HeroTagline, HeroTitle, HeroVideo, Star } from "./Hero.styles";

export default function Hero() {

  return (
    <HeroContainer >
      <HeroContent className="container">
        <Circle1 />
        <Circle2 />

        <Star />

        <HeroInfo>
          <MAnimation type="reveal" animation="fadeInUp" >
            <HeroTagline>
              <div>
                <WiStars />

                <h2>Para Professores da Educação Infantil e Ensino Fundamental I</h2>
              </div>
            </HeroTagline>
          </MAnimation>

          <MAnimation type="reveal" animation="fadeInUp" >
            <HeroTitle >
              Tenha suas aulas <span>planejadas em minutos</span>, com atividades prontas para <span>aplicar amanhã!</span>
            </HeroTitle>
          </MAnimation>

          <MAnimation type="reveal" animation="fadeInUp">
            <HeroDescription>
              <TitleH3>
                Apostilas completas, atividades lúdicas e planejamentos alinhados à BNCC para a Educação Infantil e o Ensino Fundamental I. Economize tempo e encante seus alunos.
              </TitleH3>
            </HeroDescription>
          </MAnimation>

          <MAnimation type="reveal" animation="zoomFromDeep">
            <HeroButton >
              <RedButton $variant="default" fullWidth >Quero transformar minhas aulas!</RedButton>

              <BlueButton $variant="default" fullWidth >Ver exemplos de atividade</BlueButton>
            </HeroButton>
          </MAnimation>

          <MAnimation type="reveal" animation="fadeOutDown">
            <HeroDisclaimer>
              <div>
                <GoCheckCircleFill />

                <span>Material 100% alinhado à BNCC</span>
              </div>
            </HeroDisclaimer>
          </MAnimation>
        </HeroInfo>

        <MAnimation type="reveal" animation="rotateDrop" center>
          <HeroVideo src="/kids.mp4" autoPlay loop muted playsInline />
        </MAnimation>

      </HeroContent>
    </HeroContainer>
  )
}
