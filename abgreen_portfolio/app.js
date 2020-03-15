const pages = ['home','about','projects','contact']
const quote = 'You change the world by being yourself. – Yoko Ono'

let $navList = $('<ul>').addClass('navbar-nav mr-auto')

pages.forEach((page, i) => {
    // add page to site
    let $div = $(`<div id="${page}" class="page"></div>`)
    if (i > 0) {
        $div.append(`<h1>${page}</h1>
                    <div class="page-frame page-top"></div>
                    <div id="${page}-content" class="page-content"></div>
                    <div class="page-frame page-bottom"></div>`)
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

// quote only added to footer if screen width is larger than mobile
$(window).width() > 768 ? $footer.append($quote) : ''

// dynamically determine whether to add or remove quote from footer
$(window).resize(() => {
    if ($(window).width() <= 768) {
        $quote.detach()
    } else {
        $footer.append($quote)
    }
})