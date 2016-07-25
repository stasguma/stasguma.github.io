console.log('script loaded!!!');

$(function () {

   var offset = 0;

   $('.search-string__btn').on('click', function (e) {
      e.preventDefault();

      $('.googleRequest > ul').detach();

      $('#btnPrev, #btnNext').hide();

      var $searchValue = $('#search-string').val();

      $.ajax({
         url: "https://api.cognitive.microsoft.com/bing/v5.0/search?q="+ $searchValue +"&count=5&offset="+ offset +"&mkt=en-us&format=json",
         headers: {
            "Ocp-Apim-Subscription-Key": "30bc47a3e7ab46f0a846fe4aa4825759"
         },
         success: function(data) {
            var $ul = $('<ul></ul>');

            $.each(data.webPages.value, function(i, val) {
               var $li = $('<li></li>');
               $li.html('<h3><a href="' + val.url + '" target="_blank">' + val.name + '</a></h3><cite class="displayURL"><strong>' + val.displayUrl + '</strong></cite><p class="describe">' + val.snippet + '</p>');
               $ul.append($li);
            });

            if (offset <= 0) {
               $('#btnPrev').hide();
               $('#btnNext').show();
            } else {
               $('#btnPrev, #btnNext').show();
            }

            $('.googleRequest').prepend($ul);
         }
      });
   });

   $('#btnNext').on('click', function (e) {
      e.preventDefault();

      offset += 5;

      $('.search-string__btn').trigger('click');
   });

   $('#btnPrev').on('click', function (e) {
      e.preventDefault();

      offset -= 5;

      $('.search-string__btn').trigger('click');
   });

   function Human() {
      this.name = 'name';
      this.age = 'age';
      this.sex = 'sex';
      this.height = 'height';
      this.weight = 'weight';
   }

   console.log("human = ", Human);

   function Worker(name) {
      this.name = name;
      this.placeOfWork = "Toolsy";
      this.salary = "$2000";
   }

   function Student(name) {
      this.name = name;
      this.placeOfStudy = "Massachusetts Institute of Technology";
      this.bursaries = "$300";
   }

////////
/////// WORKER
///////

   Worker.prototype = new Human();

   Worker.prototype.work = function () {
      return this.name + " works at " + this.placeOfWork;
   };

   console.log('worker = ', Worker);

////////
/////// STUDENT
///////

   Student.prototype = new Human();

   Student.prototype.watchSerials = function () {
      return this.name + " is watching serials";
   };

   console.log("student = ", Student);

////////
/////// NEW CLASSES AND VERIFICATION
///////

   var alex = new Worker("Alex");
   var leo = new Worker("Leo");
   var viktor = new Student("Viktor");
   var mark = new Student("Mark");

   console.log("alex.work() = ", alex.work());
   console.log("viktor.watchSerials() = ", viktor.watchSerials());

});
