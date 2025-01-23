import { Container, Box, Grid, Stack } from "@mui/material";
import footerStyles from "./footer.styles";
import Brand from "./subcomponents/brand/brand";
import Contact from "./subcomponents/contact/contact";
import Location from "./subcomponents/location/location";
import Browse from "./subcomponents/browse/browse";
import Policies from "./subcomponents/policies/policies";
import { PolicyOptions, BrowseOptions } from "common/nav_options";
import messages from "./messages";

const sections = [
  {
    component: Browse,
    visible: BrowseOptions.length > 0,
    size: { xs: 12, sm: 6, md: 2.75 },
  },
  {
    component: Policies,
    visible: PolicyOptions.length > 0,
    size: { xs: 12, sm: 6, md: 2.75 },
  },
  {
    component: Location,
    visible: true,
    // Location is a big boi so he needs more space
    size: { xs: 12, sm: 6, md: 3.75 },
  },
  {
    component: Contact,
    visible: true,
    size: { xs: 12, sm: 6, md: 2.75 },
  },
];

function GridItem(props) {
  let section = props.section;

  return section.visible ? (
    <Grid
      xs={section.size.xs}
      sm={section.size.sm}
      md={section.size.md}
      sx={footerStyles.gridItem}
    >
      <section.component />
    </Grid>
  ) : null;
}

function Footer() {
  return (
    <Box sx={footerStyles.footerContainer}>
      <Container>
        <Stack
          flexDirection={{ xs: "column", sm: "row" }}
          sx={footerStyles.footerStack}
        >
          <Brand />
          <Box sx={footerStyles.footerLinksGridContainer}>
            <Grid container rowGap={2} sx={footerStyles.footerLinksGrid}>
              {sections.map((s) => (
                <GridItem section={s} />
              ))}
            </Grid>
          </Box>
        </Stack>
        <Box sx={footerStyles.authorFootnote}>{messages.footnote}</Box>
      </Container>
    </Box>
  );
}

export default Footer;
