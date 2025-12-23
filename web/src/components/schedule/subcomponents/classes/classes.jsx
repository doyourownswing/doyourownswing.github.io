import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import classesStyles from "./classes.styles";
import messages from "./messages";
import ClassImage from "@/assets/images/classes1.jpg";
import Callout from "@/components/common/callout";
import {
  BulletedList,
  BulletedListItem,
} from "@/components/common/bulleted_list";
import ClassDetails from "./classes_details";

function Classes() {
  return (
    <Box sx={classesStyles.container}>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={classesStyles.textAndImageContainer}
        >
          <Box sx={classesStyles.hookTextContainer}>
            <Typography variant="subtitle" sx={classesStyles.subtitle}>
              {messages.subtitle}
            </Typography>
            <Typography variant="h3" sx={classesStyles.title}>
              {messages.title}
            </Typography>
            <Typography variant="body1">{messages.hook}</Typography>
          </Box>
          <Box>
            <Box
              component="img"
              src={ClassImage}
              sx={classesStyles.picture}
              alt={messages.splashImageAltText}
            />
          </Box>
        </Stack>
        <Callout>
          <Typography variant="h6" sx={classesStyles.calloutTitle}>
            {messages.maskingPolicyCallout.title}
          </Typography>
          <Typography>{messages.maskingPolicyCallout.description}</Typography>
          <BulletedList>
            <BulletedListItem>
              <Typography>{messages.maskingPolicyCallout.classes}</Typography>
            </BulletedListItem>
            <BulletedListItem>
              <Typography>{messages.maskingPolicyCallout.social}</Typography>
            </BulletedListItem>
          </BulletedList>
          <Typography>{messages.maskingPolicyCallout.purchase}</Typography>
        </Callout>

        <Divider sx={classesStyles.divider} />
        <ClassDetails />
      </Container>
    </Box>
  );
}

export default Classes;
