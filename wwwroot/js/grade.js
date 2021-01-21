function calculator() {
    var grade1 = parseFloat(document.getElementById('assignments').value * 0.50);
    var grade2 = parseFloat(document.getElementById('groupproject').value * 0.10);
    var grade3 = parseFloat(document.getElementById('quizzes').value * 0.10);
    var grade4 = parseFloat(document.getElementById('exams').value * 0.30);
    var grade5 = parseFloat(document.getElementById('intex').value * 0.10);
    var total = grade1 + grade2 + grade3 + grade4 + grade5;

    if (total >= 94) {
        letter = "Your letter grade is an A!";
    }
    if (total <= 93 && total >= 90) {
        letter = "Your letter grade is a A-!";
    }
    if (total <= 89 && total >= 87) {
        letter = "Your letter grade is a B+";
    }
    if (total <= 86 && total >= 84) {
        letter = "Your letter grade is a B!";
    }
    if (total <= 83 && total >= 80) {
        letter = "Your letter grade is a B-!";
    }
    if (total <= 79 && total >= 77) {
        letter = "Your letter grade is a C+!";
    }
    if (total <= 76 && total >= 74) {
        letter = "Your letter grade is a C!";
    }
    if (total <= 73 && total >= 70) {
        letter = "Your letter grade is a C-!";
    }
    if (total <= 69 && total >= 67) {
        letter = "Your letter grade is a D+!";
    }
    if (total <= 66 && total >= 64) {
        letter = "Your letter grade is a D!";
    }
    if (total <= 63 && total >= 60) {
        letter = "Your letter grade is a D-!";
    }
    if (total < 60) {
        letter = "Your letter grade is an E!";
    }

    var display = document.getElementById('outputDiv').innerHTML = "Your Final Grade Is: " + total + "% \n" + letter;
}