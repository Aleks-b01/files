document.addEventListener('DOMContentLoaded', function() {

const oneman = document.getElementById('oneman');
const twoman = document.getElementById('twoman');
const menu = document.getElementById('menu');
const twomanname = document.getElementById('twomanname');
const first = document.getElementById('first');
const second = document.getElementById('second');
const onemancalc = document.getElementById('onemancalc');
const o = document.getElementById('o');
const timeoneo = document.getElementById('timeoneo');
const timetwoo = document.getElementById('timetwoo');
const timethreeo = document.getElementById('timethreeo');
const timefouro = document.getElementById('timefouro');
const timefiveo = document.getElementById('timefiveo');
const time = document.getElementById('time');
const oavg = document.getElementById('oavg');
const besto = document.getElementById('besto');
const worsto = document.getElementById('worsto');
const bpao = document.getElementById('bpao');
const wpao = document.getElementById('wpao');
const want = document.getElementById('want');
const avgo = document.getElementById('avgo');
const twomancalc = document.getElementById('twomancalc');
const manone = document.getElementById('manone');
const nameone = document.getElementById('nameone');
const timeoneone = document.getElementById('timeoneone');
const timetwoone = document.getElementById('timetwoone');
const timethreeone = document.getElementById('timethreeone');
const timefourone = document.getElementById('timefourone');
const timefiveone = document.getElementById('timefiveone');
const timeone = document.getElementById('timeone');
const manoneavg = document.getElementById('manoneavg');
const bestone = document.getElementById('bestone');
const worstone = document.getElementById('worstone');
const bpaone = document.getElementById('bpaone');
const wpaone = document.getElementById('wpaone');
const winone = document.getElementById('winone');
const avgone = document.getElementById('avgone');
const mantwoavg = document.getElementById('mantwoavg');
const besttwo = document.getElementById('besttwo');
const worsttwo = document.getElementById('worsttwo');
const bpatwo = document.getElementById('bpatwo');
const wpatwo = document.getElementById('wpatwo');
const wintwo = document.getElementById('wintwo');
const avgtwo = document.getElementById('svgtwo');
const mantwo = document.getElementById('mantwo');
const nametwo = document.getElementById('nametwo');
const timeonetwo = document.getElementById('timeonetwo');
const timetwotwo = document.getElementById('timetwotwo');
const timethreetwo = document.getElementById('timethreetwo');
const timefourtwo = document.getElementById('timefourtwo');
const timefivetwo = document.getElementById('timefivtwo');
const timetwo = document.getElementById('timetwo');
const submit = document.getElementById('submit');

let avgx = 0;
let avgy = 0;
let bx = 0;
let wx = 0;
let bpax = 0;
let wpax = 0;
let needx = 0;
let by = 0;
let wy = 0;
let bpay = 0;
let wpay = 0;
let needy = 0;
let timex = [];
let timey = [];

oneman.onclick = function() {
	menu.style.display = 'none';
	onemancalc.style.display = 'flex';
}

twoman.onclick = function() {
	menu.style.display = 'none';
	twomanname.style.display = 'flex';
}

submit.onclick = function() {
	processInputNames();
}

function processInputNames() {
	const NameOne = first.value;
	const NameTwo = second.value;
	nameone.innerText = NameOne;
	nametwo.innerText = NameTwo;
	first.value = '';
	second.value = '';
	twomanname.style.display = 'none';
	twomancalc.style.display = 'flex';
}

function processInputX() {
	const timetemp = timeo.value;
	timex.unshift(timetemp);
	timeo.value = '';
}

function processInputY() {
	const timetempy = timeo.value;
	timex.unshift(timetemp);
	timeo.value = '';
}
});
