
import View from "./view/addressview";

(function () {
    let view = new View({
        checkBox:
            document.querySelector('#checkbox'),
        paymentCity:
            document.getElementById('payment-city'),
        paymentStreet:
            document.getElementById('payment-street'),
        shippingCity:
            document.getElementById('shipping-city'),
        shippingStreet:
            document.getElementById('shipping-street'),
            
    });
    view.initialize();
})();