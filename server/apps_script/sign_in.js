const BASE_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1FAG3d9pewQjECWRYtud4vOF5Q8e8RrYg87cnEUNuM2I/edit";

const TAB_IDS = {
  registeredPeople: 80689464,
  sponsors: 294023538,
  outputData: 0, //TODO
};

const REGISTERED_PEOPLE_NAME_COLUMN = "J";
const REGISTERED_PEOPLE_FIRST_ROW = 2;

const SPONSOR_MONTH_COLUMN = "A";
const SPONSOR_NAME_COLUMN = "B";
const SPONSOR_FIRST_ROW = 5;

function openSheetWithTab(tabId) {
  const sheet = SpreadsheetApp.openByUrl(BASE_SHEET_URL);
  return sheet.getSheetById(tabId);
}

function getSponsors() {
  const sheet = openSheetWithTab(TAB_IDS.sponsors);

  const lastRowNum = sheet.getLastRow();
  const values = sheet
    .getRange(
      `${SPONSOR_MONTH_COLUMN}${SPONSOR_FIRST_ROW}:${SPONSOR_NAME_COLUMN}${lastRowNum}`
    )
    .getValues();

  let sponsorNames = [];

  for (var row of values) {
    let sponsorMonth = new Date(row[0]);
    let currentMonth = new Date();

    if (
      sponsorMonth.getMonth() === currentMonth.getMonth() &&
      sponsorMonth.getFullYear() === currentMonth.getFullYear()
    ) {
      sponsorNames.push(row[1]);
    }
  }

  return sponsorNames;
}

function getRegisteredPeople() {
  let sponsors = getSponsors();

  let sheet = openSheetWithTab(TAB_IDS.registeredPeople);

  let lastRowNum = sheet.getLastRow();
  let values = sheet
    .getRange(
      `${REGISTERED_PEOPLE_NAME_COLUMN}${REGISTERED_PEOPLE_FIRST_ROW}:${REGISTERED_PEOPLE_NAME_COLUMN}${lastRowNum}`
    )
    .getValues();

  let people = [];

  for (var row of values) {
    let name = row[0];

    people.push({
      name: name,
      sponsor: sponsors.includes(name),
    });
  }

  return people;
}

function doGet(e) {
  let myData = {
    people: getRegisteredPeople(),
  };

  let jsonOutput = JSON.stringify(myData);
  return ContentService.createTextOutput(jsonOutput).setMimeType(
    ContentService.MimeType.JSON
  );
}

const TEST_SIGN_IN_SHEET =
  "https://docs.google.com/spreadsheets/d/1ywyE0Bo1Jth2kKe05pMJgPEZFEf8wASZ5CGMR9MOldQ/edit";
const TEST_SIGN_IN_TAB_ID = "609287011";

const PROD_SIGN_IN_SHEET =
  "https://docs.google.com/spreadsheets/d/1dJ_m42m3F3VjxRcw9cqQScBVN2IfwAfAc-Q3r2FjzhU/";
const PROD_SIGN_IN_TAB_ID = "0";

// TODO: Ensure no duplicates
function doPost(e) {
  let data = JSON.parse(e.postData.contents);

  const sheet = SpreadsheetApp.openByUrl(
    data.useProd ? PROD_SIGN_IN_SHEET : TEST_SIGN_IN_SHEET
  );
  let tab = sheet.getSheetById(
    data.useProd ? PROD_SIGN_IN_TAB_ID : TEST_SIGN_IN_TAB_ID
  );

  // Do something more sophisticated here like detect sponsors and figure out how much each person paid
  let averagePaid = (parseInt(data.amountPaid) || 0) / data.persons.length;

  for (var person of data.persons) {
    tab.appendRow([
      new Date(),
      person,
      data.l1,
      data.l2,
      data.l3,
      data.l4,
      data.socialOnly,
      data.mask,
      averagePaid,
      data.paymentMethod,
      data.exemption,
      data.notes,
    ]);
  }

  let jsonOutput = JSON.stringify({ success: true });
  return ContentService.createTextOutput(jsonOutput).setMimeType(
    ContentService.MimeType.JSON
  );
}
