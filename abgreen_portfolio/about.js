// https://docs.google.com/spreadsheets/d/1GugDLpqIMNFKVZZkAWyH4oAt3DLkLKxEsRbMiEYvQgY/edit#gid=0
let aboutId = '1GugDLpqIMNFKVZZkAWyH4oAt3DLkLKxEsRbMiEYvQgY'
let aboutSource = `https://spreadsheets.google.com/feeds/list/${aboutId}/od6/public/values?alt=json`

fetch(aboutSource)
    .then(response => response.json())
    .then(data => {
        let aboutMe = {
            image: data.feed.entry[0].gsx$image.$t,
            text: data.feed.entry[0].gsx$text.$t
        }
        addAbout(aboutMe)
    })
    .catch(err => console.log('err', err))

function addAbout(aboutMe) {
    $about = $('#about')
    $about.append(`<img class="about-img" src="${aboutMe.image}">`)
    $about.append(`<p class="text-block">${aboutMe.text}</p>`)
}