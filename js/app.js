/**
 * Created by akin.akindolani on 12/14/17.
 */
var CollarType = {
    LONG_FRENCH:'long_french',
    SHORT_FRENCH:'short_french',
    NORMAL_COLLAR : 'normal_collar'
};

var Visitor = function () {
    this.name = '';
    this.measurement = {
        neck:0.00,
        sleeve:0.00,
        collarType: CollarType.NORMAL_COLLAR
    };
    this.deliveryAddress = '';
};
