// Show portfolio when "View Portfolio" is clicked
document.getElementById("viewPortfolioBtn").addEventListener("click", () => {
  // Hide landing
  document.getElementById("landing").style.display = "none";

  // Show portfolio
  const portfolio = document.getElementById("portfolioContent");
  portfolio.style.display = "block";

  // Smooth fade-in effect
  portfolio.style.opacity = 0;
  setTimeout(() => {
    portfolio.style.transition = "opacity 1s ease-in-out";
    portfolio.style.opacity = 1;
  }, 50);

  // Show About section by default
  showSection("about");
});

// ✅ Function to show only one section at a time
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll("section").forEach(sec => {
    sec.style.display = "none";
  });

  // Show the selected section
  let section = document.getElementById(sectionId);
  if (section) {
    section.style.display = "block";
  }

  // Animate skills
  if (sectionId === "skills") {
    animateSkills();
  }

  // Animate about
  if (sectionId === "about") {
    gsap.from("#about", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  }
  if (sectionId === "projects") {
    gsap.from("#projects", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  }
   if (sectionId === "internships") {
    gsap.from("#internships", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  }
   if (sectionId === "certifications") {
    gsap.from("#certifications", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  }
   if (sectionId === "skills") {
    gsap.from("#skills", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  }
   if (sectionId === "education") {
    gsap.from("#education", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  }
}

// ✅ Toggle internship certificate
function toggleCertificate(certId, event) {
  const certDiv = document.getElementById(certId);
  const arrow = event.target;

  if (certDiv.style.display === "none" || certDiv.style.display === "") {
    certDiv.style.display = "block";
    arrow.classList.add("open");
  } else {
    certDiv.style.display = "none";
    arrow.classList.remove("open");
  }
}

// ✅ Home button
function goHome() {
  document.getElementById("portfolioContent").style.display = "none";
  document.getElementById("landing").style.display = "block";
  window.scrollTo(0, 0);
}

// ✅ Lightbox setup
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".lightbox-img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// ✅ Animate skills
function animateSkills() {
  const skills = document.querySelectorAll(".progress");

  skills.forEach(skill => {
    let percent = skill.getAttribute("data-percent");

    // Reset first
    gsap.set(skill, { width: "0%" });

    // Animate bar filling
    gsap.to(skill, {
      width: percent + "%",
      duration: 1.5,
      ease: "power2.out",
      onUpdate: function () {
        let current = Math.round(parseFloat(skill.style.width));
        skill.textContent = current + "%";
      }
    });
  });
}
// Landing page animation
window.addEventListener("load", () => {
  // Animate each line like typing
  gsap.fromTo(".line h2,.line h1,.line h2,.line h2",
    { opacity: 0, y: 30 }, 
    { opacity: 1, y: 0, duration: 1, stagger: 0.7, ease: "power2.out" }
  );

  // Button comes after text
  gsap.to("#viewPortfolioBtn", {
    opacity: 1,
    y: 0,
    delay: 1.5,
    duration: 1,
    ease: "back.out(1.7)"
  });
});


