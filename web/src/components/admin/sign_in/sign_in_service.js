const URL =
  "https://script.google.com/macros/s/AKfycbxpbsemRgN3vjFOkuR1UoUew3CNCWTe1oy_Uimutyig3Sj5Avtg4cg8gNGHmvaQcYrl/exec";

// Note: do not set content-type. We get CORS issues from apps script that way.

// If we ever need this to be stateful, consider refactoring away from static methods.
class SignInService {
  static async fetchPeople() {
    try {
      let response = await fetch(URL);

      console.log(response);

      let json = await response.json();
      console.log(json);
    } catch (e) {
      console.log("we got an error");
      console.log(e);
    }
  }
}

export default SignInService;
