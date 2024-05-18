const Utils = require("./utils");

class getStarted extends Utils{

    async getStartedbtn(){
        const elem = await $("//*[@text='Get Started']")
        await this.waitToBeClickable(elem);
        return elem;
    }

    async selectNbaLeague(){
        const elem = await $('//android.widget.LinearLayout[@index="3"]')
        await this.waitToBeClickable(elem);
        return elem;
    }
    
    async continueBtn(){
        const elem = await $("//*[@text='Continue']");
        await this.waitToBeClickable(elem);
        return elem;
    }
    
    async locationPopupMaybeLater(){
        const elem = await $('//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/btn_disallow"]');
        //cconst elem = await $("//*[@text='Maybe Later']")
        await this.waitToBeClickable(elem);
        return elem;
    }
    
    async selectNbaTeam(){
        const elem = await $('//android.widget.LinearLayout[@index="0"]');
        await this.waitToBeClickable(elem);
        return elem;
    }
    
    async doneBtn(){
       const elem = await $("//*[@text='Done']");
       await this.waitToBeClickable(elem);
       return elem;   
     }
    
    async donotallow(){
       //const elem = await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]');
       const elem = await $("//*[@text='Don’t allow']");
       await this.waitToBeClickable(elem);
       return elem;   
    }

    async dismissModal(){
       const elem = await $('//android.widget.ImageView[@resource-id="com.fivemobile.thescore:id/dismiss_modal"]');
       await this.waitToBeClickable(elem);
       return elem;   
    }
}
module.exports = new getStarted();