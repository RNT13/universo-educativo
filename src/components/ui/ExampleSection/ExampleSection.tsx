import { MinorTextH4, TitleH2 } from "@/styles/globalStyles";
import { MAnimation } from "@/styles/MAnimations";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import BaseSection from "../BaseSection/BaseSection";
import { Book, ExampleCard, ExampleCardBody, ExampleCardImg, ExampleContainer } from "./ExampleSection.styles";

export default function ExampleSection() {
  return (
    <BaseSection
      bgType="solid"
      bgColor="pastelYellow"
      title1="Veja exemplos"
      titleHighlight="reais"
      title2="do nosso material!"
      subTitle="Atividades prontas, organizadas e testadas em sala de aula. É só imprimir e aplicar."
    >
      <ExampleContainer>
        <Book />

        <MAnimation type="reveal" animation="slideBounceLeft">

          <ExampleCard $variant="blue">
            <ExampleCardImg $variant="blue">
              <Image className="rotateRight" src="/img-05.jpg" alt="Placeholder" fill sizes="500px" priority />
            </ExampleCardImg>

            <ExampleCardBody $variant="blue">
              <TitleH2>Atividades de Leitura e Escrita</TitleH2>

              <ul>
                <li>
                  <MinorTextH4><FaRegCheckCircle /> Atividades de alfabetização.</MinorTextH4>
                </li>

                <li>
                  <MinorTextH4><FaRegCheckCircle /> Famílias silabicas.</MinorTextH4>
                </li>

                <li>
                  <MinorTextH4><FaRegCheckCircle /> Interpretação textual.</MinorTextH4>
                </li>

                <li>
                  <MinorTextH4><FaRegCheckCircle /> E muito mais!</MinorTextH4>
                </li>
              </ul>

            </ExampleCardBody>
          </ExampleCard>

        </MAnimation>

        <MAnimation type="reveal" animation="slideBounceRight">
          <ExampleCard $variant="red" className="reverseColumn">

            <ExampleCardImg $variant="red">
              <Image className="rotateLeft" src="/img-06.jpg" alt="Placeholder" fill sizes="500px" priority />
            </ExampleCardImg>

            <ExampleCardBody $variant="red">
              <TitleH2>Matemática e Raciocínio Lógico</TitleH2>

              <ul>
                <li>
                  <MinorTextH4><FaRegCheckCircle />Operações matemáticas.</MinorTextH4>
                </li>

                <li>
                  <MinorTextH4><FaRegCheckCircle />Exercicios de lógica.</MinorTextH4>
                </li>

                <li>
                  <MinorTextH4><FaRegCheckCircle />Geometria.</MinorTextH4>
                </li>

                <li>
                  <MinorTextH4><FaRegCheckCircle />Resolução de Problemas.</MinorTextH4>
                </li>
              </ul>

            </ExampleCardBody>

          </ExampleCard>
        </MAnimation>

        <MAnimation type="reveal" animation="slideBounceLeft">

          <ExampleCard $variant="green">
            <ExampleCardImg $variant="green">
              <Image className="rotateRight" src="/img-08.jpg" alt="Placeholder" fill sizes="500px" priority />
            </ExampleCardImg>

            <ExampleCardBody $variant="green">
              <TitleH2>Ciências Sociais e da Natureza.</TitleH2>

              <ul>
                <li>
                  <FaRegCheckCircle /> <MinorTextH4>Meio ambiente.</MinorTextH4>
                </li>

                <li>
                  <FaRegCheckCircle /> <MinorTextH4>Sustentabilidade.</MinorTextH4>
                </li>

                <li>
                  <FaRegCheckCircle /><MinorTextH4>Corpo humano.</MinorTextH4>
                </li>

                <li>
                  <FaRegCheckCircle /><MinorTextH4>Experimentos práticas.</MinorTextH4>
                </li>
              </ul>

            </ExampleCardBody>
          </ExampleCard>

        </MAnimation>

      </ExampleContainer>
    </BaseSection>

  )
}
