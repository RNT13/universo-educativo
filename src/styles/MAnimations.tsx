import { useInView } from "@/hooks/useInView";
import styled, { css, keyframes } from "styled-components";

/* ======================================================
   🎬 MODERN ANIMATION SYSTEM V3
   Complete • Typed • Modular • Scalable
====================================================== */

/* ======================================================
   🔹 1. KEYFRAMES (PRIVADOS)
====================================================== */

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const rocketTrajectory = keyframes`
  /* Surge do canto inferior esquerdo */
  0% {
    transform: translate(-700px, 700px) scale(0.85) rotate(-8deg);
    opacity: 0;
  }

  /* Entrada suave até o centro */
  30% {
    transform: translate(0, 0) scale(1) rotate(0deg);
    opacity: 1;
  }

  /* Fica no centro respirando levemente */
  38% { transform: translate(-10px, -5px) rotate(-5deg); }
  46% { transform: translate(-10px, -3px) rotate(-5deg); }
  54% { transform: translate(4px, -4px) rotate(-5deg); }
  62% { transform: translate(4px, -1px) rotate(-5deg); }

  /* Volta para posição neutra antes da ignição */
  70% {
    transform: translate(-10px, 0) scale(1.05) rotate(-6deg);
  }

  /* Aceleração progressiva */
  80% {
    transform: translate(150px, -150px) scale(1.1) rotate(8deg);
  }

  /* Disparo final */
  100% {
    transform: translate(100px, -100px) scale(1.25) rotate(18deg);
    opacity: 1;
  }
`;

const lightningStrikeMove = keyframes`
  /* Começa fora da tela */
  0% {
    transform: translate(150px, -150px) rotate(15deg);
    opacity: 0;
  }

  /* Cai já tremendo */
  10% {
    transform: translate(0px, 0px) rotate(0deg);
    opacity: 1;
  }

  /* Tremida FORTE e longa */
  12% { transform: translate(-8px, 3px) rotate(-3deg); }
  15% { transform: translate(8px, -3px) rotate(3deg); }
  18% { transform: translate(-4px, 2px) rotate(-2deg); }
  21% { transform: translate(4px, -2px) rotate(2deg); }
  24% { transform: translate(-3px, 1px) rotate(-3deg); }
  27% { transform: translate(3px, -1px) rotate(3deg); }

  /* Continua tremendo até 65% */
  35% { transform: translate(-5px, 0px) rotate(-2deg) scale(0.98); }
  40% { transform: translate(3px, 0px) rotate(2deg) scale(1.02); }
  45% { transform: translate(-4px, 1px) rotate(-1deg) scale(0.99); }
  50% { transform: translate(2px, -1px) rotate(1deg) scale(1.01); }
  55% { transform: translate(-3px, 0px) rotate(-1deg) scale(0.98); }
  60% { transform: translate(1px, 0px) rotate(1deg) scale(1.03); }
  65% { transform: translate(0, 0) rotate(0deg) scale(1); }

  /* Começa a desaparecer */
  75% {
    opacity: 0.6;
    transform: scale(0.9);
  }

  85% {
    opacity: 0.0;
    transform: scale(0.8);
  }

  /* Quase nada de tempo invisível */
  100% {
    opacity: 0;
    transform: translate(150px, -150px) scale(0.8);
  }
`;

const rotateFullX = keyframes`
  0% {
    transform: rotateX(0deg);
  }

  100% {
    transform: rotateX(360deg);
  }
`;

const rotateFullY = keyframes`
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
`;

const pulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

const rotateGoldAngle = keyframes`
  from {
    --gold-angle: 0deg;
  }
  to {
    --gold-angle: 360deg;
  }
`;

const rotateSilverAngle = keyframes`
  from {
    --silver-angle: 0deg;
  }
  to {
    --silver-angle: 360deg;
  }
`;

const bounce = keyframes`
  0% {
    transform: translateY(0) scaleY(1);
  }

  15% {
    transform: translateY(-14px) scaleY(1.05);
  }

  30% {
    transform: translateY(0) scaleY(0.92);
  }

  40% {
    transform: translateY(-6px) scaleY(1.02);
  }

  55% {
    transform: translateY(0) scaleY(0.97);
  }

  65% {
    transform: translateY(-2px) scaleY(1.01);
  }

  75%,
  100% {
    transform: translateY(0) scaleY(1);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0px);
  }
`;

const jumpRotate = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(12deg); }
  50% { transform: rotate(-12deg); }
  75% { transform: rotate(6deg); }
  100% { transform: rotate(0deg); }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const glowDiagonal = keyframes`
  0% { transform: translate(-150%, -150%) rotate(45deg); opacity: 0; }
  30%,70% { opacity: 1; }
  100% { transform: translate(150%,150%) rotate(45deg); opacity: 0; }
`;

const shineLoop = keyframes`
  0% { transform: translateX(-120%); opacity: 0; }
  10% { opacity: 1; }
  30%,100% { transform: translateX(120%); opacity: 0; }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeInLeft = keyframes`
  from { opacity: 0; transform: translateX(-16px); }
  to { opacity: 1; transform: translateX(0); }
`;

const fadeInRight = keyframes`
  from { opacity: 0; transform: translateX(16px); }
  to { opacity: 1; transform: translateX(0); }
`;

const fadeOutDown = keyframes`
  from { opacity: 0; transform: translateY(-16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeInUpRotate = keyframes`
  from { opacity: 0; transform: translateY(16px) rotate(10deg); }
  to { opacity: 1; transform: translateY(0) rotate(0); }
`;

const horizontalLine = keyframes`
  0% { width: 0%; }
  50% { width: 60%; }
  100% { width: 100%; }
`;

export const shakeX = keyframes`
  0% { transform: translateX(0); }
  15% { transform: translateX(-4px); }
  30% { transform: translateX(4px); }
  45% { transform: translateX(-3px); }
  60% { transform: translateX(3px); }
  75% { transform: translateX(-2px); }
  90% { transform: translateX(2px); }
  100% { transform: translateX(0); }
`;

export const dots = keyframes`
  0% { content: ''; }
  25% { content: '.'; }
  50% { content: '..'; }
  75% { content: '...'; }
  100% { content: ''; }
`;

const slideBounceRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-80px);
  }

  60% {
    opacity: 1;
    transform: translateX(12px);
  }

  80% {
    transform: translateX(-6px);
  }

  100% {
    transform: translateX(0);
  }
`;

const slideBounceLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(80px);
  }

  60% {
    opacity: 1;
    transform: translateX(-12px);
  }

  80% {
    transform: translateX(6px);
  }

  100% {
    transform: translateX(0);
  }
`;

const slideBounceUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(80px);
  }

  60% {
    opacity: 1;
    transform: translateY(-12px);
  }

  80% {
    transform: translateY(6px);
  }

  100% {
    transform: translateY(0);
  }
`;

const slideImpactRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-160px) scaleX(0.92);
  }

  45% {
    opacity: 1;
    transform: translateX(0px) scaleX(1.08);
  }

  60% {
    transform: translateX(-14px) scaleX(0.97);
  }

  72% {
    transform: translateX(6px) scaleX(1.02);
  }

  85% {
    transform: translateX(-2px);
  }

  100% {
    transform: translateX(0) scaleX(1);
  }
`;

const slideImpactLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(160px) scaleX(0.92);
  }

  45% {
    opacity: 1;
    transform: translateX(0px) scaleX(1.08);
  }

  60% {
    transform: translateX(14px) scaleX(0.97);
  }

  72% {
    transform: translateX(-6px) scaleX(1.02);
  }

  85% {
    transform: translateX(2px);
  }

  100% {
    transform: translateX(0) scaleX(1);
  }
`;

const slideImpactUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(160px) scaleY(0.9);
  }

  45% {
    opacity: 1;
    transform: translateY(0px) scaleY(1.08);
  }

  60% {
    transform: translateY(14px) scaleY(0.96);
  }

  72% {
    transform: translateY(-6px) scaleY(1.02);
  }

  85% {
    transform: translateY(2px);
  }

  100% {
    transform: translateY(0) scaleY(1);
  }
`;

const blurIn = keyframes`
  0% {
    opacity: 0;
    filter: blur(12px);
    transform: scale(0.98);
  }

  100% {
    opacity: 1;
    filter: blur(0);
    transform: scale(1);
  }
`;

const popElastic = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.6);
  }

  60% {
    opacity: 1;
    transform: scale(1.12);
  }

  75% {
    transform: scale(0.96);
  }

  100% {
    transform: scale(1);
  }
`;

const zoomFromDeep = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7) translateY(40px);
  }

  70% {
    opacity: 1;
    transform: scale(1.05) translateY(-8px);
  }

  100% {
    transform: scale(1) translateY(0);
  }
`;

const rotateDrop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-40px) rotate(-8deg);
  }

  60% {
    opacity: 1;
    transform: translateY(8px) rotate(4deg);
  }

  100% {
    transform: translateY(0) rotate(0);
  }
`;

const magneticRise = keyframes`
  0% {
    opacity: 0;
    transform: translateY(60px) scale(0.9);
  }

  80% {
    opacity: 1;
    transform: translateY(-6px) scale(1.02);
  }

  100% {
    transform: translateY(0) scale(1);
  }
`;

/* ======================================================
   🔹 2. TRANSITIONS (Design System)
====================================================== */

export const transitions = {
  fast: css`
    transition:
      all 0.2s ease,
      transform 0.2s ease,
      opacity 0.2s ease,
      background-color 0.2s ease,
      color 0.2s ease,
      box-shadow 0.2s ease;
  `,
  default: css`
    transition:
      all 0.35s ease,
      transform 0.35s ease,
      opacity 0.35s ease,
      background-color 0.35s ease,
      color 0.35s ease,
      box-shadow 0.35s ease;
  `,
  slow: css`
    transition:
      all 0.5s ease,
      transform 0.5s ease,
      opacity 0.5s ease,
      background-color 0.5s ease,
      color 0.5s ease,
      box-shadow 0.5s ease;
  `,
  delay: css`
      transition:
        opacity 0.2s ease,
        transform 0.2s ease;
      transition-delay: 1s;
    `
};

/* ======================================================
   🔹 3. HELPERS BASE
====================================================== */

const overlayBase = css`
  position: relative;
  overflow: hidden;
`;

/* ======================================================
   🔹 4. ANIMAÇÕES CONTROLADAS ($isOn)
====================================================== */

export const controlledAnimations = {
  fadeInOut: css<{ $isOn?: boolean }>`
    opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
    pointer-events: ${({ $isOn }) => ($isOn ? "auto" : "none")};
    ${transitions.fast}
  `,

  slideFromLeft: css<{ $isOn?: boolean }>`
    transform: ${({ $isOn }) =>
      $isOn ? "translateX(0)" : "translateX(-16px)"};
    opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
    ${transitions.default}
  `,

  slideFromRight: css<{ $isOn?: boolean }>`
    transform: ${({ $isOn }) =>
      $isOn ? "translateX(0)" : "translateX(16px)"};
    opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
    ${transitions.default}
  `,

  slideFromTop: css<{ $isOn?: boolean }>`
    transform: ${({ $isOn }) =>
      $isOn ? "translateY(0)" : "translateY(-16px)"};
    opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
    ${transitions.fast}
  `,

  slideFromBottom: css<{ $isOn?: boolean }>`
    transform: ${({ $isOn }) =>
      $isOn ? "translateY(0)" : "translateY(16px)"};
    opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
    ${transitions.default}
  `,

  zoomInOut: css<{ $isOn?: boolean }>`
    transform: ${({ $isOn }) => ($isOn ? "scale(1)" : "scale(0.95)")};
    opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
    ${transitions.fast}
  `,

  drawer: css<{ $isOn?: boolean; $maxHeight?: string }>`
    overflow: hidden;
    max-height: ${({ $isOn, $maxHeight }) =>
      $isOn ? $maxHeight || "500px" : "0"};
    transition: max-height 0.35s ease;
  `,

  rocketLaunch: css`
    animation: ${rocketTrajectory} 4s cubic-bezier(.22,1.4,.36,1);
  `,
};

/* ======================================================
   🔹 5. REVEAL (Scroll)
====================================================== */

const revealHelper = (animation: ReturnType<typeof css>) => css`
  opacity: 1;
  ${animation}
`;

export const revealAnimations = {
  fadeInUp: revealHelper(css`
    animation: ${fadeInUp} 1s ease forwards;
  `),

  fadeInLeft: revealHelper(css`
    animation: ${fadeInLeft} 1s ease forwards;
  `),

  fadeInRight: revealHelper(css`
    animation: ${fadeInRight} 1s ease forwards;
  `),

  fadeOutDown: revealHelper(css`
    animation: ${fadeOutDown} 1s ease forwards;
  `),

  fadeInUpRotate: revealHelper(css`
    animation: ${fadeInUpRotate} 1s ease forwards;
  `),

  slideBounceRight: revealHelper(css`
  animation: ${slideBounceRight} 0.9s cubic-bezier(.22,1.4,.36,1) forwards;
  `),

  slideBounceLeft: revealHelper(css`
  animation: ${slideBounceLeft} 0.9s cubic-bezier(.22,1.4,.36,1) forwards;
  `),

  slideBounceUp: revealHelper(css`
  animation: ${slideBounceUp} 0.9s cubic-bezier(.22,1.4,.36,1) forwards;
  `),

  slideImpactRight: revealHelper(css`
  animation: ${slideImpactRight} 1s cubic-bezier(.34,1.56,.64,1) forwards;
  `),

  slideImpactLeft: revealHelper(css`
  animation: ${slideImpactLeft} 1s cubic-bezier(.34,1.56,.64,1) forwards;
  `),

  slideImpactUp: revealHelper(css`
  animation: ${slideImpactUp} 1s cubic-bezier(.34,1.56,.64,1) forwards;
  `),

  blurIn: revealHelper(css`
  animation: ${blurIn} 0.9s ease forwards;
`),

  popElastic: revealHelper(css`
  animation: ${popElastic} 0.8s cubic-bezier(.34,1.56,.64,1) forwards;
`),

  zoomFromDeep: revealHelper(css`
  animation: ${zoomFromDeep} 1s cubic-bezier(.22,1.4,.36,1) forwards;
`),

  rotateDrop: revealHelper(css`
  animation: ${rotateDrop} 0.9s cubic-bezier(.22,1.4,.36,1) forwards;
`),

  magneticRise: revealHelper(css`
  animation: ${magneticRise} 1s cubic-bezier(.22,1.4,.36,1) forwards;
`),

  flipX: revealHelper(css`
    animation: ${rotateFullX} 2s ease forwards;
  `),

  flipY: revealHelper(css`
    animation: ${rotateFullY} 2s ease forwards;
  `),
};

/* ======================================================
   🔹 6. CONTINUOUS / FX
====================================================== */

export const continuousAnimations = {
  spin: css`animation: ${spin} 1s linear infinite;`,
  pulse: css`animation: ${pulse} 1.2s ease-in-out infinite;`,
  bounce: css`  animation: ${bounce} 1.6s cubic-bezier(.28,.84,.42,1) infinite;`,
  float: css`  animation: ${float} 3s ease-in-out infinite;`,
  jumpRotate: css`animation: ${jumpRotate} 0.6s ease-in-out;`,
  horizontalLine: css`animation: ${horizontalLine} 1.2s ease-in-out infinite;`,
  shakeX: css`animation: ${shakeX} 0.4s ease-in-out;`,

  skeleton: css`
    ${overlayBase}
    background: rgba(255,255,255,0.06);

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,0.15),
        transparent
      );
      transform: translateX(-100%);
      animation: ${shimmer} 1.4s ease-in-out infinite;
    }
  `,

  glow: css`
    ${overlayBase}
    &::before {
      content: '';
      position: absolute;
      inset: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        120deg,
        transparent 30%,
        rgba(255,255,255,0.6),
        transparent 70%
      );
      animation: ${glowDiagonal} 1.2s ease-out forwards;
    }
  `,

  InfinityGlow: css`
    ${overlayBase}
    &::before {
      content: '';
      position: absolute;
      inset: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        120deg,
        transparent 30%,
        rgba(255,255,255,0.6),
        transparent 70%
      );
      animation: ${glowDiagonal} 3s ease-out infinite;
    }
  `,

  shineInfinite: css`
    ${overlayBase}
    &::before {
      content: '';
      position: absolute;
      inset: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        90deg,
        transparent 30%,
        rgba(255,255,255,0.45),
        transparent 70%
      );
      animation: ${shineLoop} 5s ease-in-out infinite;
    }
  `,

  goldBorderPremium: css`
    position: relative;
    isolation: isolate;

    &::before {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: inherit;
      padding: 2px;

      --gold-angle: 0deg;

      background:
        conic-gradient(
          from var(--gold-angle),
          transparent 0deg,
          transparent 280deg,

          rgba(255,215,0,0.2) 295deg,

          #ffd700 305deg,
          #ffffff 312deg,
          #ffffff 318deg,
          #ffd700 325deg,

          rgba(255,215,0,0.25) 340deg,
          transparent 360deg
        );

      animation: ${rotateGoldAngle} 6s linear infinite;

      -webkit-mask:
        linear-gradient(#000 0 0) content-box,
        linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;

      mask:
        linear-gradient(#000 0 0) content-box,
        linear-gradient(#000 0 0);
      mask-composite: exclude;

      pointer-events: none;

      filter:
        drop-shadow(0 0 8px rgba(255,215,0,0.8))
        drop-shadow(0 0 18px rgba(255,215,0,0.5))
        drop-shadow(0 0 30px rgba(255,215,0,0.25));
    }
  `,

  silverBorderPremium: css`
    position: relative;
    isolation: isolate;

    &::before {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: inherit;
      padding: 2px;

      --silver-angle: 0deg;

      background:
        conic-gradient(
          from var(--silver-angle),
          transparent 0deg,
          transparent 280deg,

          rgba(255,255,255,0.2) 295deg,

          #e6e6e6 305deg,
          #ffffff 312deg,
          #ffffff 318deg,
          #dcdcdc 325deg,

          rgba(255,255,255,0.25) 340deg,
          transparent 360deg
        );

      animation: ${rotateSilverAngle} 7s linear infinite;

      -webkit-mask:
        linear-gradient(#000 0 0) content-box,
        linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;

      mask:
        linear-gradient(#000 0 0) content-box,
        linear-gradient(#000 0 0);
      mask-composite: exclude;

      pointer-events: none;

      filter:
        drop-shadow(0 0 6px rgba(255,255,255,0.7))
        drop-shadow(0 0 14px rgba(255,255,255,0.4))
        drop-shadow(0 0 24px rgba(255,255,255,0.2));
    }
  `,

  rocketLaunchLoop: css`
    animation: ${rocketTrajectory} 6s ease-in-out infinite;
  `,

  lightningStrikeLoop: css`
    animation: ${lightningStrikeMove} 5s ease-in-out infinite;
  `,
};

/* ======================================================
   🔹 7. REGISTRY TIPADO
====================================================== */

const registry = {
  reveal: revealAnimations,
  controlled: controlledAnimations,
  continuous: continuousAnimations,
};

type Registry = typeof registry;
export type AnimationType = keyof Registry;
export type AnimationName<T extends AnimationType> =
  keyof Registry[T];

/* ======================================================
   🔹 8. WRAPPER INTELIGENTE
====================================================== */

type Props<T extends AnimationType> = {
  children: React.ReactNode;
  type: T;
  animation: AnimationName<T>;
  isOn?: boolean;
  center?: boolean;
};

const Container = styled.div<{
  $type: AnimationType;
  $animation: string;
  $isOn?: boolean;
  $active: boolean;
  $center?: boolean;
}>`
  width: 100%;

  ${({ $center }) =>
    $center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ${({ $type, $active }) =>
    $type === "reveal" &&
    css`
      opacity: ${$active ? 1 : 0};
    `}

    ${({ $type, $animation, $active }) => {
    const group = registry[$type];
    const animationCSS = group[$animation as keyof typeof group];

    if ($type === "reveal") {
      return $active ? animationCSS : "";
    }

    if ($type === "controlled") {
      return animationCSS;
    }

    return animationCSS;
  }}
`;

export function MAnimation<T extends AnimationType>({
  children,
  type,
  animation,
  isOn,
  center,
}: Props<T>) {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <Container
      ref={type === "reveal" ? ref : undefined}
      $type={type}
      $animation={animation as string}
      $isOn={isOn}
      $active={isVisible}
      $center={center}
    >
      {children}
    </Container>
  );
}
