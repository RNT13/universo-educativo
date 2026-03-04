import { MinorTextH4, TitleH2 } from "@/styles/globalStyles";
import { MAnimation } from "@/styles/MAnimations";
import { FaCheck, FaRegClock, FaRegStar } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import BaseSection from "../BaseSection/BaseSection";
import { FeatureCard, FeatureContainer, Rocket } from "./FeaturesSection.styles";

export default function FeaturesSection() {
  return (
    <BaseSection
      bgType="solid"
      title1="Por que"
      titleHighlight="professores escolhem"
      title2="nosso material?"
      subTitle="Resultados práticos e economia de tempo real no seu dia a dia."
      bgColor="pastelBlue"
    >
      <FeatureContainer>
        <Rocket />

        <MAnimation type="reveal" animation="fadeInUp" center>
          <FeatureCard $variant="blue">
            <div>
              <FiBookOpen />
            </div>
            <TitleH2>100% Alinhado à BNCC</TitleH2>
            <MinorTextH4>
              Códigos de habilidades em todas as atividades. Atenda às exigências da coordenação.
            </MinorTextH4>
          </FeatureCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInUp" center>
          <FeatureCard $variant="yellow" >
            <div>
              <FaRegClock />
            </div>
            <TitleH2>Economize 10h por semana</TitleH2>
            <MinorTextH4>
              Planejamentos prontos. Chega de passar noites e fins de semana preparando aula.
            </MinorTextH4>
          </FeatureCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInUp" center>
          <FeatureCard $variant="green">
            <div>
              <FaRegStar />
            </div>
            <TitleH2>Atividades Testadas por Professores</TitleH2>
            <MinorTextH4>
              Material desenvolvido por professores com anos de experiência em sala de aula.
            </MinorTextH4>
          </FeatureCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInUp" center>
          <FeatureCard $variant="red">
            <div>
              <FaCheck />
            </div>
            <TitleH2>Pronto para Usar Amanhã</TitleH2>
            <MinorTextH4>
              PDF de alta qualidade para imprimir. Atividades em alta resolução.
            </MinorTextH4>
          </FeatureCard>
        </MAnimation>

      </FeatureContainer>
    </BaseSection>
  )
}
