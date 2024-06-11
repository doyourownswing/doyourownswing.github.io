import { Box } from "@mui/material";
import defaultVideoRendererStyles from "./default_video_renderer.styles";

function DefaultVideoRenderer() {
  return (
    <Box sx={defaultVideoRendererStyles.videoContainer}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/v4fRV0aG3lc?si=BKXYaAPC8ozlSUWF"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </Box>
  );
}

export default DefaultVideoRenderer;
