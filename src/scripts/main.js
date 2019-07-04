import 'intersection-observer'
import SmoothScroll from 'smooth-scroll'
import startObserving from './startObserving'

// Enable smooth scrolling
const scroll = new SmoothScroll('a[data-scroll]', { speed: 300 })

// 頁面載入完成後再開始監控有動畫效果的元件，等畫面滑到才開始動畫
window.addEventListener('load', startObserving, { once: true })
