import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import startHereStyles from "../start_here.styles";
import messages from "../messages";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { BOX_SHADOW } from "@/common/constants";

function QuestionAndAnswer(props) {
  let { question, answer } = props.item;
  const id = React.useId();

  return (
    <Box sx={{ margin: "1rem 0" }}>
      <Accordion
        disableGutters
        square
        sx={{
          padding: "0.5rem 1rem",
          borderRadius: "1rem",
          boxShadow: BOX_SHADOW,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "600", fontSize: { xs: "1rem" } }}
          >
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ marginBottom: "0.5rem" }}>
          <Typography>{answer.description}</Typography>
          {!!answer.details && (
            <List sx={startHereStyles.list}>
              {answer.details.map((d, i) => (
                <ListItem sx={startHereStyles.listItem} key={i}>
                  <Typography>{d}</Typography>
                </ListItem>
              ))}
            </List>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  return (
    <Box sx={startHereStyles.faq}>
      <Typography variant="h6">{question}</Typography>
      <Typography>{answer.description}</Typography>
      {!!answer.details && (
        <List sx={startHereStyles.list}>
          {answer.details.map((d, i) => (
            <ListItem sx={startHereStyles.listItem} key={i}>
              {d}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

function Faqs() {
  return (
    <Box sx={startHereStyles.faqsContainer}>
      <Container>
        <Typography variant="h4">{messages.faqs.title}</Typography>
        {/* <List sx={startHereStyles.list}> */}
        <Box sx={{ margin: "1rem 0" }}>
          {messages.faqs.questions.map((q, i) => (
            // <ListItem sx={startHereStyles.listItem}>
            <QuestionAndAnswer item={q} key={i} />
            // </ListItem>
          ))}
          {/* </List> */}
        </Box>
      </Container>
    </Box>
  );
}

export default Faqs;
