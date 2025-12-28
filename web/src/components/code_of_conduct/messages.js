import { default as commonMessages } from "@/common/messages";

const messages = {
  title: "Code of Conduct",
  reportIncident: {
    part1: `If you have experienced, witnessed, or heard about a breach in the 
      Code of Conduct at a DYOS event, or if you have experienced harm in 
      relation to DYOS events, you can submit a report by  `,
    linkText: "clicking here",
    part3: ".",
  },
  tableOfContents: {
    header: "In this Code of Conduct:",
    contents: {
      missionStatement: "Mission Statement",
      agreements: "Agreements",
      praxis: "Values as Praxis",
      responseMethods: "Response Methods",
    },
  },
  missionStatementHeader: "Mission Statement",
  missionStatement: commonMessages.missionStatement,
  agreements: {
    title: "Agreements",
    description: `The following behavioral agreements apply to all Do Your Own Swing 
      participants, including attendees, teachers, DJs, and volunteers, and will be 
      upheld through corrective action, as needed.`,
    untoleratedBehaviors: {
      header: "Behaviors that will not be tolerated at Do Your Own Swing:",
      behaviors: [
        {
          description: `Discrimination and bigotry, such as racism, ableism, ageism, 
            queerphobia, transphobia, or any other expression of structural prejudice, 
            will not be tolerated in any form.`,
        },
        {
          description: `Deliberate violence in any form, such as unwanted physical touch,
            derogatory remarks or gestures, or physical harm will not be tolerated.`,
        },
        {
          description:
            "Inappropriate interactions regarding minors will not be tolerated. These include:",
          examples: [
            "Offering, selling, or discussing age-restricted substances.",
            "Flirting or discussing sexual behavior.",
            "Requesting or exchanging contact information, suggesting/offering/inviting private " +
              "interactions, or arranging to meet with a minor without guardian consent and supervision.",
            "Recording video or taking photographs of minors without guardian consent.",
            "Commenting on a minor's appearance.",
          ],
        },
        {
          description:
            "Violating explicitly stated boundaries will not be tolerated.",
        },
        {
          description: "Threats or intimidation will not be tolerated.",
        },
      ],
    },
  },
  praxis: {
    title: "Values as Praxis",
    description: `All attendees are invited to be mindful of, and open to hearing about,
      the impact of their behavior on the emotional, mental, and physical-well being of 
      other attendees. Self-reflection and good-faith dialogue around unintended harm 
      can set the conditions for mindfulness, connection, vulnerability, support, 
      creativity, consent, and safety to blossom in our community. `,
    praxesHeader: "Our values put into practice:",
    praxes: [
      {
        pieces: [
          {
            text: "Be mindful when taking pictures and filming. ",
            isBold: true,
          },
          {
            text: `If you are filming one partnership for more than a few seconds, 
              only do so with direct verbal consent.`,
            isBold: false,
          },
        ],
      },
      {
        pieces: [
          {
            text: "Be mindful when posting pictures and videos online. ",
            isBold: true,
          },
          {
            text: `Part of being a safe space for TNBGE (Trans, Non-Binary, Gender Expansive) 
              people (as well as being a safe space for anyone) is allowing people to experiment 
              with their self presentation and personal expression without documentation of it 
              being posted to the internet without consent. `,
            isBold: false,
          },
          {
            text: `If someone does not want pictures or videos of themselves online, 
              they can indicate that by wearing a reflective wristband. `,
            isBold: true,
          },
        ],
      },
      {
        pieces: [
          {
            text: "All social agreements are ongoing. ",
            isBold: true,
          },
          {
            text: `Agreements to dance, converse, or engage with any activity do not 
              override a person's present-time comfort levels. Social activities, 
              such as dancing and conversing, may be concluded by any person at 
              any time without explanation.`,
            isBold: false,
          },
        ],
      },
      {
        pieces: [
          {
            text: "To the best of your ability, hold yourself and others in kindness. ",
            isBold: true,
          },
          {
            text: `In the absence of a safety issue, be curious and seek to find the 
              distance from a person that allows you to hold both them and yourself 
              in kind regard. If safety *is* an issue, please tend to your needs and 
              consider reporting/seeking support. `,
            isBold: false,
          },
        ],
      },
      {
        pieces: [
          {
            text: '"No" is a complete answer to any request, including a request for a dance. ',
            isBold: true,
          },
          {
            text: `While dance is the activity/interest that brings us together, many people 
              use DYOS primarily as a community gathering space, especially if they are 
              injured or mostly in need of social connection. `,
            isBold: false,
          },
        ],
      },
      {
        pieces: [
          {
            text: 'Participants are encouraged to exercise their "no." ',
            isBold: true,
          },
          {
            text: `If, in addition to your no, you choose to share a reason, that is a kindness, 
              but not a requirement. `,
            isBold: false,
          },
        ],
      },
      {
        pieces: [
          {
            text: "Honor your energy. ",
            isBold: true,
          },
          {
            text: `If your needs are met and you have the energy to offer warmth to others, 
              please do so. This can look like acknowledging or thanking someone for a dance, 
              letting people know that you are happy to see them, asking people questions 
              about themselves, or whatever warmth and outreach look like for you when 
              you are feeling resourced!`,
            isBold: false,
          },
        ],
      },
      {
        pieces: [
          {
            text: "Prioritize remembering names and pronouns. ",
            isBold: true,
          },
          {
            text: `If you use the wrong name or pronouns, or are corrected, quickly correct 
              yourself, continue with what you were saying, and make an effort to use the 
              correct name and pronouns in the future.`,
            isBold: false,
          },
        ],
      },
      {
        pieces: [
          {
            text: "If offering a compliment or affirmation, ",
            isBold: false,
          },
          {
            text: "do not comment on physical appearance or health related topics. ",
            isBold: true,
          },
          {
            text: `Try offering an affirmation about someone's choices and impact, 
              a developed quality, or an act of service. `,
            isBold: false,
          },
        ],
      },
    ],
  },
  responseMethods: {
    title: "Reponse Methods",
    linkToForm: "Report an incident",
    description: `If unwanted or harmful behavior occurs, the people who report experiencing harm, 
      or who are observed to be experiencing potential harm, will be consulted for desired actions 
      and processes. If the person chooses to share their identity and contact information, Riley 
      will contact them about their safety needs and next steps.`,
    methodsHeader: "Possible methods for reducing further harm:",
    methods: [
      {
        shortName: "Education-Based Conversation",
        description: `Riley may contact the person who has caused harm to bring awareness that 
          their impact has not been what they had hoped. Riley and the person-in-question may 
          talk through alternative ways to engage in the future. These conversations require 
          the person who has had a negative impact to believe those that they have hurt and to 
          be willing to find creative solutions. `,
      },
      {
        shortName: "Conditional Participation",
        description: `Following an education-based conversation, Riley may implement a temporary 
          or permanent increase in guidelines for an individual to address the unwanted or harmful 
          behavior in question. (i.e. “For now, please only ask each person to dance once per night.”)`,
      },
      {
        shortName: "Conditional Denial of Access to DYOS",
        description: `Following an education-based conversation, Riley may ban an individual from 
          participating in DYOS events until certain criteria have been met, such as a letter 
          explaining an understanding of the situation and a plan for change, or the completion 
          of an outside program or training.`,
      },
      {
        shortName: "Unconditional Denial of Access to DYOS",
        description: `If a person demonstrates a disregard for others, an unwillingness to understand 
          the impact of their actions, refuses to engage with solutions, or cannot adjust their 
          behavior, an unconditional ban will be put into effect, barring them from participating 
          in any DYOS events.`,
      },
    ],
  },
};

export default messages;
