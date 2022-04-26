//input for number of courses
var _input;
//display for grades and unit
const _show = document.getElementById('display_text');
const warning_text = document.getElementById('the_text');
var select_cumulative = document.getElementById('select_cumulative');
//grades selection
var selection =
    '<div class="col-xl-4 col-sm-4 col-md-4 col-lg-4">' +
    '<label for="gradeid">' + '<b>' + "Grade" + '</b>' + '</label>' +
    '<select   placeholder="Select your grade" name="grades"class="grades form-select" id="grades">' +
    '<option value="">' + '</option>' +
    '<option value="5">' + 'A' + '</option>' +
    '<option value="4">' + 'B' + '</option>' +
    '<option value="3">' + 'C' + '</option>' +
    '<option value="2">' + 'D' + '</option>' +
    '<option value="1">' + 'E' + '</option>' +
    '<option value="0">' + 'F' + '</option>' +
    '</select>' +
    '</div>';
//units input
var units =
    '<div class="col-xl-4 col-sm-4 col-md-4 col-lg-4">' +
    '<label for="second_n">' + '<b>' + "Unit" + '</b>' + '</label>' +
    '<input id="second_n" class="second_n form-control">' + '</div>';
//submit button for number of courses
var submit = document.getElementById('submit');
// submit function
function myFunction() {
    //input for number of courses value
    _input = document.getElementById('input').value;
    // for input confirmation if it is empty or not a number
    var isNaN = document.getElementById('isNaN');
    //var submit = document.getElementById('submit');
    if (_input === '' || _input === '0') {
        //document.getElementById('input').style.border = '1px solid red'
        isNaN.innerHTML = 'Enter a Number';

        // document.getElementById('input').setAttribute('placeholder', 'You must enter a number not negative neither zero(0)')
        document.getElementById('input').setAttribute('class', 'form-control outline-danger border-danger  text-danger')
            //_show.style.display = 'none';
        submit.style.display = 'none';
    } else {
        //list of selection input and grade input
        var _display = '<ul class="list-group">';

        for (let i = 1; i <= _input; i++) {
            _display += '<li class="list-group-item">' +
                '<div id="row" class="row">' +
                '<div class="col-xl-4 col-sm-4 col-md-4 col-lg-4 text-primary">' + '<b>' + 'Course \n' +
                i + '</b>' + '</div>' +
                // '<div class="col-xl-6 col-sm-6 col-md-6 col-lg-6">' +
                // '<form>' + '<div class="row">' +
                selection + units +
                //'</div>' + '</div>' +
                '</div>' + '</li>';
        }
        _display += '</ul>';
        _show.innerHTML = _display;
        // var sub = submit.className.replace('invisible', 'visible');
        // sub.innerHTML;
        submit.style.display = 'block';
    }
}
//function  for final calculation
function mySubmit() {
    //variable for value input
    _input = document.getElementById('input').value;
    //grades selection
    var grades = document.querySelectorAll('#grades');
    //unit selection
    var second_n = document.querySelectorAll('#second_n');
    //grades value
    var _grades_ = document.getElementsByClassName('grades');
    //units of course value
    var _second_n = document.getElementsByClassName('second_n');
    //grades parseInt
    var parse = parseInt(_grades_);
    //units parseInt
    var parseSec = parseInt(_second_n);
    const modal = document.getElementById('myModal');
    //multiplication variable
    var multiply = 0;
    //variable for units
    var _second_n_sum = 0;
    //var for total answer
    var final = 0;
    //var for division
    var division = 0;
    //loop for grades and unit
    for (k = 0; k <= _input; k++) {
        //condition for empty grade(s) and unit(s)
        if (_grades_[k].value === '' || _second_n[k].value === '') {
            // warning text div
            warning_text.style.display = 'block';
            //warning text
            document.getElementById('myModal').modal = 'hide';
            document.getElementById('for_check').innerHTML += 'You are to fill everything';
            //Modal display of
            modal.style.display = 'none';
        }
        _second_n_sum += parseSec;
        division += parseInt(_second_n[k].value);
        console.log(division);
        final += parseInt(_grades_[k].value) * parseInt(_second_n[k].value);
        //final += parseInt(final_multiple);
        var total = final / division;
        var final_2;
        document.getElementById('show').innerHTML = total.toFixed(2);
        console.log(total)
            //document.getElementById('texT').innerHTML = _second_n_sum;
    }

}