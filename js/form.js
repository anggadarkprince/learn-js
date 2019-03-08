'strict'

function preparePage() {
    var contactForm = document.getElementById('frmContact');
    if (contactForm) {
        var email = document.getElementById('email');
        var error = document.getElementById('errorMessage');
        // submit event
        contactForm.onsubmit = function () {
            if (email.value == '') {
                error.innerHTML = "Please provide an email";
                error.style.color = 'red';
                // cancel submitting
                return false;
            }
            else {
                // go ahead
                return true;
            }
        };

        var brochuresWrapper = document.getElementById('tourSelection');
        document.getElementById('brochures').onclick = function () {
            if (this.checked) {
                brochuresWrapper.style.display = 'block';
            }
            else {
                brochuresWrapper.style.display = 'none';
            }
        };
        brochuresWrapper.style.display = 'none';
    }

    var cartForm = document.getElementById('cart-oil');
    if (cartForm) {
        /**
         * get form with
         * document.forms[0].elements[0].value = 100;
         * cartForm.name.value = alex
         * but not convenient
         *
         */

        // set / get input text/password/number
        cartForm.email.value = 'anggadarkprince@gmail.com';

        // set / get select
        cartForm.country.value = 'sn';
        cartForm.country.selectedIndex = 3;

        // set / get radio
        // cartForm.gender would return array [male element, female element];
        cartForm.female.checked = true;
        cartForm.gender[0].checked = true;

        // set / get checkbox
        cartForm['special-gift'].checked = true;
        cartForm['special-gold'].checked = true;

        cartForm.onsubmit = function () {
            var result = document.getElementById('results');
            var resultString = '';
            resultString = resultString.concat(
                '<h3>Result</h3>',
                'Name: ', cartForm.name.value, '<br>',
                'Email: ', cartForm.email.value, '<br>',
                'Contact: ', document.getElementById('contact').value, '<br>',
                'Gender: ', cartForm.gender.value, '<br>',
                'Address: ', cartForm.address.value, '<br>',
                'Country: ', cartForm.country[cartForm.country.selectedIndex].text + '(' + cartForm.country.value + ')', '<br>',
                'Password: ', cartForm.password.value, '<br>',
                'Extra Virgin: ', cartForm['quantity-extra'].value + ' x $10', '<br>',
                'Cold-Pressed: ', cartForm['quantity-cold'].value + ' x $8', '<br>',
                'State: ', cartForm.state[cartForm.state.selectedIndex].text + '(' + cartForm.state.value + ')', '<br>',
                'Shipping: ', cartForm.shipping.value, '<br>',
                'Special: ', 'gift:', cartForm['special-gift'].checked,
                ', gold:', cartForm['special-gold'].checked, ', cork:', cartForm['special-cork'].checked, '<br>'
            );
            result.innerHTML = resultString;

            // calculate estimate
            var estimate = document.getElementById('estimate');
            var qtyExtra = parseInt(cartForm['quantity-extra'].value) || 0;
            var qtyCold = parseInt(cartForm['quantity-cold'].value) || 0;

            var total = qtyExtra * 10 + qtyCold * 8;
            if (cartForm.state.value === 'CA') {
                total = total - 7.5 / 100 * total
            }

            var shipping = cartForm.shipping.value;
            if (shipping === 'usps') {
                total += (qtyExtra + qtyCold) * 2;
            } else if (shipping === 'ups') {
                total += (qtyExtra + qtyCold) * 3;
            }
            estimate.value = '$' + total.toFixed(2);

            return false;
        }

        /**
         * add form event
         */

        // captured when key in press, before typed
        cartForm.name.onkeydown = function () {
            document.querySelector('#name-press').innerHTML = 'keydown:' + this.value;
        }
        // captured when key was released after typed
        cartForm.name.onkeyup = function () {
            document.querySelector('#name-up').innerHTML = 'keydown:' + this.value;
        }
        cartForm.estimate.onkeydown = function (e) {
            if (e.keyCode == 13) {
                cartForm.submit();
            }
        }

        // triggered when something change, such value change (when out of focus) or state change
        cartForm.email.onchange = function () {
            var emailChangeText = document.querySelector('#email-change');
            if (this.value == 'test@email.com') {
                emailChangeText.innerHTML = 'You put test email';
            }
            else {
                emailChangeText.innerHTML = 'You put regular email';
            }
        }
        cartForm.male.onchange = function () {
            if (this.checked) {
                document.querySelector('#gender-change').innerHTML = this.value + ' : '
                    + this.checked + '<br>'
                    + cartForm.female.value + ' : ' + cartForm.female.checked;
            }
        }
        cartForm.female.onchange = function () {
            if (this.checked) {
                document.querySelector('#gender-change').innerHTML = cartForm.male.value + ' : '
                    + cartForm.male.checked + '<br>'
                    + this.value + ' : ' + this.checked;
            }
        }

        cartForm.country.onchange = function () {
            document.querySelector('#country-change').innerHTML = this.value + ' : '
                + this[this.selectedIndex].text;
        }
    }
}

window.onload = function () {
    preparePage();
}