import { gsap, Back } from "gsap";
import { SplitText } from "gsap-trial/SplitText";

gsap.registerPlugin(SplitText, Back);

const landingAnim = () => {
  // grab the header element
  const headerElem = document.querySelector(".landing-header");
  const headerText = document.querySelector(".landing-text");
  //   split the header into different divs
  const splitElem = new SplitText(headerElem);
  const charsElem = splitElem.chars;
  const splitText = new SplitText(headerText);
  const charsText = splitText.chars;
  // animate the split text here using gsap
  const tl = gsap.timeline();
  tl.from(charsElem, {
    yPercent: 100,
    stagger: 0.05,
    ease: Back.easeInOut,
    duration: 1,
  })
    .from(
      charsText,
      {
        yPercent: 100,
        stagger: 0.05,
        ease: Back.easeInOut,
        duration: 0.5,
      },
      ".75"
    )
    .to(".horizontal-line-first", {
      width: "95%",
      visibility: "visible",
    });
};

export default landingAnim;
