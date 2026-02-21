import DyosCard from "@/components/common/card";
import linksStyles from "@/components/links/links.styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Container,
  Link,
  SvgIcon,
  Typography,
} from "@mui/material";
import Logo from "@/assets/images/progress-circle-heart.png";
import DiscordIcon from "@/components/common/icons/discord";
import {
  Email,
  ExpandMore,
  Facebook,
  Gavel,
  Instagram,
  Paid,
  School,
  Storefront,
} from "@mui/icons-material";
import {
  DYOS_DISCORD_LINK,
  DYOS_FACEBOOK_LINK,
  DYOS_INSTAGRAM_LINK,
  DYOS_MERCH_LINK,
  MAILTO_DYOS_EMAIL,
  PAYPAL_LINK,
  REGISTRATION_FORM_LINK,
  VENMO_LINK,
  ZELLE_LINK,
} from "@/common/constants";
import logoIcon from "@/assets/images/google-forms-logo.png";
import PaypalLogoIcon from "@/assets/images/payment_logos/paypal-logo-icon.svg?react";
import VenmoLogoIcon from "@/assets/images/payment_logos/venmo-logo-icon.png";
import ZelleLogoIcon from "@/assets/images/payment_logos/zelle-logo-icon.png";
import { useState } from "react";

function Header() {
  return (
    <Box sx={linksStyles.topContainer}>
      <Avatar sx={linksStyles.logoAvatar}>
        <Box component="img" src={Logo} sx={linksStyles.logoImage}></Box>
      </Avatar>
      <Box sx={linksStyles.titleTextContainer}>
        <Typography variant="h5" sx={linksStyles.title}>
          Do Your Own Swing
        </Typography>
        <Typography variant="subtitle1" sx={linksStyles.subtitle}>
          Thursday night West Coast Swing classes and social in the Bay Area
        </Typography>
      </Box>
      <Socials />
    </Box>
  );
}

function SocialIconContainer(props) {
  return (
    <Box sx={linksStyles.socialsIconContainer}>
      <Link href={props.href}>{props.children}</Link>
    </Box>
  );
}

function Socials() {
  return (
    <Box sx={linksStyles.socialsContainer}>
      <SocialIconContainer href={DYOS_DISCORD_LINK}>
        <SvgIcon sx={linksStyles.discordIcon}>
          <DiscordIcon />
        </SvgIcon>
      </SocialIconContainer>
      <SocialIconContainer href={DYOS_FACEBOOK_LINK}>
        <Facebook sx={linksStyles.facebookIcon} />
      </SocialIconContainer>
      <SocialIconContainer href={DYOS_INSTAGRAM_LINK}>
        <Instagram sx={linksStyles.instagramIcon} />
      </SocialIconContainer>
      <SocialIconContainer href={MAILTO_DYOS_EMAIL}>
        <Email sx={linksStyles.emailIcon} />
      </SocialIconContainer>
    </Box>
  );
}

function Zelle() {
  return (
    <PaymentItemLink
      href={ZELLE_LINK}
      leftItem={
        <Box component="img" src={ZelleLogoIcon} sx={linksStyles.logoIcon} />
      }
      label="Zelle"
    />
  );
}

function Venmo() {
  return (
    <PaymentItemLink
      href={VENMO_LINK}
      leftItem={
        <Box component="img" src={VenmoLogoIcon} sx={linksStyles.logoIcon} />
      }
      label="Venmo"
    />
  );
}

function Paypal() {
  return (
    <PaymentItemLink
      href={PAYPAL_LINK}
      leftItem={
        <SvgIcon component={PaypalLogoIcon} viewBox="0 0 48 48"></SvgIcon>
      }
      label="PayPal"
    />
  );
}

function PaymentMethods() {
  let [expanded, setExpanded] = useState(false);

  const onExpandChange = (_, expanded) => setExpanded(expanded);

  let containerStyles = expanded
    ? linksStyles.accordionLinkContainerExpanded
    : linksStyles.accordionLinkContainer;

  return (
    <Accordion sx={containerStyles} onChange={onExpandChange}>
      <AccordionSummary
        sx={linksStyles.accordionLinkSummary}
        expandIcon={<ExpandMore />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Box sx={linksStyles.linkBoxSide}>
          <Paid sx={linksStyles.moneyIcon} />
        </Box>
        <Box sx={linksStyles.accordionLinkBoxText}>
          <Typography sx={linksStyles.linkBoxText}>Payment methods</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={linksStyles.paymentOptionsContainer}>
          <Zelle />
          <Venmo />
          <Paypal />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

function ItemLink(props) {
  let item = (
    <Box sx={linksStyles.linkContainer}>
      <Box sx={linksStyles.linkBoxSide}>{props.leftItem}</Box>
      <Typography sx={linksStyles.linkBoxText}>{props.label}</Typography>
      <Box sx={linksStyles.linkBoxSide}>{props.rightItem}</Box>
    </Box>
  );

  if (props.href) {
    return (
      <Link underline="none" href={props.href}>
        {item}
      </Link>
    );
  } else {
    return item;
  }
}

function PaymentItemLink(props) {
  return (
    <Link underline="none" href={props.href}>
      <Box sx={linksStyles.paymentLinkContainer}>
        <Box sx={linksStyles.linkBoxSide}>{props.leftItem}</Box>
        <Typography sx={linksStyles.linkBoxText}>{props.label}</Typography>
        <Box sx={linksStyles.linkBoxSide}>{props.rightItem}</Box>
      </Box>
    </Link>
  );
}

function Registration() {
  return (
    <ItemLink
      href={REGISTRATION_FORM_LINK}
      leftItem={
        <Box component="img" src={logoIcon} sx={linksStyles.logoIcon} />
      }
      label="One-time registration form"
    />
  );
}

function ClassDetails() {
  return (
    <ItemLink href={"/classes"} leftItem={<School />} label="Find your class" />
  );
}

function CodeOfConduct() {
  return (
    <ItemLink
      href={"/code-of-conduct"}
      leftItem={<Gavel sx={linksStyles.gavelIcon} />}
      label="Code of conduct"
    />
  );
}

function Merch() {
  return (
    <ItemLink
      href={DYOS_MERCH_LINK}
      leftItem={<Storefront sx={linksStyles.storeIcon} />}
      label="Get your merch!"
    />
  );
}

function Links() {
  return (
    <Box sx={linksStyles.container}>
      <Box sx={linksStyles.contentContainer}>
        <Container sx={linksStyles.cardContainer}>
          <DyosCard sx={linksStyles.card}>
            <Box sx={linksStyles.cardContent}>
              <Header />
              <Box sx={linksStyles.linksContainer}>
                <Registration />
                <PaymentMethods />
                <ClassDetails />
                <CodeOfConduct />
                <Merch />
              </Box>
            </Box>
          </DyosCard>
        </Container>
      </Box>
    </Box>
  );
}

export default Links;
