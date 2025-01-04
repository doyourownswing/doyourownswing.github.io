import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
  Link,
} from "@mui/material";
import { Space } from "components/common/typography";
import { useEffect, useState } from "react";
import SplashImage from "assets/images/birds-eye-social.jpg";
import NytLogo from "assets/images/new-york-times-logo.png";
import messages from "./messages";
import heroStyles from "./hero.styles";
import "./hero.css";
import theme from "common/theme";
import { StartHere } from "common/pages";

const newYorkTimesLink =
  "https://www.nytimes.com/2024/12/23/arts/dance/west-coast-swing-dance.html?unlocked_article_code=1.jk4.meau.nfbTxPGBIDP-";

function Hero(props) {
  const smallestScreenSize = useMediaQuery(theme.breakpoints.down("sm"));
  const adjectiveContainerClass = smallestScreenSize
    ? "adjective-xs"
    : "adjective-sm";

  const [adjectiveIndex, setAdjectiveIndex] = useState(0);

  useEffect(() => {
    const onAnimationRestart = (_) => {
      setAdjectiveIndex((adjectiveIndex + 1) % messages.adjectives.length);
    };

    const adjectiveContainer = document.getElementById("adjective-container");

    adjectiveContainer.addEventListener(
      "animationiteration",
      onAnimationRestart
    );

    return () => {
      adjectiveContainer.removeEventListener(
        "animationiteration",
        onAnimationRestart
      );
    };
  }, [adjectiveIndex, setAdjectiveIndex]);

  return (
    <Box sx={heroStyles.container}>
      <Container>
        <Box sx={heroStyles.contentContainer}>
          <Box sx={heroStyles.leftContent}>
            <Typography sx={heroStyles.pretitle}>
              {messages.pretitle}
            </Typography>
            <Box sx={heroStyles.callToActionContainer}>
              <Typography sx={heroStyles.callToAction}>
                {messages.callToAction}
              </Typography>
              {!smallestScreenSize && <Space sx={heroStyles.callToAction} />}
              <Box
                id={"adjective-container"}
                className={adjectiveContainerClass}
              >
                <Typography sx={heroStyles.adjective}>
                  {messages.adjectives[adjectiveIndex]}
                </Typography>
              </Box>
            </Box>
            <Box sx={heroStyles.descriptionContainer}>
              <Typography sx={heroStyles.description}>
                {messages.friendly}
              </Typography>
              <Typography sx={heroStyles.description}>
                {messages.whatWhenWhere}
              </Typography>
            </Box>
            <Box sx={heroStyles.buttonsContainer}>
              <Button
                sx={heroStyles.primaryButton}
                variant="contained"
                color="buttonLight"
                onClick={props.onClickPrimaryButton}
              >
                {messages.primaryButton}
              </Button>
              <Button
                sx={heroStyles.secondaryButton}
                variant="outlined"
                color="buttonLight"
                href={StartHere.url}
              >
                {messages.secondaryButton}
              </Button>
            </Box>
          </Box>
          <Box sx={heroStyles.rightContent}>
            <Box sx={heroStyles.imageContainer}>
              <Box
                component="img"
                src={SplashImage}
                sx={heroStyles.picture}
                alt="Birds eye view picture of a social at Do Your Own Swing"
              />
            </Box>
          </Box>
        </Box>
        <Box sx={heroStyles.nytCalloutContainer}>
          <Link
            sx={heroStyles.nytCallout}
            href={newYorkTimesLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              component="img"
              src={NytLogo}
              sx={heroStyles.nytLogo}
              alt="The New York Time logo"
            />
            <Typography sx={heroStyles.nytCalloutText}>
              {messages.nytCallout}
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
