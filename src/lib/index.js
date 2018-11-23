import Vue from 'vue'
import imageLazyload from './image-lazyload'
import spinner from './spinner'
let ImageLazyload = {}

ImageLazyload.install = function(Vue, options = {
  loading: '',
  error: ''
}) {
  Vue.component('image-lazyload', Vue.extend(imageLazyload))

  Vue.directive('lazyload', {
    bind: el => {
      let image = null
      let ele = null 
      el.dataset.url = el.src
      el.removeAttribute('src')

      function loadImage() {
        el.setAttribute('load', 'loading')
        ele = document.createElement('div')
        el.parentNode.appendChild(ele)
        el.parentNode.style.position = 'relative'
        //加载的不同显示方式
        if(options.loading === 'default') {
          ele.className = 'image-hover'
          ele.innerHTML = spinner[options.loading]
        } else if(options.loading) {
          
        } else {
          ele.className = 'image-hover'
        }
        image = new Image()
        image.src = el.dataset.url

        image.onload = function() {
          el.setAttribute('load', 'loaded')
          el.src = el.dataset.url;
        }
        
        image.onerror = function() {
           el.setAttribute('load', 'error')
          //加载失败的不同显示方式
          if(options.loading === 'default') {

          } else if(options.loading) {

          } else {
            ele.innerText = 'error'
          }
        }
      }

      function handleIntersect(entries, observer) {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            loadImage();
            observer.unobserve(el);
          }
        });
      }

      function createObserver() {
        const options = {
          root: null,
          threshold: "0"
        };
        const observer = new IntersectionObserver(handleIntersect, options);
        console.log(observer)
        observer.observe(el);
      }
      if(window["IntersectionObserver"]) {
        createObserver();
      } else {
        loadImage();
      }
    }
  })
}

export default ImageLazyload