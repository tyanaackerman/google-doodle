console.log("OK");

// gsap.from("p", {
//   x: 200,
//   y: 200
// });

gsap.fromTo(
  "#snow",
  { x: -100, y: -200, opacity: 1 },
  { x: 100, y: 100, opacity: 0, duration: 6, repeat: -1 }
);

gsap.fromTo(
  "#snow1",
  { x: 0, y: -200, opacity: 1 },
  { x: 0, y: 100, opacity: 0, duration: 8, repeat: -1 }
);
