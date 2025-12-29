import {
  Box,
  Button,
  Container,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import codeOfConductStyles from "./code_of_conduct.styles";
import messages from "./messages";
import DyosLink from "@/components/common/link";
import Callout from "@/components/common/callout";
import { forwardRef, useRef } from "react";

const reportLink = "https://forms.gle/3ueUSbcM1e8qex3r9";

function TitleSection(props) {
  return (
    <Box sx={codeOfConductStyles.titleSectionContainer}>
      <Container>
        <Typography variant="h3" sx={codeOfConductStyles.title}>
          {messages.title}
        </Typography>
        <Callout>
          <Typography variant="inline">
            {messages.reportIncident.part1}
          </Typography>
          <DyosLink href={reportLink} openInNewTab>
            <b>{messages.reportIncident.linkText}</b>
          </DyosLink>
          <Typography variant="inline">
            {messages.reportIncident.part3}
          </Typography>
        </Callout>
        <Box sx={codeOfConductStyles.tableOfContentsContainer}>
          <Typography variant="h6">
            {messages.tableOfContents.header}
          </Typography>
          <List>
            {props.tableOfContents.map((c) => (
              <ListItem
                sx={codeOfConductStyles.tableOfContentsItem}
                key={c.text}
              >
                <Link onClick={c.onClick}>{c.text}</Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
}

const MissionStatement = forwardRef(function MissionStatement(_, ref) {
  return (
    <Box sx={codeOfConductStyles.missionStatementSectionContainer} ref={ref}>
      <Container>
        <Box sx={codeOfConductStyles.missionStatementCard}>
          <Typography
            variant="h4"
            sx={codeOfConductStyles.missionStatementHeader}
          >
            {messages.missionStatementHeader}
          </Typography>
          <Box>
            <Typography sx={codeOfConductStyles.missionStatement}>
              {messages.missionStatement}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
});

function Behavior(props) {
  let behavior = props.behavior;

  function buildExample(example) {
    return (
      <ListItem key={example} sx={codeOfConductStyles.behaviorExample}>
        <Typography>{example}</Typography>
      </ListItem>
    );
  }

  return (
    <Box key={behavior.description} sx={codeOfConductStyles.agreementBehavior}>
      <Typography>{behavior.description}</Typography>
      {!!behavior.examples && (
        <List>{behavior.examples.map(buildExample)}</List>
      )}
    </Box>
  );
}

const AgreementsSection = forwardRef(function Agreements(_, ref) {
  return (
    <Box sx={codeOfConductStyles.agreementsSectionContainer} ref={ref}>
      <Container>
        <Typography variant="h3" sx={codeOfConductStyles.sectionHeader}>
          {messages.agreements.title}
        </Typography>
        <Box sx={codeOfConductStyles.sectionDescriptionContainer}>
          <Typography>{messages.agreements.description}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">
            {messages.agreements.untoleratedBehaviors.header}
          </Typography>
          {messages.agreements.untoleratedBehaviors.behaviors.map((b) => (
            <Behavior behavior={b} key={b.description} />
          ))}
        </Box>
      </Container>
    </Box>
  );
});

function Praxis(props) {
  let praxis = props.praxis;

  return (
    <Box sx={codeOfConductStyles.praxis}>
      {praxis.pieces.map((p, i) => (
        <Typography
          sx={{ fontWeight: p.isBold ? "bold" : "regular" }}
          key={i}
          display="inline"
        >
          {p.text}
        </Typography>
      ))}
    </Box>
  );
}

const PraxisSection = forwardRef(function PraxisSection(_, ref) {
  return (
    <Box sx={codeOfConductStyles.praxisSectionContainer} ref={ref}>
      <Container>
        <Typography variant="h3" sx={codeOfConductStyles.sectionHeader}>
          {messages.praxis.title}
        </Typography>
        <Box sx={codeOfConductStyles.sectionDescriptionContainer}>
          <Typography>{messages.praxis.description}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">{messages.praxis.praxesHeader}</Typography>
          {messages.praxis.praxes.map((p, i) => (
            <Praxis praxis={p} key={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
});

const ResponseSection = forwardRef(function Response(_, ref) {
  return (
    <Box sx={codeOfConductStyles.responseSectionContainer} ref={ref}>
      <Container>
        <Typography variant="h3" sx={codeOfConductStyles.sectionHeader}>
          {messages.responseMethods.title}
        </Typography>
        <Box sx={codeOfConductStyles.sectionDescriptionContainer}>
          <Typography>{messages.responseMethods.description}</Typography>
        </Box>
        <Box sx={codeOfConductStyles.reportIncidentButtonContainer}>
          <Button
            variant="contained"
            sx={codeOfConductStyles.reportIncidentButton}
            size="large"
            href={reportLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {messages.responseMethods.linkToForm}
          </Button>
        </Box>
        <Box>
          <Typography variant="h6">
            {messages.responseMethods.methodsHeader}
          </Typography>
          {messages.responseMethods.methods.map((m) => (
            <Box key={m.shortName} sx={codeOfConductStyles.responseMethod}>
              <Typography sx={codeOfConductStyles.responseMethodShortName}>
                {m.shortName}
              </Typography>
              <Typography>{m.description}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
});

function CodeOfConduct() {
  const missionStatementRef = useRef(null);
  const agreementsRef = useRef(null);
  const praxisRef = useRef(null);
  const reponseMethodsRef = useRef(null);

  function scrollIntoView(ref) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  let tableOfContents = [
    {
      text: messages.tableOfContents.contents.missionStatement,
      onClick: () => scrollIntoView(missionStatementRef),
    },
    {
      text: messages.tableOfContents.contents.agreements,
      onClick: () => scrollIntoView(agreementsRef),
    },
    {
      text: messages.tableOfContents.contents.praxis,
      onClick: () => scrollIntoView(praxisRef),
    },
    {
      text: messages.tableOfContents.contents.responseMethods,
      onClick: () => scrollIntoView(reponseMethodsRef),
    },
  ];

  return (
    <Box>
      <TitleSection tableOfContents={tableOfContents} />
      <MissionStatement ref={missionStatementRef} />
      <AgreementsSection ref={agreementsRef} />
      <PraxisSection ref={praxisRef} />
      <ResponseSection ref={reponseMethodsRef} />
    </Box>
  );
}

export default CodeOfConduct;
