document.getElementById('quest1').addEventListener('click', function() {
    var answerDiv = document.getElementById('answerDiv');
    if (answerDiv.classList.contains('expanded')) {
        answerDiv.classList.remove('expanded');
    } else {
        answerDiv.classList.add('expanded');
    }
});


document.getElementById('quest2').addEventListener('click', function() {
    var answerDiv = document.getElementById('answerDiv2');
    if (answerDiv.classList.contains('expanded')) {
        answerDiv.classList.remove('expanded');
    } else {
        answerDiv.classList.add('expanded');
    }
});


document.getElementById('quest3').addEventListener('click', function() {
    var answerDiv = document.getElementById('answerDiv3');
    if (answerDiv.classList.contains('expanded')) {
        answerDiv.classList.remove('expanded');
    } else {
        answerDiv.classList.add('expanded');
    }
});


document.getElementById('quest4').addEventListener('click', function() {
    var answerDiv = document.getElementById('answerDiv4');
    if (answerDiv.classList.contains('expanded')) {
        answerDiv.classList.remove('expanded');
    } else {
        answerDiv.classList.add('expanded');
    }
});

document.getElementById('quest5').addEventListener('click', function() {
    var answerDiv = document.getElementById('answerDiv5');
    if (answerDiv.classList.contains('expanded')) {
        answerDiv.classList.remove('expanded');
    } else {
        answerDiv.classList.add('expanded');
    }
});

window.addEventListener('scroll', function() {
    var section2 = document.getElementById('section2');
    var container = document.getElementById('container');
    var button= this.document.getElementById("three");
    var contentText= this.document.getElementById("text2");
    var section2Position = section2.getBoundingClientRect();
    
    if (section2Position.top <= window.innerHeight && section2Position.bottom >= 0) {
        container.style.backgroundColor = '#3D4970';
        button.style.backgroundColor = 'white';
        contentText.style.color = 'black';
        container.style.border= 'none'; 


    } else if (section2Position.top > window.innerHeight) {
        container.style.backgroundColor = ''; 
        button.style.backgroundColor = '';
        contentText.style.color = 'white';
        container.style.border= ''; 


    }
});

