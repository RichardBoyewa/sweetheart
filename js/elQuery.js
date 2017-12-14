/**
 * Created by akin.akindolani on 12/14/17.
 */
/*
This is a custom querying function
 */

var $ = (function (el) {
    var element = document.querySelectorAll(el);
    var that = this;

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
        return that;
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
        return that;
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
                callback(i, element[i]);
            }
        }
    }
    return {
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        each: each
    };
});
