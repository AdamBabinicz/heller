import React from "react";
import { Button } from "../../globalStyles";
// import { AiFillThunderbolt } from "react-icons/ai";

import {
  GiCrystalBars,
  GiHandOfGod,
  GiAtomCore,
  GiIonicColumn,
} from "react-icons/gi";
import { BiBible } from "react-icons/bi";
// import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Obszary działalności</PricingHeading>
          <PricingContainer>
            <PricingCard
              to="//wiez.pl/2000/12/01/ks-michal-heller-fizyka-nie-bada-tamtego-swiata"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiAtomCore />
                </PricingCardIcon>
                <PricingCardPlan>Fizyka teoretyczna</PricingCardPlan>
                <PricingCardCost>I</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Zasada Macha</PricingCardFeature>
                  <PricingCardFeature>
                    Osobliwości czasoprzestrzenne
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Geometria nieprzemienna
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Kwantowanie grawitacji
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Wywiad</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard
              to="//bazhum.muzhp.pl/media//files/Filozofia_Nauki/Filozofia_Nauki-r2003-t11-n3_4/Filozofia_Nauki-r2003-t11-n3_4-s5-22/Filozofia_Nauki-r2003-t11-n3_4-s5-22.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiIonicColumn />
                </PricingCardIcon>
                <PricingCardPlan>Filozofia</PricingCardPlan>
                <PricingCardCost>II</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    Platonizm matematyczny
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Matematyczna struktura świata
                  </PricingCardFeature>
                  <PricingCardFeature>Realizm poznawczy</PricingCardFeature>
                  <PricingCardFeature>
                    Historyczne związki z nauką
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Czytaj</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard
              to="//www.rp.pl/Plus-Minus/311139994-Ks-prof-Michal-Heller-Nie-byloby-nauki-bez-teologii.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PricingCardInfo>
                <PricingCardIcon>
                  <BiBible />
                </PricingCardIcon>
                <PricingCardPlan>Teologia</PricingCardPlan>
                <PricingCardCost>III</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    Krytyka nowego ateizmu
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Krytyka fizykoteologii
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Krytyka koncepcji NOMA
                  </PricingCardFeature>
                  <PricingCardFeature>Natura Boga</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Czytaj</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
