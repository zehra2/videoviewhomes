<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {
    public function __construct()
	{
		parent::__construct();
		$this->load->helper('form');
		$this->load->library('form_validation');
		$this->load->library('session');
		$this->load->helper('url');
		$this->output->enable_profiler(false);
		$this->load->database();
	}
	public function index()
	{
		$this->load->view('admin/login');
	}
	public function check_login()
	{
		
	    $this->form_validation->set_rules('username', 'Username', 'required');
		$this->form_validation->set_rules('password', 'Password', 'required');
		if ($this->form_validation->run())
		{
        	$email = trim($this->input->post('username'));
 	    	$password = trim($this->input->post('password')); 
			$this->db->where('email',$email);
			$this->db->where('admin_password',$password);
			$query = $this->db->get('tbl_admin');
		
			if($query->num_rows() > 0)
			{		
		
				
				$row = $query->row();
				
				$data = array(
					'adminid' => $row->adminID,
					'aname' => $row->admin_name,
					'aemail' => $row->email,
					'validated' => true
				);
				$this->session->set_userdata($data);
				
				$this->session->set_flashdata('info-message_success','You are login successfully.');
				redirect(base_url('admin'));
			}	
			else
    		{
    			$this->session->set_flashdata('info-message_error','Invalid Username or Password.');
	    		redirect(base_url('admin/login'));
				exit;
	    	}
	    	redirect(base_url('admin/login'));
		}
		else
    	{
    		$this->session->set_flashdata('info-message_error','Fill form properly.');
	    	redirect(base_url('admin/login'));
	    }
	}


	
}
