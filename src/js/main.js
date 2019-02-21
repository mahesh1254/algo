// const uuidv1 = require('uuid/v1');
// uuidv1();

// to generaten UUID 
inp = document.getElementById('unique-id');
inp.value = 'xas';

// to show dropdown if Elsewhere is selected
function yesnoCheck(that) {
    if (that.value == "Elsewhere") {
        alert("check");
        document.getElementById("ifYes").style.display = "block";
    } else {
        document.getElementById("ifYes").style.display = "none";
    }
}
// to show dropdown if Elsewhere is selected
function yesnoCheck(that) {
    if (that.value == "visa") {
        alert("check");
        document.getElementById("ifYes").style.color = "red";
    } else {
        document.getElementById("ifYes").style.color = "blue";
    }
}
// to redirect after submit
window.location.href = 'view.html';

