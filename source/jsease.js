function $floor(num) {
	return Math.floor(num);
}
function $round(num) {
	return Math.round(num);
}
function $ceil(num) {
	return Math.ceil(num);
}

function $prefDigit(num, digit) {
	return (new Array(digit).join(0) + $floor(num)).slice(-digit);
}

function num$toTime(sec) {
	return $floor(sec / 3600 % 24) + ":" + $prefDigit(sec / 60 % 60, 2) + ":" + $prefDigit(sec % 60, 2);
}
function date$toTime(date) {
	return date.getHours() + ":" + $prefDigit(date.getMinutes(), 2) + ":" + $prefDigit(date.getSeconds(), 2);
}
function date$toDateTime(date) {
	return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date$toTime(date);
}

function num$toDur(sec) {
	if(sec < 0) return null;
	if(sec < 86400) return num$toTime(sec);
	else return $floor(sec / 86400) + "d " + num$toTime(sec);
}

function $newNode(type) {
	return document.createElement(type);
}

function $getNode(id) {
	return document.getElementById(id);
}
function $getStyle(id) {
	return document.getElementById(id).style;
}
function $getBody() {
	return document.body;
}

function $addNode(node, parent) {
	parent.appendChild(node);
}

function $removeNode(node) {
	node.parentNode.removeChild(node);
}

function $testClass(node, cls) {
	if(cls.indexOf(' ') != -1) return false;
	var arr = node.className.split(' ');
	for(var i = 0; i < arr.length; i++) if(arr[i] == cls) return true;
	return false;
}

function $setClass(node, cls) {
	if(cls.indexOf(' ') != -1) return false;
	var arr = node.className.split(' ');
	for(var i = 0; i < arr.length; i++) if(arr[i] == cls) return false;
	arr.push(cls);
	node.className = arr.join(' ');
	return true;
}
function $removeClass(node, cls) {
	if(cls.indexOf(' ') != -1) return false;
	var arr = node.className.split(' ');
	for(var i = 0; i < arr.length; i++) if(arr[i] == cls) arr[i] = null;
	node.className = arr.join(' ').replace("  ", " ");//.slice(0, -1)
	return true;
}
