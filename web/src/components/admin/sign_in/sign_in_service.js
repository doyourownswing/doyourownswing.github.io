const URL =
  "https://script.google.com/macros/s/AKfycbyIJqGf3kmR0TvjWh1U-O8HA0rh_e5goenn6u-flcb8io6jqBmn25mgriD30IsJZ8-N/exec";

// Note: Internal server errors are often disguised as CORS issues.
// If we get a CORS issue, it's usually likely because there's some error that occured when running.

// If we ever need this to be stateful, consider refactoring away from static methods.
class SignInService {
  static async fetchPeople() {
    let response = await fetch(URL);

    let jsonResponse = await response.json();

    return jsonResponse.people;
  }

  static async checkIn(data) {
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
    });

    let jsonResponse = await response.json();

    return jsonResponse;
  }
}

export default SignInService;
