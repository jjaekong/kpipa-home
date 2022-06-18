/**
 * 퍼블리싱 공통 잡기 위한 파일입니다.
 * 개발에는 적용하지 말아주세요.
 */

// 탑배너 불러오기
axios.get('/components/_top_banner.html')
.then(res => {
    var toolbar = document.createElement('div')
    document.body.insertBefore(toolbar, document.getElementById('main'))
    toolbar.outerHTML = res.data
})

// 툴바 불러오기
axios.get('/components/_toolbar.html')
.then(res => {
    var toolbar = document.createElement('div')
    document.body.insertBefore(toolbar, document.getElementById('main'))
    toolbar.outerHTML = res.data
})

// 헤더 불러오기
axios.get('/components/_header.html')
.then(res => {
    var header = document.createElement('header')
    document.body.insertBefore(header, document.getElementById('main'))
    header.outerHTML = res.data
})

// 사이드바 불러오기
axios.get('/components/_sidebar.html')
.then(res => {
    var div = document.createElement('div')
    document.body.insertBefore(div, document.getElementById('main'))
    div.outerHTML = res.data
})

// 부가정보 불러오기
axios.get('/components/_added_info.html')
.then(res => {
    var div = document.createElement('div')
    document.body.insertAdjacentElement('beforeend', div)
    div.outerHTML = res.data
})

// 푸터 불러오기
axios.get('/components/_footer.html')
.then(res => {
    var footer = document.createElement('footer')
    document.body.insertAdjacentElement('beforeend', footer)
    footer.outerHTML = res.data
})

// 상단이동 버튼 불러오기
axios.get('/components/_goto_top.html')
.then(res => {
    var a = document.createElement('a')
    document.body.insertAdjacentElement('beforeend', a)
    a.outerHTML = res.data
})

// 로딩 스피너 불러오기
axios.get('/components/_loading.html')
.then(res => {
    var div = document.createElement('div')
    document.body.insertAdjacentElement('beforeend', div)
    div.outerHTML = res.data
})

// 공통 스크립트 추가
var scripts = [
    { src: '/js/bootstrap.bundle.min.js', defer: false },
    { src: '/js/swiper-bundle.min.js', defer: false },
    { src: '/js/common.js', defer: true }
]

scripts.forEach(script => {
    const scriptElem = document.createElement('script')
    document.body.insertAdjacentElement('beforeend', scriptElem)
    scriptElem.src = script.src
    scriptElem.defer = script.defer
})