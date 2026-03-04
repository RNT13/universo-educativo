import { MinorTextH4, TitleH2 } from "@/styles/globalStyles";
import { MAnimation } from "@/styles/MAnimations";
import { BsTrophy } from "react-icons/bs";
import { FaHeadphonesAlt } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
import { SlDiamond } from "react-icons/sl";
import { TbTargetArrow } from "react-icons/tb";
import BaseSection from "../BaseSection/BaseSection";
import { Moon, Pen, SolutionCard, SolutionCardIcon, SolutionContainer, SolutionDisclaimer } from "./SolutionSection.styles";

export default function SolutionSection() {
  return (
    <BaseSection
      bgType="solid"
      bgColor="pastelRed"
      title1="O que nosso"
      titleHighlight="material"
      title2="oferece?"
      subTitle="Estrutura clara, fácil navegação e tudo que você precisa para planejar suas aulas com confiança."
    >
      <SolutionContainer >

        <Moon />

        <Pen />

        <MAnimation type="reveal" animation="fadeInRight" center>
          <SolutionCard $variant="blue">
            <SolutionCardIcon $variant="blue">
              <RiFilePaper2Line />
            </SolutionCardIcon>

            <TitleH2>Estrutura Organizada</TitleH2>
            <MinorTextH4>Todo material categorizado por disciplina e ano escolar. Encontre o que precisa em segundos.</MinorTextH4>

          </SolutionCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInRight" center>
          <SolutionCard $variant="green">
            <SolutionCardIcon $variant="green">
              <SlDiamond />
            </SolutionCardIcon>

            <TitleH2>Alta Qualidade Visual</TitleH2>
            <MinorTextH4>Atividades em alta resolução e atraentes que capturam a atenção dos alunos e facilitam o aprendizado.</MinorTextH4>

          </SolutionCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInRight" center>
          <SolutionCard $variant="purple">

            <SolutionCardIcon $variant="purple">
              <FaHeadphonesAlt />
            </SolutionCardIcon>

            <TitleH2>Suporte Exclusivo</TitleH2>
            <MinorTextH4>Dúvidas sobre como aplicar? Conte com nosso suporte pedagógico para tirar suas dúvidas.</MinorTextH4>


          </SolutionCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInRight" center>
          <SolutionCard $variant="red">

            <SolutionCardIcon $variant="red">
              <BsTrophy />
            </SolutionCardIcon>

            <TitleH2>Garantia de Qualidade</TitleH2>
            <MinorTextH4>Material desenvolvido por professores experientes, testado em sala de aula e aprovado por coordenadores pedagógicos. </MinorTextH4>

          </SolutionCard>
        </MAnimation>

      </SolutionContainer>

      <MAnimation type="reveal" animation="fadeInUp">
        <SolutionDisclaimer >
          <TbTargetArrow />

          <TitleH2 >A solução está <span>aqui</span>!</TitleH2>

          <MinorTextH4>
            Com nosso material completo, você economiza mais de <strong>10 horas de planejamento por semana</strong>.
            São atividades prontas, organizadas e alinhadas à BNCC, com planejamentos estruturados para alunos de 4 à 10 anos.
            Você mantém um padrão de qualidade nas suas aulas, ganha segurança no que está aplicando e ainda recupera tempo para ser mais criativo, preparar experiências incríveis e ensinar com leveza e paixão.
          </MinorTextH4>

        </SolutionDisclaimer>
      </MAnimation>
    </BaseSection>

  )
}
