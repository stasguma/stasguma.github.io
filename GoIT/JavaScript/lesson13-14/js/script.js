
$(function () {
   'use strict';

   var questionsGen = [
      {
         question: "Столица Украины",
         answers: ["Киев", "Харьков", "Одесса"],
         correctAnswer: "Киев"
      },
      {
         question: "Численность населения",
         answers: ["50 млн", "43 млн", "35 млн"],
         correctAnswer: "43 млн"
      },
      {
         question: "Территория",
         answers: ["453 549 км²", "603 549 км²", "403 549 км²"],
         correctAnswer: "603 549 км²"
      }
   ];

   // console.log(questionsGen.length);

   var setLocalStorage = localStorage.setItem('questionsGen', JSON.stringify(questionsGen));
   console.log(JSON.stringify(questionsGen));
   // console.log(setLocalStorage);

   // var getLocalStorage = localStorage.getItem('questionnaire');
   var getLocalStorage = JSON.parse(localStorage.getItem('questionsGen'));
   console.log(getLocalStorage);

   var templateHtml = $('#questionnaire').html();
   var tmpl = _.template(templateHtml);
   var tmpl2 = tmpl(getLocalStorage);
   // var tmpl2 = tmpl(questionsGen);

   $('body').append(tmpl2);
});
