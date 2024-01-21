import React, { useEffect } from "react";
// Import your CSS file

// ToDO fixed most of this code i ca;t figure out the loading logic please look into it's serving all the images and scripts just stuck in animation

//TODO :React does not support php you'll need server or serverless functions for that line is commented

//TODO :you used external library to animate You'll ave to figure out if you can do so in react

const Page2 = () => {
  import("./page2.css");
  useEffect(() => {
    // Your script code that should run after the component is mounted
    document.documentElement.className = "js";
    var supportsCssVars = function () {
      var e,
        t = document.createElement("style");
      return (
        (t.innerHTML = "root: { --tmp-var: bold; }"),
        document.head.appendChild(t),
        (e = !!(
          window.CSS &&
          window.CSS.supports &&
          window.CSS.supports("font-weight", "var(--tmp-var)")
        )),
        t.parentNode.removeChild(t),
        e
      );
    };
    supportsCssVars() ||
      alert(
        "Please view this demo in a modern browser that supports CSS Variables."
      );

    // Make sure to replace the script-related imports with their respective React alternatives
    // (e.g., TweenMax with gsap, imagesloaded with a React image loading library, etc.)
  }, []);

  return (
    <div className="loading">
      {/* <svg className="hidden">
        <symbol id="icon-arrow" viewBox="0 0 24 24">
          <title>arrow</title>
          <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
        </symbol>
        <symbol id="icon-drop" viewBox="0 0 24 24">
          <title>drop</title>
          <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z" />
          <path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z" />
        </symbol>
        <symbol id="icon-long-arrow" viewBox="0 0 54 24">
          <title>long arrow</title>
          <path d="M.42 11.158L12.38.256c.333-.27.696-.322 1.09-.155.395.166.593.467.593.903v6.977h38.87c.29 0 .53.093.716.28.187.187.28.426.28.716v5.98c0 .29-.093.53-.28.716a.971.971 0 0 1-.716.28h-38.87v6.977c0 .416-.199.717-.592.903-.395.167-.759.104-1.09-.186L.42 12.62a1.018 1.018 0 0 1 0-1.462z" />
        </symbol>
        <symbol id="icon-nav-arrow" viewBox="0 0 408 408">
          <title>nav arrow</title>
          <polygon
            fill="#fff"
            fill-rule="nonzero"
            points="204 0 168.3 35.7 311.1 178.5 0 178.5 0 229.5 311.1 229.5 168.3 372.3 204 408 408 204"
          ></polygon>
        </symbol>
      </svg> */}
      <main>
        <div className="frame">
          <header className="codrops-header">
            <h1 className="codrops-header__title">Reaper Captcha</h1>
            {/* <div className="codrops-links">
              <a className="github" href="HM">
                PURCHASE
              </a>
              <a
                className="codrops-icon codrops-icon--prev"
                href="https://tympanus.net/Development/SlideOutBoxMenu/"
                title="Previous Demo"
              >
                <svg className="icon icon--arrow">
                  <use xlink:href="#icon-arrow"></use>
                </svg>
              </a>
              <a
                className="codrops-icon codrops-icon--drop"
                href="https://tympanus.net/codrops/?p=35765"
                title="Back to the article"
              >
                <svg className="icon icon--drop">
                  <use xlink:href="#icon-drop"></use>
                </svg>
              </a>
            </div> */}
          </header>
        </div>
        <div className="slideshow">
          <div className="slideshow__deco"></div>
          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{ backgroundImage: "url(img/1.jpg)" }}
              ></div>
            </div>
            <div className="slide__side">Affordable Captcha Service</div>
            <div className="slide__title-wrap">
              <span className="slide__number">1</span>
              <h3 className="slide__title clash-font">About Us</h3>
              <h4 className="slide__subtitle">
                One of the most Affordable Captcha Services in the market
                starting at just 0.33$
              </h4>
            </div>
          </div>
          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{ backgroundImage: "url(img/2.jpg)" }}
              ></div>
            </div>
            <div className="slide__side">Money</div>
            <div className="slide__title-wrap">
              <span className="slide__number">2</span>
              <h3 className="slide__title">Pricing</h3>
              <h4 className="slide__subtitle">
                This is probably the greatest thing to happen in my life
              </h4>
            </div>
          </div>
          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{ backgroundImage: "url(img/3.jpg)" }}
              ></div>
            </div>
            <div className="slide__side">Arbitrary Words</div>
            <div className="slide__title-wrap">
              <span className="slide__number">3</span>
              <h3 className="slide__title">FAQ</h3>
              <h4 className="slide__subtitle">The only guide you need</h4>
            </div>
          </div>
          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{ backgroundImage: "url(img/4.jpg)" }}
              ></div>
            </div>
            <div className="slide__side">Try ReaperCaptcha</div>
            <div className="slide__title-wrap">
              <span className="slide__number">4</span>
              <h3 className="slide__title">Purchase Options</h3>
              <h4 className="slide__subtitle">We got you</h4>
            </div>
          </div>
          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{ backgroundImage: "url(img/5.jpg)" }}
              ></div>
            </div>
            <div className="slide__side">Need help?</div>
            <div className="slide__title-wrap">
              <span className="slide__number">5</span>
              <h3 className="slide__title">Help Desk</h3>
              <h4 className="slide__subtitle">
                Let's go up in here, and start solving some problems
              </h4>
            </div>
          </div>
          <div className="slide">
            <div className="slide__img-wrap">
              <div
                className="slide__img"
                style={{ backgroundImage: "url(img/6.jpg)" }}
              ></div>
            </div>
            <div className="slide__side">About You</div>
            <div className="slide__title-wrap">
              <span className="slide__number">6</span>
              <h3 className="slide__title">Dashboard</h3>
              <h4 className="slide__subtitle">Everything you need</h4>
            </div>
          </div>
          <button className="nav nav--prev">
            <svg className="icon icon--navarrow-prev">
              {/* <use link:href="#icon-navarrow"></use> */}
            </svg>
          </button>
          <button className="nav nav--next">
            <svg className="icon icon--navarrow-next">
              {/* <use link:href="#icon-navarrow"></use> */}
            </svg>
          </button>
        </div>
        <div className="content">
          <div className="content__item">
            <span className="content__number">1</span>
            <h3 className="content__title">ABOUT US</h3>
            <h4 className="content__subtitle">Affordable Captcha Service</h4>
            <div className="content__text">
              We use emulation of API services such as Rucaptcha and AntiGate
              (Anti-Captcha). If the software that you use supports them, you
              only need to top up your balance and get a key to access our API
              in your personal account. It is automatically generated after
              registration and replenishment of the balance and register our ip
              in hosts opposite the domain of the service that you used earlier.
              You can just download and run the bat file that will do it for
              you, this will allow you to start using our service and save.
            </div>
          </div>
          <div className="content__item">
            <span className="content__number">2</span>
            <h3 className="content__title">Pricing</h3>
            <h4 className="content__subtitle">
              This is probably the greatest thing to happen in my life
            </h4>
            <div className="content__text">
              The pricing for:
              <br />
              1. 1000 reCAPTCHA V2/V3/Invisible solutions is $0.33,
              <br />
              2. 1000 image captcha requests is $0.07,
              <br />
              3. 1000 hCaptcha token solutions is $0.6,
              <br />
              4. 1000 FunCaptcha click requests is $0.17,
              <br />
              5. 1000 ReCaptcha click requests is $0.1,
              <br />
              6. 1000 hCaptcha images requests is $0.2,
              <br />
              7. 1000 GeeTest click requests is $0.2,
              <br />
              8. 1000 Binance click requests is $0.2,
              <br />
              9. 1000 TikTok click requests is $0.2,
              <br />
              10. 1000 Amazon click requests is $0.1.
            </div>
          </div>

          <div className="content__item">
            <span className="content__number">3</span>
            <h3 className="content__title">FAQ</h3>
            <h4 className="content__subtitle">The only guide you need</h4>
            <div className="content__text">
              <strong>1. How to use a bat file?</strong>
              <br />
              <strong>2.</strong> Download to your computer.
              <br />
              <strong>3.</strong> Run as Administrator.
              <br />
              <strong>4.</strong> Press any button.
              <br />
              <strong>5.</strong> Select a service in the software for .bat file
              and specify the API key.
            </div>
          </div>

          <div className="content__item">
            <span className="content__number">4</span>
            <h3 className="content__title">Purchase Options</h3>
            <h4 className="content__subtitle">We got you</h4>
            <div className="content__text">
              Click on the top right button to purchase. You will be redirected
              to a page with different payment methods incldues, Crypto, PayPal
              and CashApp. If unable to purchase directly from the website feel
              free to contact us via our mail @reapercap.com.
            </div>
          </div>
          <div className="content__item">
            <span className="content__number">5</span>
            <h3 className="content__title">Help Desk</h3>
            <h4 className="content__subtitle">
              Let's go up in here, and start solving some problems
            </h4>
            <div className="content__text">
              Please contact us on telegram : or mail us at
            </div>
          </div>
          <div className="content__item">
            <span className="content__number">6</span>
            <h3 className="content__title">Dashboard</h3>
            <h4 className="content__subtitle">Everything you need</h4>
            <div className="content__text">
              Your api Key :
              <br />
              <input type="text" id="api_key" readOnly value=""></input>
              <br />
              Balance: <span id="balance"></span>
              <br />
              {/* Balance: <?php echo $_SESSION['balance']."$";></div> */}
            </div>
            <button className="content__close">
              <svg className="icon icon--longarrow">
                {/* <use xlink:href="#icon-longarrow"></use> */}
              </svg>
            </button>
          </div>
        </div>
      </main>
      <script
        src={`${process.env.PUBLIC_URL}/js/imagesloaded.pkgd.min.js`}
      ></script>
      <script src={`${process.env.PUBLIC_URL}/js/charming.min.js`}></script>
      <script src={`${process.env.PUBLIC_URL}/js/TweenMax.min.js`}></script>
      <script src={`${process.env.PUBLIC_URL}/js/demo.js`}></script>
    </div>
  );
};

export default Page2;
