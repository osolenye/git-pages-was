document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('resize', function () {
    var w = window.innerWidth;
    var h = window.innerHeight;

    var container = document.getElementById("container");

    var coef = 0;
    coef = (h / container.offsetHeight + w / container.offsetWidth) / 2;
    console.log(coef);

    container.style.transform = "scale(" + coef + ")";
    console.log("scale(" + coef + ")");
  });


  var w = window.innerWidth;
  var h = window.innerHeight;

  var container = document.getElementById("container");

  var coef = 0;
  coef = (h / container.offsetHeight + w / container.offsetWidth) / 2;
  console.log(coef);

  container.style.transform = "scale(" + coef + ")";
  console.log("scale(" + coef + ")");




  var responseProcessed = document.getElementById("response_processed");
  var responseUnprocessed = document.getElementById("response_unprocessed");

  var processedRequests = document.getElementById("processed_requests");
  var unprocessedRequests = document.getElementById("unprocessed_requests");

  var urlProcessedRequests = document.getElementById("url_processed_requests");
  var urlUnprocessedRequests = document.getElementById(
    "url_unprocessed_requests"
  );

  responseUnprocessed.style.display = "none";

  urlProcessedRequests.addEventListener("click", function (event) {
    event.preventDefault();

    responseUnprocessed.style.display = "none";
    responseProcessed.style.display = "flex";

    processedRequests.style.background = "#0B3C32";
    urlProcessedRequests.style.color = "#EACC76";
    unprocessedRequests.style.background = "#0000";
    urlUnprocessedRequests.style.color = "#0B3C32";
  });

  urlUnprocessedRequests.addEventListener("click", function (event) {
    event.preventDefault();

    responseProcessed.style.display = "none";
    responseUnprocessed.style.display = "flex";

    unprocessedRequests.style.background = "#0B3C32";
    urlUnprocessedRequests.style.color = "#EACC76";
    processedRequests.style.background = "#0000";
    urlProcessedRequests.style.color = "#0B3C32";
  });

  var buttonDropdownOpenLink = document.getElementById(
    "button_dropdown_open_link"
  );
  var buttonDropdownCloseLink = document.getElementById(
    "dropdown_button_close_link"
  );
  var dropdownContent = document.getElementById("dropdown_content");
  dropdownContent.style.display = "none";

  buttonDropdownOpenLink.addEventListener("click", function (event) {
    event.preventDefault();
    buttonDropdownOpenLink.style.display = "none";

    dropdownContent.style.display = "flex";
  });

  buttonDropdownCloseLink.addEventListener("click", function (event) {
    event.preventDefault();

    dropdownContent.style.display = "none";
    buttonDropdownOpenLink.style.display = "block";
  })


  console.log(localStorage.getItem("accessToken"));
  // fetch("https://ваш_сервер/api/запрос", {
  //   method: "GET",
  //   headers: {
  //     "Authorization": "Bearer " + accessToken
  //   }
  // })
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Ошибка при выполнении запроса');
  //   }
  //   return response.json();
  // })
  // .then(data => {
  //   // Обработка ответа от сервера
  //   console.log(data);
  // })
  // .catch(error => {
  //   // Обработка ошибки
  //   console.error('Ошибка:', error);
  // });


});