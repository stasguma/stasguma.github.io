'use strict';

$(function () {

   var questionsGen = [
      {
         question: "Столица Украины?",
         answers: ["Киев", "Харьков", "Одесса"],
         correctAnswer: "Киев"
      },
      {
         question: "Численность населения?",
         answers: ["50 млн", "43 млн", "35 млн"],
         correctAnswer: "43 млн"
      },
      {
         question: "Территория Украины?",
         answers: ["453 549 км²", "603 549 км²", "403 549 км²"],
         correctAnswer: "603 549 км²"
      }
   ];

   var setLocalStorage = localStorage.setItem('questionsGen', JSON.stringify(questionsGen));
   console.log(JSON.stringify(questionsGen));

   var getLocalStorage = JSON.parse(localStorage.getItem('questionsGen'));
   console.log(getLocalStorage);

   var templateHtml = _.template($('#questionnaire').html());
   var tmpl = templateHtml({
      questionsGen: getLocalStorage
   });

   $('body').append(tmpl);

   $('input[type="submit"]').on('click', checkResults);

   function checkResults() {
      createModal();
      closeModal();
   }

   function createModal() {
      var rightAnswersArray = [];

      for (var i = 0; i < questionsGen.length; i++) {
         rightAnswersArray.push(questionsGen[i].correctAnswer);
      }

      var checkedArray = [];
      var checkboxes = $('input:checkbox:checked');

      for (var k = 0; k < checkboxes.length; k++) {
         checkedArray.push(checkboxes[k].value);
      }

      var divBackground = $('<div class="backgroundModal"></div>')
                              .css({
                                 "background-color":"rgba(0, 0, 0, .6)",
                                 "display": "block"
                              })
                              .appendTo(document.body)
                              .animate({"opacity": "1"}, 250);

      var divModal = $('<div class="modalWindow"></div>')
                        .css({"background-color":"white"})
                        .appendTo(divBackground);
      if (rightAnswersArray.toString() == checkedArray.toString()) {

         divModal.append('<h3>Congratulations!</h3>');
      } else {
         divModal.append('<h3>Sorry!</h3>');
      }

      var divContent = $('<div class="modalContent"></div>')
                           .appendTo(divModal);
      if (rightAnswersArray.toString() == checkedArray.toString()) {

         divContent.append('<p>You passed the test!</p>');
      } else {
         divContent.append('<p>You are not all questions answered correctly!</p>');
      }

      divModal.append('<button type="button" value="ok">OK</button>');
      divModal.append('<button type="button" value="reload">Reload</button>');

      $('button[value="ok"]').on('click', function (e) {
         $('.backgroundModal').detach();
      });

      $('button[value="reload"]').on('click', function (e) {
         $('.backgroundModal').detach();
         $('input:checkbox').prop("checked", false);
      });
   }

   function closeModal() {
      $('.backgroundModal').on('click', function (e) {
         if ($(event.target).closest('.modalWindow').length === 0) {
            $('.backgroundModal').detach();
         }
      });
   }

});
