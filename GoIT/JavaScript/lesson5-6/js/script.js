var Stopwatch = function(elem) {

  var time = 0,
      interval,
      offset;

  function update() {
    if (this.running) {
      time += delta();
    }

    var formattedTime = timeFormatter(time);
    elem.textContent = formattedTime;
    // console.log(time);
  }

  function delta() {
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;

    return timePassed;
  }

  function timeFormatter(timeInMilliseconds) {
    var time = new Date(timeInMilliseconds);
    var hours = time.getUTCHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

    if (hours.length < 2) {
      hours = '0' + hours;
    }

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.length  < 2) {
      seconds = '0' + seconds;
    }

    while (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds;
    }

    return hours + ' : ' + minutes + " : " + seconds + " . " + milliseconds;
  }

  this.running = false;

  this.start = function () {

    if (!this.running) {
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.running = true;
      startBtn.innerHTML = "Pause";
    }
  };

  this.pause = function () {

    if (this.running) {
      clearInterval(interval);
      startBtn.innerHTML = "Start";
      this.running = false;
    }
  };

  this.clear = function () {
    time = 0;
    update();
    startBtn.innerHTML = "Start";
    this.running = false;
  };

};

var timeTable = document.querySelector('.stopwatch');
var startBtn = document.querySelector('.startBtn');
var clearBtn = document.querySelector('.clearBtn');

var watch = new Stopwatch(timeTable);

startBtn.addEventListener('click', function () {
  if (watch.running) {
    watch.pause();
  } else {
    watch.start();
  }
});

clearBtn.addEventListener('click', function () {
  watch.clear();
});
