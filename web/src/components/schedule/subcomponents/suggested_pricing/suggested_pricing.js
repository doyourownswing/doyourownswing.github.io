import {
  Box,
  Container,
  IconButton,
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
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import suggestedPricingStyles from "./suggested_pricing.styles";
import { messages, tableDetails } from "./messages";
import theme from "common/theme";
import { useState } from "react";

const NUM_ROWS = 5;

// A styled tablecell where the contents are center aligned.
function CenteredTableCell(props) {
  return (
    <TableCell align="center" sx={suggestedPricingStyles.tableCell} {...props}>
      {props.children}
    </TableCell>
  );
}

// A stylized tablecell for a data column that should span 3 columns.
function SpanningCenteredTableCell(props) {
  return (
    <TableCell
      align="center"
      colSpan={3}
      sx={suggestedPricingStyles.tableCell}
      {...props}
    >
      {props.children}
    </TableCell>
  );
}

// A stylized tablecell for the column header.
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

// A stylized tablecell for the legend cell of each row.
function RowLegendTableCell(props) {
  let legendData = props.data;

  return (
    <TableCell scope="row" sx={suggestedPricingStyles.tableCell} {...props}>
      {legendData.map((l, i) => (
        <Typography key={i} sx={suggestedPricingStyles.cellTitle}>
          {l}
        </Typography>
      ))}
    </TableCell>
  );
}

// Table to be shown on large screens that display all 3 columns and values.
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

  function buildRow(legendData, rowContent) {
    return (
      <TableRow>
        {[
          <RowLegendTableCell data={legendData} />,
          ...buildRowDataCells(rowContent),
        ]}
      </TableRow>
    );
  }

  let header = buildHeader();
  let rows = [];

  for (var i = 0; i < NUM_ROWS; i++) {
    rows.push(
      buildRow(tableDetails.rowLegendCells[i], tableDetails.rowContent[i])
    );
  }

  return (
    <Table>
      <TableHead>{header}</TableHead>
      <TableBody>{rows}</TableBody>
    </Table>
  );
}

// Table to be shown on small screens that display one column at a time and is scrollable.
function SmallScreenSuggestedPricingTable() {
  const [visibleColumn, setVisibleColumn] = useState(1);

  function createHeader() {
    let visibleHeaderData = tableDetails.headerCells[visibleColumn];

    function clickLeft() {
      setVisibleColumn(visibleColumn - 1);
    }

    function clickRight() {
      setVisibleColumn(visibleColumn + 1);
    }

    return (
      <TableCell
        align="center"
        sx={suggestedPricingStyles.headerCell}
        colSpan={2}
      >
        <Box sx={suggestedPricingStyles.smallHeaderCellContent}>
          <IconButton disabled={visibleColumn === 0} onClick={clickLeft}>
            <ChevronLeftIcon />
          </IconButton>
          <Box>
            <Typography sx={suggestedPricingStyles.cellTitle}>
              {visibleHeaderData.title}
            </Typography>
            <Typography>{visibleHeaderData.description}</Typography>
          </Box>
          <IconButton disabled={visibleColumn === 2} onClick={clickRight}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </TableCell>
    );
  }

  function createRow(legend, content, i) {
    return (
      <TableRow>
        <RowLegendTableCell data={legend} />
        <CenteredTableCell key={i} align="left">
          <Typography sx={suggestedPricingStyles.cellText}>
            {content}
          </Typography>
        </CenteredTableCell>
      </TableRow>
    );
  }

  function createRows() {
    let rows = [];

    for (var i = 0; i < NUM_ROWS; i++) {
      let rowData = tableDetails.rowContent[i];
      let rowContent =
        rowData.length === 1 ? rowData[0] : rowData[visibleColumn];

      rows.push(createRow(tableDetails.rowLegendCells[i], rowContent, i));
    }

    return rows;
  }

  let header = createHeader();
  let bodyRows = createRows();

  return (
    <Table>
      <TableHead>{header}</TableHead>
      <TableBody>{bodyRows}</TableBody>
    </Table>
  );
}

// Top-level component for the suggested pricing section.
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
