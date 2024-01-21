import React from "react";
import nameArrow from "../assets/nameArrow.svg";
import reaper from "../assets/reaper.svg";
import TextBehindReaper from "../assets/TextBehindReaper.svg";
import TextBehindReaperAcccent from "../assets/backtextaccent.svg";

import detailBlocks from "../assets/detail blocks.svg";
import BWStripes from "../assets/blackwhitestripes.svg";
import HomeIcon from "../assets/home.svg";
import OtherIcon from "../assets/else.svg";
import turbo from "../assets/turbo.svg";

import MyButton from "./LButton";

// import expandedDetailers from '../assets/expandedDetailersAnimated.svg'
import { motion } from "framer-motion";
// import { WebView } from 'react-native-webview';

function LandingPage(props) {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-stretch">
      <div className="absolute right-4 h-screen w-5 flex justify-center items-center">
        <expandedDetailers style={{ width: "100%", height: "100%" }} />
      </div>
      <header
        className="flex-col overflow-hidden relative flex w-full items-stretch justify-between gap-1 pl-16 pr-12 py-1 mt-4"
        role="banner"
      >
        <div className="relative flex flex-col justify-between max-md:max-w-full">
          <div className="flex justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
            <div className="flex basis-[0%] flex-col items-stretch">
              <div className="flex items-stretch justify-between gap-2">
                {/* <img
                  loading="lazy"
                  src={HomeIcon}
                  className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                  alt="Logo 1"
                />
                <img
                  loading="lazy"
                  src={OtherIcon}
                  className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                  alt="Logo 2"
                /> */}
              </div>
              <a
                href="/page1"
                className="flex items-stretch justify-between gap-5 mt-10 max-md:mt-5"
              >
                <img
                  loading="lazy"
                  src={nameArrow}
                  className="aspect-[0.29] object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full"
                  alt="Icon"
                />
                <div className="text-neutral-900 text-xl font-medium self-center my-auto">
                  Reaper
                </div>
              </a>
            </div>
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.5 }}
              animate={{
                y: -10,
                opacity: [0.5, 1, 0, 0.7],
                scale: [0.9, 1, 1.1],
              }}
              transition={{ duration: 0.7 }}
              className="fixed z-0 h-screen w-screen "
            >
              <img
                loading="lazy"
                src={detailBlocks}
                className="object-cover object-center flex z-0"
                alt="deet"
              />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-black p-5 rounded text-center mx-auto">
              <span className="hidden md:inline">Reaper Captcha</span>
            </h1>

            {/* <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8d7c943c20d5b4c8331f0092df382311c68b13110ce8ec42edc8ee8a776c6f48?apiKey=60b8bb247a014bfea79d6f3d6add4a16&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d7c943c20d5b4c8331f0092df382311c68b13110ce8ec42edc8ee8a776c6f48?apiKey=60b8bb247a014bfea79d6f3d6add4a16&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d7c943c20d5b4c8331f0092df382311c68b13110ce8ec42edc8ee8a776c6f48?apiKey=60b8bb247a014bfea79d6f3d6add4a16&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d7c943c20d5b4c8331f0092df382311c68b13110ce8ec42edc8ee8a776c6f48?apiKey=60b8bb247a014bfea79d6f3d6add4a16&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d7c943c20d5b4c8331f0092df382311c68b13110ce8ec42edc8ee8a776c6f48?apiKey=60b8bb247a014bfea79d6f3d6add4a16&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d7c943c20d5b4c8331f0092df382311c68b13110ce8ec42edc8ee8a776c6f48?apiKey=60b8bb247a014bfea79d6f3d6add4a16&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d7c943c20d5b4c8331f0092df382311c68b13110ce8ec42edc8ee8a776c6f48?apiKey=60b8bb247a014bfea79d6f3d6add4a16&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d7c943c20d5b4c8331f0092df382311c68b13110ce8ec42edc8ee8a776c6f48?apiKey=60b8bb247a014bfea79d6f3d6add4a16&"
              className="aspect-[1.27] object-contain object-center w-full overflow-hidden grow basis-[0%] mt-5 max-md:max-w-full"
              alt="thing"
            /> */}

            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b3ed6c21e29c5df0e7c4f06ce05cc6f63fd51cfbf2b52dc0cfde24d7299dab2?apiKey=60b8bb247a014bfea79d6f3d6add4a16&"
              className="aspect-[1.8] object-contain object-center w-[101px] items-center overflow-hidden shrink-0 max-w-full"
              alt="Icon"
            /> */}
          </div>
          <div
            style={{ height: "70vh" }}
            id="captcha"
            className="mx-auto relative w-full flex justify-center items-center"
          >
            <motion.div
              initial={{ y: 0, opacity: 0, scale: 1 }}
              animate={{ y: 100, opacity: 1, scale: 1.3 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute z-20"
            >
              <MyButton />
            </motion.div>

            <motion.div
              initial={{
                x: 300,
                y: -100,
                opacity: 0,
                scale: 0.1,
                rotateZ: 120,
              }}
              animate={{
                x: 480,
                y: -260,
                opacity: 1,
                scale: 0.07,
                rotateZ: 40,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute z-20 drop-shadow-2xl"
            >
              <img
                src={turbo}
                alt="fancy back text"
                className="w-90 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{
                x: -300,
                y: -100,
                opacity: 0,
                scale: 0.1,
                rotateZ: 160,
                rotateY: 180,
              }}
              animate={{
                x: -480,
                y: -260,
                opacity: 1,
                scale: 0.07,
                rotateZ: 40,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute z-20 drop-shadow-2xl"
            >
              <img
                src={turbo}
                alt="fancy back text"
                className="w-90 object-cover"
              />
            </motion.div>

            {/* <motion.div
              initial={{ x:150, y: -100, opacity: 0, scale: 0.1, rotateZ: 120 }}
              animate={{ x:280, y: -260, opacity: 1, scale: 0.07, rotateZ: 40}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute z-20 drop-shadow-2xl"
            >
              <img
                src={turbo}
                alt="fancy back text"
                className="w-90 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ x:-150, y: -100, opacity: 0, scale: 0.1, rotateZ: 160, rotateY:180}}
              animate={{ x:-280, y: -260, opacity: 1, scale: 0.07, rotateZ: 40}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute z-20 drop-shadow-2xl"
            >
              <img
                src={turbo}
                alt="fancy back text"
                className="w-90 object-cover"
              />
            </motion.div> */}

            <motion.div
              initial={{ y: 0, opacity: 0, scale: 1.5 }}
              animate={{ y: -80, opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img
                src={TextBehindReaper}
                alt="fancy back text"
                className="w-90 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ y: 0, opacity: 0, scale: 1.5 }}
              animate={{ y: -40, opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute"
            >
              <img
                src={TextBehindReaperAcccent}
                alt="fancy back text"
                className="w-90 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ y: 0, opacity: 0, scale: 1.5 }}
              animate={{ y: -65, opacity: 0.2, scale: 1.25 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute"
            >
              <img
                src={TextBehindReaper}
                alt="fancy back text"
                className="w-90 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ y: 0, opacity: 0, scale: 1.5 }}
              animate={{ y: -80, opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute"
            >
              <img
                src={TextBehindReaper}
                alt="fancy back text"
                className="w-90 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.5 }}
              animate={{ y: -10, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 right-0 bottom-0 px-4 py-3  flex justify-center items-center md:max-h-300 md:max-w-200"
            >
              <img
                src={reaper}
                alt="Of reaper"
                className="h-full  md:max-h-300 md:max-w-200 object-cover"
              />
            </motion.div>
          </div>

          <div className="flex w-[712px] max-w-full justify-between gap-5 ml-5 mt-7 self-start items-start max-md:flex-wrap">
            <motion.div
              initial={{ y: -10, opacity: 0, scale: 1 }}
              animate={{ y: -10, opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className=" top-0 left-0 right-0 bottom-0 px-4 py-3 bg-gray-300/10 flex justify-center items-center"
            >
              <img
                loading="lazy"
                src={BWStripes}
                className="aspect-[2.84] object-contain object-center w-32 overflow-hidden shrink-0 max-w-full"
                alt="lastone"
              />
            </motion.div>
            {/* <motion.div
              initial={{ x: 0, y: 100, opacity: 0, scale: 0.5 }}
              animate={{ x: 100, y: -20, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="top-0 left-0 right-0 bottom-0 px-4 py-3 bg-white/90 flex justify-center items-center z-20"
            >
              <div className="items-stretch flex justify-between gap-5 mt-5">
                <div className="text-neutral-900 text-xl font-medium self-start">
                  Home
                </div>
                <div className="text-neutral-900 text-xl font-medium">
                  Purchase
                  <br />
                </div>
                <div className="text-neutral-900 text-xl font-medium self-start">
                  Settings
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3404ee9d09470950064126c96669ffe888d9bb13ad8c6524422e8922ee8f982?apiKey=60b8bb247a014bfea79d6f3d6add4a16&"
          className="aspect-[0.01] object-contain object-center w-[3px] overflow-hidden shrink-0 max-w-full mt-60 self-end max-md:mt-10"
          alt="Separator"
        /> */}
      </header>
    </div>
  );
}

export default LandingPage;
