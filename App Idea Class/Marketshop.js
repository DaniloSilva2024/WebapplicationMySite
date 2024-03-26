document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalDisplay = document.getElementById('total');
    let total = 0;

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const itemCost = parseInt(checkbox.dataset.cost);
            if (checkbox.checked) {
                total += itemCost;
            } else {
                total -= itemCost;
            }
            totalDisplay.textContent = `$${total.toFixed(2)}`;
        });
    });
});
