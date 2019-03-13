$().ready(function () {
  let TYPE = 'time';
  var sekaisen = document.getElementById("sekaisen");
  $(sekaisen).contextmenu(function (e) {
    e.preventDefault();
  });

  var ctx = sekaisen.getContext("2d");
  var zero = document.getElementById("zero");
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");
  var five = document.getElementById("five");
  var six = document.getElementById("six");
  var seven = document.getElementById("seven");
  var eight = document.getElementById("eight");
  var nine = document.getElementById("nine");
  var no = document.getElementById("no");
  var right_point = document.getElementById("right_point");
  var left_point = document.getElementById("left_point");


  var num = 1.234567;

  function get_img(num) {
    if (num == '0') return zero;
    if (num == '1') return one;
    if (num == '2') return two;
    if (num == '3') return three;
    if (num == '4') return four;
    if (num == '5') return five;
    if (num == '6') return six;
    if (num == '7') return seven;
    if (num == '8') return eight;
    if (num == '9') return nine;
    if (num == 'n') return no;
    if (num == 'l') return left_point;
    if (num == 'r') return right_point;
  }

  function sekaisen_change(num) {
    if (num < 0) return;
    var str = num.toString();
    for (let i = 0; i < 8; i++) {
      let img;

      if (str[i] == '.') {
        s = 'r';
      } else if (str[i] == ' ') {
        s = 'n'
      } else {
        s = str[i];
      }

      img = get_img(s);
      ctx.drawImage(img, 0 + (i * 90), 0, 90, 230);
    }

  }

  function time_change() {
    var str = (new Date()).Format("hh:mm:ss");
    for (let i = 0; i < 8; i++) {
      let img;

      if (str[i] == ':') {
        if (parseInt(str[7]) % 2 == 0) {
          s = 'r';
        } else {
          s = 'l';
        }
      } else if (str[i] == ' ') {
        s = 'n'
      } else {
        s = str[i];
      }
      img = get_img(s);
      ctx.drawImage(img, 0 + (i * 90), 0, 90, 230);
    }
  }

  Date.prototype.Format = function (fmt) {
    var o = {
      "M+": this.getMonth() + 1, //月份 
      "d+": this.getDate(), //日 
      "h+": this.getHours(), //小时 
      "m+": this.getMinutes(), //分 
      "s+": this.getSeconds(), //秒 
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
      "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) :
        (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }

  setInterval(() => {

    if (TYPE == 'sekaisen') {
      rondom = Math.random();
      let num = 0;
      if (rondom <= 0.5) {
        num = Math.random();
      } else if (rondom <= 0.8) {
        num = Math.random() + 1;
      } else if (rondom <= 0.9) {
        num = Math.random() / 10 + 1;
      } else if (rondom <= 0.95) {
        num = Math.random() + 2;
      } else if (rondom <= 0.98) {
        num = Math.random() + 4;
      } else if (rondom <= 0.99) {
        num = Math.random() + 3;
      } else if (rondom >= 0.99999) {
        num = 1.048596;
      }
      sekaisen_change(num);
    }

    if (TYPE == 'time') {
      time_change();
    }

  }, 250);


  function index_more() {
    TYPE = TYPE == 'sekaisen' ? 'time' : 'sekaisen';
  }

  $('#sekaisen').click(function (e) { 
    TYPE = TYPE == 'sekaisen' ? 'time' : 'sekaisen';
  });
})