import { Box, Card } from "@mui/material";
import cardStyles from "./card.styles";

/** A card with default styling. */
function DyosCard(props) {
  // Provides better default link styling, but allows overriding.
  let newSx = { ...cardStyles.card, ...props.sx };

  return (
    <Card {...props} sx={newSx}>
      <Box sx={cardStyles.cardContent}>{props.children}</Box>
    </Card>
  );
}

export default DyosCard;
