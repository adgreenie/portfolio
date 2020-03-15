// https://docs.google.com/spreadsheets/d/19l0xoqkGrebEHkghxC_OxA2PZbiAPmdOtf2DpZ3guV8/edit#gid=0
let projectsId = '19l0xoqkGrebEHkghxC_OxA2PZbiAPmdOtf2DpZ3guV8'
let projectsSource = `https://spreadsheets.google.com/feeds/list/${projectsId}/od6/public/values?alt=json`

// API call for content on Projects section
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
    let $div = $('#projects').find('div.section-content')
    let $ul = $('<ul>').addClass('project-list')
    
    projects.forEach((project, i) => {
        let sides = ['left','right','left']
        let side = i % 2 // 0 if image is on left, 1 if on right
        let $li = $(`<li class="project">
                        <p style="padding-${sides[side+1]}: 10px; margin: 0;">
                            <img src="${project.image}" alt="${project.title}" class="project-img" style="float: ${sides[side]}; margin-${sides[side+1]}: 10px;">
                            <span class="project-title">${project.title}</span><br>
                            ${project.description}<br>
                            <a href="${project.url}" target="_blank" class="btn btn-primary project-button">Check it out!</a>
                        </p>
                    </li>`)
        let $a = $li.find('a')
        let $img = $li.find('img')    
        $li.hover(function() {
            $a.css({
                'height': 'auto',
                'visibility': 'visible'
            })
            $img.css('object-fit','cover')
        }, function() {
            $a.css({
                'height': 0,
                'visibility': 'hidden'
            })
            $img.css('object-fit','contain')
        })
        $ul.append($li)
    })
    $div.append($ul)
}