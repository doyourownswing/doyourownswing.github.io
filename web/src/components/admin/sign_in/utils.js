import { EXEMPTION } from "@/components/admin/sign_in/constants";

function sortPeopleAlphabetically(people) {
  people.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  return people;
}

function validateMoneyValue(value) {
  // Matches ints or floats with 2 decimal points
  let pattern = /^(\d+|\d+\.\d{2})$/;

  try {
    if (!pattern.test(value)) {
      return false;
    }

    let number = parseFloat(value);

    return number > 0;
  } catch {
    return false;
  }
}

function isPaymentRequired(exemption, buyingMask) {
  return (
    exemption === EXEMPTION.NONE ||
    exemption === EXEMPTION.VOLUNTEER_15 ||
    buyingMask
  );
}

function validateForm(
  people,
  exemption,
  buyingMask,
  paymentAmount,
  paymentMethod,
  eventsAttending
) {
  let unfilledRequiredFields = [];

  if (people.length === 0) {
    unfilledRequiredFields.push("Dancer(s)");
  }

  if (isPaymentRequired(exemption, buyingMask)) {
    if (!paymentMethod) {
      unfilledRequiredFields.push("Payment method");
    }
    if (!validateMoneyValue(paymentAmount)) {
      unfilledRequiredFields.push("Payment amount");
    }
  } else if (exemption === EXEMPTION.OTHER) {
    unfilledRequiredFields.push("Additional notes");
  }

  if (!Object.values(eventsAttending).some((e) => e)) {
    unfilledRequiredFields.push("Classes attending");
  }

  return unfilledRequiredFields;
}

// if there are mixed sponsor / not sponsor
// exemption is "other"
//

export {
  sortPeopleAlphabetically,
  validateMoneyValue,
  isPaymentRequired,
  validateForm,
};
