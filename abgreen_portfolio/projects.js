// https://docs.google.com/spreadsheets/d/19l0xoqkGrebEHkghxC_OxA2PZbiAPmdOtf2DpZ3guV8/edit#gid=0
let id = '19l0xoqkGrebEHkghxC_OxA2PZbiAPmdOtf2DpZ3guV8'
let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`

fetch(source)
    .then(response => response.json())
    .then(data => {
        let projects = data.feed.entry.map(project => {
            return  {
                title: project.gsx$title.$t,
                image: project.gsx$image.$t,
                description: project.gsx$description.$t,
                url: project.gsx$url.$t
            }
        })
        addProjects(projects)
    })

function addProjects(projects) {
    let $ul = $('<ul>').addClass('project-list')
    
    projects.forEach((project, i) => {
        let sides = ['left','right','left']
        let side = i % 2
        let $li = $(`<li class="project">
                        <img src="${project.image}" class="project-img" alt="${project.title}" style="float: ${sides[side]};">
                        <div class="project-text" style="text-align: ${sides[side+1]}; padding: 20px;">
                            <h5>${project.title}</h5>
                            <p>${project.description}</p>
                            <a href="${project.url}" target="_blank" class="btn btn-primary" style="visibility: hidden;">Check it out!</a>
                        </div>
                    </li>`)
        $li.hover(function() {
            $(this).find('a').css('visibility','visible')
            $(this).find('img').css('object-fit','cover')
        }, function() {
            $(this).find('a').css('visibility','hidden')
            $(this).find('img').css('object-fit','contain')
        })
        $ul.append($li)
    })
    $('#projects').append($ul)
}
