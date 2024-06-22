import { Box, Container, List, ListItem, Typography } from "@mui/material";
import startHereStyles from "../start_here.styles";
import messages from "../messages";

function QuestionAndAnswer(props) {
  let { question, answer } = props.item;

  return (
    <Box sx={startHereStyles.faq}>
      <Typography variant="h6">{question}</Typography>
      <Typography>{answer.description}</Typography>
      {!!answer.details && (
        <List sx={startHereStyles.list}>
          {answer.details.map((d) => (
            <ListItem sx={startHereStyles.listItem}>{d}</ListItem>
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
        <List sx={startHereStyles.list}>
          {messages.faqs.questions.map((q, i) => (
            <ListItem sx={startHereStyles.listItem}>
              <QuestionAndAnswer item={q} key={i} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
}

export default Faqs;
