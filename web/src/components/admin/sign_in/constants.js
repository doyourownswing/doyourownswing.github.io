export const EXEMPTION = {
  NONE: "N/A",
  SPONSOR: "Sponsor",
  VOLUNTEER_15: "15 min front desk volunteer",
  VOLUNTEER_30: "30+ min front desk volunteer",
  TEACHER: "Volunteer lesson teacher",
  ALL_STAR: "WSDC All-Star",
  BLACK_INDIGENOUS: "Black / Indigenous",
  PAID_BY_OTHER: "Paid for by someone else",
  OTHER: "Other",
};

export const PAYMENT_OPTIONS = {
  CASH: "Cash",
  VENMO: "Venmo",
  ZELLE: "Zelle",
  PAYPAL: "PayPal",
};

export const EVENTS = {
  L1: { id: "L1", displayName: "Level 1 (8:30pm)" },
  L2: { id: "L2", displayName: "Level 2 (7:30pm)" },
  L3: { id: "L3", displayName: "Level 3 (8:05pm)" },
  L4: { id: "L4", displayName: "Level 4 (8:40pm)" },
  SOCIAL_ONLY: {
    id: "SOCIAL_ONLY",
    displayName: "Social only",
  },
};

export const BASE_EVENTS_VALUE = {
  [EVENTS.L1.id]: false,
  [EVENTS.L2.id]: false,
  [EVENTS.L3.id]: false,
  [EVENTS.L4.id]: false,
  [EVENTS.SOCIAL_ONLY.id]: false,
};

// If it's after 9 pm, default to checking "social only".
export const SOCIAL_ONLY_HOURS_CUTOFF = 21;
export const SOCIAL_ONLY_EVENTS_VALUE = {
  ...BASE_EVENTS_VALUE,
  [EVENTS.SOCIAL_ONLY.id]: true,
};

export const DATA_STATE = {
  NOT_STARTED: "NOT_STARTED",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETE: "COMPLETE",
  ERROR: "ERROR",
};
