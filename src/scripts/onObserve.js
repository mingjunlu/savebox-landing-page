const onObserve = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            const classes = entry.target.classList.toString().split(' ')

            // 滑入動畫
            if (classes.includes('to-be-slided-in')) {
                // .to-be-slided-in -> .slide-in-direction
                const { direction } = entry.target.dataset
                entry.target.classList.add(`slide-in-${direction}`)
                entry.target.classList.remove('to-be-slided-in')
            }

            // 淡入動畫
            if (classes.includes('to-be-faded-in')) {
                // .to-be-faded-in -> .fade-in
                entry.target.classList.add('fade-in')
                entry.target.classList.remove('to-be-faded-in')
            }

            // 動畫結束就取消監控
            observer.unobserve(entry.target)
        }
    })
}

export default onObserve
