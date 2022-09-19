sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("gitui5.controller.View1", {
            onInit: function () {
//testtest
            },

            buttonPressed: function(){
                console.log("conflict");
                
                alert("BUTTON PRESSED"); 

            }
        });
    });
