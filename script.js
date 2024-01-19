function calculateBMI() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('result');
    const statusMessageDiv = document.getElementById('statusMessage');
    const bmiRangeBar = document.getElementById('bmiRangeBar');

    resultDiv.textContent = '';
    statusMessageDiv.textContent = '';

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.textContent = "Invalid input. Please enter valid numbers for weight and height.";
        return;
    }

    const bmi = weight / ((height / 100) * (height / 100)); // Convert height to meters
    const roundedBMI = parseFloat(bmi.toFixed(2));
    document.getElementById('result').innerHTML = `${bmi}`;

    // Update the BMI range bar based on the calculated BMI
    if (roundedBMI < 18.5) {
        bmiRangeBar.style.background = 'linear-gradient(to right, #FF6347 100%, #008000 0%, #FF4500 0%)';
        statusMessageDiv.textContent = 'Underweight - You might want to consult a healthcare professional.';
    } else if (roundedBMI >= 18.5 && roundedBMI < 25) {
        bmiRangeBar.style.background = 'linear-gradient(to right, #FF6347 0%, #008000 100%, #FF4500 0%)';
        statusMessageDiv.textContent = 'Normal Weight - Keep up the good work!';
    } else {
        bmiRangeBar.style.background = 'linear-gradient(to right, #FF6347 0%, #008000 0%, #FF4500 100%)';
        statusMessageDiv.textContent = 'Overweight - Consider talking to a healthcare professional for advice.';
    }

    return;
}
