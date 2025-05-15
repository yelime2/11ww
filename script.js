document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.section-animate');
    if (section) {
        const observerSection = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '-50px 0px'
        });
        observerSection.observe(section);
    }

    const mainSection = document.querySelector('.main-animate-section');
    if (mainSection) {
        const observerMain = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.2
        });
        observerMain.observe(mainSection);
    }

    const slideInRights = document.querySelectorAll('.slide-in-right');
    if (slideInRights.length) {
        const observerSlide = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observerSlide.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0
        });
        slideInRights.forEach(el => observerSlide.observe(el));
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollRightTitle = document.querySelector('.scroll-right-title');
  
    if (scrollRightTitle) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            scrollRightTitle.classList.add('visible');
          } else {
            scrollRightTitle.classList.remove('visible'); // 나가면 다시 원상복귀
          }
        });
      }, {
        threshold: 0.5
      });
  
      observer.observe(scrollRightTitle);
    }
  });