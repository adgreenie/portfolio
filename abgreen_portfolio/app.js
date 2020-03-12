const pages = ['home','about','projects','contact']

let $navList = $('<ul>').addClass('navbar-nav mr-auto')

let $previous = $('#home')

pages.forEach((page, i) => {
    let $div = $(`<div id="${page}" class="page" style="left: ${i*100}vw;">
                    <h1>We are on the ${page} page</h1>
                </div>`)
    i > 0 ? $div.addClass('off-screen') : ''
    $('main').append($div)

    let $li = $(`<li class="nav-item">
                    <a class="nav-link" href="#${page}">${page}</a>
                </li>`)
    $li.on('click', function() {
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