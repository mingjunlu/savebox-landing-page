// Lazy load animations
const startObserving = () => {
    const elementsToBeRevealed = document.querySelectorAll('[class*="to-be"]')
    const onObserve = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                // 處理 slide-in 效果
                const classes = entry.target.classList.value.split(' ')
                if (classes.includes('to-be-slided-in')) {
                    const direction = entry.target.dataset.direction
                    const targetClass = classes.find(cls => cls.startsWith('to-be-slided-in'))
                    const newClass = targetClass.replace('to-be-slided-in', `slide-in-${direction}`)
                    entry.target.classList.replace(targetClass, newClass)
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
    elementsToBeRevealed.forEach(element => { observer.observe(element) })
}

// Enable smooth scrolling
const scroll = new SmoothScroll('a[data-scroll]', { speed: 300 })

// 開始監控有動畫效果的元件，等畫面滑到才開始動畫
startObserving()
