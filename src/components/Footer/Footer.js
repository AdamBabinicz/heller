import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialIcon,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Największym hazardem jest ludzkie życie, w którym stawką jest ono
          samo.
        </FooterSubHeading>
        <FooterSubText>Michał Heller</FooterSubText>
        {/* <Form>
          <FormInput name="email" type="email" placeholder="Twój email" />
          <Button fontBig>Zasubskrybuj!</Button>
        </Form> */}
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Kosmologia</FooterLinkTitle>
            <FooterLink
              to="//www.znak.com.pl/ksiazka/filozofia-kosmologii-wprowadzenie-michal-heller-39251"
              target="_blank"
              rel="noopener noreferrer"
            >
              Filozofia kosmologii Wprowadzenie
            </FooterLink>
            <FooterLink
              to="//www.znak.com.pl/ksiazka/stworzenie-i-poczatek-wszechswiata-teologia-filozofia-kosmologia-heller-michal-pabjan-tadeusz-48649"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stworzenie i początek wszechświata Teologia - Filozofia -
              Kosmologia
            </FooterLink>
            <FooterLink
              to="//www.ceneo.pl/19314428"
              target="_blank"
              rel="noopener noreferrer"
            >
              Granice kosmosu i kosmologii
            </FooterLink>
            <FooterLink
              to="//tezeusz.pl/kosmologia-kwantowa-michal-heller"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kosmologia kwantowa
            </FooterLink>
            <FooterLink
              to="//wielkiepytania.wsiz.pl/prelegent/michal-heller"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wielkie pytania
            </FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Recenzje</FooterLinkTitle>
            <FooterLink
              to="//lubimyczytac.pl/oficjalne-recenzje-ksiazek/10911/sens-zycia-wedlug-ksiedza-hellera"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ważniejsze niź Wszechświat
            </FooterLink>
            <FooterLink
              to="//www.kulturatka.pl/2019/09/28/filozofia-kosmologii-michala-hellera-fascynujaca-podroz-ku-granicom-poznania-recenzja"
              target="_blank"
              rel="noopener noreferrer"
            >
              Filozofia kosmologii
            </FooterLink>
            <FooterLink
              to="//www.polityka.pl/tygodnikpolityka/kultura/ksiazki/1533237,1,recenzja-ksiazki-michal-heller-filozofia-przypadku-kosmiczna-fuga-z-preludium-i-coda.read"
              target="_blank"
              rel="noopener noreferrer"
            >
              Filozofia przypadku
            </FooterLink>
            <FooterLink
              to="//www.granice.pl/recenzja/podgladanie-wszechswiata/1519"
              target="_blank"
              rel="noopener noreferrer"
            >
              Podglądanie Wszechświata
            </FooterLink>
            <FooterLink
              to="//www.bazhum.muzhp.pl/media/files/Studia_Philosophiae_Christianae/Studia_Philosophiae_Christianae-r1993-t29-n1/Studia_Philosophiae_Christianae-r1993-t29-n1-s198-200/Studia_Philosophiae_Christianae-r1993-t29-n1-s198-200.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nowa fizyka i nowa teologia
            </FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Filmy</FooterLinkTitle>
            <FooterLink
              to="//www.youtube.com/watch?v=Q0edQgy056Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              O wieczności
            </FooterLink>
            <FooterLink
              to="//www.youtube.com/watch?v=jlFM6x4I5ms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wszystkie możliwe wszechświaty
            </FooterLink>
            <FooterLink
              to="//www.youtube.com/watch?v=5XCPaMlebsA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rozmowa
            </FooterLink>
            <FooterLink
              to="//www.youtube.com/watch?v=Uxb_QKlKdPs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Benefis
            </FooterLink>
            <FooterLink
              to="//www.youtube.com/watch?v=ejS6v9VkX2c"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wierzę w Boga, który jest
            </FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink
              to="//radio.lublin.pl/2016/10/ks-prof-michal-heller-nasze-dzisiejsze-myslenie-bardzo-czesto-ulega-wplywom-mediow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nasze dzisiejsze myślenie ...
            </FooterLink>
            <FooterLink
              to="//www.rmf24.pl/raporty/raport-copernicus-festival/news-ks-prof-michal-heller-cale-nasze-zycie-jest-utkane-z-przypad,nId,2584688#crp_state=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Całe nasze życie ...
            </FooterLink>
            <FooterLink
              to="//www.rmfclassic.pl/polecamy/Slowo,5/Wieczor-urodzinowy-ks-prof-Michala-Hellera,43729.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wieczór urodzinowy
            </FooterLink>
            <FooterLink
              to="//pl.aleteia.org/2021/04/12/ks-michal-heller-przekazywanie-zycia-jest-misternym-dzielem-stworzenia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Przekazywanie życia ...
            </FooterLink>
            {/* <FooterLink to="/">Terms of Services</FooterLink> */}
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            MH
          </SocialLogo>
          <WebsiteRights>
            Tarnów 2021 - {new Date().getFullYear()}. <br />
            <p>
              w oparciu o materiały: https://pl.wikipedia.org/wiki/Michał_Heller
            </p>
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href={
                "//www.facebook.com/watch/?ref=search&v=722128111671057&external_log_id=144b0b00-1921-452c-8a8a-8411c3594f70&q=micha%C5%82%20heller"
              }
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href={
                "//twitter.com/search?q=micha%C5%82%20heller&src=typed_query"
              }
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href={"//www.youtube.com/watch?v=t74L4ipHRF8"}
              target="_blank"
              aria-label="Youtube"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
