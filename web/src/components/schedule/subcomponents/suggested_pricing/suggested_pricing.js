import {
  Box,
  Container,
  Table,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import suggestedPricingStyles from "./suggested_pricing.styles";

function SuggestedPricing() {
  return (
    <Box sx={suggestedPricingStyles.container}>
      <Container>
        <Box>
          <Typography sx={suggestedPricingStyles.title}>
            Suggested Pricing
          </Typography>
          <Typography sx={suggestedPricingStyles.description}>
            Not sure what to pay? Here are some completely optional guidelines.
          </Typography>
        </Box>
        <Box>
          <Table>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Typography>Subsidized Cost</Typography>
                <Typography>For those with limited funds</Typography>
              </TableCell>
              <TableCell>
                <Typography>Average Cost</Typography>
                <Typography>For those with some expendable income</Typography>
              </TableCell>
              <TableCell>
                <Typography>Community Supporter Cost</Typography>
                <Typography>
                  For those who can afford it, this helps keeps us running!
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>2 Classes + Social</Typography>
              </TableCell>
              <TableCell>
                <Typography>$20</Typography>
              </TableCell>
              <TableCell>
                <Typography>$30</Typography>
              </TableCell>
              <TableCell>
                <Typography>$40</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>1 Class + Social</Typography>
              </TableCell>
              <TableCell>
                <Typography>$15</Typography>
              </TableCell>
              <TableCell>
                <Typography>$20</Typography>
              </TableCell>
              <TableCell>
                <Typography>$30</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Social Only</Typography>
              </TableCell>
              <TableCell>
                <Typography>$10</Typography>
              </TableCell>
              <TableCell>
                <Typography>$15</Typography>
              </TableCell>
              <TableCell>
                <Typography>$20</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>First-Timer</Typography>
              </TableCell>
              <TableCell>
                <Typography>$10</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Non-dancing spectator</Typography>
                <Typography>WSDC All-Stars</Typography>
                <Typography>Juniors and Chaperones</Typography>
              </TableCell>
              <TableCell>
                <Typography>FREE</Typography>
              </TableCell>
            </TableRow>
          </Table>
        </Box>
      </Container>
    </Box>
  );
}

export default SuggestedPricing;
