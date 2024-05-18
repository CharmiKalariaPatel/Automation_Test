const getStartedScreen = require("../pageobjects/getStarted.screen");

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
})