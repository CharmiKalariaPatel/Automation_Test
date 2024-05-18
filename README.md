# Automation_Test

<<<<<<< HEAD
Description

This is an automation solution that uses appium server and weddriveIO testing framwork to talk to mobile application and perform differnt task. I create seprate pageobjects folder which contains all the objects and tests are under specs folder. This projects uses javascript language 
=======
Description : 
This is an automation solution to find league,team and player from the app and make sure user can navigate through all pages
>>>>>>> 857dc9f247d5c9f6d3444f7b5ece32ef399ef590

Prerequisites
* JDK 11
* Node v18.20.2
* Appium 2.5.4
* UIAutomator2
* WebDriverIO
* Connected mobile device or virtual device

WebdriverIO Setup:
1. install webdriverIO using : npm i @wdio/cli command
2. No need to configure wdio as wdio.conf.js file will be already created and it will clone with the projet.

Steps to run repo:
1. Clone the repo
2. Go to project root directory and install WebdriverIO if you do not have it
3. Project follow page-object modal approch
4. All tests are define under spec folder and all objects are under pageobjects folder
5. Android.apk is under the app/android folder 
6. Open emulator or physical device
7. Download the .apk file on real device or emulator
8. Update device capability into wdio.conf.js (Change it to your device)
<<<<<<< HEAD
9. Start appium server before running test. 
10. Run "npx wdio run ./wdio.conf.js" from project's root directory
=======
9. Run "npx wdio run ./wdio.conf.js" from project's root directory
>>>>>>> 857dc9f247d5c9f6d3444f7b5ece32ef399ef590
