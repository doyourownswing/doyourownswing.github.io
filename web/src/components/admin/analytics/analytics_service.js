const URL =
  "https://script.google.com/macros/s/AKfycbzPmpJkkD2F1x7GYcjcOFtFIJsJj9lrwrV3dE3apwSa7y2Q3uDXgvM0gqTApGeTX932xA/exec";

class AnalyticsService {
  static async fetchData() {
    let response = await fetch(URL);

    let jsonResponse = await response.json();

    return jsonResponse;
  }
}

export default AnalyticsService;
