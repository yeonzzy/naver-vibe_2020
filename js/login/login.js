/*gnb 로그인, palyer>previewTxt>player Login a클릭 시*/
$("span.login-txt").on("click", loginShow);
$("span.playerLogin a").on("click", loginShow);

function loginShow() {
  $(".login-pop").css({display:'block'});
}
/*login-pop-close 클릭 시 */
$("span.login-close").on("click", function () {
  $(".login-pop").fadeOut();
});


/*login 유효성검사*/
var loginOk = document.querySelector("#loginOk");
var loginForm = document.querySelector("#loginForm");
loginOk.addEventListener("click", loginOkFunc);

function loginOkFunc() {
  var userId = document.getElementsByName("loginId")[0];
  var userPw = document.getElementsByName("loginPw")[0];

  if (userId.value == "" || userId.value == null || userId.value.length < 10) {
    alert("이메일 주소 (아이디) 입력오류!");
    userId.focus();
    return false;
  }
  if (userId.value.indexOf("@") == -1 || userId.value.indexOf(".") == -1) {
    alert("이메일 주소 (아이디) 형식이 아닙니다!");
    userId.focus();
    return false;
  }
  if (userPw.value == "" || userPw.value == null || userPw.value.length < 5) {
    alert("비밀번호입력오류!");
    userPw.focus();
    return false;
  }
  //만약 아이디가 abc1111@naver.com 일 때, 비밀번호가 a123456이 아니면
  if (userId.value == "abc1111@naver.com" && userPw.value != "a123456") {
    alert("아이디와 비밀번호가 맞지않습니다.");
    userId.focus();
    return false;
  }

  alert("로그인 성공!");
  loginForm.submit();
}