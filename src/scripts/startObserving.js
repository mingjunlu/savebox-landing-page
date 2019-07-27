import 'intersection-observer'
import onObserve from './onObserve'

const startObserving = () => {
    // Create an observer
    const intersectionObserver = new IntersectionObserver(onObserve, {
        root: null,
        rootMargin: '0px',
        threshold: 0.18,
    })
    intersectionObserver.POLL_INTERVAL = 100

    // Select elements and monitor them
    const elementsToBeRevealed = document.querySelectorAll('[class*="to-be"]')
    elementsToBeRevealed.forEach((element) => { intersectionObserver.observe(element) })
}

export default startObserving
