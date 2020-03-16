// https://docs.google.com/spreadsheets/d/1GugDLpqIMNFKVZZkAWyH4oAt3DLkLKxEsRbMiEYvQgY/edit#gid=0
let aboutId = '1GugDLpqIMNFKVZZkAWyH4oAt3DLkLKxEsRbMiEYvQgY'
let aboutSource = `https://spreadsheets.google.com/feeds/list/${aboutId}/od6/public/values?alt=json`

// API call for image and text on About section
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
    let $div = $('#about').find('div.section-content')
    $div.before(`<img id="about-img" src="${aboutMe.image}" alt="Profile Picture">`)
    $div.append('<p>').html(aboutMe.text)
    $div.after(`<img src="https://res.cloudinary.com/dnj7porin/image/upload/v1584143970/lucky_green_logo_rgywyb.png" id="about-logo" alt="logo">`)
}