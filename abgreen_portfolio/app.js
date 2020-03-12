const pages = ['home','about','projects','contact']

let $navList = $('<ul>').addClass('navbar-nav mr-auto')

let $previous = $('#home')

pages.forEach((page, i) => {
    let $div = $(`<div id="${page}" class="page"></div>`)
    if (i > 0) {
        // $div.addClass('off-screen')
        $div.append(`<div class="divider"></div>
                    <h1>${page}</h1>
                    <div class="divider"></div>`)
    }
    $('main').append($div)

    let $li = $(`<li class="nav-item">
                    <a class="nav-link" href="#${page}">${page}</a>
                </li>`)
    $li.click(() => {
        $('main').scrollTo({
            top: $div.scrollTop(),
            behavior: 'smooth'
        })
        // $(`#${page}`).removeClass('off-screen')
        // $previous.addClass('off-screen')
        // $previous = $(`#${page}`)
    })
    $navList.append($li)
    
    $(window).scroll(() => {
        let viewTop = $(window).scrollTop()
        let divTop = $div.offset().top
        let gap = .4 * $(window).height()
        if(viewTop > divTop - gap && viewTop < divTop + $div.height() - gap) {
            $div.css('opacity', 1)
            console.log($(window).height())
            console.log($div.position())
        }
        else {
            $div.css('opacity', .5)
        }
     })
})
$('#navbarSupportedContent').append($navList)

$(window).scroll(() => {
    if($(window).scrollTop() + $(window).height() === $(document).height() || $(window).scrollTop() === 0) {
        $('footer').css('opacity', 1)
    }
    else {
        $('footer').css('opacity', 0)
    }
 })