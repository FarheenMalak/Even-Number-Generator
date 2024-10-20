document.getElementById("generate-btn").addEventListener("click", function() {
    const limit = parseInt(document.getElementById("limit-input").value);
    let result = '';
    let number = 0;

    if (isNaN(limit) || limit < 0) {
        result = "Please enter a valid positive number.";
    } else {
        while (number <= limit) {
            result += number + (number < limit ? ', ' : '');
            number += 2; 
        }
    }

    document.getElementById("result").textContent = result;
});





