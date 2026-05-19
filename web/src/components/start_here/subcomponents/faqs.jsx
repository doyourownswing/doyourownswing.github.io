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

function QuestionAndAnswer(props) {
  let { question, answer } = props.item;
  const id = React.useId();

  return (
    <Box sx={startHereStyles.faqContainer}>
      <Accordion disableGutters square sx={startHereStyles.faqAccordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography variant="h6" sx={startHereStyles.faqQuestion}>
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={startHereStyles.faqAnswer}>
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
}

function Faqs() {
  return (
    <Box sx={startHereStyles.faqsContainer}>
      <Container>
        <Typography variant="h4">{messages.faqs.title}</Typography>
        <Box sx={{ margin: "1rem 0" }}>
          {messages.faqs.questions.map((q, i) => (
            <QuestionAndAnswer item={q} key={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Faqs;
