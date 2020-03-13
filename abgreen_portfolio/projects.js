// https://docs.google.com/spreadsheets/d/19l0xoqkGrebEHkghxC_OxA2PZbiAPmdOtf2DpZ3guV8/edit#gid=0
let projectsId = '19l0xoqkGrebEHkghxC_OxA2PZbiAPmdOtf2DpZ3guV8'
let projectsSource = `https://spreadsheets.google.com/feeds/list/${projectsId}/od6/public/values?alt=json`

fetch(projectsSource)
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
    .catch(err => console.log('err', err))

function addProjects(projects) {
    let $ul = $('<ul>').addClass('project-list')
    
    projects.forEach((project, i) => {
        let sides = ['left','right','left']
        let side = i % 2
        let $li = $(`<li class="project">
                        <p>
                            <img src="${project.image}" alt="${project.title}" class="project-img" style="float: ${sides[side]};">
                            <span class="project-title">${project.title}</span><br>
                            <span class="project-description">${project.description}</span><br>
                            <a href="${project.url}" target="_blank" class="btn btn-primary project-button" style="visibility: hidden;">Check it out!</a>
                        </p>
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