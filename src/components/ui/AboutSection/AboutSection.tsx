import { MAnimation } from "@/styles/MAnimations";
import Image from "next/image";
import BaseSection from "../BaseSection/BaseSection";
import { AboutCard, AboutCardContent, AboutContainer, AboutContent, Rainbow } from "./AboutSection.styles";

export default function AboutSection() {
  return (
    <BaseSection
      id="about"
      bgType="solid"
      title1="Veja exemplos"
      titleHighlight="reais"
      title2="do nosso material!"
      subTitle="Material completo, organizado e pronto para transformar suas aulas"
      bgColor="pastelBlue"
    >
      <AboutContainer >
        <Rainbow />

        <AboutContent>
          <MAnimation type="reveal" animation="fadeInUp" center>
            <AboutCard>
              <AboutCardContent>
                <Image src="/img-01.jpg" alt="Alfabetizacao Divertida" fill sizes="500px" priority />
              </AboutCardContent>
            </AboutCard>
          </MAnimation>

          <MAnimation type="reveal" animation="fadeInUp" center>
            <AboutCard>
              <AboutCardContent>
                <Image src="/img-02.jpg" alt="Alfabetizacao Divertida" fill sizes="500px" priority />
              </AboutCardContent>
            </AboutCard>
          </MAnimation>

          <MAnimation type="reveal" animation="fadeInUp" center>
            <AboutCard>
              <AboutCardContent>
                <Image src="/img-03.jpg" alt="Alfabetizacao Divertida" fill sizes="500px" priority />
              </AboutCardContent>
            </AboutCard>
          </MAnimation>

          <MAnimation type="reveal" animation="fadeInUp" center>
            <AboutCard>
              <AboutCardContent>
                <Image src="/img-04.webp" alt="Alfabetizacao Divertida" fill sizes="500px" priority />
              </AboutCardContent>
            </AboutCard>
          </MAnimation>
        </AboutContent>

      </AboutContainer>
    </BaseSection>
  )
}
