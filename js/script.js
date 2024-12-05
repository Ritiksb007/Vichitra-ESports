document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute("data-target");
            const speed = 100; // Adjust for smoother animation
            let count = 0;
  
            const updateCounter = () => {
              if (count < target) {
                count += Math.ceil(target / speed);
                counter.textContent = count > target ? target : count;
                requestAnimationFrame(updateCounter);
              }
            };
  
            updateCounter();
            observer.unobserve(counter);
          }
        });
      },
      { threshold: 1.0 }
    );
  
    counters.forEach(counter => observer.observe(counter));
  });
  