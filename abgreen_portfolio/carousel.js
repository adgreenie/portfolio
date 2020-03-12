
const carouselImages = [{
    url: 'https://cdn.pixabay.com/photo/2020/03/10/11/55/netherlands-4918751_960_720.jpg',
    alt: 'bridge'
},{
    url: 'https://cdn.pixabay.com/photo/2020/03/09/23/04/plum-4917370_960_720.jpg',
    alt: 'flowers'
},{
    url: 'https://cdn.pixabay.com/photo/2020/03/09/23/59/istanbul-4917447_960_720.jpg',
    alt: 'city'
}]

$('#home').append(`<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators"></ol>
                    <div class="carousel-inner"></div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>`)
carouselImages.forEach((image, i) => {
    let $li = $(`<li data-target="#carouselExampleIndicators" data-slide-to="${i}"></li>`)
    let active = ' active'
    i === 0 ? $li.addClass('active') : active = ''
    $('.carousel-indicators').append($li)
    $('.carousel-inner').append(`<div class="carousel-item${active}">
                                    <img class="d-block w-100" src="${carouselImages[i].url}" alt="${carouselImages[i].alt}">
                                </div>`)
})