// $('#myCalendar').fullCalendar('refetchEvents');
//날짜를 년월일로 나누는 작업
// changeMonth = function (month) {
//     var mon;
//
//     //문자로 된 월을 숫자로 변환
//     switch (month) {
//         case 'Jan':
//             mon = "01";
//             break;
//         case "Feb":
//             mon = "02";
//             break;
//         case 'Mar':
//             mon = "03";
//             break;
//         case 'Apr':
//             mon = "04";
//             break;
//         case 'May':
//             mon = "05";
//             break;
//         case 'Jun':
//             mon = "06";
//             break;
//         case 'Jul':
//             mon = "07";
//             break;
//         case 'Aug':
//             mon = "08";
//             break;
//         case 'Sep':
//             mon = "09";
//             break;
//         case 'Oct':
//             mon = "10";
//             break;
//         case 'Nov':
//             mon = "11";
//             break;
//         case 'Dec':
//             mon = "12";
//             break;
//     }
//
//     console.log("mon : " + mon);
//     return mon;
// }
// Template.showIcon.events({
//     'click #showIcon_confirm': function (event) {
//         event.preventDefault();
//
//         //날짜를 년월일로 나누는 작업
//         var date = new Date().toDateString();
//         var month = date.substring(4, 7);
//         var day = date.substring(8, 10);
//         var year = date.substring(11, date.length);
//
//         // input type에 맞게 날짜 변경
//         date = year + "-" + changeMonth(month) + "-" + day;
//
//
//
//     }
// });
// // 날짜 대입
// $('#addon3a').val(date);
//
