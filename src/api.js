document.addEventListener("DOMContentLoaded", function() {
    const robuxInput = document.getElementById('robuxInput');
    const result = document.getElementById('result');

    /**
     * Converts Robux to Dollars based on the exchange rate.
     *
     * @param {number} robux - The amount of Robux to be converted.
     * @returns {number} - The equivalent amount in Dollars.
     */
    function convertRobuxToDollars(robux) {
        const robuxToDollarsRate = 105 / 30000;
        return robux * robuxToDollarsRate;
    }

    robuxInput.addEventListener('input', function() {
        let robuxAmount = robuxInput.value;

        // Ensure robuxAmount is a string for the includes check
        if (typeof robuxAmount === 'string' && robuxAmount.includes('.')) {
            const parts = robuxAmount.split('.');
            if (parts[1].length > 2) {
                // Truncate to two decimal places
                robuxAmount = `${parts[0]}.${parts[1].slice(0, 2)}`;
                robuxInput.value = robuxAmount;
            }
        }

        const robuxAmountFloat = parseFloat(robuxAmount);

        if (!isNaN(robuxAmountFloat)) {
            if (robuxAmountFloat > 20000000) {
                result.textContent = 'You cannot exchange more than 20 million Robux.';
                result.style.display = 'block';
            } else if (robuxAmountFloat > 0) {
                const dollars = convertRobuxToDollars(robuxAmountFloat);
                result.textContent = `${robuxAmountFloat.toLocaleString()} Robux is equivalent to $${dollars.toFixed(2).toLocaleString()} Dollars.`;
                result.style.display = 'block';
            } else {
                result.style.display = 'none';
            }
        } else {
            result.style.display = 'none';
        }
    });
});