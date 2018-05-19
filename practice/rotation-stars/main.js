(() => {
    let canvas = document.getElementById('canvas'),
        cnv = canvas.getContext('2d'),
        w = canvas.width = window.innerWidth,
        h = canvas.height = window.innerHeight,
        random = (n) => Math.random()*n,
        stars = new Array(225).fill().map(() => {
            return {
                radius: random(w),
                speed: random(0.01),
                angle: random(Math.PI*2)
            };
        });

    console.log(stars);
    function draw() {
        cnv.fillStyle = 'rgba(0, 0, 8, .1)';
        cnv.fillRect(0, 0, w, h);

        stars.forEach((star) => {
            star.angle += star.speed;

            cnv.beginPath();
            cnv.arc(Math.cos(star.angle) * star.radius + w/2, Math.sin(star.angle) * star.radius + h/2, 1, 0, Math.PI*2);
            cnv.closePath();

            cnv.fillStyle = 'white';
            cnv.fill();
        });

        window.requestAnimationFrame(draw);
    }

    window.requestAnimationFrame(draw);
})();
