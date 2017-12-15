/**
 * Created by akin.akindolani on 12/14/17.
 */

function handleSubmit(event) {
    var formElements = event.target.elements;
    var inputTypes = ['input', 'textarea'];
    var serializedData = {};
    for(var el in formElements) {
        if(inputTypes.indexOf(formElements[el].localName) > -1) {
            serializedData[formElements[el].name] = formElements[el].value;
        }
    }
    $('#visitor_name_literal').setText(serializedData.visitor_name);
    event.preventDefault();
    return false;
}

window.onload = function () {

    var screen1 = new Screen('screen1', "Intro Screen");
    var screen2 = new Screen('screen2', "Size collection Screen");
    var screen3 = new Screen('screen3', "Delivery Option");
    var screen4 = new Screen('screen4', "Success Screen");

    var slider1 = new DraggableSlider('#slider1', {onChange:function (value) {
        $('#neck_value').setText(value + 'cm');
    }});
    var slider2 = new DraggableSlider('#slider2', {onChange:function (value) {
        $('#sleeve_value').setText(value + 'cm');
    }});

    ScreenManager.registerScreen(screen1, true);
    ScreenManager.registerScreen(screen2);
    ScreenManager.registerScreen(screen3);
    ScreenManager.registerScreen(screen4);


    $('.screen_control').onClick(function (event) {
        ScreenManager.goTo(event.target.dataset['next']).show();
    });
    
};