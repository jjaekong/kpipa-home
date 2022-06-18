/**
 * 퍼블리싱 공통 잡기 위한 파일입니다.
 * 개발에는 적용하지 말아주세요.
 */


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

// 브래드크럼 불러오기
axios.get('/components/_breadcrumb.html')
.then(res => {
    var nav = document.createElement('nav')
    document.body.insertBefore(nav, document.getElementById('main'))
    nav.outerHTML = res.data
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
axios.get('/components/_loading_with_progress.html')
.then(res => {
    var div = document.createElement('div')
    document.body.insertAdjacentElement('beforeend', div)
    div.outerHTML = res.data
})

// 공통 스크립트 추가
var scripts = [
    { src: '/js/bootstrap.bundle.min.js', defer: false },
    { src: '/js/swiper-bundle.min.js', defer: false },
    { src: '/js/common/jquery-3.5.1.min.js', defer: false },
    { src: '/js/common/jquery-ui.js', defer: false },
    { src: '/js/common/jquery.mtz.monthpicker.js', defer: false },
    { src: '/js/common.js', defer: false },
]

scripts.forEach(script => {
    const scriptElem = document.createElement('script')
    document.body.insertAdjacentElement('beforeend', scriptElem)
    scriptElem.src = script.src
    scriptElem.defer = script.defer
})

// // 책 리스트에 항목 추가(그리드 타입)
// const bookGridList = document.querySelectorAll('.book-grid-list li')
// if (bookGridList.length > 0) {
//     axios.get('/components/book_grid_item.html')
//     .then(res => {
//         bookGridList.forEach(li => {
//             li.innerHTML = res.data
//         })
//     })
    
// }

// // 책 리스트에 항목 추가(상세 타입)
// const bookDetailedList = document.querySelectorAll('.book-detailed-list li')
// if (bookDetailedList.length > 0) {
//     axios.get('/components/book_detailed_item.html')
//     .then(res => {
//         bookDetailedList.forEach(li => {
//             li.innerHTML = res.data
//         })
//     })
    
// }

// // 책 리스트에 항목 추가(상세 타입)
// const bookTableList = document.querySelector('.book-table-list')
// if (bookTableList) {
//     axios.get('/components/book_table_list.html')
//     .then(res => {
//         bookTableList.innerHTML = res.data
//     })
    
// }