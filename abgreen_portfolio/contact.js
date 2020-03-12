// I only slightly modified the template found here: https://graygrids.com/php-and-ajax-based-contact-form-for-bootstrap-and-html5/

$('#contact').append(`<form role="form" id="contactForm" class="contact-form" data-toggle="validator" class="shake" style="max-width: 80vw; margin: 20px auto;">
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