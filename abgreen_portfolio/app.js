const pages = ['home','about','projects','contact']
const quote = 'You change the world by being yourself. – Yoko Ono'

let $navList = $('<ul>').addClass('navbar-nav mr-auto')

pages.forEach((page, i) => {
    // add page to site
    let $div = $(`<div id="${page}" class="page"></div>`)
    if (i > 0) {
        $div.append(`<div class="divider"></div>
                    <h1>${page}</h1>
                    <div class="divider"></div>`)
    }
    $('main').append($div)

    // add page name to navbar
    let $li = $(`<li class="nav-item">
                    <a class="nav-link" href="#${page}">${page}</a>
                </li>`)
    $navList.append($li)
    
    // test to see if user is currently viewing this page
    $(window).scroll(() => {
        let viewTop = $(window).scrollTop()
        let divTop = $div.offset().top
        let gap = .4 * $(window).height()
        if (viewTop > divTop - gap && viewTop < divTop + $div.height() - gap) {
            $div.css('opacity', 1)
            $li.addClass('active')
        }
        else {
            $div.css('opacity', .5)
            $li.removeClass('active')
        }
     })
})
$('#navbarSupportedContent').append($navList)

// make footer only appear when site is scrolled completely up or down
$(window).scroll(() => {
    $footer = $('footer')
    if($(window).scrollTop() + $(window).height() === $(document).height() || $(window).scrollTop() === 0) {
        $footer.css('bottom', 0)
    }
    else {
        $footer.css('bottom', -$footer.height())
    }
 })

let $quote = $('<p>').html(quote)
let $footer = $('footer')

$(window).width() > 768 ? $footer.append($quote) : ''

$(window).resize(() => {
    if ($(window).width() <= 768) {
        $quote.detach()
    } else {
        $footer.append($quote)
    }
})