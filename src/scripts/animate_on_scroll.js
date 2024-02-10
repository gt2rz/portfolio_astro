const animation = document.querySelectorAll(".animate-on-scroll-section");

const callback = () => {
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-on-scroll");
            } else {
                entry.target.classList.remove("animate-on-scroll");
            }
        });
    }
}

const options = {
    // root: null,
    // rootMargin: "0px",
    threshold: 1.0,
};

const observer = new IntersectionObserver( callback, options );

for (let i = 0; i < animation.length; i++) {
    observer.observe(animation[i]);
}
