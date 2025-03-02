import { Box, Button, Container, Typography } from "@mui/material";
import theme from "common/theme";
import merchStyles from "./merch.styles";
import "./merch.css";
import messages from "./messages";
import DyosLink from "components/common/link";
import merch1 from "assets/images/merch/dy_heart_s_unisex.webp";
import merch2 from "assets/images/merch/dy_heart_s_crop.webp";
import merch3 from "assets/images/merch/dy_heart_s_womens.webp";
import merch4 from "assets/images/merch/im_shy_tee_unisex.webp";
import merch5 from "assets/images/merch/dyos_stacked_unisex.webp";
import merch6 from "assets/images/merch/heart_pocket_tee.webp";
import { Space, Text } from "components/common/typography";

const googleFormLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSeoUWA8LICvFhxhwiYBqWAjDxOZta1LgnPzkWtaWAoXQ1UESQ/viewform?usp=header";
const printfulLink = "https://dyos.printful.me/";

// TODO: add alt text
// maybe have each pic link to the particular listing?
const shirts = [merch1, merch2, merch3, merch4, merch5, merch6];

// The shirts to use for the carousel - needs to be doubled to make the infinite carousel work.
const doubledShirts = [...shirts, ...shirts];

export default function Merch() {
  return (
    <Box sx={merchStyles.sectionContainer}>
      <Container sx={merchStyles.content}>
        <Typography variant="h3" sx={merchStyles.title}>
          {messages.title}
        </Typography>
        {/* https://codepen.io/studiojvla/pen/qVbQqW */}
        <Box sx={merchStyles.carouselContainer}>
          <Box sx={merchStyles.carouselContent} id="carousel-content">
            {doubledShirts.map((s, i) => (
              <Box component="img" src={s} key={i} sx={merchStyles.image}></Box>
            ))}
          </Box>
        </Box>

        <Box sx={merchStyles.orderContainer}>
          <Button
            variant="contained"
            color={theme.palette.buttonBlue.name}
            target="_blank"
            rel="noopener noreferrer"
            href={printfulLink}
            size="large"
            sx={merchStyles.orderButton}
          >
            {messages.orderButton}
          </Button>
          <Box sx={merchStyles.formCallout}>
            <Text>{messages.doNotLike}</Text>
            <Space />
            <DyosLink href={googleFormLink} openInNewTab>
              {messages.formCallout}
            </DyosLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
