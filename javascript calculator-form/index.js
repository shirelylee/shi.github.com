(function() {
    "use strict";
    var state = document.getElementById('state');
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('calculator').addEventListener('submit', estimateTotal);
        var btnEstimate = document.getElementById('result')
        btnEstimate.disabled = true;

        state.addEventListener('change', function() {
            if (state.value === '') {
                btnEstimate.disabled = true;
            } else {
                btnEstimate.disabled = false;
            }
        });


    });

    function estimateTotal(event) {
        event.preventDefault();
        var bbnumber = parseInt(document.getElementById('basketball').value, 10),
            fbnumber = parseInt(document.getElementById('football').value, 10),
            shippingstate = state.value;
        var shippingmethod = document.querySelector('[name=deliver]:checked').value;
        var totalQnanity = bbnumber + fbnumber;
        var totalestimate = (30 * bbnumber) + (50 * fbnumber) + (shippingmethod * totalQnanity)
        var total = totalestimate * shippingstate;
        document.getElementById('cost').value = total;
    }

})();
