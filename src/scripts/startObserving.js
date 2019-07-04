// Lazy load animations
const startObserving = () => {
    const elementsToBeRevealed = document.querySelectorAll('[class*="to-be"]')
    const onObserve = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                // 處理 slide-in 效果
                const classes = entry.target.classList.toString().split(' ')
                if (classes.includes('to-be-slided-in')) {
                    const direction = entry.target.dataset.direction
                    const tempArr = classes.concat([])
                    const classIdx = tempArr.indexOf('to-be-slided-in')
                    tempArr.splice(classIdx, 1, ('slide-in-' + direction))
                    entry.target.className = tempArr.join(' ')
                }

                // 處理 fade-in 效果
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
