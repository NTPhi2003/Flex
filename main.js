const content = document.querySelector(".content");
const content2 = document.querySelector(".home");
const remember = localStorage.getItem('rememberUser');
const logOutBtn = document.querySelector(".logout-button")

function renderLogin() {
  
  content.style.display = "block";
  content2.style.display = "none";
  logOutBtn.style.display = "none";
  window.history.pushState('page1', document.title, '?#Flex');
}
function renderHome() {
  
  content.style.display = "none";
  content2.style.display = "block";
  logOutBtn.style.display = "block";
  window.history.pushState('page2', document.title, '?#Home');
}

function checkRemember() {
  
  if (remember == null) {
    renderLogin()
  } else {

    renderHome()
  }
}
checkRemember();
window.addEventListener("popstate", function (e) {
  console.log('check')
  // checkRemember();
  if (window.location.href.indexOf("#Home") != -1 ) 
  {
    renderHome();
  } else {
    renderLogin();
  }
  
  
});


// REGISTER
const modal_lable = document.querySelector(".modal-lable");
const regisBtn = document.querySelector(".js-regis-butt");
// console.log(regisBtn);
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modal_close = document.querySelector(".js-modal-close");
function showModal() {
  modal.classList.add("open");
}
function hideModal() {
  modal.classList.remove("open");
}
regisBtn.addEventListener("click", showModal);
modal_close.addEventListener("click", hideModal);
// modal.addEventListener('click',hideModal);
// modalContainer.addEventListener('click',function(e){
//     e.stopPropagation();
// })

// DEBOUNCE IN REGISTER
const user_regis = document.querySelector(".regis-name");
const email_regis = document.querySelector(".regis-email");
const pass_regis = document.querySelector(".regis-pass");
const confirm_pass_regis = document.querySelector(".confirm-regis-pass");
const regis_username_wrong = document.querySelector(".register-wrong-name");
const regis_email_wrong = document.querySelector(".register-wrong-email");
const regis_password_wrong = document.querySelector(".register-wrong-pass");
const confirm_regis_password_wrong = document.querySelector(
  ".register-wrong-pass-confirm"
);
const regis_confirm_btn = document.querySelector(".regis-confirm-btn");
const passw =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,30}$/;
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Debounce name
const check_regist_name = (event) => {
  const regis_name = document.querySelector(".regis-name").value;
  if (regis_name.length < 6 && regis_name.length != 0) {
    regis_username_wrong.style.display = "inline-block";
  } else {
    regis_username_wrong.style.display = "none";
  }
};
const regis_debouncedKeyUp_user = debounce(check_regist_name, 500);

user_regis.addEventListener("keyup", regis_debouncedKeyUp_user);

// Debounce pass
const check_regist_pass = (event) => {
  const regis_password = document.querySelector(".regis-pass").value;

  if (!regis_password.match(passw) && regis_password.length != 0) {
    regis_password_wrong.style.display = "inline-block";
  } else {
    regis_password_wrong.style.display = "none";
  }
};
const regis_debouncedKeyUp_pass = debounce(check_regist_pass, 500);
pass_regis.addEventListener("keyup", regis_debouncedKeyUp_pass);

// Debounce confirm pass

const check_confirmRegist_pass = (event) => {
  const regis_password = document.querySelector(".regis-pass").value;
  const confirm_regis_password = document.querySelector(
    ".confirm-regis-pass"
  ).value;

  if (
    confirm_regis_password != regis_password &&
    confirm_regis_password.length != 0
  ) {
    confirm_regis_password_wrong.style.display = "inline-block";
  } else {
    confirm_regis_password_wrong.style.display = "none";
  }
};
const regis_debouncedKeyUp_confirmPass = debounce(
  check_confirmRegist_pass,
  500
);
confirm_pass_regis.addEventListener("keyup", regis_debouncedKeyUp_confirmPass);

// Debounce email

const check_email = (event) => {
  const regis_email = document.querySelector(".regis-email").value;

  if (!regis_email.match(mailformat) && regis_email.length != 0) {
    regis_email_wrong.style.display = "inline-block";
  } else {
    regis_email_wrong.style.display = "none";
  }
};
const regis_debouncedKeyUp_email = debounce(check_email, 500);
email_regis.addEventListener("keyup", regis_debouncedKeyUp_email);



// Click Register
regis_confirm_btn.addEventListener("click", checkRegis);
function checkRegis() {
  let regis_name = document.querySelector(".regis-name").value;
  let regis_password = document.querySelector(".regis-pass").value;
  let confirm_regis_password = document.querySelector(
    ".confirm-regis-pass"
  ).value;
  const regis_email = document.querySelector(".regis-email").value;

  if (regis_name.length < 6) {
    regis_username_wrong.style.display = "inline-block";
  } else {
    regis_username_wrong.style.display = "none";
  }
  if (!regis_password.match(passw)) {
    regis_password_wrong.style.display = "inline-block";
  } else {
    regis_password_wrong.style.display = "none";
  }
  if (confirm_regis_password != regis_password) {
    confirm_regis_password_wrong.style.display = "inline-block";
  } else {
    confirm_regis_password_wrong.style.display = "none";
  }
  if (!regis_email.match(mailformat)) {
    regis_email_wrong.style.display = "inline-block";
  } else {
    regis_email_wrong.style.display = "none";
  }

  if (
    regis_name.length >= 6 &&
    regis_password.match(passw) &&
    confirm_regis_password === regis_password &&
    regis_email.match(mailformat)
  ) {
    // const id = `${regis_name}`;
    alert("Đăng kí thành công UwU");
    const user = {
      Name: regis_name,
      Pass: regis_password,
      Email: regis_email
    };
    localStorage.setItem(`${regis_name}`, JSON.stringify(user));
    hideModal();
  } 
}

// const user = JSON.parse(localStorage.getItem("daorong096"));
// console.log(user);

// LOGIN

const form = document.querySelector("#form-login");
var Username = document.querySelector("#name");
var Userpassword = document.querySelector("#pass");
const login_btn = document.querySelector(".submit-button");
function CheckPassword() {
  var username_wrong = document.querySelector(".wrong-name");
  var password_wrong = document.querySelector(".wrong-pass");
  var note = document.querySelector(".note");
  var name = document.querySelector("#name").value;
  var password = document.querySelector("#pass").value;
  var passw =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,30}$/;
  if (name.length < 6 && !password.match(passw)) {
    username_wrong.style.display = "inline-block";
    password_wrong.style.display = "inline-block";
    note.style.display = "inline-block";
    return false;
  }

  if (name.length < 6) {
    username_wrong.style.display = "inline-block";
    note.style.display = "inline-block";
    return false;
  } else username_wrong.style.display = "none";
  if (!password.match(passw)) {
    password_wrong.style.display = "inline-block";
    note.style.display = "inline-block";
    return false;
  } else password_wrong.style.display = "none";
  if (name.length >= 6 && password.match(passw)) {
    return true;
  }
}

login_btn.addEventListener("click", GoPage);
function GoPage(e) {
  
  if (CheckPassword() === true) {

    const user = JSON.parse(localStorage.getItem(Username.value));
    if (user == null) {
      e.preventDefault();
      showErrorToast();
    } else {
      if (user.Pass === Userpassword.value) {
        showSuccessToast();
        console.log("Đăng nhập thành công");
        localStorage.setItem('rememberUser',user.Name);
        window.history.pushState('page2', document.title, '?#Home');
        // e.preventDefault();
      }
      else {
        showErrorToast();
        e.preventDefault();
      }
    }
  } else {
    e.preventDefault();
    return false;
  }
}

function debounce(fn, delay, immediate) {
  let timeout;

  return function executedFn() {
    let context = this; // "this" context của executedFn
    let args = arguments; // "arguments" của fn

    let later = function () {
      timeout = null;
      if (!immediate) fn.apply(context, args);
    };

    let callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, delay);

    if (callNow) fn.apply(context, args);
  };
}

const user_log = document.getElementById("name");

const keyUpHandler_user = (event) => {
  var username_wrong = document.querySelector(".wrong-name");
  var note = document.querySelector(".note");
  var name = document.querySelector("#name").value;
  if (name.length < 6 && name.length != 0) {
    username_wrong.style.display = "inline-block";
    note.style.display = "inline-block";
    return false;
  } else {
    username_wrong.style.display = "none";
    note.style.display = "none";
  }
};

const debouncedKeyUp = debounce(keyUpHandler_user, 500);

user_log.addEventListener("keyup", debouncedKeyUp);

const pass_log = document.getElementById("pass");

const keyUpHandler_pass = (event) => {
  var password_wrong = document.querySelector(".wrong-pass");
  var note = document.querySelector(".note");
  var password = document.querySelector("#pass").value;
  var passw =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,30}$/;

  if (!password.match(passw) && password.length != 0) {
    password_wrong.style.display = "inline-block";
    note.style.display = "inline-block";
    return false;
  } else {
    password_wrong.style.display = "none";
    note.style.display = "none";
  }
};

const debouncedKeyUp_pass = debounce(keyUpHandler_pass, 500);

pass_log.addEventListener("keyup", debouncedKeyUp_pass);



// LogOut
function logOut() {
  localStorage.removeItem('rememberUser');
  window.history.pushState('page1', document.title, '?#Flex');
  renderLogin();
}
logOutBtn.addEventListener('click', logOut);






// Toast Function 
function showSuccessToast() {
  toast({
      title: 'Thành công',
      message: 'Đã đăng nhập thành công chúc bạn trải nghiệm vui vẻ ^^',
      type: 'success',
      duration: 2000
  })
}

function showErrorToast() {
  toast({
      title: 'Thất bại',
      message: 'Đăng nhập thất bại vui lòng kiểm tra tài khoản hoặc mật khẩu ~~',
      type: 'error',
      duration: 2000
  })
}


function toast({title , message = '', type = 'info', duration = 3000}) {
  const main = document.getElementById('toast');
  if (main) {
      const toast = document.createElement('div');

      const autoRemove = setTimeout (() => {
          main.removeChild(toast)
      }, duration + 2000)


      toast.onclick = function(e)  {
          if(e.target.closest('.toast__close')) {
              main.removeChild(toast)
          }
          clearTimeout(autoRemove)
      }

      const icons = {
          success: 'fa-solid fa-circle-check',
          info: 'fa-solid fa-circle-info',
          warning: 'fa-solid fa-circle-exclamation',
          error: 'fa-sharp fa-solid fa-circle-xmark'
      }

      const icon = icons[type]
      const delay = (duration/1000).toFixed(2);

      toast.classList.add('toast', `toast--${type}`)
      toast.style.animation = `slideInLeft_toast ease 0.3s, fadeOut linear 2s ${delay}s forwards`
      toast.innerHTML = `
          <div class="toast__icon">
              <i class="${icon}"></i>
          </div>
          <div class="toast__body">
              <h3 class="toast__title">${title}</h3>
              <p class="toast__msg">${message}</p>
          </div>
          <div class="toast__close">
              <i class="fa-sharp fa-solid fa-circle-xmark"></i>
          </div>
      `
      main.appendChild(toast)

  }
}