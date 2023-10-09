recordState = false;
recordId = 0;
app = "";
$(function() {
    var filterList = {
        init: function() {
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.heading1, .heading2, .heading3, .heading4'
                }
            });
        }
    };
    // Run the show!
    filterList.init();
});


$(document).ready(function() {
    if ($(".streaming-section").length > 0) {
        setInterval(function(){
            $.ajax({
                type: "GET",
                dataType: 'json',
                url: "http://localhost/homes-rentals/api/ping-stream/bypass_stream",
                complete: function (data) {

                },
                success: function (data) {

                  },
                error: function(data){
                }      
            });
        }, 5000);
    }

    $(".fancybox").fancybox();
    // VIDEO STREAMING
    var player = videojs('hls-example');
    player.play();    
});

function streamRecording(){
    if (recordState) {
        stopRecording();
        recordState = false;
    }else{
        startRecording();
        recordState = true;
    }
}

function startRecording(){
    var form_data = new FormData();
    form_data.append('app', 'app');
    form_data.append('stream-name', 'mystreamname');
    $.ajax({
        type: "POST",
        dataType: 'json',
        url: "http://localhost/homes-rentals/api/start-recoding",
        data: form_data,
        processData: false,
        contentType: false,
        complete: function (data) {

        },
        success: function (data) {
            if (data.message == 'OK') {
                recordId = data.response[0].id;
                app = data.response[0].app;
                $('.recording-btn').removeClass('btn-info');
                $('.recording-btn').addClass('btn-danger');
                $('.recording-btn').html('Stop recording');
            }
          },
        error: function(data){
          // $('#loading').removeClass('fa fa-spinner fa-spin');
        }      
    });
}

function stopRecording(){
    var form_data = new FormData();
    form_data.append('app', app);
    form_data.append('id', recordId);
    $.ajax({
        type: "POST",
        dataType: 'json',
        url: "http://localhost/homes-rentals/api/stop-recoding",
        data: form_data,
        processData: false,
        contentType: false,
        complete: function (data) {

        },
        success: function (data) {
            if (data.message == 'OK') {
                $('.recording-btn').removeClass('btn-danger');
                $('.recording-btn').addClass('btn-info');
                $('.recording-btn').html('Start recording');
            }
          },
        error: function(data){
          // $('#loading').removeClass('fa fa-spinner fa-spin');
        }      
    });
}



// -------------------------------------------------------------
// Back To Top  
// -------------------------------------------------------------

(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });
}());



// -------------------------------------------------------------
// Back To Top  
// -------------------------------------------------------------




// -------------------------------------------------------------
// Fancy Gallery Start  
// -------------------------------------------------------------

$(document).ready(function() { $('.fb').fancybox(); });
// -------------------------------------------------------------
// Fancy Gallery End 
// -------------------------------------------------------------


// -------------------------------------------------------------
// ScrollBar Start
// -------------------------------------------------------------

// jQuery(document).ready(function(){
//     jQuery('.scrollbar-inner').scrollbar();
// });
// -------------------------------------------------------------
// ScrollBar End 
// -------------------------------------------------------------

// -------------------------------------------------------------
// Loader Start 
// -------------------------------------------------------------

window.onload = function() { $('.loader').fadeOut(); }


// -------------------------------------------------------------
// Loader End
// -------------------------------------------------------------

/*$('.BlogSlider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
});*/