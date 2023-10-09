<?php include('header.php');?>
<style>
section.aboutsecbanner {
    background-image: linear-gradient(#05595b, #062C30), url(assets/images/enabling-transactions-slide-small2162742469113.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding:20px 0 40px;
    background-position: 90% 43%;
    background-blend-mode: multiply;
}


    video {
		width: 100%;
		max-width: 640px;
	}

	/* Everything but the jumbotron gets side spacing for mobile first views */
	.header, .marketing, .footer {
		padding: 15px;
	}

	/* Custom page header */
	.header {
		padding-bottom: 20px;
	}

	/* Customize container */
	@media ( min-width : 768px) {
		.container {
			max-width: 730px;
		}
	}

	.container-narrow>hr {
		margin: 30px 0;
	}

	/* Main marketing message and sign up button */
	.jumbotron {
		text-align: center;
	}

	/* Responsive: Portrait tablets and up */
	@media screen and (min-width: 768px) {
		/* Remove the padding we set earlier */
		.header, .marketing, .footer {
			padding-right: 0;
			padding-left: 0;
		}
	}
	.options {
			display:none;
		}
	.message_area {
		height: 300px;
		overflow-y: auto;
		border-style: groove;
		border-width: thin;
		background-color: white;
	}
</style>
<!-- about banner sec start -->
<section class="aboutsecbanner">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="abouttext2">
          <h2>Live Streaming</h2>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- about banner sec end -->


<!-- bid-on-property start -->
<section class="bid-on-property">
  <!--<div class="container">-->
  <!--  <div class="row">-->
  <!--      <div class="col-2-grid btn-live-info">-->
  <!--          <button class="btn-live"><a href="<?php echo base_url();?>startVideo">Go Live  <i class="fa fa-video-camera" aria-hidden="true"></i></a></button>-->
  <!--      </div>-->
        <!--<div class="col-md-2 col-6">
  <!--          <button type="button" class="btn btn-primary" onclick="start()" style="background-color:#0d6efd;    border-color: #0d6efd;width:100%">Start</button>-->
  <!--      </div>-->
  <!--       <div class="col-md-2 col-6">-->
  <!--          <button type="button" class="btn btn-danger" onclick="stop()" style="background-color: #dc3545;-->
  <!--  border-color: #dc3545;width:100%">Stop</button>-->
  <!--      </div>-->
  <!--    <div class="col-md-12 order-last">-->
  <!--          <video id="vid" autoplay style="margin-top: 10px;border: 2px solid #ddd;width:300px;height:200px"></video> -->
  <!--    </div>-->-->
     
  <!--    </div>-->
  <!--  </div>-->
  <!--</div>  -->
  
  <div class="container p-3">
    <div class="jumbotron">
			<div class="col-sm-12 form-group">
				<video id="localVideo"  autoplay muted controls playsinline></video>
			</div>

			<div class="form-group col-sm-12 text-left">
				<input type="hidden" class="form-control"
						id="streamId" name="streamIdTextBox" placeholder="Type stream ID">
			</div>
			<!-- <div class="col-sm-12 text-right">
				<button type="button" id="options" class="btn btn-outline-primary btn-sm" >Options</button>
			</div> -->
			<div class="form-group col-sm-12 text-left options">

				<label class=" mr-2" for="inlineFormCustomSelectPref">Max Video Bitrate(Kbps):</label>
				<div class="form-inline">
					<input type="text" class="form-control  mr-sm-2"
							id="maxBandwidthTextBox" name="maxBandwidthTextBox" value="900">
				  
					<button type="button" class="btn btn-outline-primary btn-sm" id="max_bandwidth_apply" >Apply</button>
				</div>
				<div class="dropdown-divider"></div>
				<legend class="col-form-label video-source-legend">Video Source</legend>
					<a id="browser_screen_share_doesnt_support" href="https://caniuse.com/#search=getDisplayMedia">Your browser doesn't support screen share. You can see supported browsers in this link </a>
				<div class="dropdown-divider"></div>
				<legend class="col-form-label audio-source-legend">Audio Source</legend>


				<legend class="col-form-label microphone-gain-legend">Microphone Gain</legend>
				<div class="form-inline"><input type=range id="volume_change_input" min=0 max=1 value=1 step=0.01></div>
				<legend class="col-form-label audio-quality-legend">Audio Quality</legend>
				<div class="form-check-inline form-inline">
					<div class="custom-control custom-switch">
						<input type="checkbox" class="custom-control-input" name="noiseSuppression" id="noiseSuppression">
						<label class="custom-control-label" for="noiseSuppression">Noise Supression</label>
					  </div>
				</div>
				<div class="form-check-inline form-inline">	  
					  <div class="custom-control custom-switch">
						<input type="checkbox" class="custom-control-input" name="echoCancellation" id="echoCancellation">
						<label class="custom-control-label" for="echoCancellation">Echo Cancellation</label>
					  </div>
				</div>
				
			</div>	
			<div class="dropdown-divider"></div>
			<div class="form-group col-sm-12 text-left options">
				<label>Data Channel Messages</label>
				<div id="all-messages" class="message_area"></div>
				<div class="form-row">
					<div class="form-group col-sm-8">
						<input type="text" class="form-control" id="dataTextbox" placeholder="Write your message to send players">
					</div>
					<div class="form-group col-sm-2">
					<button type="button" id="send" class="btn btn-outline-primary btn-block">Send</button>
					</div>
					<div class="form-group col-sm-2">
						<button id="send-image-button" type="button" class="btn btn-outline-primary btn-block">
							Image
						</button>
						<input id="file-input" type="file" name="name" accept="image/x-png,image/gif,image/jpeg" style="display: none" />
					</div>
				</div>
			</div>
				<div class="form-group">	
					<button class="btn btn-success" 
					id="start_publish_button">Go Live  <i class="fa fa-video-camera" aria-hidden="true"></i></button>
					<button class="btn btn-primary" 
					id="stop_publish_button" style="font-size:14px;visibility:hidden">Stop Publishing</button>
				</div>			

				<span class="badge badge-success" id="broadcastingInfo" style="font-size:14px;visibility:hidden;display:none"
							style="display: none">Publishing</span>
				<div class="dropdown-divider"></div>	
					
				<!-- <span style="font-size:16px;display:block;padding:10px;"><a href="samples.html">WebRTC Sample List</a></span> -->
				<div class="col-sm-10 offset-sm-1" id="stats_panel" style="display: none;">
					<div class="row text-muted text-left">
					  <div class="col-sm-6">
						<small>
						 <div id="average_bit_rate_container">Average Bitrate(Kbps): <span id="average_bit_rate"></span></div>
						 <div id="latest_bit_rate_container">Latest Bitrate(Kbps): <span id="latest_bit_rate"></span></div>
						 <div id="packet_lost_container">PacketsLost: <span id="packet_lost_text"></span></div>
						 <div id="jitter_text_container">Jitter(Secs): <span id="jitter_text"></span></div>
						 <div>Audio Level: <span id="audio_level_text"></span> <meter id="audio_level_text_container" high="0.25" max="1" value="0"></meter></div>
						</small>
					  </div>
					  <div class="col-sm-6">
						<small>
						<div id="round_trip_time_container">Round Trip Time(Secs): <span id="round_trip_time"></span></div>
						<div id="source_resolution_container">Source WidthxHeight: <span id="source_width"></span> x <span id="source_height"></span></div>
						<div id="ongoing_resolution_container">On-going WidthxHeight: <span id="ongoing_width"></span> x <span id="ongoing_height"></span></div>
						<div id="on_going_fps_container">On-going FPS: <span id="on_going_fps"></span></div>
						
						</small>
					  </div>
					</div>
				  </div>
		</div>
    <!-- <div class="row">
        <div class="col-2-grid btn-live-info">
            <button class="btn-live"></button>
        </div>

      </div>
    </div> -->
  </div> 
</section>

<script src="<?php echo base_url().'assets/';?>js/external/jquery-3.4.1.min.js"  crossorigin="anonymous"></script>
<script src="<?php echo base_url().'assets/';?>js/external/popper.min.js" crossorigin="anonymous"></script>
<script src="<?php echo base_url().'assets/';?>js/external/bootstrap.min.js"  crossorigin="anonymous"></script>	


<script type="module" >

	let stop_publishing_button = document.getElementById("stop_publish_button"); 
	let start_publishing_button = document.getElementById("start_publish_button"); 

	stop_publishing_button.style.visibility = 'hidden';

	import {WebRTCAdaptor} from "<?php echo base_url().'assets/';?>js/webrtc_adaptor.js"

	let webSocketURL = "<?php echo $websocket_url; ?>/WebRTCApp/websocket"; 
	let mediaConstraints = {
		video: true,
		audio: true 
	}

	let pc_config = {
		'iceServers' : [ {
			'urls' : 'stun:stun1.l.google.com:19302'
		} ]
	};

	let sdpConstraints = {
		OfferToReceiveAudio : false,
		OfferToReceiveVideo : false
	}; 

	var webRTCAdaptor = new WebRTCAdaptor({
		websocket_url : webSocketURL,
		mediaConstraints : mediaConstraints,
		peerconnection_config : pc_config,
		sdp_constraints : sdpConstraints,
		localVideoId : "localVideo",
		callback : (info, obj) => {
			// if (info == "publish_started") {
			// 	alert("publish started"); 
			// } else if (info == "publish_finished") {
			// 	alert("publish finished"); 
			// } else {
			// 	console.log(info + " notification received");
			// }
		},
		callbackError : function(error, message) {
			alert("error callback: " + JSON.stringify(error)); 
		}
	});


	let streamId = "user-<?php echo $streaming_id; ?>-stream"; 

	function startPublishing() {

		start_publishing_button.style.visibility = 'hidden'	
		stop_publishing_button.style.visibility = 'visible';
		webRTCAdaptor.publish(streamId, "", "", "", "", "");
	}

	function stopPublishing() {

		stop_publishing_button.style.visibility = 'hidden';
		start_publishing_button.style.visibility = 'visible'

		webRTCAdaptor.stop(streamId)
	}

	start_publishing_button.addEventListener("click", startPublishing);
	stop_publishing_button.addEventListener("click", stopPublishing);

</script>

<!-- bid-on-property end -->
<?php include('footer.php');?>
