import gsap from "gsap";

declare module "solid-js" {
  namespace JSX {
    interface Directives {
      hoverAnimation: any;
      hover: any;
      fadeIn: any;
    }
  }
}

export const hoverAnimation = (el) => {
  const animation = gsap.to(el, {
    rotate: 90,
    duration: 0.75,
    opacity: 100,
    ease: "back",
    paused: true,
  });

  el.addEventListener("mouseenter", () => {
    console.log("Enter");
    animation.play(0);
  });
};

export const fadeInAnimation = (el) => {
  const animation = gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 16,
    },
    {
      opacity: 1,
      y: 0,
      delay: 0.25,
      duration: 0.5,
      ease: "sine.inOut",
    },
  );
  animation.play();
};
