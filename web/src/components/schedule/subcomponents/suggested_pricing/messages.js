const messages = {
  title: "Suggested Pricing",
  description:
    "Not sure what to pay? Here are some completely optional guidelines.",
};

const tableDetails = {
  headerCells: [
    {
      title: "Subsidized Cost",
      description: "For those with limited funds",
    },
    {
      title: "Average Cost",
      description: "For those with some expendable income",
    },
    {
      title: "Community Supporter Cost",
      description: "For those who can afford it, this helps keeps us running!",
    },
  ],
  rowLegendCells: [
    ["2 Classes + Social"],
    ["1 Class + Social"],
    ["Social Only"],
    ["First-timers"],
    ["Non-dancing spectator", "WSDC All-Stars", "Juniors and Chaperones"],
  ],
  rowContent: [
    ["$20", "$30", "$40"],
    ["$15", "$20", "$30"],
    ["$10", "$15", "$20"],
    ["$10"],
    ["FREE"],
  ],
};

export { messages, tableDetails };
