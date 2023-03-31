import { gsap, Power3, Back } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";

const aboutAnim = () => {
  gsap.registerPlugin(ScrollTrigger, Power3, SplitText, Back);

  const horizontalLines = gsap.utils.toArray("#about .horizontal-line");
  const verticalLines = gsap.utils.toArray("#about .vertical-line");
  const verticalLineLast = gsap.utils.toArray("#about .vertical-line-last");
  const headers = gsap.utils.toArray("#about .about-header");
  const spans = gsap.utils.toArray("#about .info-box span");
  const textLeft = gsap.utils.toArray("#about .left .info-text");
  const textRight = gsap.utils.toArray("#about .right .info-text");
  const imgLeft = gsap.utils.toArray("#about .left .lazyload-wrapper");
  const imgRight = gsap.utils.toArray("#about .right .lazyload-wrapper");

  const revealText = gsap.utils.toArray("#about .text-reveal");
  const splitText = new SplitText(revealText);
  const charsText = splitText.chars;

  let mm = gsap.matchMedia();

  mm.add("(min-width: 1000px)", () => {
    horizontalLines.forEach((line) => {
      gsap.to(line, {
        duration: 1.5,
        autoAlpha: 1,
        ease: Power3,
        width: "100%",
        scrollTrigger: {
          trigger: line,
          start: "top 80%",
          end: "top 70%",
          scrub: 2.5,
          once: true,
        },
      });
    });

    verticalLines.forEach((line) => {
      gsap.to(line, {
        duration: 1.5,
        autoAlpha: 1,
        ease: Power3,
        height: "75vh",
        scrollTrigger: {
          trigger: line,
          start: "top 80%",
          end: "top 70%",
          scrub: 2.5,
          once: true,
        },
      });
    });

    gsap.to(verticalLineLast, {
      duration: 1.5,
      autoAlpha: 1,
      ease: Power3,
      height: "300px",
      scrollTrigger: {
        trigger: verticalLineLast,
        start: "top 80%",
        end: "top 70%",
        scrub: 2.5,
        once: true,
      },
    });

    headers.forEach((header) => {
      gsap.to(header, {
        duration: 1.5,
        autoAlpha: 1,
        ease: Power3,
        y: 0,
        scrollTrigger: {
          trigger: header,
          start: "top 90%",
          end: "top 80%",
          scrub: 2.5,
          once: true,
        },
      });
    });

    spans.forEach((span) => {
      gsap.to(span, {
        duration: 1.5,
        autoAlpha: 1,
        ease: Power3,
        y: 0,
        scrollTrigger: {
          trigger: span,
          start: "top 90%",
          end: "top 80%",
          scrub: 2.5,
          once: true,
        },
      });
    });

    textLeft.forEach((text) => {
      gsap.to(text, {
        duration: 1.5,
        autoAlpha: 1,
        ease: Power3,
        x: 0,
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          end: "top 80%",
          scrub: 2.5,
          once: true,
        },
      });
    });

    textRight.forEach((text) => {
      gsap.to(text, {
        duration: 1.5,
        autoAlpha: 1,
        ease: Power3,
        x: 0,
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          end: "top 80%",
          scrub: 2.5,
          once: true,
        },
      });
    });

    imgLeft.forEach((img) => {
      gsap.to(img, {
        duration: 2.5,
        autoAlpha: 1,
        ease: Power3,
        x: 0,
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          end: "top 80%",
          scrub: 2.5,
          once: true,
        },
      });
    });

    imgRight.forEach((img) => {
      gsap.to(img, {
        duration: 2.5,
        autoAlpha: 1,
        ease: Power3,
        x: 0,
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          end: "top 80%",
          scrub: 2.5,
          once: true,
        },
      });
    });

    charsText.forEach((text) => {
      gsap.from(
        text,
        {
          yPercent: 100,
          stagger: 0.15,
          ease: Back.easeInOut,
          duration: 0.5,
          scrollTrigger: {
            trigger: text,
            start: "top 90%",
            end: "top 80%",
            scrub: 2.5,
            once: true,
          },
        },
        ".75"
      );
    });
  });

  mm.add("(min-width: 768px)", () => {});

  mm.add("(min-width: 400px)", () => {});
};

export default aboutAnim;
