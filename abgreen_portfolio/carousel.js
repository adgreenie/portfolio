
// https://docs.google.com/spreadsheets/d/1-ZlnyCZ-h5ZsVR3nPYxkpS46DVsx8mYcHLlAGAWtPNs/edit#gid=0
let imgId = '1-ZlnyCZ-h5ZsVR3nPYxkpS46DVsx8mYcHLlAGAWtPNs'
let imgSource = `https://spreadsheets.google.com/feeds/list/${imgId}/od6/public/values?alt=json`

// API call for carousel images
fetch(imgSource)
    .then(response => response.json())
    .then(data => {
        let images = data.feed.entry.map(image => {
            return  {
                alt: image.gsx$alt.$t,
                url: image.gsx$url.$t
            }
        })
        addImages(images)
    })
    .catch(err => console.log('err', err))

function addImages(images) {
    // uses Bootstrap carousel framework, found here: https://getbootstrap.com/docs/4.0/components/carousel/
    $('#home').append(`<div id="homeCarousel" class="carousel slide page-content" data-ride="carousel">
                            <ol class="carousel-indicators"></ol>
                            <div class="carousel-inner"></div>
                            <a class="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>`)

    images.forEach((image, i) => {
        let $li = $(`<li data-target="#homeCarousel" data-slide-to="${i}"></li>`)
        let active = ' active'
        i === 0 ? $li.addClass('active') : active = ''
        $('.carousel-indicators').append($li)
        // add images to carousel, ${active} adds class 'active' to the first image, so it appears on load
        $('.carousel-inner').append(`<div class="carousel-item${active}">
                                        <img class="d-block w-100 carousel-img" src="${image.url}" alt="${image.alt}">
                                    </div>`)
    })
}