import { MinorTextH4, RedButton, TitleH3 } from "@/styles/globalStyles";
import { MAnimation } from "@/styles/MAnimations";
import { AiFillThunderbolt, AiOutlineRise } from "react-icons/ai";
import { CiCircleCheck, CiClock2 } from "react-icons/ci";
import BaseSection from "../BaseSection/BaseSection";
import { Book, FinalInfoDiv, FinalSectionCard, FinalSectionCardIcon, FinalSectionCardText, FinalSectionContainer, FinalSectionContent, Target, ThunterSection } from "./FinalSection.styles";

export default function FinalSection() {
  return (
    <BaseSection
      bgType="gradient"
      bgColor="pastelGreen"
      bgColor2="pastelRed"
      title1="Pare de Sacrificar"
      titleHighlight="Seus "
      title2="Fins de Semana"
      subTitle="Tenha planejamentos completos, atividades prontas e recupere até 10 horas por semana"
    >
      <FinalSectionContainer>
        <Target />
        <Book />

        <FinalSectionContent>

          <MAnimation type="reveal" animation="popElastic">
            <FinalSectionCard>
              <FinalSectionCardIcon>
                <CiCircleCheck />
              </FinalSectionCardIcon>

              <FinalSectionCardText>
                <TitleH3>100% Pronto</TitleH3>
                <MinorTextH4>Material organizado e alinhado à BNCC</MinorTextH4>
              </FinalSectionCardText>
            </FinalSectionCard>
          </MAnimation>


          <MAnimation type="reveal" animation="popElastic">
            <FinalSectionCard>
              <FinalSectionCardIcon>
                <CiClock2 />
              </FinalSectionCardIcon>

              <FinalSectionCardText>
                <TitleH3>Economia Real</TitleH3>
                <MinorTextH4>10 horas por semana de volta para você</MinorTextH4>
              </FinalSectionCardText>
            </FinalSectionCard>
          </MAnimation>


          <MAnimation type="reveal" animation="popElastic">
            <FinalSectionCard>
              <FinalSectionCardIcon>
                <AiOutlineRise />
              </FinalSectionCardIcon>

              <FinalSectionCardText>
                <TitleH3>Aulas Melhores</TitleH3>
                <MinorTextH4>Atividades testadas e aprovadas</MinorTextH4>
              </FinalSectionCardText>
            </FinalSectionCard>
          </MAnimation>

        </FinalSectionContent>

        <FinalInfoDiv>
          <MAnimation type="reveal" animation="zoomFromDeep" center>
            <RedButton $variant="default" size="lg" leftIcon={<CiClock2 />}>Economizar Tempo Agora!</RedButton>
          </MAnimation>

          <MAnimation type="reveal" animation="zoomFromDeep" center>
            <ThunterSection>
              <AiFillThunderbolt />
              <h3>Mais de 500 professores já economizaram tempo com nosso material</h3>
            </ThunterSection>
          </MAnimation>
        </FinalInfoDiv>


      </FinalSectionContainer>
    </BaseSection>
  )
}
