<?php
if (! defined('BASEPATH')) exit('No direct script access allowed');

class AD_Controller extends MY_Controller
{
    function __construct ()
    {
        parent::__construct();
        
        $this->load->helper('url');
    }
	
	public function check_isvalidated(){
        if(!$this->session->userdata('validated')){
          redirect('admin/login');
        }
				
    }
	
}
