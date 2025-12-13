import { Box, Container, Fade, Typography } from "@mui/material";
import AboutUsSplash from "assets/images/about-us-splash.jpg";
import ImageOfRiley from "assets/images/riley-headshot.jpg";
import aboutStyles from "./about.styles";
import messages from "./messages";
import DyosLink from "components/common/link";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import PurpleLogo from "assets/svgs/purple-logo.svg";

const Paragraph = styled("p")(({ _ }) => aboutStyles.paragraph);

function Splash() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box sx={aboutStyles.splashContainer}>
      <Box
        component="img"
        src={AboutUsSplash}
        sx={aboutStyles.splash}
        alt={messages.aboutUsSplashDescription}
        onLoad={() => setLoaded(true)}
      />
      <Fade in={loaded} timeout={500}>
        <Box sx={aboutStyles.splashTextOverlayContainer}>
          <Typography variant="h2" sx={aboutStyles.title}>
            {messages.title}
          </Typography>
          <Typography variant="subtitle" sx={aboutStyles.subtitle}>
            {messages.subtitle}
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
}

function BioText() {
  function createPiece(piece, i) {
    if (!!piece.link) {
      return (
        <DyosLink
          href={piece.link}
          sx={aboutStyles.textLink}
          openInNewTab
          key={i}
        >
          {piece.text}
        </DyosLink>
      );
    }
    return (
      <Typography
        display="inline"
        component="span"
        sx={aboutStyles.text}
        key={i}
      >
        {piece.text}
      </Typography>
    );
  }

  function createParagraph(paragraph, i) {
    return <Paragraph key={i}>{paragraph.pieces.map(createPiece)}</Paragraph>;
  }

  return <Box>{messages.rileyBio.paragraphs.map(createParagraph)}</Box>;
}

function CliftonStrengths() {
  function createComma(i) {
    return (
      <Typography display="inline" sx={aboutStyles.textLink} key={i}>
        {messages.strengthsDelimiter}
      </Typography>
    );
  }

  function createStrength(strength) {
    return (
      <DyosLink
        href={strength.link}
        openInNewTab
        sx={aboutStyles.textLink}
        key={strength.name}
      >
        {strength.name}
      </DyosLink>
    );
  }

  let strengths = messages.rileyBio.cliftonStrengths;
  let strengthsSection = [];

  for (var i in strengths) {
    strengthsSection.push(createStrength(strengths[i]));

    if (i < strengths.length - 1) {
      strengthsSection.push(createComma(i));
    }
  }

  return (
    <Box>
      <Typography variant="h6">{messages.cliftonStrengths}</Typography>
      {strengthsSection}
    </Box>
  );
}

function RileyBio() {
  return (
    <Box sx={aboutStyles.contentContainer}>
      <Box sx={aboutStyles.logoEmbellishmentContainer1}>
        <Box
          component="img"
          sx={aboutStyles.logoEmbellishment1}
          src={PurpleLogo}
        />
      </Box>
      <Box sx={aboutStyles.logoEmbellishmentContainer2}>
        <Box
          component="img"
          sx={aboutStyles.logoEmbellishment2}
          src={PurpleLogo}
        />
      </Box>
      <Container>
        <Box
          component="img"
          src={ImageOfRiley}
          sx={aboutStyles.rileyHeadshot}
          alt={messages.rileyHeadshotDescription}
        />
        <Box>
          <Box sx={aboutStyles.rileySectionTitleContainer}>
            <Typography variant="h3" sx={aboutStyles.rileySectionTitle}>
              {messages.rileySectionTitle}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={aboutStyles.rileySectionSubtitle}
            >
              {messages.rileySectionSubtitle}
            </Typography>
          </Box>
          <BioText />
          <CliftonStrengths />
        </Box>
      </Container>
    </Box>
  );
}

function About() {
  return (
    <Box>
      <Splash />
      <RileyBio />
    </Box>
  );
}

export default About;
