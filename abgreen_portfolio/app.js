// const navItems = [{
//     name: 'About',
//     link: '/about'
// },{
//     name: 'Projects',
//     link: '/projects'
// },{
//     name: 'Contact',
//     link: '/contact'
// }]

const pages = ['home','about','project','contact']

let $navList = $('<ul>').addClass('navbar-nav mr-auto')

let $previous = $('.home-page')

pages.forEach((page, i) => {
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
            $(`.${page}-page`).removeClass('off-screen')
        }, 800)
        $previous.addClass('off-screen')
        $previous = $(`.${page}-page`)
    })
    $navList.append($li)
})
$('#navbarSupportedContent').append($navList)