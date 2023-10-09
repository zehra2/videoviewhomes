<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


class Login extends CI_Controller {
	
	public function __Construct()
	{
		ob_start();
	   	parent::__Construct();
		$this->load->library('session');
		$this->load->helper('url');
		$this->load->library("pagination");
		$this->load->helper(array('form'));
		$this->output->enable_profiler(false);
		$this->load->model('home_model');
		$this->load->model('login_model');
	}	
	function index() {
		
		$this->load->view('login');
		
	}
	
	function thanks() {
		
		$this->load->view('thanks');
		
	}
	
	function signup() {
		$data['country'] = $this->home_model->getCountrys();
		$this->load->view('signup',$data);
		
	}
	
	public function signindb()
	{
		
	    $this->form_validation->set_rules('username', 'Username', 'required');
		$this->form_validation->set_rules('password', 'Password', 'required');
		if ($this->form_validation->run())
		{
        	$email = trim($this->input->post('username'));
 	    	$password = trim($this->input->post('password')); 
			
			$check_data = $this->login_model->check_email_password($email, $password);
			if($check_data->num_rows() >0)
			{
					$fetch_user_data=$check_data->row_array();
					$rsdata = array(
					'userName'=>$fetch_user_data['name'].$fetch_user_data['last_name'],
					'useremail'=>$fetch_user_data['email'],
					'userid'=>$fetch_user_data['id']);			
					$this->session->set_userdata($rsdata);	
					//redirect('');
					redirect(base_url('profile'));
			}
			else
			{
					$this->session->set_flashdata('errors', 'Invalid Email or password.');
					redirect('login');
			}
			
		}
		else
		{
					$this->session->set_flashdata('errors', 'Invalid Email or password.');
					redirect('login');
		}
	}
	
	public function signupdb()
	{
			
		$name = trim($this->input->post('name'));
		$last_name = trim($this->input->post('last_name'));
		$email = trim($this->input->post('email'));
		$phone = trim($this->input->post('phone'));
		$country_id = trim($this->input->post('country_id'));
		$state_id = trim($this->input->post('state_id'));
		$city_id = trim($this->input->post('city_id'));
		$password = trim($this->input->post('password'));
		$user_type = trim($this->input->post('user_type'));
		
	    $this->form_validation->set_rules('name', 'Name', 'required');
		$this->form_validation->set_rules('last_name','Last Name','required');		
		$this->form_validation->set_rules('email', 'Email', 'required|valid_email');
		$this->form_validation->set_rules('phone', 'Phone', 'required|numeric');
		$this->form_validation->set_rules('country_id', 'Country Id', 'required');
		$this->form_validation->set_rules('state_id', 'State Id', 'required');
		$this->form_validation->set_rules('city_id', 'City Id', 'required');
		$this->form_validation->set_rules('password', 'Passord', 'required');
		$this->form_validation->set_rules('user_type', 'User Type', 'required');
		if ($this->form_validation->run()== FALSE)
		{
			$this->form_validation->set_error_delimiters('<div class="error"><i class="fa fa-exclamation-circle"></i> ', '</div>');
			$this->session->set_flashdata('errors', validation_errors());
			redirect('signup');
		}
		else
		{
			/*$email_dupl = $this->login_model->check_email_duplicate($email);
			if($email_dupl->num_rows() >0)
			{
				$this->session->set_flashdata('errors', 'Email Already Exists!');
				exit;
			}*/
			
			    //generate simple random code
    			$set = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    			$code = substr(str_shuffle($set), 0, 12);
			
                $data = array(
					'name'=>$name,
                    'last_name' => $last_name,
                    'phone' => $phone,
                    'email' => $email,
                    'password' => $password,
                    'country_id'=>$country_id,
                    'state_id'=>$state_id,
                    'city_id'=>$city_id,
					'user_type'=>$user_type,
					'status'=>'0',
					'code' => $code
                );
				$reg_data =$this->login_model->add_registration($this->security->xss_clean($data));
				
				if($reg_data){
				    $country_name = $this->db->query("select country from country where id = $country_id")->row()->country;
        			$state_name = $this->db->query("select region from region where id = $state_id")->row()->region;
        			$city_name = $this->db->query("select city from city where id = $city_id")->row()->city;
        			$user_type_name = ($user_type == 1)?'Product Provider':'Service Provider';
        			
				    //$from_email  = "info@homerentlas.com";
        			/*$from_email = "mails@videoviewhomesandrentals.com";
        			$to_email    = $email;
        			$url_user = base_url('verify-email/').urlencode(base64_encode($reg_data));
        			$email_body1 = "<html><body><p>Hi ".$username.",</p><p>Thanks so much for register with us. </p><p>Verify your email <a href='".$url_user."'>Click Here</a></p></body></html>";
        			
				    $this->load->library('email');
        			$this->email->set_mailtype("html");
        
        			$this->email->from($from_email, 'Home Rentals');
        			$this->email->to($to_email);
        			$this->email->subject('Home Rentals Verification Mail');
        			$this->email->message($email_body1);
        			$this->email->send();
        			$this->email->clear();
        			
        			/// 
        			
        			$email_body2 ="<table border='1' cellpadding='10'>
					<tr><td><b>Name</b></td><td>".$name."</td></tr>
					<tr><td><b>Last Name</b></td><td>".$last_name."</td></tr>
					<tr><td><b>Email</b></td><td>".$email."</td></tr>
					<tr><td><b>Number</b></td><td>".$phone."</td></tr>
					<tr><td><b>User Type</b></td><td>".$user_type_name."</td></tr>
					<tr><td><b>Address</b></td><td>".$city_name.",".$state_name.",".$country_name."</td></tr>
					</table>";
					
					$to_email2 = 'videoviewlive@videoviewhomesandrentals.com';
					
        			$this->email->from($from_email, 'Home Rentals');
        			$this->email->to($to_email2);
        			$this->email->subject('Home Rentals');
        			$this->email->message($email_body2);
        			$this->email->send();*/
        			$message ="<table border='1' cellpadding='10'>
					<tr><td><b>Name</b></td><td>".$name."</td></tr>
					<tr><td><b>Last Name</b></td><td>".$last_name."</td></tr>
					<tr><td><b>Email</b></td><td>".$email."</td></tr>
					<tr><td><b>Number</b></td><td>".$phone."</td></tr>
					<tr><td><b>User Type</b></td><td>".$user_type_name."</td></tr>
					<tr><td><b>Address</b></td><td>".$city_name.",".$state_name.",".$country_name."</td></tr>
					</table>";
                     $headers = "MIME-Version: 1.0" . "\r\n";
                    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
                
                    // More headers
                    $headers .= 'From: <mails@videoviewhomesandrentals.com>' . "\r\n";
                    $to = "videoviewlive@videoviewhomesandrentals.com";
                    $subject = "Confirm Orders Email";
                    mail($to,$subject,$message,$headers);
        			///
        			/*if ($this->email->send()) 
        			{
            			$this->session->set_flashdata('success', 'Thank you, verfication mail send your email Id');
            			redirect('signup');
        			}else{
        			    $this->session->set_flashdata('errors', 'Email not send your email Id. Please Register with valid Email ID!');
            			redirect('signup');
        			}*/
        			/*$this->session->set_flashdata('success', 'Registration Success, we have sent Activation Link in your Email');
            			redirect('signup');*/
            			
            		$this->load->library('email');
            		
            		$config = [
            		    'protocol' => 'smtp',
            		    'smtp_host' => 'ssl://mail.videoviewhomesandrentals.com',
            		    'smtp_port' => 465,
            		    'smtp_user' => 'videoals@videoviewhomesandrentals.com',
            		    'smtp_pass' => '$Gadyssheron1183',
            		    'mailtype' => 'html',
            		    'newline' => "\r\n",
            		    'wordwrap' => TRUE
            		];
            		
            		$message = 	"
						<html>
						<head>
							<title>Verification Code</title>
						</head>
						<body>
							<h2>Thank you for Registering.</h2>
							<p>Your Account:</p>
							<p>Email: ".$email."</p>
							<p>Please click the link below to activate your account.</p>
							<h4><a href='".base_url()."login/activate/".$reg_data."/".$code."'>Activate My Account</a></h4>
						</body>
						</html>
						";
        			
        			$this->email->initialize($config);
        		    $this->email->from($config['smtp_user']);
        		    $this->email->to($email);
        		    $this->email->subject('Signup Verification Email');
        		    $this->email->message($message);
        		    
        		    //sending email
        		    if($this->email->send()){
        		    	$this->session->set_flashdata('success','Registration Success. Activation code sent to email');
        		    	redirect('signup');
        		    }
        		    else{
        		    	$this->session->set_flashdata('errors', $this->email->print_debugger());
        		    	redirect('signup');
        		    }
        			
				}
				
				
		}
	}
	
	/*public function verify_email($id_val){
	    $id = base64_decode(urldecode($id_val));
	    if($id){
	        $data = array(
	                    'status'=>1,
	                    'email_verified_at'=>date('Y-m-d H:i:s')
	                    );
	        $this->db->where('id',$id);
	        $this->db->update('vendors',$data);
	        $this->session->set_flashdata('success', 'Thank You, your email verification is complete. Now you can Login');
	        redirect('thanks');
	        exit;
	    }else{
	        $this->session->set_flashdata('errors', 'Somthing went wrong!!!');
	        redirect('thanks');
	        exit;
	    }
	}*/
	public function activate()
	{
	    $id =  $this->uri->segment(3);
		$code = $this->uri->segment(4);

		//fetch vendor details
		$vendor = $this->login_model->getVendor($id);

		//if code matches
		if($vendor['code'] == $code){
			//update user active status
			$data['status'] = 1;
			$data['email_verified_at'] = date('Y-m-d H:i:s'); 
			$query = $this->login_model->activate($data, $id);

			if($query){
				$this->session->set_flashdata('success', 'Thank You, your email verification is complete. Now you can Login');
			}
			else{
				$this->session->set_flashdata('errors', 'Something went wrong in activating account');
			}
		}
		else{
			$this->session->set_flashdata('errors', 'Cannot activate account. Code didnt match');
		}

		redirect('login');
	}
	
	
	
	function formValidation(){
		   $this->form_validation->set_rules('name', 'Name', 'required');
		$this->form_validation->set_rules('last_name','Last Name','required');		
		$this->form_validation->set_rules('email', 'Email', 'required|valid_email');
		$this->form_validation->set_rules('phone', 'Phone', 'required|numeric');
		$this->form_validation->set_rules('country_id', 'Country Id', 'required');
		$this->form_validation->set_rules('state_id', 'State Id', 'required');
		$this->form_validation->set_rules('city_id', 'City Id', 'required');
		$this->form_validation->set_rules('password', 'Passord', 'required');
		$this->form_validation->set_rules('user_type', 'User Type', 'required');
    		$result = array();
    		if ($this->form_validation->run()== FALSE)
    		{
    			$this->form_validation->set_error_delimiters('<div class="error"><i class="fa fa-exclamation-circle"></i> ', '</div>');
    			$result = array('error'=>true,'msg'=>'Please Enter Valid Details!!!');
    			
    		}else{
    		    $email = $this->input->post('email');
    		    $email_dupl = $this->login_model->check_email_duplicate($email);
    			if($email_dupl->num_rows() >0)
    			{
    				$result = array('error'=>true,'msg'=>'Email Already Exists!');
    				
    			}else{
    			    $result = array('error'=>false);
    			}
    		    
    		}
    		
    		echo json_encode($result);
		}

}
?>
