// Lazy load animations
function startObserving() {
    const elementsToBeRevealed = document.querySelectorAll('[class*="to-be"]')
    const onObserve = function(entries, observer) {
        entries.forEach(function(entry) {
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
    elementsToBeRevealed.forEach(function(element) { observer.observe(element) })
}

// Enable smooth scrolling
const scroll = new SmoothScroll('a[data-scroll]', { speed: 300 })

// 頁面載入完成後再開始監控有動畫效果的元件，等畫面滑到才開始動畫
window.addEventListener('load', function() { startObserving() }, { once: true })
