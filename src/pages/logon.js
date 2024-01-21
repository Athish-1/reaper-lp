import React from "react";
import "./style.css";

// TODO Please hook up the buttons again

// TODO -- create a function to check if it's in Sign in or sign up mode and then call submitLoginForm and submitSignUpForm

// TODO the old form broke as soon as I tried to move it here so i grabbed a nice one off codepen.io
// https://codepen.io/THEORLAN2/pen/mPLPwj

const LogonPage = () => {
  function submitLoginForm() {
    var signInForm = document.getElementById("signInForm");
    var formData = new FormData(signInForm);

    var formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    fetch("process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          window.location.href = "page2.html";
        } else {
          console.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  }

  function submitSignUpForm() {
    var signUpForm = document.getElementById("signUpForm");
    var formData = new FormData(signUpForm);

    var formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    fetch("process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          window.location.href = "page2.html";
        } else {
          console.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error during signup:", error);
      });
  }

    // ------------------------new animation logic skelly
    function sign_up() {
      var inputs = document.querySelectorAll(".input_form_sign");
      document.querySelectorAll(".ul_tabs > li")[0].className = "";
      document.querySelectorAll(".ul_tabs > li")[1].className = "active";

      for (var i = 0; i < inputs.length; i++) {
        if (i === 2) {
        } else {
          document.querySelectorAll(".input_form_sign")[i].className =
            "input_form_sign d_block";
        }
      }

      setTimeout(function () {
        for (var d = 0; d < inputs.length; d++) {
          document.querySelectorAll(".input_form_sign")[d].className =
            "input_form_sign d_block active_inp";
        }
      }, 100);
      document.querySelector(".link_forgot_pass").style.opacity = "0";
      document.querySelector(".link_forgot_pass").style.top = "-5px";
      document.querySelector(".btn_sign").innerHTML = "SIGN UP";
      setTimeout(function () {
        document.querySelector(".terms_and_cons").style.opacity = "1";
        document.querySelector(".terms_and_cons").style.top = "5px";
      }, 500);
      setTimeout(function () {
        document.querySelector(".link_forgot_pass").className =
          "link_forgot_pass d_none";
        document.querySelector(".terms_and_cons").className =
          "terms_and_cons d_block";
      }, 450);
    }

    function sign_in() {
      var inputs = document.querySelectorAll(".input_form_sign");
      document.querySelectorAll(".ul_tabs > li")[0].className = "active";
      document.querySelectorAll(".ul_tabs > li")[1].className = "";

      for (var i = 0; i < inputs.length; i++) {
        switch (i) {
          case 1:
            console.log(inputs[i].name);
            break;
          case 2:
            console.log(inputs[i].name);
            break
          default:
            document.querySelectorAll(".input_form_sign")[i].className =
              "input_form_sign d_block";
        }
      }

      setTimeout(function () {
        for (var d = 0; d < inputs.length; d++) {
          switch (d) {
            case 1:
              console.log(inputs[d].name);
              break;
            case 2:
              console.log(inputs[d].name);
              break
            default:
              document.querySelectorAll(".input_form_sign")[d].className =
                "input_form_sign d_block";
              document.querySelectorAll(".input_form_sign")[2].className =
                "input_form_sign d_block active_inp";
          }
        }
      }, 100);

      document.querySelector(".terms_and_cons").style.opacity = "0";
      document.querySelector(".terms_and_cons").style.top = "-5px";

      setTimeout(function () {
        document.querySelector(".terms_and_cons").className =
          "terms_and_cons d_none";
        document.querySelector(".link_forgot_pass").className =
          "link_forgot_pass d_block";
      }, 500);

      setTimeout(function () {
        document.querySelector(".link_forgot_pass").style.opacity = "1";
        document.querySelector(".link_forgot_pass").style.top = "5px";

        for (var d = 0; d < inputs.length; d++) {
          switch (d) {
            case 1:
              console.log(inputs[d].name);
              break;
            case 2:
              console.log(inputs[d].name);

              break;
            default:
              document.querySelectorAll(".input_form_sign")[d].className =
                "input_form_sign";
          }
        }
      }, 1500);
      document.querySelector(".btn_sign").innerHTML = "SIGN IN";
    }

    window.onload = function () {
      document.querySelector(".cont_centrar").className =
        "cont_centrar cent_active";
    };
  
  return (
    <div className="cont_principal">
      <div className="cont_centrar">
        <div className="cont_login">
          <form action="">
            <div className="cont_tabs_login">
              <ul className="ul_tabs">
                <li className="active">
                  <a href="#" onClick={sign_in}>
                    SIGN IN
                  </a>
                  <span className="linea_bajo_nom"></span>
                </li>
                <li>
                  <a href="#up" onClick={sign_up}>
                    SIGN UP
                  </a>
                  <span className="linea_bajo_nom"></span>
                </li>
              </ul>
            </div>
            <div className="cont_text_inputs">
              <input
                type="text"
                className="input_form_sign "
                placeholder="NAME"
                name="name_us"
              />

              <input
                type="text"
                className="input_form_sign d_block active_inp"
                placeholder="EMAIL"
                name="emauil_us"
              />

              <input
                type="password"
                className="input_form_sign d_block  active_inp"
                placeholder="PASSWORD"
                name="pass_us"
              />
              <input
                type="password"
                className="input_form_sign"
                placeholder="CONFIRM PASSWORD"
                name="conf_pass_us"
              />

              <a href="/" className="link_forgot_pass d_block">
                Forgot Password ?
              </a>
              <div className="terms_and_cons d_none">
                <p>
                  <input type="checkbox" name="terms_and_cons" />{" "}
                  <label for="terms_and_cons">
                    Accept Terms and Conditions.
                  </label>
                </p>
              </div>
            </div>
            <div className="cont_btn">
              <button className="btn_sign" onSubmit={submitLoginForm}>SIGN IN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogonPage;
