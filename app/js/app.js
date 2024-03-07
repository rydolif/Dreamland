let zSpacing = -1000;
let lastPos = zSpacing / 5;
let $frames = document.getElementsByClassName('frame');
let frames = Array.from($frames);
let zVals = [];

window.onscroll = function() {
    let top = document.documentElement.scrollTop;
    let delta = lastPos - top;

    frames.forEach(function(frame, i) {
        zVals[i] = (i * zSpacing) + zSpacing + delta * -5;

        let transform = `translateZ(${zVals[i]}px)`;
				let opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
    });
}
window.scrollTo(0, 1)

let soundButton = document.querySelector('.sound')
let audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('sound--paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
	soundButton.classList.contains('sound--paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
	audio.pause()
}