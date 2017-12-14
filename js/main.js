/**
 * Created by akin.akindolani on 12/14/17.
 */
window.onload = function () {
    var screen1 = new Screen('screen1', "Intro Screen");
    var screen2 = new Screen('screen2', "Size collection Screen");
    var screen3 = new Screen('screen3', "Delivery Option");
    var screen4 = new Screen('screen4', "Success Screen");

    ScreenManager.registerScreen(screen1, true);
    ScreenManager.registerScreen(screen2);
    ScreenManager.registerScreen(screen3);
    ScreenManager.registerScreen(screen4);


    $('.screen_control').onClick(function (event) {
        console.log(event.target.dataset['next']);
        ScreenManager.goTo(event.target.dataset['next']).show();
    });
    
};