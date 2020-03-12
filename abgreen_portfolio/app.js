const pages = ['home','about','projects','contact']

let $navList = $('<ul>').addClass('navbar-nav mr-auto')

let $previous = $('#home')

pages.forEach((page, i) => {
    let $div = $(`<div id="${page}" class="page" style="left: ${i*100}vw;"></div>`)
    if (i > 0) {
        $div.addClass('off-screen')
        $div.append(`<div class="divider"></div>
                    <h1>${page}</h1>
                    <div class="divider"></div>`)
    }
    $('main').append($div)

    let $li = $(`<li class="nav-item">
                    <a class="nav-link" href="#${page}">${page}</a>
                </li>`)
    $li.click(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        $('main').css('left', `${-i*100}vw`)
        setTimeout(() => {
            $(`#${page}`).removeClass('off-screen')
        }, 800)
        $previous.addClass('off-screen')
        $previous = $(`#${page}`)
    })
    $navList.append($li)
})
$('#navbarSupportedContent').append($navList)

$(window).scroll(() => {
    if($(window).scrollTop() + $(window).height() !== $(document).height()) {
        $('footer').css('opacity', 0)
    }
    else {
        $('footer').css('opacity', 1)
    }
 })