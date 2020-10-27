/**
 * Created by zhangtianyang on 2018/6/28.
 */

const main = {
  // 日期格式化
  // str=20180628--->>>return=2018-06-28
  timeFormat2Date(str) {
    if (str === undefined || str === '' || str === null || isNaN(str)) {
      return ''
    } else {
      if (isNaN(str)) {
        return NaN
      } else {
        var temp = String(str);
        return temp.substring(0, 4) + '-' + temp.substring(4, 6) + '-' + temp.substring(6, 8);
      }
    }
  },
  // 时间格式化
  // str=185103--->>>return=18:51:03
  timeFormat2Time(str) {
    if (str === undefined || str === '' || str === null) {
      return ''
    } else {
      if (isNaN(str)) {
        return NaN
      } else {
        var temp = String(str);
        if (temp.length === 6) {
          return temp.substring(0, 2) + ':' + temp.substring(2, 4) + ':' + temp.substring(4, 6);
        } else if (temp.length === 4) {
          return temp.substring(0, 2) + ':' + temp.substring(2, 4);
        } else {
          return 'wrongInput'
        }
      }
    }
  },
  // 时间格式化总方法
  // str=20180628185103--->>>return=2018-06-28 18:51:03
  timeFormat(str) {
    if (str === undefined || str === '' || str === null) {
      return ''
    } else {
      if (isNaN(str)) {
        return NaN
      } else {
        var temp = String(str);
        if (temp.length === 6) {
          return main.timeFormat2Time(temp)
        } else if (temp.length === 8) {
          return main.timeFormat2Date(temp)
        } else if (temp.length === 14) {
          return main.timeFormat2Date(temp.substring(0, 8)) + ' ' + main.timeFormat2Time(temp.substring(8, 16))
        } else if (temp.length === 13) {
          var time = new Date(Number(temp));
          var Y = time.getFullYear();
          var M = Number(time.getMonth()) + 1;
          var D = time.getDate();
          var h = String(time.getHours());
          var m = String(time.getMinutes());
          var s = String(time.getSeconds());
          h = h.length < 2 ? '0' + h : h;
          m = m.length < 2 ? '0' + m : m;
          s = s.length < 2 ? '0' + s : s;
          return '' + Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
        } else {
          return 'wrongInput'
        }
      }
    }
  },
  // 13位时间戳转化为日期
  timestampToTime(str) {
    var date = new Date(str)
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y + M + D + h + m + s;
  },
  // 根据key将数组变成hash
  // arr=[{key:a,value:xxx},{key:b,value:xxx}],keyStr='key'--->>>return=[a:{key:a,value:xxx},b:{key:a,value:xxx}]
  objArray2Hash(arr, keyStr) {
    const output = {};
    output[''] = {};
    output[null] = {};
    output['null'] = {};
    output[undefined] = {};
    for (var i = 0; i < arr.length; i++) {
      output[arr[i][keyStr]] = arr[i];
    }
    return JSON.parse(JSON.stringify(output));
  },
  // 获取当前日期或几天以前的日期
  // getNowDate(3)--->>>20180707(3天前)
  getNowDate(day) {
    var date = new Date();
    var newDate = new Date(date - day * 1000 * 60 * 60 * 24)
    var y = newDate.getFullYear() + '';
    var M = newDate.getMonth() * 1 + 1 + '';
    var d = newDate.getDate() + '';
    M = M.length < 2 ? 0 + M : M;
    d = d.length < 2 ? 0 + d : d;
    return y + M + d
  },
  getNowTime() {
    var date = new Date();
    var h = date.getHours() + '';
    var m = date.getMinutes() + '';
    var s = date.getSeconds() + '';
    h = h.length < 2 ? 0 + h : h;
    m = m.length < 2 ? 0 + m : m;
    s = s.length < 2 ? 0 + s : s;
    return h + m + s
  },
  // 数字千分位方法
  // currencyFormat(32741.8431,2,'.',',')--->>>'32,741.85'
  currencyFormat(number, decimals, dec_point, thousands_sep, roundtag) {
    /*
     * 参数说明：
     * number：要格式化的数字
     * decimals：保留几位小数
     * dec_point：小数点符号
     * thousands_sep：千分位符号
     * roundtag:舍入参数，默认 'ceil' 向上取,'floor'向下取,'round' 四舍五入
     * */
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    roundtag = roundtag || 'ceil'; // 'ceil','floor','round'
    var n = !isFinite(+number) ? 0 : +number;
    var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    var sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep;
    var dec = (typeof dec_point === 'undefined') ? '.' : dec_point;
    var s = '';
    var toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      console.log();
      return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k;
    };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, '$1' + sep + '$2');
    }

    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
  }
  // 去千分位方法
}

export default main
