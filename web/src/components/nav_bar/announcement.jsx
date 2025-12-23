import { Box, Typography } from "@mui/material";
import announcementStyles from "./announcement.styles";
import "./announcement.css";

function Announcement(props) {
  let announcement = props.announcement;

  // Renders stuff but makes everything not visible.
  //
  // Sticking this in our nav bar would break our ui cuz its wonky, with the top bar not being sticky,
  // and the assumed pixel size of the nav bar, adding an announcement makes the layout fucky.
  // Like the navbar overlaps with the page content especially on mobile.
  //
  // So we add this so that we can render it invisibly at the top of the page to account for any addition in height.
  let invisible = props.invisible;

  if (!announcement) return;

  let containerStyles = {
    ...announcementStyles.container,
    ...(invisible ? announcementStyles.invisible : {}),
  };

  return (
    <Box sx={containerStyles}>
      <Typography className={"fade-in"} sx={announcementStyles.text}>
        {announcement.text}
      </Typography>
    </Box>
  );
}

export default Announcement;
