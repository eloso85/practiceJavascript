//
$(window).on("load", () => {
  let daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date();
  let day = daylist[d.getDay()];
  $(".today").html(`${day}`);
  console.log("Today is : " + day);

  let hour = d.toLocaleTimeString();
  $(".time").html(`${hour}`);
  console.log(hour);
});
//

$("#calculate").click(() => {
  let s1 = parseInt($("#input1").val());
  let s2 = parseInt($("#input2").val());
  let s3 = parseInt($("#input3").val());

  let s = (s1 + s2 + s3) / 2;
  let area = Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)));
  event.preventDefault();
  $(".calculateAnswer").html(`
  ${area}`);
  console.log(area);
});

//

const print_current_page = () => {
  window.print();
};

//

const animateText = () => {
  let text = $("#animate_text").val();

  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    animated = text;
    console.log(animated);
    $(".animated").html(`${animated}`);
  }, 100);
};

const leapYear = () => {
  let year = parseInt($("#inputYear").val());
  const is_leapyear = new Date(year, 1, 29).getMonth() === 1;
  if (is_leapyear === true) {
    $(".isLeapYear").html(`This is a Leap Year`);
  } else {
    $(".isLeapYear").html(`This is not a Leap Year`);
  }
};

const isSunday = () => {
  //event.preventDefault();
  let start = parseInt($("#startYear").val());
  let end = parseInt($("#endYear").val());
  let list = [];

  for (let year = start; year <= end; year++) {
    let d = new Date(year, 0, 1);
    if (d.getDay() === 0) {
      list.push(year);
    }
  }
  if (list.length > 0)
    $(".isFirstSunday").html(
      `${list
        .map(function (year1) {
          return `
      <div>${year1}</div>
      `;
        })
        .join("")}`
    );
  else $(".isFirstSunday").html("Nothing to show");
  console.log(list);
};

const randomInt = () => {
  let cpu = Math.floor(Math.random() * 10);
  console.log(cpu);
  let user = parseInt($("#inputGuess").val());
  console.log(user);

  if (user === cpu) {
    $(".isGuessCorrect").html(`My number was ${cpu} its a match`);
  } else {
    $(".isGuessCorrect").html(`My number was ${cpu} its a not a match`);
  }
};

const tillChirstmas = () => {
  let year = new Date();
  let start = new Date();
  let end = new Date(year.getUTCFullYear(), 11, 25);

  let tillChristmas = end.getTime() - start.getTime();
  daysTillChristmas = (tillChristmas / (1000 * 60 * 60 * 24)) % 365;
  $(".countDown").html(`${Math.ceil(daysTillChristmas)} Days till Christmas`);
  console.log(Math.ceil(daysTillChristmas));
};
tillChirstmas();

const simpleCalMulti = () => {
  let num1 = parseInt($("#num1").val());
  let num2 = parseInt($("#num2").val());

  let multiply = num1 * num2;

  $(".simpleCalAnswer").html(`${multiply}`);
  console.log(multiply);
};

const simpleCalDivi = () => {
  let num1 = parseInt($("#num1").val());
  let num2 = parseInt($("#num2").val());

  let divide = num1 / num2;

  $(".simpleCalAnswer").html(`${divide}`);
  console.log(divide);
};

const fahrenheitConvert = () => {
  let fahrenheit = ($("#inputTemp").val() * 9) / 5 + 32;
  $(".isTemp").html(`${fahrenheit} \xB0F`);
  console.log(fahrenheit);
};

const celsiusConvert = () => {
  let celsius = (($("#inputTemp").val() - 32) * 5) / 9;
  $(".isTemp").html(`${celsius} \xB0C`);
  console.log(celsius);
};

const getUrl = () => {
  let currentUrl = window.location.href;
  alert(currentUrl);
};

const numDiff = (n) => {
  if (n <= 13) {
    return 13 - n;
  } else {
    return (n - 13) * 2;
  }
};
console.log(numDiff(32));

function sumOfTwo(a, b) {
  let sumoftwo = a + b;

  if (a == b) {
    console.log(sumoftwo * 3);
  } else {
    console.log(sumoftwo);
  }
}

sumOfTwo(2, 2);

18;

function checkTwo(a, b) {
  let checkTwo = a + b;
  if (a === 50 || b === 50 || checkTwo === 50) {
    //console.log("true");
  } else {
    //console.log("false");
  }
}

//checkTwo(25, 25);

function range(guess) {
  var ans = [];
  for (let i = 20; i <= 400; i++) {
    ans.push(i);
  }
  console.log(ans);
  if (ans.includes(guess)) {
    console.log("true");
  } else {
    console.log("false");
  }
}

//range(401);

//20
