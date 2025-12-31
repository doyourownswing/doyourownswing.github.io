import { Box, Card } from "@mui/material";
import cardStyles from "./card.styles";

/** A card with default styling. */
function DyosCard(props) {
  // Provides better default styling, but allows overriding.
  let newSx = { ...cardStyles.card, ...props.sx };
  let contentSx = { ...cardStyles.cardContent, ...props.contentSx };

  return (
    <Card {...props} sx={newSx}>
      <Box sx={contentSx}>{props.children}</Box>
    </Card>
  );
}

export default DyosCard;
