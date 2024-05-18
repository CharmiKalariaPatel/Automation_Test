const getStartedScreen = require("../pageobjects/getStarted.screen");
const tabScreen = require("../pageobjects/tab.screen");

describe('Open app and select league ,team or player', () => {

    it('Open app and navigate to home screen', async()=>{
        await(await getStartedScreen.donotallow()).click();
        await(await getStartedScreen.getStartedbtn()).click();
        await(await getStartedScreen.selectNbaLeague()).click();
        await(await getStartedScreen.continueBtn()).click();
        await(await getStartedScreen.locationPopupMaybeLater()).click();
        await(await getStartedScreen.selectNbaTeam()).click();
        await(await getStartedScreen.continueBtn()).click();
        await(await getStartedScreen.doneBtn()).click();
        await(await getStartedScreen.dismissModal()).click();
    })

    it('Click on League tab and verify user is landed on leagues page', async() => {
        await(await tabScreen.leaguetab()).click();
        //Verifying tab title after opening it
        expect(await (await getStartedScreen.leagueTitle()).getText()).toBe("My Leagues");
    })
    
    it('Select league and select first game on the screen', async()=>{
        await(await getStartedScreen.selectMbaGame()).click();
        //Verifying league name is same as user selected 
        expect(await (await getStartedScreen.verifyLeagueTitle()).getText()).toBe("MLB");
        await(await getStartedScreen.firstGame()).click();
        await(await getStartedScreen.closePopup()).click();
        await(await getStartedScreen.homeTeam()).click();
    })

    it('Select player stat tab and navigate to the first players stat information', async()=>{
        await(await getStartedScreen.playerStat()).click();
        await(await getStartedScreen.firstPlayerSelection()).click();
           
    })

    it('Navigate back to all player screen', async()=>{
        //Verify back navigation is working as expected
        await(await getStartedScreen.backNavigation()).click();
    })
})