<?php
if (! defined('BASEPATH')) exit('No direct script access allowed');

class WEB_Controller extends MY_Controller
{
    function __construct ()
    {
        parent::__construct();
		ob_start();
    }
    
	function website_header($seo_data = ''){
		//$data['seo_data'] = $seo_data;	
		$this->load->view('common/header', $seo_data);
	}

	function website_right($additional_content = ''){
		$data = array();
		$this->load->view('common/right', $data);
	}

	function website_footer(){
		/*$data = array();
		$data['row'] = $this->home_model->getSponsers();*/
		
		//$this->load->view('common/footer', $data);
		$this->load->view('common/footer');
		
	}
	
	function validate_user(){
		if(!$this->session->userdata('userid')){
          redirect(base_url('participation/login'));
		  exit;
        }
	}
}
