function calculator() {
    var grade1 = parseFloat(document.getElementById('homework').value * 0.25);
    var grade2 = parseFloat(document.getElementById('labs').value * 0.20);
    var grade3 = parseFloat(document.getElementById('midterm').value * 0.25);
    var grade4 = parseFloat(document.getElementById('finals').value * 0.30);
    var total = grade1 + grade2 + grade3 + grade4;

    var display = document.getElementById('outputDiv').innerHTML = 'Your Final Grade Is: ' + total +'%';
}