const URL =
  // "https://script.google.com/macros/s/AKfycbxpbsemRgN3vjFOkuR1UoUew3CNCWTe1oy_Uimutyig3Sj5Avtg4cg8gNGHmvaQcYrl/exec";
  "https://script.google.com/macros/s/AKfycbyIJqGf3kmR0TvjWh1U-O8HA0rh_e5goenn6u-flcb8io6jqBmn25mgriD30IsJZ8-N/exec";

// Note: do not set content-type. We get CORS issues from apps script that way.

// If we ever need this to be stateful, consider refactoring away from static methods.
class SignInService {
  static async fetchPeople() {
    try {
      let response = await fetch(URL);

      let jsonResponse = await response.json();

      return jsonResponse.people;
    } catch (e) {
      console.log("we got an error");
      console.log(e);
    }
  }
}

export default SignInService;
