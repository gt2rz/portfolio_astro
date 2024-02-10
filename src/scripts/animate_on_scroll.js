const animation = document.querySelectorAll(".animate-on-scroll-section");

const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("intersecting");
            entry.target.classList.add("animate-on-scroll");
        } else {
            console.log("not intersecting");
            entry.target.classList.remove("animate-on-scroll");
        }
    });
};

const options = {
    // root: null,
    // rootMargin: "0px",
    threshold: 0.8,
};

const observer = new IntersectionObserver(callback, options);

for (let i = 0; i < animation.length; i++) {
    observer.observe(animation[i]);
}
