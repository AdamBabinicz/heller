import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../portal/Modal";

import {
  InfoSec,
  InfoRow,
  imgStart,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";
import { Button, Container } from "../../globalStyles";
import { Description } from "@material-ui/icons";

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  description,
  headLine,
  lightText,
  topLine,
  img,
  imgT,
  alt,
  start,
}) => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                {/* <Link
                  to="//pl.wikipedia.org/wiki/Michał_Heller"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                <Button big fontBig primary={primary} onClick={() => Toggle()}>
                  {buttonLabel}
                </Button>
                <Modal
                  show={modal}
                  close={Toggle}
                  title="Krytyka nowego ateizmu"
                >
                  <p>
                    W latach 90. Heller gościł w programie BBC Heart of the
                    Matter (ang. Sedno sprawy). Odcinek God under the microscope
                    (Bóg pod mikroskopem) był na temat relacji nauki i wiary, a
                    jednym z uczestników dyskusji był Richard Dawkins. Dawkins
                    uważa religię za zjawisko przestarzałe. Jego zdaniem nauka
                    zgromadziła już wystarczająco dużo wiedzy, żeby odrzucić
                    chrześcijańskie credo oraz uznać teologiczne wyjaśnienia za
                    zbędne. Później, na początku XXI w., Dawkins rozpoczął
                    aktywną kampanię na rzecz promocji ateizmu i krytyki religii
                    – tzw. nowy ateizm. Krytykuje działalność Fundacji
                    Templetona, której Michał Heller oraz Centrum Kopernika są
                    beneficjentami. Dawkins i jego sojusznicy uważają Nagrodę
                    Templetona za akt korupcji ...
                  </p>
                  <br />
                  <p>
                    <em>pl.wikipedia.org/wiki/Michał_Heller</em>
                  </p>
                </Modal>
                {/* </Link> */}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} /> <br /> <br />
                <Img src={imgT} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
