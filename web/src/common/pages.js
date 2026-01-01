class Page {
  constructor(url, displayName) {
    this.displayName = displayName;
    this.url = url;
    this.isCurrentPage = () => window.location.pathname === this.url;
  }
}

const Home = new Page("/", "Home");
const Schedule = new Page("/classes", "Classes");
const About = new Page("/about", "About us");
const Health = new Page("/health", "Health protocol");
const Code = new Page("/code-of-conduct", "Code of conduct");
const Contact = new Page("/contact", "Contact");
const StartHere = new Page("/start-here");
const Blog = new Page("/blog", "Blog", () =>
  window.location.pathname.includes("/blog")
);

// todo - update this link once we have a full admin portal
const SignIn = new Page("/admin");
const Ipad = new Page("/ipad");

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
  Blog,
  SignIn,
  Ipad,
  NotFound,
};
