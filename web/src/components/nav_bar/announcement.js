import { Box, Typography } from "@mui/material";
import announcementStyles from "./announcement.styles";

function Announcement(props) {
  let announcement = props.announcement;
  console.log(announcement);

  if (!announcement) return;

  return (
    <Box sx={announcementStyles.container}>
      <Typography sx={announcementStyles.text}>{announcement.text}</Typography>
    </Box>
  );
}

export default Announcement;
