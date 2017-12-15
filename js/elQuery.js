/**
 * Created by akin.akindolani on 12/14/17.
 */
/*
This is a custom querying function
 */

var $ = (function (el) {
    var element = document.querySelectorAll(el);
    var that = this;

    var returnedObjects = {
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        each: each,
        onClick:onClick
    };


    /**
     * Add Class to a selected element or elements
     * @param class_to_be_added
     * @returns {*}
     */
    function addClass(class_to_be_added) {
        //Add specified class to the element
        if(element) {
            each(function (i, v) {
                v.classList.add(class_to_be_added);
            });
        }
        return returnedObjects;
    }

    /**
     * Remove class from a selected element or elements
     * @param class_to_be_removed
     * @returns {*}
     */
    function removeClass(class_to_be_removed) {
        //Remove specified class from the element
        if(element) {
            each(function (i, v) {
                v.classList.remove(class_to_be_removed);
            });
        }
        return returnedObjects;
    }

    /**
     * Return true when at least one instance of the class is found on the selected
     * Elements
     * @param _class
     * @returns {boolean}
     */
    function hasClass(_class) {
        if(element) {
            // Return true when at least one instance of the class is found
            // on the element.
            var has_class = false;
            each(function(i, v){
                has_class = v.classList.contains(_class)
            });
            return has_class;
        }
        return false;
    }

    /**
     * Provide an implementation on looping through a set of element nodes, and apply a
     * specified callback on each item
     * @param callback
     */
    function each(callback) {
        if(element) {
            for(var i = 0; i < element.length; i++) {
                if(typeof callback == "function") {
                    callback(i, element[i]);
                }
                
            }
        }
    }

    /**
     * Handles click on selected elements
     * @param callback
     * @returns {HTMLElement|{addClass: addClass, removeClass: removeClass, hasClass: hasClass, each: each, onClick: onClick}}
     */
    function onClick(callback) {
        if(element) {
            var pointer = null;
            for(var i = 0; i < element.length; i++) {
                pointer = element[i];
                if(typeof callback == 'function') {
                    element[i].addEventListener('click', callback);
                }
            }
        }
        return returnedObjects;
    }

    return returnedObjects;
});

var Screen = function (id, title) {
    this.id = id;
    this.title = title;
    this.isVisible = false;
    this.show = function () {
        $('.screen').removeClass('active_screen');
        $('#' + this.id).addClass('active_screen');
        this.isVisible = true;
    };
    this.hide = function () {
        $('#' + this.id).removeClass('active_screen');
        this.isVisible = false;
    }
};

var ScreenManager = (function () {
    var __screens = {}, __screenIndexes = [];
    var __currentIndex = 0;

    function nextScreen() {
        var selectedIndex = ++__currentIndex;
        var screen_key = __screenIndexes[selectedIndex];
        return __screens[screen_key];
    }

    function previousScreen() {
        var selectedIndex = --__currentIndex;
        if(__currentIndex < 0) {return null;}
        var screen_key = __screenIndexes[selectedIndex];
        return __screens[screen_key];
    }

    function goTo(screen_name) {
        if(screen_name in __screens) {
            return __screens[screen_name];
        }
    }

    function registerScreen(screen, start) {
        if(!(screen instanceof Screen)) {
            throw "Instance of Screen needed";
        }
        if(screen.id in __screens) {delete __screens[screen.id];}
        __screens[screen.id] = screen;
        __screenIndexes.push(screen.id);
        if(typeof start != 'undefined' && start) {
            __currentIndex = __screenIndexes.indexOf(screen.id);
            __screens[screen.id].show();
        }else {
            __screens[screen.id].hide();
        }
    }

    return {
        next: nextScreen,
        prev: previousScreen,
        goTo: goTo,
        registerScreen:registerScreen
    }
}());
