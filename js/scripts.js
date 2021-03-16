console.log("OK");

gsap.from("p", {
  x: 200,
  y: 200
});

gsap.from("#snow", {
  y: -200,
  duration: 2,
  repeat: -1
});

gsap.from("#snow1", {
  y: -400,
  duration: 2,
  repeat: -1
});
