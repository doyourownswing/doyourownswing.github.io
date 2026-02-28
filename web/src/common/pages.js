class Page {
  constructor(url, displayName, isCurrentPageFunction) {
    this.displayName = displayName;
    this.url = url;
    this.isCurrentPage =
      isCurrentPageFunction ??
      (() => window.location.pathname.includes(this.url));
  }
}

const Home = new Page(
  "/",
  "Home",
  () => window.location.pathname === "" || window.location.pathname === "/"
);
const Schedule = new Page("/classes", "Classes");
const About = new Page("/about", "About us");
const Health = new Page("/health", "Health protocol");
const Code = new Page("/code-of-conduct", "Code of conduct");
const Contact = new Page("/contact", "Contact");
const StartHere = new Page("/start-here");
const Blog = new Page("/blog", "Blog");
const Links = new Page("/links");

// todo - update this link once we have a full admin portal
const SignIn = new Page("/admin");
const Ipad = new Page("/ipad");
const Analytics = new Page("/stats");

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
  Links,
  SignIn,
  Ipad,
  Analytics,
  NotFound,
};
