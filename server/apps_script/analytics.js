const SIGN_IN_DATA_SHEET =
  "https://docs.google.com/spreadsheets/d/1dJ_m42m3F3VjxRcw9cqQScBVN2IfwAfAc-Q3r2FjzhU/edit?gid=0#gid=0";

function dateTimeStringToDateString(dateTimeString) {
  let dateTime = new Date(dateTimeString);
  let date = new Date(
    dateTime.getFullYear(),
    dateTime.getMonth(),
    dateTime.getDate()
  );
  return date.toDateString();
}

function divideRawDataByDays(range) {
  let dividedData = [];

  for (var row of range.getValues()) {
    let rowDate = dateTimeStringToDateString(row[0]);
    var dailyRawData = dividedData.find((d) => d.date == rowDate);

    if (!dailyRawData) {
      dailyRawData = { date: rowDate, values: [] };
      dividedData.push(dailyRawData);
    }

    dailyRawData.values.push({
      dateTime: row[0],
      l1: row[2],
      l2: row[3],
      l3: row[4],
      l4: row[5],
      socialOnly: row[6],
      amountPaid: row[8],
      paymentMethod: row[9],
      exemption: row[10],
    });
  }

  return dividedData;
}

function computeDailyStats(dividedData) {
  let stats = [];

  for (let dailyData of dividedData) {
    stats.push(computeStatsForDay(dailyData));
  }

  return stats;
}

function computeStatsForDay(dailyData) {
  return {
    date: dailyData.date,
    attendance: calculateAttendanceStats(dailyData.values),
    payment: calculatePaymentStats(dailyData.values),
    exemptions: calculateExemptionStats(dailyData.values),
  };
}

function calculateAttendanceStats(rawData) {
  return {
    totalAttendees: rawData.length,
    numL1Attendees: rawData.filter((r) => r.l1).length,
    numL2Attendees: rawData.filter((r) => r.l2).length,
    numL3Attendees: rawData.filter((r) => r.l3).length,
    numL4Attendees: rawData.filter((r) => r.l4).length,
    numSocialOnlyAttendees: rawData.filter((r) => r.socialOnly).length,
  };
}

function calculatePaymentStats(rawData) {
  const getTotalPayment = (data) =>
    data.reduce((total, current) => total + current.amountPaid, 0);

  return {
    totalAmountPaid: getTotalPayment(rawData),
    totalPaidByVenmo: getTotalPayment(
      rawData.filter((r) => r.paymentMethod === "Venmo")
    ),
    totalPaidByZelle: getTotalPayment(
      rawData.filter((r) => r.paymentMethod === "Zelle")
    ),
    totalPaidByPayPal: getTotalPayment(
      rawData.filter((r) => r.paymentMethod === "PayPal")
    ),
    totalPaidByCash: getTotalPayment(
      rawData.filter((r) => r.paymentMethod === "Cash")
    ),
  };
}

function calculateExemptionStats(rawData) {
  return {
    totalExemptions: rawData.filter((r) => r.exemption).length,
    numSponsorsAttended: rawData.filter((r) => r.exemption === "Sponsor")
      .length,
    numVolunteers: rawData.filter(
      (r) =>
        r.exemption === "30+ min Volunteer" ||
        r.exemption === "15 min Volunteer"
    ).length,
  };
}

function getColumnValues(range, column) {
  let columnValues = [];

  for (var row of range.getValues()) {
    columnValues.push(row[0]);
  }

  return columnValues;
}

function getAnalytics() {
  let sheet = SpreadsheetApp.openByUrl(SIGN_IN_DATA_SHEET);
  let lastRow = sheet.getLastRow();

  let allValues = sheet.getRange(`A2:L${lastRow}`);
  let rawData = divideRawDataByDays(allValues);

  return computeDailyStats(rawData);
}

function doGet(e) {
  let jsonOutput = JSON.stringify(getAnalytics());
  return ContentService.createTextOutput(jsonOutput).setMimeType(
    ContentService.MimeType.JSON
  );
}
