import SmoothScroll from 'smooth-scroll'
import startObserving from './startObserving'

// eslint-disable-next-line no-unused-vars
const scroll = new SmoothScroll('a[data-scroll]', { speed: 300 })

// 頁面載入完成後再開始監控有動畫效果的元件，等畫面滑到才觸發動畫
window.addEventListener('load', startObserving, { once: true })
