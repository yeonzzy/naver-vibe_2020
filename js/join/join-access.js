var joinForm = document.querySelector("#joinForm");
var joinOk = document.querySelector("#joinOk");

//중복확인하지 않으면 회원가입 완료할 수 없음.
var useridCheck = document.querySelector("#userIdCheck");
var userId = document.getElementsByName("userId")[0];
useridCheck.addEventListener("click", idCheckOk);

function idCheckOk() {
  //hidden되어있는 input의 value값 조정.
  var checkId = document.getElementsByName("checkId")[0];
  if (userId.value == "" || userId.value == null || userId.value.length < 10) {
    alert("이메일 주소 (아이디) 입력오류! 다시 입력해주세요.");
    userId.focus();
    return false;
  }
  if (userId.value != "abc1111@naver.com") {
    alert("사용가능한 아이디입니다.");
    checkId.value = "OkChecked";
  } else {
    alert("이미 중복된 아이디입니다.");
    userId.focus();
    checkId.value = "noChecked";
  }
}

//비밀번호 userPw1, userPw2가 일치하는지 판별!
var userPw1 = document.getElementsByName("userPw1")[0];
var userPw2 = document.getElementsByName("userPw2")[0];
var pwCheck = document.querySelector("span.pwCheck");
userPw2.addEventListener("keyup", pwCheckFunc);

function pwCheckFunc() {
  if (
    userPw2.value == "" ||
    userPw2.value == null ||
    userPw2.value != userPw1.value
  ) {
    pwCheck.textContent = "비밀번호가 같지않습니다.";
    pwCheck.style.fontSize = "12px";
  } else {
    pwCheck.textContent = "비밀번호가 일치합니다.";
    pwCheck.style.fontSize = "12px";
    pwCheck.style.fontWeight = "bold";
  }
}

//체크박스 제어
var checkIdx = 0;
var userCheckBox = document.getElementsByName("userCheck");

function check_all() {
  if (checkIdx == 0) {
    for (i = 0; i < userCheckBox.length; i++) {
      userCheckBox[i].checked = true;
    }
    checkIdx++;
  } else if (checkIdx == 1) {
    for (i = 0; i < userCheckBox.length; i++) {
      userCheckBox[i].checked = false;
    }
    checkIdx = 0;
  }
}

joinOk.addEventListener("click", joinOkFunc);

function joinOkFunc() {
  var userName = document.getElementsByName("userName")[0];
  var userId = document.getElementsByName("userId")[0];
  var userPw1 = document.getElementsByName("userPw1")[0];
  var userPw2 = document.getElementsByName("userPw2")[0];
  var phone = document.getElementsByName("phone");
  var gender = document.getElementsByName("gender")[0];
  var checkId = document.getElementsByName("checkId")[0];
  var userCheckBox = document.getElementsByName("userCheck");

  if (
    userName.value == "" ||
    userName.value == null ||
    userName.value.length < 2
  ) {
    alert("이름 입력오류! 다시 입력해주세요.");
    userName.focus();
    return false;
  }
  if (userId.value == "" || userId.value == null || userId.value.length < 10) {
    alert("이메일 주소 (아이디) 입력오류! 다시 입력해주세요.");
    userId.focus();
    return false;
  }
  if (userId.value.indexOf("@") == -1 || userId.value.indexOf(".") == -1) {
    alert("이메일 주소 (아이디) 형식이 아닙니다! 다시 입력해주세요.");
    userId.focus();
    return false;
  }
  if (
    userPw1.value == "" ||
    userPw1.value == null ||
    userPw1.value.length < 5
  ) {
    alert("비밀번호 입력오류! 다시 입력해주세요.");
    userPw1.focus();
    return false;
  }
  if (
    userPw2.value == "" ||
    userPw2.value == null ||
    userPw2.value.length < 5
  ) {
    alert("비밀번호 확인 입력오류! 다시 입력해주세요.");
    userPw2.focus();
    return false;
  }
  if (
    userPw2.value == "" ||
    userPw2.value == null ||
    userPw2.value.length < 5
  ) {
    alert("비밀번호 확인 입력오류! 다시 입력해주세요.");
    userPw2.focus();
    return false;
  }
  if (phone[0].value == "") {
    alert("휴대폰 번호 앞자리를 선택해주세요!!");
    phone[0].focus();
    return false;
  }
  if (
    phone[1].value == "" ||
    phone[1].value == null ||
    phone[1].value.length < 3
  ) {
    alert("휴대폰 두번째 번호 입력오류! 다시 입력해주세요.");
    phone[1].focus();
    return false;
  }
  if (
    phone[2].value == "" ||
    phone[2].value == null ||
    phone[2].value.length < 3
  ) {
    alert("휴대폰 세번째 번호 입력오류! 다시 입력해주세요.");
    phone[2].focus();
    return false;
  }
  if (isNaN(phone[1].value) == true || isNaN(phone[2].value) == true) {
    alert("휴대폰 번호 형식이 아닙니다! 다시 입력해주세요.");
    phone[1].focus();
    return false;
  }
  if (gender.value == "") {
    alert("성별을 선택해주세요!");
    gender.focus();
    return false;
  }
  if (checkId.value == "noChecked") {
    alert("아이디 중복확인은 필수입니다.");
    userId.focus();
    return false;
  }
  if (userCheckBox[1].checked == false) {
    alert("필수 및 전체 약관을 선택해주세요.");
    userCheckBox[1].focus();
    return false;
  }
  if (userCheckBox[2].checked == false) {
    alert("필수 및 전체 선택해주세요.");
    userCheckBox[2].focus();
    return false;
  }
  alert("VIBE의 회원이 되신 것을 진심으로 축하드립니다");
  joinForm.submit();
}
