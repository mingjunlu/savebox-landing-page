// Lazy load animations
const startObserving = () => {
    const elementsToBeRevealed = document.querySelectorAll('[class*="to-be"]')
    const onObserve = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                // .to-be-slided-in -> .slide-in-direction
                const classes = entry.target.classList.toString().split(' ')
                if (classes.includes('to-be-slided-in')) {
                    const { direction } = entry.target.dataset
                    entry.target.classList.add(`slide-in-${direction}`)
                    entry.target.classList.remove('to-be-slided-in')
                }

                // .to-be-faded-in -> .fade-in
                entry.target.classList.add('fade-in')
                entry.target.classList.remove('to-be-faded-in')

                // 動畫結束就取消監控
                observer.unobserve(entry.target)
            }
        })
    }
    const observer = new IntersectionObserver(onObserve, {
        root: null,
        rootMargin: '0px',
        threshold: 0.18,
    })
    observer.POLL_INTERVAL = 100
    elementsToBeRevealed.forEach((element) => { observer.observe(element) })
}

export default startObserving
