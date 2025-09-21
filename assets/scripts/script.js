gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("h2").forEach((h2) => {
  ScrollTrigger.create({
    trigger: h2,
    start: "top 80%",
    onEnter: () =>
      gsap.to(h2, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      }),
  });
});

gsap.utils.toArray(".assigments-container").forEach((container) => {
  ScrollTrigger.create({
    trigger: container,
    start: "top 80%",
    onEnter: () =>
      gsap.to(container, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      }),
  });
});

gsap.to(".section-p", {
  opacity: 1,
  x: 0,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".p-content",
    start: "top 80%",
    toggleActions: "play none none none",
    markers: false,
  },
});

function openPopup(id) {
  const popup = document.getElementById(id);
  if (popup) {
    popup.showModal();
    document.body.style.overflowY = "hidden";
  }
}

function closePopup(id) {
  const popup = document.getElementById(id);
  if (popup) {
    popup.setAttribute("closing", "");
    popup.addEventListener(
      "animationend",
      () => {
        popup.removeAttribute("closing");
        popup.close();
        document.body.style.overflowY = "auto";
      },
      { once: true }
    );
  }
}
