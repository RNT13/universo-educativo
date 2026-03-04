import { MinorTextH4 } from "@/styles/globalStyles";
import { MAnimation } from "@/styles/MAnimations";
import Image from "next/image";
import { IoMdPrint } from "react-icons/io";
import { LuPalette } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import BaseSection from "../BaseSection/BaseSection";
import { AboutCard, AboutCardBody, AboutCardHeader, AboutContainer, Rainbow } from "./AboutSection.styles";

export default function AboutSection() {
  return (
    <BaseSection
      bgType="solid"
      title1="O que você vai"
      titleHighlight="encontrar:"
      title2=""
      subTitle="Material completo, organizado e pronto para transformar suas aulas"
      bgColor="pastelBlue"
    >
      <AboutContainer >
        <Rainbow />

        <MAnimation type="reveal" animation="fadeInUp">
          <AboutCard>
            <AboutCardHeader>
              <Image src="/img-01.jpg" alt="Alfabetizacao Divertida" fill />
            </AboutCardHeader>

            <AboutCardBody>
              <MinorTextH4>Alfabetização Divertida</MinorTextH4>

              <div>
                <span className="span-green">
                  <MdOutlineFileDownload /> Exercícios com letras e números coloridos
                </span>

                <span className="span-red">
                  <LuPalette /> Atividades de coordenação motora
                </span>

                <span className="span-blue">
                  <IoMdPrint /> Jogos de consciência fonológica
                </span>
              </div>
            </AboutCardBody>
          </AboutCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInUp">
          <AboutCard>
            <AboutCardHeader>
              <Image src="/img-02.jpg" alt="Alfabetizacao Divertida" fill />
            </AboutCardHeader>

            <AboutCardBody>
              <MinorTextH4>Matemática com Jogos</MinorTextH4>

              <div>
                <span className="span-yellow">
                  <LuPalette /> Jogos de contagem e sequência numérica
                </span>

                <span className="span-blue">
                  <MdOutlineFileDownload /> Atividades com formas e cores
                </span>

                <span className="span-green">
                  <IoMdPrint /> Desafios lúdicos de adição e subtração
                </span>
              </div>
            </AboutCardBody>
          </AboutCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInUp">
          <AboutCard>
            <AboutCardHeader>
              <Image src="/img-03.jpg" alt="Alfabetizacao Divertida" fill />
            </AboutCardHeader>

            <AboutCardBody>
              <MinorTextH4>Ciências e Natureza</MinorTextH4>

              <div>
                <span className="span-red">
                  <LuPalette /> Experimentos simples e ilustrados
                </span>

                <span className="span-green">
                  <MdOutlineFileDownload /> Atividades sobre plantas e animais
                </span>

                <span className="span-blue">
                  <IoMdPrint /> Sequências didáticas temáticas
                </span>
              </div>
            </AboutCardBody>
          </AboutCard>
        </MAnimation>

        <MAnimation type="reveal" animation="fadeInUp">
          <AboutCard>
            <AboutCardHeader>
              <Image src="/img-04.webp" alt="Alfabetizacao Divertida" fill />
            </AboutCardHeader>

            <AboutCardBody>
              <MinorTextH4>Economia de Tempo</MinorTextH4>

              <div>
                <span className="span-blue">
                  <IoMdPrint /> Planejamento semanal estruturado
                </span>

                <span className="span-yellow">
                  <MdOutlineFileDownload /> Roteiros prontos para aplicar
                </span>

                <span className="span-green">
                  <LuPalette /> Atividades organizadas por tema
                </span>
              </div>
            </AboutCardBody>
          </AboutCard>
        </MAnimation>

      </AboutContainer>
    </BaseSection>
  )
}
