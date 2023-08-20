let buttons = document.getElementsByClassName('p-item');
let hidden=document.getElementsByClassName('hidden')


for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function () {

        if (buttons[i].style.height == '70px') {

            buttons[i].style.height = '150px';
            hidden[i].style.display = 'inline-block';


        } else {

            buttons[i].style.height = '70px';
            hidden[i].style.display = 'none';
        }


    });
}

document.getElementById("myBtn").onclick = function() {myFunction()};
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }





