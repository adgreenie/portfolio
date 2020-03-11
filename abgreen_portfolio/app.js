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

pages.forEach((page, i) => {
    let $li = $(`<li class="nav-item">
                    <a class="nav-link" href="#${page}">${page}</a>
                </li>`)
    $li.on('click', function() {
        $('main').css('left',`${-i*100}vw`)
        $(`.${page}-page`).removeClass('off-screen')
    })
    $navList.append($li)
})
$('#navbarSupportedContent').append($navList)

let $previous = $('.home-page')

$(window).scroll(() => {
    if($(window).scrollTop() + $(window).height() === $(document).height()) {
        $('main').addClass('screen-scroll')
        $('.project-page').removeClass('off-screen')
        $(window).scrollTop(0)
    }
 })

$(window).on('beforeunload', function() {
    $(window).scrollTop(0)
}); // page will load at top on refresh