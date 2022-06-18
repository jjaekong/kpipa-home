function openHeaderNav() {
    document.querySelector('#header').classList.add('expanded', 'shadow-sm')
}

function closeHeaderNav() {
    document.querySelector('#header').classList.remove('expanded', 'shadow-sm')
}

// 스크롤 시 상단이동버튼 보이기/숨기기
window.addEventListener('scroll', function() {
    const btnGotoTop = document.getElementById('btn-goto-top')
    if (btnGotoTop) {
        if (window.scrollY >= 100) {
            document.getElementById('btn-goto-top').classList.add('show')
        } else {
            document.getElementById('btn-goto-top').classList.remove('show')
        }
    }
})


window.addEventListener('load', function() {

    const mainEl = document.getElementById('main')
    if (mainEl) {
        if (mainEl.classList.contains('home')) {
            document.body.classList.add('home')
        } else {
            document.body.classList.add('sub')
        }
    }

    // 상단으로 이동하는 버튼
    const btnGotoTop = document.getElementById('btn-goto-top')
    if (btnGotoTop) {
        btnGotoTop.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo(0, 0);
        })
    }

    const headerAll = document.querySelectorAll("#header")
    if (headerAll.length > 0) {
        document.querySelectorAll("#header .nav > li > a").forEach(elem => {
            elem.addEventListener('mouseover', openHeaderNav, false, false)
            elem.addEventListener('focus', openHeaderNav, false, false)
        })

        document.querySelector('#header').addEventListener('mouseleave', closeHeaderNav);
    }
    
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
})

// 로딩 스피너 확인용(개발에는 적용하면 안됨)
window.addEventListener('load', function() {
    
    setTimeout(function() {
        document.getElementById('loading-spinner').classList.add('d-none')
    }, 1000)

})

window.addEventListener('load',  function() {

    const monthPickterOptions = {
        pattern: 'yyyy-mm',
        selectedYear: 2022,
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
    };
    
    const mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.type !== mutation.target.getAttribute('type')) {
                if (mutation.target.getAttribute('type') === 'month') {
                    mutation.target.setAttribute('readonly', 'readonly');
                    mutation.target.setAttribute('style', 'background: url(/img/calendar.svg) no-repeat calc(100% - 10px) 50% !important');
                    $(mutation.target).monthpicker(monthPickterOptions); // 훨선택기 할당
                }
            } else {
                $(mutation.target).monthpicker('destroy');
                mutation.target.removeAttribute('readonly');
                mutation.target.setAttribute('style', 'background: none !important');
            }
        });
    });

    const inputMonthAll = document.querySelectorAll('input[type=month]');
    inputMonthAll.forEach(elemInputMonth => {
        if (elemInputMonth.type !== elemInputMonth.getAttribute('type')) {
            if (elemInputMonth.getAttribute('type') === 'month') {
                elemInputMonth.setAttribute('readonly', 'readonly');
                elemInputMonth.setAttribute('style', 'background: url(/img/calendar.svg) no-repeat calc(100% - 10px) 50% !important');
                $(elemInputMonth).monthpicker(monthPickterOptions);
                mutationObserver.observe(elemInputMonth, { attributes: true, attributeFilter: ['type'] });
            }
        } else {
            elemInputMonth.removeAttribute('readonly')
        }
        
    })  

})