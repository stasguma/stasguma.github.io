var app = {
  createElement: function (params) {
    var element = document.createElement(params.tagName);

    if (params.inputType) {
        element.setAttribute('type', params.inputType);
    }

    // if (params.inputType === 'checkbox') {
    //     element.setAttribute('type', params.inputType);
    // }

    element.className = params.className;
    element.innerHTML = params.textHtml;

    if (params.parentElement) {
      params.parentElement.appendChild(element);
    }

    return element;
  },
  questions: function(que, answer) {
    for (var i = 1; i < que + 1; i++) {

      var ol = document.body.querySelector('ol');

      this.createElement({
        tagName: 'li',
        className: '',
        textHtml: 'Вопрос №' + i,
        parentElement: ol
      });

      for (var j = 1; j < answer + 1; j++) {

      var li = document.body.querySelector('li');

        this.createElement({
          tagName: 'label',
          className: '',
          textHtml: 'Вариант ответа №' + j,
          parentElement: li
        });

      // var label = document.body.querySelectorAll('label');
      //
      //   this.createElement({
      //     tagName: 'input',
      //     inputType: 'checkbox',
      //     className: '',
      //     textHtml: '',
      //     parentElement: label
      // });

      }
    }
  }
};

var body = document.querySelector('body');

app.createElement({
  tagName: 'div',
  className: 'wrapper container-fluid',
  textHtml: '',
  parentElement: body
});

var wrapper = document.body.querySelector('div');

app.createElement({
  tagName: 'h1',
  className: 'text-center',
  textHtml: 'Тест по программированию',
  parentElement: wrapper
});

app.createElement({
  tagName: 'ol',
  className: '',
  textHtml: '',
  parentElement: wrapper
});

app.createElement({
  tagName: 'input',
  inputType: 'submit',
  className: '',
  textHtml: '',
  parentElement: wrapper
});

app.questions(3, 4);




// var div = document.createElement('div');
// document.body.appendChild(div);
// div.classList.add('wrapper');
// div.classList.add('container-fluid');
//
// var divRow = document.createElement('div');
// div.appendChild(divRow);
// divRow.classList.add('row');
//
// var divCol = document.createElement('div');
// divRow.appendChild(divCol);
// divCol.classList.add('col-md-12');
//
// var h2 = document.createElement('h2');
// divCol.appendChild(h2);
// h2.classList.add('text-center');
// h2.innerHTML = 'Тест по программированию';
// h2.style.fontSize = '18px';
//
// var ol = document.createElement('ol');
// divCol.appendChild(ol);
//
// var li = document.createElement('li');
// ol.appendChild(li);
// li.style.fontSize = '16px';
// li.style.margin = '8px 0 8px 0';
// li.innerHTML = 'Вопрос №1';
//
// var li2 = document.createElement('li');
// ol.appendChild(li2);
// li2.style.fontSize = '16px';
// li2.style.margin = '8px 0 8px 0';
// li2.innerHTML = 'Вопрос №2';
//
// var li3 = document.createElement('li');
// ol.appendChild(li3);
// li3.style.fontSize = '16px';
// li3.style.margin = '8px 0 8px 0';
// li3.innerHTML = 'Вопрос №3';
//
// var label = document.createElement('label');
// li.appendChild(label);
// label.style.display = 'block';
// label.style.fontSize = '12px';
// label.style.fontWeight = '500';
// label.style.marginBottom = '-3px';
// label.innerHTML = '<input type="checkbox" style="position: relative; top: 2px;"> Вариант ответа №1';
//
// var label2 = document.createElement('label');
// li.appendChild(label2);
// label2.style.display = 'block';
// label2.style.fontSize = '12px';
// label2.style.fontWeight = '500';
// label2.style.marginBottom = '-3px';
// label2.innerHTML = '<input type="checkbox" style="position: relative; top: 2px;"> Вариант ответа №2';
//
// var label3 = document.createElement('label');
// li.appendChild(label3);
// label3.style.display = 'block';
// label3.style.fontSize = '12px';
// label3.style.fontWeight = '500';
// label3.style.marginBottom = '-3px';
// label3.innerHTML = '<input type="checkbox" style="position: relative; top: 2px;"> Вариант ответа №3';
//
// var label = document.createElement('label');
// li2.appendChild(label);
// label.style.display = 'block';
// label.style.fontSize = '12px';
// label.style.fontWeight = '500';
// label.style.marginBottom = '-3px';
// label.innerHTML = '<input type="checkbox" style="position: relative; top: 2px;"> Вариант ответа №1';
//
// var label2 = document.createElement('label');
// li2.appendChild(label2);
// label2.style.display = 'block';
// label2.style.fontSize = '12px';
// label2.style.fontWeight = '500';
// label2.style.marginBottom = '-3px';
// label2.innerHTML = '<input type="checkbox" style="position: relative; top: 2px;"> Вариант ответа №2';
//
// var label3 = document.createElement('label');
// li2.appendChild(label3);
// label3.style.display = 'block';
// label3.style.fontSize = '12px';
// label3.style.fontWeight = '500';
// label3.style.marginBottom = '-3px';
// label3.innerHTML = '<input type="checkbox" style="position: relative; top: 2px;"> Вариант ответа №3';
//
// var label = document.createElement('label');
// li3.appendChild(label);
// label.style.display = 'block';
// label.style.fontSize = '12px';
// label.style.fontWeight = '500';
// label.style.marginBottom = '-3px';
// label.innerHTML = '<input type="checkbox" style="position: relative; top: 2px;"> Вариант ответа №1';
//
// var label2 = document.createElement('label');
// li3.appendChild(label2);
// label2.style.display = 'block';
// label2.style.fontSize = '12px';
// label2.style.fontWeight = '500';
// label2.style.marginBottom = '-3px';
// label2.innerHTML = '<input type="checkbox" style="position: relative; top: 2px;"> Вариант ответа №2';
//
// var label3 = document.createElement('label');
// li3.appendChild(label3);
// label3.style.display = 'block';
// label3.style.fontSize = '12px';
// label3.style.fontWeight = '500';
// label3.style.marginBottom = '-3px';
// label3.innerHTML = '<input type="checkbox" style="position: relative; top: 2px;"> Вариант ответа №3';
