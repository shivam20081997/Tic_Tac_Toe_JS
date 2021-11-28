function myfunc(){
	var box1, box2, box3, box4, box5, box6, box7, box8, box9;
	box1 = document.getElementById("box-1").innerHTML;
	box2 = document.getElementById("box-2").innerHTML;
	box3 = document.getElementById("box-3").innerHTML;
	box4 = document.getElementById("box-4").innerHTML;
	box5 = document.getElementById("box-5").innerHTML;
	box6 = document.getElementById("box-6").innerHTML;
	box7 = document.getElementById("box-7").innerHTML;
	box8 = document.getElementById("box-8").innerHTML;
	box9 = document.getElementById("box-9").innerHTML;


	if ((box1 == 'x' || box1 == 'X') && (box2 == 'x' ||box2 == 'X')
	 && (box3 == 'x' || box3 == 'X')) 
	 {
		document.getElementById('winner-display-board').innerHTML = "Player with X filled choice won";
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
   
	}
    else if ((box1 == 'x' || box1 == 'X') && (box4 == 'x' ||
		box4 == 'X') && (box7 == 'x' || box7 == 'X')) {
		document.getElementById('winner-display-board').innerHTML = "Player with X filled choice won";
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;

		
	}

    else if ((box7 == 'x' || box7 == 'X') && (box8 == 'x' ||
    box8 == 'X') && (box9 == 'x' || box9 == 'X')) {
    document.getElementById('winner-display-board').innerHTML = "Player with X filled choice won";
    document.getElementById("box-1").disabled = true;
    document.getElementById("box-2").disabled = true;
    document.getElementById("box-3").disabled = true;
    document.getElementById("box-4").disabled = true;
    document.getElementById("box-5").disabled = true;
    document.getElementById("box-6").disabled = true;
    
    }

    else if ((box3 == 'x' || box3 == 'X') && (box6 == 'x' ||
		box6 == 'X') && (box9 == 'x' || box9 == 'X')) {
		document.getElementById('winner-display-board').innerHTML = "Player with X filled choice won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		
	}
    else if ((box1 == 'x' || box1 == 'X') && (box5 == 'x' ||
    box5 == 'X') && (box9 == 'x' || box9 == 'X')) {
    document.getElementById('winner-display-board').innerHTML = "Player with X filled choice won";
    document.getElementById("box-2").disabled = true;
    document.getElementById("box-3").disabled = true;
    document.getElementById("box-4").disabled = true;
    document.getElementById("box-6").disabled = true;
    document.getElementById("box-7").disabled = true;
    document.getElementById("box-8").disabled = true;
    
}

else if ((box3 == 'x' || box3 == 'X') && (box5 == 'x' ||
		box5 == 'X') && (box7 == 'x' || box7 == 'X')) {
		document.getElementById('winner-display-board').innerHTML = "Player with X filled choice won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		
	}

    else if ((box2 == 'x' || box2 == 'X') && (box5 == 'x' ||
		box5 == 'X') && (box8 == 'x' || box8 == 'X')) {
		document.getElementById('winner-display-board').innerHTML = "Player with X filled choice won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-9").disabled = true;
		
	}
    else if ((box4 == 'x' || box4 == 'X') && (box5 == 'x' ||
		box5 == 'X') && (box6 == 'x' || box6 == 'X')) {
		document.getElementById('winner-display-board').innerHTML = "Player with X filled choice won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		
	}

    else if ((box1 == '0' || box1 == '0') && (box2 == '0' ||
		box2 == '0') && (box3 == '0' || box3 == '0')) {
		document.getElementById('winner-display-board').innerHTML = "Player with O filled choice won";
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		
	}
	else if ((box1 == '0' || box1 == '0') && (box4 == '0' ||
		box4 == '0') && (box7 == '0' || box7 == '0')) {
		document.getElementById('winner-display-board').innerHTML = "Player with O filled choice won";
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		
	}
	else if ((box7 == '0' || box7 == '0') && (box8 == '0' ||
		box8 == '0') && (box9 == '0' || box9 == '0')) {
		document.getElementById('winner-display-board').innerHTML = "Player with O filled choice won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		
	}
	else if ((box3 == '0' || box3 == '0') && (box6 == '0' ||
		box6 == '0') && (box9 == '0' || box9 == '0')) {
		document.getElementById('winner-display-board').innerHTML = "Player with O filled choice won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		
	}
	else if ((box1 == '0' || box1 == '0') && (box5 == '0' ||
		box5 == '0') && (box9 == '0' || box9 == '0')) {
		document.getElementById('winner-display-board').innerHTML = "Player with O filled choice won";
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		
	}
	else if ((box3 == '0' || box3 == '0') && (box5 == '0' ||
		box5 == '0') && (box7 == '0' || box7 == '0')) {
		document.getElementById('winner-display-board').innerHTML = "Player with O filled choice won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		
	}
	else if ((box2 == '0' || box2 == '0') && (box5 == '0' ||
		box5 == '0') && (box8 == '0' || box8 == '0')) {
		document.getElementById('winner-display-board').innerHTML = "Player with O filled choice won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-9").disabled = true;
		
	}
	else if ((box4 == '0' || box4 == '0') && (box5 == '0' ||
		box5 == '0') && (box6 == '0' || box6 == '0')) {
		document.getElementById('winner-display-board').innerHTML = "Player with O filled choice won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
	}

	else if ((box1 == 'X' || box1 == '0') && (box2 == 'X'
	|| box2 == '0') && (box3 == 'X' || box3 == '0') &&
	(box4 == 'X' || box4 == '0') && (box5 == 'X' ||
	box5 == '0') && (box6 == 'X' || box6 == '0') &&
	(box7 == 'X' || box7 == '0') && (box8 == 'X' ||
	box8 == '0') && (box9 == 'X' || box9 == '0')) {
		document.getElementById('winner-display-board')
			.innerHTML = "Match Tie";
	}
}


function myfunc_2() {
	location.reload();
	document.getElementById('box-1').value = '';
	document.getElementById("box-2").value = '';
	document.getElementById("box-3").value = '';
	document.getElementById("box-4").value = '';
	document.getElementById("box-5").value = '';
	document.getElementById("box-6").value = '';
	document.getElementById("box-7").value = '';
	document.getElementById("box-8").value = '';
	document.getElementById("box-9").value = '';
	document.getElementById("move-count").value='';

}

count =9;

flag = 1;
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("box-1").innerHTML = "X";
		document.getElementById("box-1").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" X ";
		flag = 0;
	}
	else {
		document.getElementById("box-1").innerHTML = "0";
		document.getElementById("box-1").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" O ";

		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("box-2").innerHTML = "X";
		document.getElementById("box-2").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" X ";
		flag = 0;
	}
	else {
		document.getElementById("box-2").innerHTML = "0";
		document.getElementById("box-2").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" O ";
		flag = 1;
	}
}
function myfunc_5() {
	if (flag == 1) {
		document.getElementById("box-3").innerHTML = "X";
		document.getElementById("box-3").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" X ";
		flag = 0;
	}
	else {
		document.getElementById("box-3").innerHTML = "0";
		document.getElementById("box-3").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" O ";
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("box-4").innerHTML = "X";
		document.getElementById("box-4").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" X ";
		flag = 0;
	}
	else {
		document.getElementById("box-4").innerHTML = "0";
		document.getElementById("box-4").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" O ";
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("box-5").innerHTML = "X";
		document.getElementById("box-5").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" X ";
		flag = 0;
	}
	else {
		document.getElementById("box-5").innerHTML = "0";
		document.getElementById("box-5").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" O ";
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("box-6").innerHTML = "X";
		document.getElementById("box-6").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" X ";
		flag = 0;
	}
	else {
		document.getElementById("box-6").innerHTML = "0";
		document.getElementById("box-6").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" O ";
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("box-7").innerHTML = "X";
		document.getElementById("box-7").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" X ";
		flag = 0;
	}
	else {
		document.getElementById("box-7").innerHTML = "0";
		document.getElementById("box-7").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" O ";
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("box-8").innerHTML = "X";
		document.getElementById("box-8").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" X ";
		flag = 0;
	}
	else {
		document.getElementById("box-8").innerHTML = "0";
		document.getElementById("box-8").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" O ";
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("box-9").innerHTML = "X";
		document.getElementById("box-9").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" X ";
		flag = 0;
	}
	else {
		document.getElementById("box-9").innerHTML = "0";
		document.getElementById("box-9").disabled = true;
		count-=1;
		document.getElementById('move-count').innerHTML= "Moves Left: "+count;
		document.getElementById('next-player').innerHTML="Turn Played By:"+" O ";
		flag = 1;
	}
}
