import { TitleH2, TitleH3 } from "@/styles/globalStyles";
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
            <TitleH3>
              Códigos de habilidades em todos os planejamentos. Atenda às exigências da coordenação.
            </TitleH3>
          </FeatureCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInUp" center>
          <FeatureCard $variant="yellow" >
            <div>
              <FaRegClock />
            </div>
            <TitleH2>Economize 10h por semana</TitleH2>
            <TitleH3>
              Planejamentos prontos. Chega de passar noites e fins de semana preparando aula.
            </TitleH3>
          </FeatureCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInUp" center>
          <FeatureCard $variant="green">
            <div>
              <FaRegStar />
            </div>
            <TitleH2>Atividades Testadas por Professores</TitleH2>
            <TitleH3>
              Material desenvolvido por professores com anos de experiência em sala de aula.
            </TitleH3>
          </FeatureCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInUp" center>
          <FeatureCard $variant="red">
            <div>
              <FaCheck />
            </div>
            <TitleH2>Pronto para Usar Amanhã</TitleH2>
            <TitleH3>
              PDF de alta qualidade para imprimir. Atividades em alta resolução.
            </TitleH3>
          </FeatureCard>
        </MAnimation>

      </FeatureContainer>
    </BaseSection>
  )
}
