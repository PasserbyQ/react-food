
// 节流
function throttle(fn, delay) {
    let timer = null
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                timer = null
            }, delay);
        }
    }
}

// 防抖
function debounce(fn, delay) {
    let timer = null
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay);
    }
}

// 防抖
function debounce(fn, delay, immediate = false) {
    let timer = null
    return function () {
        if (timer) clearTimeout(timer)
        if (immediate) {
            const callNow = !timer
            if (callNow) {
                fn.apply(this, arguments)
            }
            timer = setTimeout(() => {
                timer = null
            }, delay);
        } else {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
            }, delay);
        }

    }
}


