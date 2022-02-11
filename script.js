function getValueDate(value) {
  if (value.toString().length === 1) return `0${value}`;

  return value;
}

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, '00'),
    mm = String(today.getMonth() + 1).padStart(2, '0'),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = '02/20/',
    birthday = dayMonth + yyyy;

  today = mm + '/' + dd + '/' + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById('days').innerText = getValueDate(
        Math.floor(distance / day)
      )),
        (document.getElementById('hours').innerText = getValueDate(
          Math.floor((distance % day) / hour)
        )),
        (document.getElementById('minutes').innerText = getValueDate(
          Math.floor((distance % hour) / minute)
        )),
        (document.getElementById('seconds').innerText = getValueDate(
          Math.floor((distance % minute) / second)
        ));

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById('headline').innerText = "It's my birthday!";
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        clearInterval(x);
      }
      seconds;
    }, 0);
})();

//get parameters javascript
function getParameter(parameterName) {
  let parameters = new URLSearchParams(window.location.search);
  return parameters.get(parameterName);
}

document.addEventListener('DOMContentLoaded', () => {
  const name = getParameter('name');

  document.getElementById('myTitle').innerHTML = name;
  document.getElementById('inputName').value = name;
});

//show hide

function openInvitation() {
  const mainContent = document.getElementById('mainContent');
  mainContent.classList.add('d-block');

  const introContent = document.getElementById('introContent');
  introContent.classList.remove('d-flex');
}

window.addEventListener('DOMContentLoaded', () => {
  const buttonBuka = document.getElementById('buka');
  buttonBuka.addEventListener('click', openInvitation);
});

// Modal Setup
var modal = document.getElementById('modal');

var modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function () {
  modal.style.display = 'none';
});

// global handler
document.addEventListener('click', function (e) {
  if (e.target.className.indexOf('modal-target') !== -1) {
    var img = e.target;
    var modalImg = document.getElementById('modal-content');
    var captionText = document.getElementById('modal-caption');
    modal.style.display = 'block';
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  }
});
