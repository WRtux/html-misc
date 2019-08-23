function $fadeInNode(node, display) {
	var style = node.style;
	style.transition = null;
	style.opacity = "0.0";
	style.display = display;
	setTimeout(function() {
		style.transition = "opacity 0.5s";
		style.opacity = "1.0";
	}, 40);
	setTimeout(function() {
		style.transition = null;
		style.opacity = null;
	}, 580);
}
function $fadeOutNode(node) {
	var style = node.style;
	style.transition = null;
	style.opacity = "1.0";
	style.bottom = "0";
	setTimeout(function() {
		style.transition = "bottom 0.5s, opacity 0.5s";
		style.opacity = "0.0";
		style.bottom = "2em";
	}, 40);
	setTimeout(function() {
		style.display = "none";
		style.transition = null;
		style.opacity = null;
		style.bottom = null;
	}, 580);
}

function $slideInNode(node, display, milli) {
	var style = node.style;
	style.transition = null;
	style.width = "0";
	style.display = display;
	setTimeout(function() {
		style.transition = "width " + (milli / 1000) + "s";
		style.width = "100%";
	}, 40);
	setTimeout(function() {
		style.transition = null;
	} , milli + 80);
}
function $slideOutNode(node, milli) {
	var style = node.style;
	style.transition = "width " + (milli / 1000) + "s";
	style.width = "0";
	setTimeout(function() {
		style.display = "none";
		style.transition = null;
		style.width = null;
	}, milli + 40);
}

function $slideNodeWidth(node, pos, max) {
	var style = node.style;
	style.transition = "width 0.3s";
	style.width = (pos / max * 100) + "%";
	setTimeout(function() {
		style.transition = null;
	}, 340);
}
