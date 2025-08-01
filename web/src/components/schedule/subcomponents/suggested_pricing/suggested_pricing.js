import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import suggestedPricingStyles from "./suggested_pricing.styles";
import { messages, tableDetails } from "./messages";
import theme from "common/theme";

function CenteredTableCell(props) {
  return (
    <TableCell align="center" sx={suggestedPricingStyles.dataCell} {...props}>
      {props.children}
    </TableCell>
  );
}

function SpanningCenteredTableCell(props) {
  return (
    <TableCell
      align="center"
      colSpan={3}
      sx={suggestedPricingStyles.spanningDataCell}
      {...props}
    >
      {props.children}
    </TableCell>
  );
}

function HeaderTableCell(props) {
  let data = props.data;

  return (
    <TableCell align="center" sx={suggestedPricingStyles.headerCell} {...props}>
      <Typography sx={suggestedPricingStyles.cellTitle}>
        {data.title}
      </Typography>
      <Typography>{data.description}</Typography>
    </TableCell>
  );
}

function RowLegendTableCell(props) {
  return (
    <TableCell scope="row" sx={suggestedPricingStyles.rowLegendCell} {...props}>
      {props.children}
    </TableCell>
  );
}

function LargeScreenSuggestedPricingTable() {
  function buildHeader() {
    return (
      <TableRow>
        <TableCell sx={suggestedPricingStyles.placeholderCell} />
        {tableDetails.headerCells.map((d, i) => (
          <HeaderTableCell key={i} data={d} />
        ))}
      </TableRow>
    );
  }

  function buildLegendCell(legendData) {
    return (
      <RowLegendTableCell>
        {legendData.map((l, i) => (
          <Typography key={i} sx={suggestedPricingStyles.cellTitle}>
            {l}
          </Typography>
        ))}
      </RowLegendTableCell>
    );
  }

  function buildRowDataCells(rowData) {
    if (rowData.length === 1) {
      return [
        <SpanningCenteredTableCell>{rowData[0]}</SpanningCenteredTableCell>,
      ];
    } else {
      return rowData.map((v, i) => (
        <CenteredTableCell key={i}>
          <Typography sx={suggestedPricingStyles.cellText}>{v}</Typography>
        </CenteredTableCell>
      ));
    }
  }

  let header = buildHeader();
  let rows = [];

  for (var i = 0; i < 5; i++) {
    rows.push(
      <TableRow>
        {[
          buildLegendCell(tableDetails.rowLegendCells[i]),
          ...buildRowDataCells(tableDetails.rowContent[i]),
        ]}
      </TableRow>
    );
  }

  return (
    <Table>
      <TableHead>{header}</TableHead>
      <TableBody>{rows}</TableBody>
    </Table>
  );
}

function SmallScreenSuggestedPricingTable() {
  return "peepee";
}

function SuggestedPricing() {
  const useSmallScreenTable = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={suggestedPricingStyles.container}>
      <Container>
        <Box>
          <Typography variant="h6" sx={suggestedPricingStyles.title}>
            {messages.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={suggestedPricingStyles.description}
          >
            {messages.description}
          </Typography>
        </Box>
        <Box>
          <TableContainer
            component={Paper}
            sx={suggestedPricingStyles.tableCard}
          >
            {!useSmallScreenTable && <LargeScreenSuggestedPricingTable />}
            {useSmallScreenTable && <SmallScreenSuggestedPricingTable />}
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
}

export default SuggestedPricing;
