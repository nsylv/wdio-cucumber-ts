export function openLoginPage() {
    browser.url('https://master-apps-dev.unifydev.xyz/login.html');
    browser.pause(1000);
}

export function getPageTitle(): string {
    const title = browser.getTitle();
    return title;
}

export function enterUsername(username: string) {
    const usernameInput = $('input[name="username"]');
    usernameInput.clearValue();
    usernameInput.setValue(username);
    browser.pause(1000);
}

export function enterPassword(password: string) {
    const passwordInput = $('input[name="password"]');
    passwordInput.clearValue();
    passwordInput.setValue(password);
    browser.pause(1000);
}

export function login() {
    const loginButton = $('.login-button');
    loginButton.click();
}

export function isBaseRoute(): boolean {
    return (
        browser.getUrl() === 'https://master-apps-dev.unifydev.xyz/app/registry'
    );
}
