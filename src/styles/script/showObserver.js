export function showObserver() {
    const listSection = document.getElementsByClassName("section-obs")

    const options = {
        rootMargin: "0px",
        threshold: 0.2
    }

    const observer = new IntersectionObserver((entries) => {
        for(let entry of entries) {
            if(entry.isIntersecting)
                entry.target.classList.remove("section-obs")
        }
    }, options)
    
    for (let section of listSection) {
        observer.observe(section)
    }
}