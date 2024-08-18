document.addEventListener('DOMContentLoaded', function() {
document.addEventListener("keydown", handleShortcut);

const time1 = document.getElementById('time1');
const time2 = document.getElementById('time2');
const time3 = document.getElementById('time3');
const time4 = document.getElementById('time4');
const time5 = document.getElementById('time5');
const timein = document.getElementById('timein');
const best = document.getElementById('best');
const worst = document.getElementById('worst');
const bpa = document.getElementById('bpa');
const wpa = document.getElementById('wpa');
const target = document.getElementById('target');
const avg = document.getElementById('avg');
const settarget = document.getElementById('settarget');
const settingsmenu = document.getElementById('settingsmenu');

let time = [];
let timebig = [];
let timebigtemp = 0;
let bpax = 0;
let wpax = 0;
let avgx = 0;
let bestx = 0;
let worstx = 0;
let targetx = 0;
// To explain this let, this is just there so when you click set target avg and you come back from settings, so that it takes you back to the calculator instead of the main menu
let settargetclicked = 0;
let settargetset = 0;
let timecount = -1;
let zero = 0;
let timebig1 = '';
let timebig2 = '';
let timebig3 = '';
let timebig4 = '';
let timebig5 = '';
let bpaxbig = 0;
let wpaxbig = 0;
let targetxbig = 0;
let avgxbig = 0;
let bestex = 0;
let worstex = 0; // A monument to the total failure when I for some reason thought that after there's a new best time, that you have to check wether or not it's the new worst time and vice versa

// Keybindings
function handleShortcut(event) {
	if (event.key === "Enter" && document.activeElement === timein) {
		event.preventDefault();
		processTime();
	}
};

// Processes the time input
function processTime() {
	let timetemp = Number(timein.value);
	timein.value = '';
	if (timetemp < 6000) {
		let timeconvert = (timetemp / 100).toFixed(2);
		timecount += 1;
		time.push(timeconvert);
		timebig.push(zero);
		drawTime();
	} else if (timetemp >= 10000) {
		let timeconvert = (timetemp / 100).toFixed(2);
		timecount += 1;
		timebigtemp = timeconvert;
		processTimeBig();
	}
};

// Processes times that are over a minute
function processTimeBig() {
	let timebigcount = 0
	while (timebigtemp >= 60) {
		timebigcount += 1;
		timebigtemp -= 100;
	}
	timebig.push(timebigcount);
	time.push(timebigtemp);
	drawTime();
};

// Displays time
function drawTime() {
	if (timecount == 0 && timebig[0] == 0) {
		time1.innerText = '1.  ' + time[0];
		best.innerText = 'Best:  ' + time[0]
		bestx = time[0]
	} else if (timecount == 0 && timebig[0] > 0) {
		time1.innerText = '1.  ' + timebig[0] + ':' + time[0];
		best.innerText = 'Best:  ' + timebig[0] + ':' + time[0]
		let timebigminutes = timebig[0] * 60;
		let timebigseconds = time[0];
		time[0] = timebigminutes + timebigseconds;
		bestx = timebigminutes + timebigseconds;
	} else if (timecount == 1 && timebig[1] == 0) {
		time2.innerText = '2.  ' + time[1];
		processBestWorstTwo();
	} else if (timecount == 1 && timebig[1] > 0) {
		time2.innerText = '2.  ' + timebig[1] + ':' + time[1];
		timebig2 = timebig[1] + ':' + time[1];
		let timebigminutes = timebig[1] * 60;
		let timebigseconds = time[1];
		time[1] = timebigminutes + timebigseconds;
		processBestWorstTwo();
	} else if (timecount == 2 && timebig[2] == 0) {
		time3.innerText = '3.  ' + time[2];
		processBestWorst();
	} else if (timecount == 2 && timebig[2] > 0) {
		time3.innerText = '3.  ' + timebig[2] + ':' + time[2]
		timebig3 = timebig[2] + ':' + time[2];
		let timebigminutes = timebig[2] * 60;
		let timebigseconds = time[2];
		time[2] = timebigminutes + timebigseconds;
		processBestWorst();
	} else if (timecount == 3 && timebig[3] == 0) {
		time4.innerText = '4.  ' + time[3];
		processBestWorst();
	} else if (timecount == 3 && timebig[3] > 0) {
		time4.innerText = '4.  ' + timebig[3] + ':' + time[3];
		timebig4 = timebig[3] + ':' + time[3];
		let timebigminutes = timebig[3] * 60;
		let timebigseconds = time[3];
		time[3] = timebigminutes + timebigseconds;
		processBestWorst();
	} else if (timecount == 4 && timebig[4] == 0) {
		time5.innerText = '5.  ' + time[4];
		processBestWorst();
	} else if (timecount == 4 && timebig[4] > 0) {
		time5.innerText = '5.  ' + timebig[4] + ':' + time[4];
		timebig5 = timebig[4] + ':' + time[4];
		let timebigminutes = timebig[4] * 60;
		let timebigseconds = time[4];
		time[4] = timebigminutes = timebigseconds;
		processBestWorst();
	}
};

// Processes the best and worst times but exclusively for the second solve
function processBestWorstTwo() {
	if (time[1] < bestx && timebig[1] == 0 && timebig[0] == 0) {
		worstx = bestx;
		bestx = time[1];
		best.innerText = 'Best:  ' + time[1];
		worst.innerText = 'Worst:  ' + worstx;
	} else if (time[1] < bestx && timebig[1] == 0 && timebig[0] > 0) {
		worstx = bestx;
		bestx = time[1];
		best.innerText = 'Best:  ' + time[1];
		worst.innerText = 'Worst:  ' + timebig1;
	} else if (time[1] < bestx && timebig[1] > 0 && timebig[0] > 0) {
		worstx = bestx;
		bestx = time[1];
		best.innerText = 'Best:  ' + timebig2;
		worst.innerText = 'Worst:  ' + timebig1;
	} else if (time[1] > worstx && timebig[1] == 0) {
		worstx = time[1]
		worst.innerText = 'Worst:  ' + time[1];
	} else if (time[1] > worstx && timebig[1] > 0) {
		worstx = time[1];
		worst.innerText = 'Worst:  ' + timebig2;
	}
};
// Processes the best and worst times
function processBestWorst() {
	if (time[timecount] < bestx && timebig[timecount] == 0) {
		bestx = time[timecount];
		best.innerText = 'Best:  ' + time[timecount];
		processBPA();
	} else if (time[timecount] > worstx && timebig[timecount] == 0) {
		worstx = time[timecount];
		worst.innerText = 'Worst:  ' + time[timecount];
		processBPA();
	} else if (time[timecount] < bestx && timebig[timecount] > 0) {
		processBestWorstBig();
	} else if (time[timecount] > worstx && timebig[timecount] > 0) {
		processBestWorstBig();
	} else {
		processBPA();
	}
};

// Processes the best and worst times for times bigger than a minute
function processBestWorstBig() {
	if (timecount == 2 && time[2] < bestx) {
		bestx = time[2];
		best.innerText = 'Best:  ' + timebig3;
		processBPA();
	} else if (timecount == 2 && time[2] > worstx) {
		worstx = time[2];
		worst.innerText = 'Worst:  ' + timebig3;
		processBPA();
	} else if (timecount == 3 && time[3] < bestx) {
		bestx = time[3];
		best.innerText = 'Best:  ' + timebig4;
		processBPA();
	} else if (timecount == 3 && time[3] > worstx) {
		worstx = time[3];
		worst.innerText = 'Worst:  ' + timebig4;
		processBPA();
	} else if (timecount == 4 && time[4] < bestx) {
		bestx = time[4];
		best.innerText = 'Best:  ' + timebig5;
		processBPA();
	} else if (timecount == 4 && time[4] > worstx) {
		worstx = time[4];
		worst.innerText = 'Worst:  ' + timebig5;
		processBPA();
	}
};

// Processes BPA
function processBPA() {
	if (timecount == 3) {
		let bpaxtemp = time[0] + time[1] + time[2] + time[3] - worstx;
		bpax = (bpaxtemp / 3).toFixed(2);
		while (bpax > 60) {
			bpaxbig += 1;
			bpax -= 60;
		}
		drawBPA();
	}
};

// Displays BPA
function drawBPA() {
	if (bpaxbig == 0) {
		bpa.innerText = 'BPA:  ' + bpax;
		processWPA();
	} else if (bpaxbig > 0) {
		bpa.innerText = 'BPA:  ' + bpaxbig + ':' + bpax;
		processWPA();
	}
};

// Processes WPA
function processWPA() {
	if (timecount == 3) {
		let wpaxtemp = time[0] + time[1] + time[2] + time[3] - bestx;
		wpax = (wpaxtemp / 3).toFixed(2);
		while (wpax > 60) {
			wpaxbig += 1;
			wpax -= 60;
		}
		drawWPA();
	}
};

// Displays WPA
function drawWPA() {
	if (wpaxbig == 0) {
		wpa.innerText = 'WPA:  ' + wpax;
		processTarget();
	} else if (wpaxbig > 0) {
		wpa.innerText = 'WPA:  ' + wpaxbig + ':' + wpax;
		processTarget();
	}
};

// Processes thet target time (in works)
function processTarget() {
	drawTarget();
};

// Displays the target time (in works)
function drawTarget() {
	processAVG();
};

// Processes the ao5
function processAVG() {
	if (timecount == 4) {
		let agvxtemp = time[0] + time[1] + time[2] + time[3] + time[4] - bestx - worstx;
		avgx = (avgxtemp / 3).toFixed(2);
		while (avgx > 60) {
			avgxbig += 1;
			avgx -= 60;
		}
		drawAVG();
	}
};

// Displays the ao5
function drawAVG() {
	if (avgxbig == 0) {
		avg.innerText = 'Average:  ' + avgx;
	} else if (avgxbig > 0) {
		avg.innerText = 'Average:  ' + avgxbig + ':' + avgx;
	}
};
});
