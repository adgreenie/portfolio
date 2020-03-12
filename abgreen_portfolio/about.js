const aboutMe = `Welcome to my portfolio website! Here you will find 
projects I have worked on over the course of General Assembly's Software 
Engineering Immersive. This site will be updated to also display future 
projects after I complete the program. I enjoy creative work that requires 
critical thinking, and I'm excited to share my progress with you. If you are 
interested in commissioning me for a project or have questions of any kind, 
please fill out the form on the Contact page. Thanks for visiting!`

$about = $('#about')
$about.append(`<img class="about-img" src="https://res.cloudinary.com/dnj7porin/image/upload/v1584005786/studiosaxpic_znu8ov.jpg">`)
$about.append(`<p class="text-block">${aboutMe}</p>`)