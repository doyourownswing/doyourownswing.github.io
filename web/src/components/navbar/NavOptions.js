class NavOption {
    constructor(displayName, url) {
        this.displayName = displayName;
        this.url = url;
    }
}

const navOptions = [
    new NavOption('Home', '#/'),
    new NavOption('Schedule', '#/schedule'),
    new NavOption('About us', '#/about'),
    new NavOption('Health protocol', '#/health'),
    new NavOption('Code of conduct', '#/code'),
    new NavOption('Contact', '#/contact'),
];

export default navOptions;