$(function () {
   // var templateHtml = _.template($('#template').html());
   var templateHtml = $('#template').html();

   var data = {
      firstBlock: "first-block",
      name: "Stas Guma",
      status: "Student",
      secondBlock: "second-block",
      frontEnd: "I want to learn front-end, becouse:",
      interesting: "It`s interesting to me",
      thirdBlock: "third-block",
      myContact: "My contact number:",
      callTo: "callto:+380501001010",
      number: "+380501001010",
      profile: "My VK profile:",
      fourthBlock: "four-block",
      feedback: "My feedback:",
      smthWritten: "Theres something written here"
   };

   var tmpl = _.template(templateHtml);
   var tmpl2 = tmpl(data);

   $('body').append(tmpl2);

   console.log('work!');
});
