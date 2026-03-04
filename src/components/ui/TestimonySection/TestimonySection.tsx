import { MinorTextH4, TitleH2, TitleH3 } from "@/styles/globalStyles";
import { MAnimation } from "@/styles/MAnimations";
import { FaStar } from "react-icons/fa";
import BaseSection from "../BaseSection/BaseSection";
import { Clock, TestimonyCard, TestimonyCardAvatar, TestimonyCardName, TestimonyCardStars, TestimonyCardTitle, TestimonySectionContainer } from "./TestimonySection.styles";

export default function TestimonySection() {
  return (
    <BaseSection
      bgType="solid"
      bgColor="pastelGreen"
      title1="Professores que já"
      titleHighlight="recuperaram"
      title2="seu tempo."
      subTitle="Veja como educadores estão transformando sua rotina e melhorando suas aulas."
    >

      <TestimonySectionContainer>

        <Clock />

        <MAnimation type="reveal" animation="fadeInUp">
          <TestimonyCard>
            <TestimonyCardStars>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </TestimonyCardStars>
            <TitleH3>Consegui economizar quase 8 horas por semana! Antes eu passava o domingo inteiro planejando. Agora tenho tempo para minha família e ainda melhorei a qualidade das minhas aulas.</TitleH3>
            <TestimonyCardTitle>
              <TestimonyCardAvatar>
                <span>AP</span>
              </TestimonyCardAvatar>
              <TestimonyCardName>
                <TitleH2>Professora Ana Paula</TitleH2>
                <MinorTextH4>2º Ano - São Paulo/SP</MinorTextH4>
              </TestimonyCardName>
            </TestimonyCardTitle>
          </TestimonyCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInUp">
          <TestimonyCard>
            <TestimonyCardStars>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </TestimonyCardStars>
            <TitleH3>A coordenação elogiou meu planejamento pela primeira vez em anos! O material está 100% alinhado à BNCC e super organizado. Valeu cada centavo.</TitleH3>
            <TestimonyCardTitle>
              <TestimonyCardAvatar>
                <span>JC</span>
              </TestimonyCardAvatar>
              <TestimonyCardName>
                <TitleH2>Juliana Costa</TitleH2>
                <MinorTextH4>1º Ano - Rio de Janeiro/RJ</MinorTextH4>
              </TestimonyCardName>
            </TestimonyCardTitle>
          </TestimonyCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInUp">
          <TestimonyCard>
            <TestimonyCardStars>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </TestimonyCardStars>
            <TitleH3>Trabalhando sílabas com figuras coloridas, sequência didática completa e gabarito incluso.</TitleH3>
            <TestimonyCardTitle>
              <TestimonyCardAvatar>
                <span>CM</span>
              </TestimonyCardAvatar>
              <TestimonyCardName>
                <TitleH2>Carla Mendes</TitleH2>
                <MinorTextH4>3º Ano - Belo Horizonte/MG</MinorTextH4>
              </TestimonyCardName>
            </TestimonyCardTitle>
          </TestimonyCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInUp">
          <TestimonyCard>
            <TestimonyCardStars>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </TestimonyCardStars>
            <TitleH3>Indiquei para toda minha equipe. Material profissional, bem estruturado e que realmente funciona em sala de aula. Economia de tempo e resultados melhores.</TitleH3>
            <TestimonyCardTitle>
              <TestimonyCardAvatar>
                <span>MS</span>
              </TestimonyCardAvatar>
              <TestimonyCardName>
                <TitleH2>Prof. Mariana Silva</TitleH2>
                <MinorTextH4>Coordenadora Pedagógica</MinorTextH4>
              </TestimonyCardName>
            </TestimonyCardTitle>
          </TestimonyCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInUp">
          <TestimonyCard>
            <TestimonyCardStars>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </TestimonyCardStars>
            <TitleH3>Não sabia como encaixar tudo na rotina. Com esse material, ficou fácil! Tudo pronto, é só adaptar para minha turma. Melhor investimento que fiz.</TitleH3>
            <TestimonyCardTitle>
              <TestimonyCardAvatar>
                <span>FO</span>
              </TestimonyCardAvatar>
              <TestimonyCardName>
                <TitleH2>Fernanda Oliveira</TitleH2>
                <MinorTextH4>4º Ano - Brasília/DF</MinorTextH4>
              </TestimonyCardName>
            </TestimonyCardTitle>
          </TestimonyCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInUp">
          <TestimonyCard>
            <TestimonyCardStars>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </TestimonyCardStars>
            <TitleH3>Acabou a angústia de domingo à noite! Tenho planejamento para o ano todo, atividades prontas e ainda recebi bônus incríveis. Super vale a pena!</TitleH3>
            <TestimonyCardTitle>
              <TestimonyCardAvatar>
                <span>BS</span>
              </TestimonyCardAvatar>
              <TestimonyCardName>
                <TitleH2>Beatriz Santos</TitleH2>
                <MinorTextH4>5º Ano - Curitiba/PR</MinorTextH4>
              </TestimonyCardName>
            </TestimonyCardTitle>
          </TestimonyCard>
        </MAnimation>

      </TestimonySectionContainer>
    </BaseSection>
  )
}
