import { GreenButton, RedButton, YellowButton } from "@/styles/globalStyles";
import { MAnimation } from "@/styles/MAnimations";
import { FaCheck } from "react-icons/fa";
import BaseSection from "../BaseSection/BaseSection";
import { RecoverySectionCardBody, RecoverySectionCardFooter, RecoverySectionCardHeader, RecoverySectionCards, RecoverySectionContainer } from "./RecoverySection.styles";

export default function RecoverySection() {
  return (
    <BaseSection
      bgType="solid"
      title1="Recupere Seu"
      titleHighlight="Tempo e Energia"
      title2="Agora!"
      subTitle="Junte-se a vários pais e profissionais dedicados que já estão recuperando o seu tempo e melhorando suas aulas."
      bgColor="pastelBlue"
    >
      <RecoverySectionContainer>

        <MAnimation type="reveal" animation="slideBounceRight">
          <RecoverySectionCards $variant="red">

            <RecoverySectionCardHeader $variant="red">
              <h2>R$ <span>19</span>,90</h2>
              <h3>Pacote Básico</h3>
            </RecoverySectionCardHeader>

            <RecoverySectionCardBody $variant="red">
              <ul>
                <li>
                  <FaCheck />
                  <p>50 Atividades Prontas</p>
                </li>
                <li>
                  <FaCheck />
                  <p>Arquivos PDF prontos para imprimir</p>
                </li>
                <li>
                  <FaCheck />
                  <p>1 Planejamento de atividades</p>
                </li>
              </ul>
            </RecoverySectionCardBody>

            <RecoverySectionCardFooter $variant="red">
              <RedButton fullWidth variant="default">Comprar Agora!</RedButton>
            </RecoverySectionCardFooter>

          </RecoverySectionCards>
        </MAnimation>

        <MAnimation type="reveal" animation="slideBounceUp" >
          <RecoverySectionCards $variant="yellow" className="popular">

            <RecoverySectionCardHeader $variant="yellow">
              <h2>R$ <span>29</span>,90</h2>
              <h3>Pacote Intermediário</h3>
            </RecoverySectionCardHeader>

            <RecoverySectionCardBody $variant="yellow">
              <ul>
                <li>
                  <FaCheck />
                  <p>100 Atividades Prontas</p>
                </li>
                <li>
                  <FaCheck />
                  <p>PDF de alta qualidade prontos para imprimir</p>
                </li>
                <li>
                  <FaCheck />
                  <p>Planejamento completo de atividades</p>
                </li>
                <li>
                  <FaCheck />
                  <p>Jogos interativos e desafios</p>
                </li>
              </ul>
            </RecoverySectionCardBody>

            <RecoverySectionCardFooter $variant="yellow">
              <YellowButton fullWidth variant="default">Comprar Agora!</YellowButton>
            </RecoverySectionCardFooter>

          </RecoverySectionCards>
        </MAnimation>

        <MAnimation type="reveal" animation="slideBounceLeft">
          <RecoverySectionCards $variant="green">

            <RecoverySectionCardHeader $variant="green">
              <h2>R$ <span>49</span>,90</h2>
              <h3>Pacote Definitivo</h3>
            </RecoverySectionCardHeader>

            <RecoverySectionCardBody $variant="green">
              <ul>
                <li>
                  <FaCheck />
                  <p>200 Atividades Prontas</p>
                </li>
                <li>
                  <FaCheck />
                  <p>PDF de alta qualidade prontos para imprimir</p>
                </li>
                <li>
                  <FaCheck />
                  <p>Planejamento completo de atividades</p>
                </li>
                <li>
                  <FaCheck />
                  <p>Jogos interativos e desafios</p>
                </li>

                <li>
                  <FaCheck />
                  <p>Suporte Via WhatsApp</p>
                </li>
              </ul>
            </RecoverySectionCardBody>

            <RecoverySectionCardFooter $variant="green">
              <GreenButton fullWidth variant="default">Comprar Agora!</GreenButton>
            </RecoverySectionCardFooter>

          </RecoverySectionCards>
        </MAnimation>

      </RecoverySectionContainer>
    </BaseSection>
  )
}
