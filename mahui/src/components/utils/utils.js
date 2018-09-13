//防抖动 
export let debounce = (func, ms) => {
        let timer = null;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func();
            }, ms);
        }
    }
    //节流
export let throttle = (func, ms) => {
        let last = +new Date();
        return () => {
            let cur = +new Date();
            if (cur - last > ms) {
                func();
                last = cur;
            }
        }
    }
    //懒加载
export let lazyLoad = {
    nodes: [],
    inView(el) {
        let rect = el.getBoundingClientRect();
        return (rect.left > 0 && rect.top > 0 && rect.top) <= window.innerHeight;
    },
    init() {
        this.nodes = Array.from(document.querySelectorAll('[data-src]'));
    },
    loadImg() {
        this.init();
        this.nodes.forEach((item, index) => {
            if (this.inView(item)) {
                item.src = item.getAttribute('data-src');
            }
        })
    }
}