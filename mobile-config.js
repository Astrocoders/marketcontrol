App.accessRule('*');

App.info({
  name: 'MarketControl',
  description: 'Saiba quanto sua compra vai dar antes de ir para o caixo.',
  author: 'Gabriel Rubens',
  email: 'grsabreu@gmail.com',
  website: 'https://twitter.com/_gabrielrubens',
  version: '1.0.0',
});

// Set PhoneGap/Cordova preferences
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('hideKeyboardAccessoryBar', true);
App.setPreference('ShowSplashScreenSpinner', false);
App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarStyle', 'lightcontent');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.setPreference('android-targetSdkVersion', '22');
App.setPreference('android-minSdkVersion', '19');
