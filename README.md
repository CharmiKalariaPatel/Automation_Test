# Automation_Test

Description : 
This is an automation solution to find league,team and player from the app and make sure user can navigate through all pages

Prerequisites
* JDK 11
* Node v18.20.2
* Appium 2.5.4
* UIAutomator2
* WebDriverIO
* Connected mobile device or virtual device

Steps to run repo:
1. Clone the repo
2. Go to project root directory and install WebdriverIO if you do not have it
3. Project follow page-object modal approch
4. All tests are define under spec folder and all objects are under pageobjects folder
5. Android.apk is under the app/android folder 
6. Open emulator or physical device
7. Download the .apk file on real device or emulator
8. Update device capability into wdio.conf.js (Change it to your device)
9. Run "npx wdio run ./wdio.conf.js" from project's root directory
