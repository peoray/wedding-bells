// COPYRIGHT YEAR
function getYear() {
  // get current date
  const date = new Date();
  // get current year
  const year = date.getFullYear();
  // insert current year into page
  document.getElementById('year').innerHTML = year;
}
getYear();

// COUNTDOWN TIMER
function countDown() {
  // get date of wedding
  const weddingDate = new Date('August 31, 2018 16:57:59');
  // get current date
  const now = new Date();
  const timeDiff = weddingDate.getTime() - now.getTime();

  let seconds = Math.floor(timeDiff / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  const timer = setTimeout(countDown, 1000);
  const countdown = document.getElementById('countdown');

  if (timeDiff <= 0) {
    clearTimeout(timer);
    return (countdown.innerHTML = 'Emma and Raymond have tied the knot!');
  } else {
    countdown.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  }
}
countDown();

// BACK TO TOP BUTTON
var html, body, sttbtn;

window.onload = function() {
  html = document.documentElement;
  body = document.body;
  sttbtn = document.getElementById('btt');
};

window.onscroll = stt;

function stt() {
  var windowInnerHeightX2 = 2 * innerHeight;
  if (
    body.scrollTop > windowInnerHeightX2 ||
    html.scrollTop > windowInnerHeightX2
  ) {
    sttbtn.classList.add('show');
  } else {
    sttbtn.classList.remove('show');
  }
}

function sttop(totalTime, easingPower) {
  var timeInterval = 1;
  var scrollTop = Math.round(body.scrollTop || html.scrollTop);

  var timeLeft = totalTime;
  var scrollByPixel = setInterval(function() {
    var percentSpent = (totalTime - timeLeft) / totalTime;
    if (timeLeft >= 0) {
      var newscroll = scrollTop * (1 - ease(percentSpent, easingPower));

      body.scrollTop = newscroll;
      html.scrollTop = newscroll;
      timeLeft--;
    } else {
      clearInterval(scrollByPixel);
    }
  }, timeInterval);
}

function ease(t, power) {
  if (t < 0.5) {
    return 0.5 * Math.pow(2 * t, power);
  } else {
    return 0.5 * (2 - Math.pow(2 * (1 - t), power));
  }
}

document.getElementById('btt').addEventListener('click', function() {
  sttop(300, 3);
});
/* The Back to top button ends here */

//Modal Form popup
const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.querySelector('.closeBtn');

// show the modal form
const openModal = () => {
  modal.style.display = 'block';
};

// close the modal form
const closeModal = () => {
  modal.style.display = 'none';
};

const outsideClick = () => {
  modal.style.display = 'block';
};

document.getElementById('submit').addEventListener('click', e => {
  modal.style.display = 'none';
  alert('Thank you! We look forward to seeing you.');
});

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
