
import View from "./view/addressview";

(function () {
    let view = new View({
        checkBox:
            document.querySelector('#checkbox'),
        paymentAddress:
            document.getElementById('payment-address'),
        shippingAddress:
            document.getElementById('shipping-address')        
    });
    view.initialize();
})();