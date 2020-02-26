import { assert } from 'chai';
import { binding, given, when, then } from 'cucumber-tsflow/dist';
import {
    openLoginPage,
    getPageTitle,
    enterUsername,
    enterPassword,
    login,
    isBaseRoute,
} from 'src/pages/Publish';

@binding()
export class PublishLoginSteps {
    @given(/^I am on the login page$/)
    public async givenOnLoginPage() {
        openLoginPage();
        assert.equal(getPageTitle(), 'Login to Publish');
    }

    @when(/^I enter "([^"]*)" into the username box$/)
    public whenUsernameEntered(arg1) {
        enterUsername(arg1);
    }

    @when(/^I enter "([^"]*)" into the password box$/)
    public whenPasswordEntered(arg1) {
        enterPassword(arg1);
    }

    @when(/^I click the login button$/)
    public whenLoginClicked() {
        login();
    }

    @then(/^I should be taken to the base route$/)
    public async shouldBeOnBaseRoute() {
        assert.isTrue(isBaseRoute());
    }
}
