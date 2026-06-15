class NeoDecryptor {
    constructor(element) {
        this.el = element;
        this.originalText = element.textContent;
        this.chars = '01XYZ$_*§█■▓▒░[{<|>}]#%@';
        this.animationFrame = null;
        this.hasPlayed = false; 
        this.init();
    }

    init() {
        
        const observerOptions = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.25 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                
                if (entry.isIntersecting && !this.hasPlayed) {
                    this.scramble();
                    this.hasPlayed = true; 
                    observer.unobserve(this.el); 
                }
            });
        }, observerOptions);

        observer.observe(this.el);
    }

    scramble() {
        let iteration = 0;
        cancelAnimationFrame(this.animationFrame);

        const draw = () => {
            this.el.innerHTML = this.originalText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return this.originalText[index];
                    }
                    if (letter === " ") return " ";
                    
                    return this.chars[Math.floor(Math.random() * this.chars.length)];
                })
                .join("");

            if (iteration >= this.originalText.length) {
                this.el.textContent = this.originalText;
                cancelAnimationFrame(this.animationFrame);
            } else {
                iteration += 1 / 5; 
                this.animationFrame = requestAnimationFrame(draw);
            }
        };

        draw();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    
    const targetElements = document.querySelectorAll('.section-heading, .modal-heading');
    targetElements.forEach(el => new NeoDecryptor(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(element => revealObserver.observe(element));
});