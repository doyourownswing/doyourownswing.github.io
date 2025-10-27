class Page {
  constructor(url, displayName, isCurrentPageFunction) {
    this.displayName = displayName;
    this.url = url;
    this.isCurrentPage =
      isCurrentPageFunction ?? (() => window.location.hash === this.url);
  }
}

const Home = new Page(
  "#/",
  "Home",
  () => window.location.hash === "#/" || window.location.hash === ""
);
const Schedule = new Page("#/classes", "Classes");
const About = new Page("#/about", "About us");
const Health = new Page("#/health", "Health protocol");
const Code = new Page("#/code", "Code of conduct");
const Contact = new Page("#/contact", "Contact");
const StartHere = new Page("#/start-here");

// todo - update this link once we have a full admin portal
const SignIn = new Page("#/admin");

// Catch-all page for any 404 not found issues.
const NotFound = new Page("/*");

export {
  Home,
  Schedule,
  About,
  Health,
  Code,
  Contact,
  StartHere,
  SignIn,
  NotFound,
};
