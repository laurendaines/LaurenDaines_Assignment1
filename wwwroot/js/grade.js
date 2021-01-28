function calculator() {

    //calculation to determine percentage grade
    var grade1 = parseFloat($('#Assignments').val() * .50)
    var grade2 = parseFloat($('#GroupProject').val() * 0.10);
    var grade3 = parseFloat($('#Quizzes').val() * 0.10);
    var grade4 = parseFloat($('#Exams').val() * 0.20);
    var grade5 = parseFloat($('#Intex').val() * 0.10);
    var total = grade1 + grade2 + grade3 + grade4 + grade5;

    //if statement to determine letter grade
    if (total >= 94) {
        letter = "Your Final Letter Grade Is: A!";
    }
    if (total <= 93 && total >= 90) {
        letter = "Your Final Letter Grade Is: A-!";
    }
    if (total <= 89 && total >= 87) {
        letter = "Your Final Letter Grade Is: B+";
    }
    if (total <= 86 && total >= 84) {
        letter = "Your Final Letter Grade Is: B!";
    }
    if (total <= 83 && total >= 80) {
        letter = "Your Final Letter Grade Is: B-!";
    }
    if (total <= 79 && total >= 77) {
        letter = "Your Final Letter Grade Is: C+!";
    }
    if (total <= 76 && total >= 74) {
        letter = "Your Final Letter Grade Is: C!";
    }
    if (total <= 73 && total >= 70) {
        letter = "Your Final Letter Grade Is: C-!";
    }
    if (total <= 69 && total >= 67) {
        letter = "Your Final Letter Grade Is: D+!";
    }
    if (total <= 66 && total >= 64) {
        letter = "Your Final Letter Grade Is: D!";
    }
    if (total <= 63 && total >= 60) {
        letter = "Your Final Letter Grade Is: D-!";
    }
    if (total < 60) {
        letter = "Your Final Letter Grade Is: E!";
    }

    //variable for output
    //$('#outputDiv').html("Your Final Grade Is: " + total + "% <br>" + letter);

    //alert for output
    if(total < 101) {
        alert("Your Final Grade Is: " + total + "% \n" + letter);
    }
}