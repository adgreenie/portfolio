// I found a free-use template (link below), which utilizes Bootstrap and was exactly what I wanted for my Contact section.
// https://graygrids.com/php-and-ajax-based-contact-form-for-bootstrap-and-html5/
// While this only required minor edits apart from the border, I still took the time to examine elements in the HTML.

let $div = $('#contact').find('div.section-content')

let $form = $(`<form role="form" id="contactForm" class="contact-form shake" data-toggle="validator" onsubmit="submitForm(event)">
                <div class="form-group">
                    <div class="controls">
                        <input type="text" id="name" class="form-control" placeholder="Name" required data-error="Please enter your name">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="controls">
                        <input type="email" class="email form-control" id="email" placeholder="Email" required data-error="Please enter your email">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="controls">
                        <input type="text" id="msg_subject" class="form-control" placeholder="Subject" required data-error="Please enter your message subject">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="controls">
                        <textarea id="message" rows="7" placeholder="Message" class="form-control" required data-error="Write your message"></textarea>
                        <div class="help-block with-errors"></div>
                    </div>  
                </div>
                <button type="submit" id="submit" class="btn btn-effect btn-primary"><i class="fa fa-check"></i>Send Message</button>
                <div id="msgSubmit" class="h3 text-center hidden"></div> 
                <div class="clearfix"></div>
            </form>`)

$div.append($form)

function submitForm(e){
    e.preventDefault();
    console.log("form submitted")
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#msg_subject").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "/form-process.php",
        data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}