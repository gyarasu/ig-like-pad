console.log('START IG PAD')
document.onkeydown = keydown;
const right_button = 'coreSpriteRightPaginationArrow';
const left_button = 'coreSpriteLeftPaginationArrow';
const like_button = 'coreSpriteHeartOpen';

function keydown() {
	let target;
	switch (event.keyCode) {
		case 37:
			target = getTargetElement(left_button);
			break;
		case 39:
			target = getTargetElement(right_button);
			break;
		case 32:
			target = getTargetElement(like_button);
			break;
		default:
			break;
	}
	target.click();
}

function getTargetElement(className) {
	return document.getElementsByClassName(className)[0];
}
