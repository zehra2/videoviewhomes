<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {
	
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
		$this->load->library('stripe_lib');
	}	
	function index() {
	    ///
	    /*$from_email  = "videoviewlive@videoviewhomesandrentals.com";
		$to_email    = 'vaibhav.ranyal@eplatformtech.com'; 
	    $email_body1 = "<html><body><p>Hi test,</p></body></html>";
		$this->load->library('email');
		$this->email->set_mailtype("html");

		$this->email->from($from_email, 'Home Rentals');
		$this->email->to($to_email);
		$this->email->subject('Home Rentals Subscription Mail');
		$this->email->message($email_body1);
        if($this->email->send()){
            //echo 'yes';
        }else{
            //echo 'no';
        }*/
        /*$message ="<table border='1' cellpadding='10'>
					<tr><td><b>Order Statuxs</b></td><td>Confirmed</td></tr>
					</table>";
         $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
        // More headers
        $headers .= 'From: <mails@videoviewhomesandrentals.com>' . "\r\n";
        $to = "vaibhav.ranyal@eplatformtech.com";
        $subject = "Confirm Orders Email";
        mail($to,$subject,$message,$headers);*/
        ///
		$data['investments'] = $this->home_model->getInvestmentRecords();
		$data['video_url'] = $this->home_model->getvideoRecords();
		$this->load->view('index',$data);
		
	}
	
	function aboutus(){
		
		$this->load->view('about_us');
	}

	function products($category_id = 0,$city_id = ''){
		$data= array();
		$userid = 0;
		$vendor  = $this->db->query("select name, is_live from vendors where id = '$userid' limit 1")->row();
		if($vendor){
	        $data['name'] = $vendor->name;
			$data['is_live'] = $vendor->is_live; 
		}else{
		    $data['name'] = '';
			$data['is_live'] = 0; 
		}
		
		//$data['product'] = $this->home_model->getProductService($userid,$category_id);
		//$data['oneproduct'] = $this->home_model->getOneProductService($userid,$category_id);
		$data['val'] = 1;
		$data['country'] = $this->home_model->getCountrys();
		
		/*$data['country_id'] = $this->input->post('country_id');
		$data['state_id'] = $this->input->post('state_id'); */
		if($this->input->post('city_id')){
		    $city_id = $this->input->post('city_id');
		}else{
		    $city_id = $city_id;
		}
		$data['city_id'] = $city_id;
		$data['country_id'] = '';
		$data['state_id'] = '';
		if($city_id){
	     $title = $this->db->query("select country.id as country_id, region.id as state_id from city LEFT JOIN region ON region.id = city.region_id LEFT JOIN country ON country.id = region.country_id  where city.id = '$city_id'  limit 1")->row();
		$data['country_id'] = $title->country_id;
		$data['state_id'] = $title->state_id;
		}
		$data['data_c'] = $this->home_model->getCategoryByCity($city_id);
		$data['data_s'] = $this->home_model->getServiceCategoryByCity($city_id);
		 
		$data['product'] = $this->home_model->getProductsByCategory($category_id,$city_id);
		$data['category_id'] = $category_id;
		
		
		$data['stream_base_url'] = "https://streaming.videoviewhomesandrentals.com:5443";

		
		$this->load->view('productservice',$data);
		
	}
	
	function services($category_id = 0,$city_id = '') {
		$data= array();
		$userid = 0;
		$data['name'] = '';
		//$data['product'] = $this->home_model->getService($userid);
		//$data['oneproduct'] = $this->home_model->getOneService($userid);
		$data['val'] = 2;
		$data['country'] = $this->home_model->getCountrys();
		
		/*$data['country_id'] = $this->input->post('country_id');
		$data['state_id'] = $this->input->post('state_id'); */
		if($this->input->post('city_id')){
		    $city_id = $this->input->post('city_id');
		}else{
		    $city_id = $city_id;
		}
		$data['city_id'] = $city_id;
		$data['country_id'] = '';
		$data['state_id'] = '';
		if($city_id){
	     $title = $this->db->query("select country.id as country_id, region.id as state_id from city LEFT JOIN region ON region.id = city.region_id LEFT JOIN country ON country.id = region.country_id  where city.id = '$city_id'  limit 1")->row();
		$data['country_id'] = $title->country_id;
		$data['state_id'] = $title->state_id;
		}
		$data['data_c'] = $this->home_model->getCategoryByCity();
	    $data['data_s'] = $this->home_model->getServiceCategoryByCity();
	    $data['product'] = $this->home_model->getServicesByCategory($category_id,$city_id);
	    $data['category_id'] = $category_id;
	    
		$data['stream_base_url'] = "https://streaming.videoviewhomesandrentals.com:5443";

	    
		$this->load->view('productservice',$data);
		
	}
	
	function bid(){
		
		$this->load->view('bid');
	}
	
	function price(){
		$data['plans'] = $this->home_model->getPlansRecords();
		$this->load->view('price',$data);
		//$this->load->view('price_bk');
	}
	
	function serviceform(){
		
		$this->load->view('service_form');
	}
	
	function listing(){
		
		$this->load->view('listing');
	}
	
	function uploadproduct(){
	    $userid = $this->session->userdata('userid');
	    if(!$userid){
	        redirect(base_url('login'));
	        exit;
	    }
	    ///
	    $data['country'] = $this->home_model->getCountrys();
		$data['categories'] = $this->home_model->getCategory();
		$this->load->view('uploadservice_product',$data);
		
	    /*$error = false;
        $plans_id = $this->db->query("select * from plans_subscribe where user_id = $userid  order by id desc")->row()->plans_type_id;
        if($plans_id){
           $totalProcuts =  $this->db->query("select count(*) as total from productservices where userid = $userid")->row()->total;
            $plans_type = $this->db->query("select * from plans_type where id = $plans_id")->row();
            if($plans_type){
                $max_product = ($plans_type->max_product)?$plans_type->max_product:0;
                $max_service = ($plans_type->max_service)?$plans_type->max_service:0;
                if($max_product > 0){
                    if($max_product > $totalProcuts){
                        
                    }else{
                        $error = true;
                        $msg = 'Please select or uprade plan for upload a product';
                    }
                }else{
                    $error = true;
                    $msg = 'Please select or uprade plan for upload a product';
                }
            }
        }else{
            $error = true;
            $msg = 'Please select or uprade plan for upload a product';
        }
        if($error){
            $this->session->set_flashdata('error',$msg);
            redirect(base_url('price'));
            exit;
        }*/
        ///
		
	}
	
	function uploadproduct_service(){
		$data = $this->Home_model->saveUploadProduct();
		 $id = $this->input->post('id');
		if($data){
		    if($id){
            	redirect(base_url('profile'));
		    }else{
	        	redirect(base_url('products'));
		    }
		
			exit;
		}else{
			$this->session->set_flashdata('error','Please enter Valid details');
			if($id){
			    redirect(base_url('edit_product/'.$id));
			}else{
			    redirect(base_url('uploadproduct'));
			}
			exit;
		}
	}
	
	function inputDevices(){
		$this->load->view('inputDevices');
	}
	
	function countries(){
		$data['data'] = $this->home_model->getCountrys();
		$this->load->view('countries',$data);
	}
	
	function statesget($id){
	    $title = $this->db->query("select country from country where id = '$id' limit 1")->row();
		$data['country'] = $title->country;
		$data['country_id'] = $id;
		$data['data'] = $this->home_model->getStateByCountryId($id);
		$this->load->view('states',$data);
	}
	
	function cityget($id, $state){
	    $title = $this->db->query("select country.country from region LEFT JOIN country ON country.id = region.country_id  where region.id = '$id'  limit 1")->row();
		$data['country'] = $title->country;
		$data['state'] = $state;
		$data['data'] = $this->home_model->getCityByStateId($id);
		$this->load->view('city',$data);
	}
	
	function cityproducts($id){
		$data['product'] = $this->home_model->getProductByCityId($id);
		$data['category'] = $this->home_model->getCategory();
		$this->load->view('cityproduct',$data);
	}
	
	function citycategory($id, $city, $val=1,$cat_id=''){
	     $title = $this->db->query("select country.country, region.region from city LEFT JOIN region ON region.id = city.region_id LEFT JOIN country ON country.id = region.country_id  where city.id = '$id'  limit 1")->row();
		$data['country'] = $title->country;
		$data['state'] = $title->region;
	    $data['city'] = $city;
	    $data['city_id'] = $id;
	    $data['data'] = $this->home_model->getCategoryByCity($id);
	    $data['data_s'] = $this->home_model->getServiceCategoryByCity($id);
	    
	    $data['val'] = $val;
	    $data['category_id'] = $cat_id;
	    if($val == 1){
	        $data['product'] = $this->home_model->getProductsByCategory($cat_id,$id);
	    }else{
	        $data['product'] = $this->home_model->getServicesByCategory($cat_id,$id);
	    }
		//echo '<pre>';print_r($data['category']); exit;
		$this->load->view('citycategory',$data);
	}
	
	function categoryvendor($id, $city_id){
	    $title = $this->db->query("select country.country, region.region, city.city from city LEFT JOIN region ON region.id = city.region_id LEFT JOIN country ON country.id = region.country_id  where city.id = '$city_id'  limit 1")->row();
		$data['country'] = $title->country;
		$data['state'] = $title->region;
	    $data['city'] = $title->city;
	    $data['category_id'] = $id;
	    $category = $this->db->query("select name from categories where id = '$id' limit 1")->row();
	    $data['category'] = $category->name;
	    $data['data'] = $this->home_model->getProductsByCategory($id,$city_id);
		$this->load->view('categoryvendor',$data);
	}
	
	///
	public function getStateByCountryIdAjax(){
	    $country_id = $this->input->post('country_id')?$this->input->post('country_id'):0;
	    if($country_id > 0){
			$data['results'] = $this->home_model->getStateByCountryId($country_id);
		    $return = array(
							'error'=>false,
							'data'=>$data['results']
						);
	    }else{
	        $return = array(
							'error'=>true,
							'msg'=>'Invalid Details!!!'
						);
	    }
	    echo json_encode($return);
	}
	
	public function getCityByStateIdAjax(){
	    $state_id = $this->input->post('state_id')?$this->input->post('state_id'):0;
	    if($state_id > 0){
			$data['results'] = $this->home_model->getCityByStateId($state_id);
		    $return = array(
							'error'=>false,
							'data'=>$data['results']
						);
	    }else{
	        $return = array(
							'error'=>true,
							'msg'=>'Invalid Details!!!'
						);
	    }
	    echo json_encode($return);
	}
	
	function getProfile(){
	    $data= array();
	    $userid = $this->session->userdata('userid');
	    if(!$userid){
	        redirect(base_url('login'));
	        exit;
	    }
		$data['product'] = $this->home_model->getProductService($userid);
		$data['oneproduct'] = $this->home_model->getOneProductService($userid);
		$data['services'] = $this->home_model->getService($userid);
		$data['appointments'] = $this->home_model->getAppointments($userid , 1);
		$data['contacts'] = $this->home_model->getContacts($userid);
		$data['row'] = $this->home_model->getVendorProfileById();
		$data['streaming_id'] = $userid;
		$data['stream_base_url'] = "https://streaming.videoviewhomesandrentals.com:5443";
		
	    $this->load->view('profile',$data);
	}
	
	function getServiceProfile(){
	    $data= array();
		$userid = $this->session->userdata('userid');
		 if(!$userid){
	        redirect(base_url('login'));
	        exit;
	    }
		$data['product'] = $this->home_model->getService($userid);
		$data['oneproduct'] = $this->home_model->getOneService($userid);
		$data['services'] = $this->home_model->getProductService($userid);
		$data['appointments'] = $this->home_model->getAppointments($userid, 2);
		$data['contacts'] = $this->home_model->getContacts($userid);
		$data['row'] = $this->home_model->getVendorProfileById();
	    $this->load->view('service-profile',$data);
	}
    
    function uploadservice(){
        $userid = $this->session->userdata('userid');
	    if(!$userid){
	        redirect(base_url('login'));
	        exit;
	    }
	    ///
	    $data['country'] = $this->home_model->getCountrys();
		$data['categories'] = $this->home_model->getCategory();
		$this->load->view('upload-service',$data);
		/*
	    $error = false;
        $plans_id = $this->db->query("select * from plans_subscribe where user_id = $userid order by id desc")->row()->plans_type_id;
        if($plans_id){
           $totalProcuts =  $this->db->query("select count(*) as total from uploadservices where userid = $userid")->row()->total;
            $plans_type = $this->db->query("select * from plans_type where id = $plans_id")->row();
            if($plans_type){
                $max_product = ($plans_type->max_product)?$plans_type->max_product:0;
                $max_service = ($plans_type->max_service)?$plans_type->max_service:0;
                if($max_service > 0){
                    if($max_service > $totalProcuts){
                        
                    }else{
                        $error = true;
                        $msg = 'Please select or uprade plan for upload a service';
                    }
                }else{
                    $error = true;
                    $msg = 'Please select or uprade plan for upload a service';
                }
            }
        }else{
            $error = true;
            $msg = 'Please select or uprade plan for upload a service';
        }
        if($error){
            $this->session->set_flashdata('error',$msg);
            redirect(base_url('price'));
            exit;
        }
        ///
		*/
	}
	
	function saveUploadService(){
		$data = $this->home_model->saveUploadService();
		if($data){
			redirect(base_url('service-profile'));
			exit;
		}else{
			$this->session->set_flashdata('error','Please enter Valid details');
			redirect(base_url('uploadservice'));
			exit;
		}
	}
	
	public function getSubcategoryByCategoryIdAjax(){
	    $category_id = $this->input->post('category_id')?$this->input->post('category_id'):0;
	    if($category_id > 0){
			$data['results'] = $this->home_model->getSubcategoryByCategoryIdAjax($category_id);
		    $return = array(
							'error'=>false,
							'data'=>$data['results']
						);
	    }else{
	        $return = array(
							'error'=>true,
							'msg'=>'Invalid Details!!!'
						);
	    }
	    echo json_encode($return);
	}
	///
	
	function editProfile(){
	    $userid = $this->session->userdata('userid');
	     if(!$userid){
	        redirect(base_url('login'));
	        exit;
	    }
		$data['row'] = $this->home_model->getVendorProfileById();
		$data['country'] = $this->home_model->getCountrys();
		$this->load->view('edit-profile',$data);
	}
	
	function formValidationEditProfile(){
	    $this->form_validation->set_rules('company', 'Company', 'required');
	    $this->form_validation->set_rules('name', 'Name', 'required');
		$this->form_validation->set_rules('last_name','Last Name','required');		
		//$this->form_validation->set_rules('email', 'Email', 'required|valid_email');
		$this->form_validation->set_rules('phone', 'Phone', 'required|numeric');
		$this->form_validation->set_rules('country_id', 'Country Id', 'required');
		$this->form_validation->set_rules('state_id', 'State Id', 'required');
		$this->form_validation->set_rules('city_id', 'City Id', 'required');
		//$this->form_validation->set_rules('password', 'Passord', 'required');
		//$this->form_validation->set_rules('user_type', 'User Type', 'required');
    		$result = array();
    		if ($this->form_validation->run()== FALSE)
    		{
    			$this->form_validation->set_error_delimiters('<div class="error"><i class="fa fa-exclamation-circle"></i> ', '</div>');
    			$result = array('error'=>true,'msg'=>'Please Enter Valid Details!!!');
    			
    		}else{
    		    /*$email = $this->input->post('email');
    		    $email_dupl = $this->login_model->check_email_duplicate($email);
    			if($email_dupl->num_rows() >0)
    			{
    				$result = array('error'=>true,'msg'=>'Email Already Exists!');
    				
    			}else{
    			    $result = array('error'=>false);
    			}*/
    			$result = array('error'=>false);
    		    
    		}
    		
    		echo json_encode($result);
	}
	
	public function saveEditProfile()
	{
			
		$company = trim($this->input->post('company'));
		$name = trim($this->input->post('name'));
		$last_name = trim($this->input->post('last_name'));
		//$email = trim($this->input->post('email'));
		$phone = trim($this->input->post('phone'));
		$country_id = trim($this->input->post('country_id'));
		$state_id = trim($this->input->post('state_id'));
		$city_id = trim($this->input->post('city_id'));
		$password = trim($this->input->post('password'));
		//$user_type = trim($this->input->post('user_type'));
		
	    
		/*$email_dupl = $this->login_model->check_email_duplicate($email);
		if($email_dupl->num_rows() >0)
		{
			$this->session->set_flashdata('errors', 'Email Already Exists!');
			exit;
		}*/
            $data = array(
                'company'=>$company,
				'name'=>$name,
                'last_name' => $last_name,
                'phone' => $phone,
                //'email' => $email,
                //'password' => $password,
                'country_id'=>$country_id,
                'state_id'=>$state_id,
                'city_id'=>$city_id,
				//'user_type'=>$user_type,
				//'status'=>'0'
            );
            if($password){
                $data['password'] = $password;
            }
			$reg_data =$this->home_model->saveEditPrfoile($this->security->xss_clean($data));
			if($reg_data){
			    
    			$this->session->set_flashdata('success', 'Profile Edit Successfully!!!');
    			redirect('edit-profile');
    			
		    }else{
		        $this->session->set_flashdata('success', 'Profile Edit Successfully!!!');
    			redirect('edit-profile');
		    }
	}
	
	public function products_detail($id){
	    $data = array();
	    $data['row'] = $this->home_model->getProductById($id);
	    $data['product'] = $this->home_model->getProductService();
	  
		$this->load->view('products_detail',$data);
	}
	public function Requestlivestream($id){
	    $data = array();
	    $data['row'] = $this->home_model->getServiceById($id);
	    $data['product'] = $this->home_model->getService();
		$this->load->view('Requestlivestream',$data);
	
	}
	public function services_detail($id){
	    $data = array();
	    $data['row'] = $this->home_model->getServiceById($id);
	    $data['product'] = $this->home_model->getService();
	    $this->load->view('services_detail',$data);
	}
	
	public function request_for_service($id){
	    $data = array();
	    $data['row'] = $this->home_model->getServiceById($id);
	    $data['id'] = $id;
	    $this->load->view('request_for_service',$data);
	}
    
    public function appointmentFormValidation(){
        $this->form_validation->set_rules('name', 'Name', 'required');
	    $this->form_validation->set_rules('lname', 'lname', 'required');
		$this->form_validation->set_rules('email','Email','required|valid_email');
		$this->form_validation->set_rules('detail','Detail','required');
		$this->form_validation->set_rules('date','Date','required');
		$result = array();
		if ($this->form_validation->run()== FALSE)
		{
			$this->form_validation->set_error_delimiters('<div class="error"><i class="fa fa-exclamation-circle"></i> ', '</div>');
			$result = array('error'=>true,'msg'=>'Please Enter Valid Details!!!');
			
		}else{
			$result = array('error'=>false);
		    
		}
		
		echo json_encode($result);
    }
    
    public function saveAppointments(){
		$id = $this->input->post('id');
		$vendor_id = $this->input->post('vendor_id');
		//$row = $this->db->query("select  email from vendors where id= $vendor_id")->row();
       // $senderemail=$row['email'];



	   $data= array();
	   $userid = 0;
	   $vendor  = $this->db->query("select vendors.email,uploadservices.service,uploadservices.price,uploadservices.company from vendors,uploadservices where vendors.id = '$vendor_id' and uploadservices.id='$id' limit 1;")->row();
	   if($vendor){
		   $senderemail = $vendor->email;
		   $service = $vendor->service;
		   $price = $vendor->price;
		   $company = $vendor->company;
		   
		  
	   }else{
		$this->session->set_flashdata('errors', $this->email->print_debugger());
		redirect(base_url('request-for-service/'.$id));

	   }











        
       
        $name = $this->input->post('name');
        $lname = $this->input->post('lname');
        $phone = $this->input->post('phone');
        $email = $this->input->post('email');
        $detail = $this->input->post('detail');
        $date = $this->input->post('date');
        $time = $this->input->post('time');
        $data = array(
            'type_id'=>2,
            'product_services_id'=>$id,
            'vendor_id'=>$vendor_id,
            'title'=>$name.' '.$lname,
            'phone'=>$phone,
            'email'=>$email,
            'description'=>$detail,
            'datetime'=>$date,
            'time'=>$time
            );
        $this->db->insert('appointments',$data);
////--------------------

$message ="<table border='1' cellpadding='10'>
					<tr><td><b>Name</b></td><td>".$data."</td></tr>
					
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
							<title>Requested Service : ".$service."
							</title>
						</head>
						<body>
							
							<h2>Your Appointment Details:</h2>
							
							<p>Name: ".$name.' '.$lname."</p>
							<p>Date: ".$date.' '.$time."</p>
							<p>Message: ".$detail."</p>
							<p>Contact ifo: ".$phone."</p>
							<p>Email by: ".$email."</p>
							<p>For the Service: ".$service."</p>
							<p>Price: ".$price.''.$company."</p>
						
							
							
							
						</body>
						</html>
						";
        			
        			$this->email->initialize($config);
        		    $this->email->from($config['smtp_user']);
        		    $this->email->to( $senderemail);
        		    $this->email->subject('New Appointment Alert ');
        		    $this->email->message($message);
        		    
        		    //sending email
        		    if($this->email->send()){
						//$this->session->set_flashdata('success_msg','Thanks, Appointments successfully saved!!!');
        		    	$this->session->set_flashdata('success_msg','Registration Success.');
						
						redirect(base_url('request-for-service/'.$id));
        		    }
        		    else{
        		    	$this->session->set_flashdata('errors', $this->email->print_debugger());
						redirect(base_url('request-for-service/'.$id));
///////////////////////-------------

					}



        
       // 
       // redirect(base_url('request-for-service/'.$id));
       //s exit;
    } 
    
    public function edit_product($id){
        $userid = $this->session->userdata('userid');
	    if(!$userid){
	        redirect(base_url('login'));
	        exit;
	    }
	    $row = $this->db->query("select * from productservices where id= $id and userid = $userid")->row();
	    if(!$row){
	         redirect(base_url('profile'));
	        exit;
	    }
		$data['country'] = $this->home_model->getCountrys();
		$data['categories'] = $this->home_model->getCategory();
		$data['row'] = $this->home_model->getProductById($id);
		$this->load->view('edit_uploadservice_product',$data);
    }
    
    public function deleteProductData($type = 1,$id=""){
        $row = $this->db->query("select * from productservices where id= $id")->row();
        if($type == 1){
            if($row->servicephoto){
                $data = array('servicephoto'=>'');
                $this->db->where('id',$id);
                $this->db->update('productservices',$data);
                $this->session->set_flashdata('msg','Photo Delete Successfully!!!');
            }else{
                $this->session->set_flashdata('error','You Have No Photo To Delete!!!');
            }
            
        }else{
           if($row->servicevideo){
                $data = array('servicevideo'=>'');
                $this->db->where('id',$id);
                $this->db->update('productservices',$data);
                $this->session->set_flashdata('msg','Video Delete Successfully!!!');
            }else{
                $this->session->set_flashdata('error','You Have Ndelete Video To Delete!!!');
            }
        }
        redirect(base_url('edit_product/'.$id));
        exit;
    }



	function delete_product_profile ($id){
		$row = $this->db->query("select * from productservices where id= $id")->row();
       
		
			if($row->status){
					$data = array('status'=>'0');
					$this->db->where('id',$id);
					$this->db->update('productservices',$data);
					$this->session->set_flashdata('pm','Record Deleted Successfully!!!');
            }else{
                $this->session->set_flashdata('em','You Have error    Delete!!!');
            }
		
		
       
		redirect(base_url('profile'));
        exit;
    }

	public function delete_product_profile_recover($id){
		
        
	
        
		$row = $this->db->query("select status from productservices where id= $id")->row();
       
		
		if($row->status){
				$data = array('status'=>'1');
				$this->db->where('id',$id);
				$this->db->update('productservices',$data);
				$this->session->set_flashdata('pm','Record Deleted Successfully!!!');
		}else{
			$this->session->set_flashdata('em','You Have error  1  Delete!!!');
		}
	
	
   
	redirect(base_url('profile'));
	exit;
}



		
		public function delete_service_profile($id){
		
        
	
        
			$row = $this->db->query("select * from uploadservices where id= $id")->row();
			
				if($row->status){
					$data = array('status'=>'0');
					$this->db->where('id',$id);
					$this->db->update('uploadservices',$data);
					$this->session->set_flashdata('pm','Record Deleted Successfully!!!');
				}else{
					$this->session->set_flashdata('em','You Have error!!!');
				}
				redirect(base_url('profile'));
			exit;
			
			
	 
			}
    
    
    function submitLikes(){
        $session_id =  $this->session->userdata('random_id');
        $type = $this->input->post('type');
        $product_id = $this->input->post('product_id');
	    if($type && $product_id){
	        $data = array(
	            'type'=>$type,
	            'product_id'=>$product_id,
	            'session_id'=>$session_id
	            );
            $row = $this->db->query("select * from tbl_likes where product_id = '$product_id' and session_id = '$session_id'")->row();
            if($row){
                $result = array('error'=>false,'msg'=>'You Aleredy Like This!!!');
            }else{
                $this->db->insert('tbl_likes',$data);
	            $result = array('error'=>false,'msg'=>'Like Successfully!!!');
            }
            
	    }else{
	        $result = array('error'=>true,'msg'=>'Something Went Wrong!!!');
	    }		
	    		
		echo json_encode($result);
	}
	
	function submitDislikes(){
        $session_id =  $this->session->userdata('random_id');
        $type = $this->input->post('type');
        $product_id = $this->input->post('product_id');
	    if($type && $product_id){
	        $row = $this->db->query("select * from tbl_likes where product_id = '$product_id' and session_id = '$session_id'")->row();
	        if($row){
	            $this->db->where('product_id',$product_id);
	            $this->db->where('session_id',$session_id);
	            $this->db->delete('tbl_likes');
	           
	        }
	         $result = array('error'=>false,'msg'=>'Dislike Successfully!!!');
	        
	    }else{
	        $result = array('error'=>true,'msg'=>'Something Went Wrong!!!');
	    }		
	    		
		echo json_encode($result);
	}
	
	function submitRates(){
        $session_id =  $this->session->userdata('random_id');
        $type = $this->input->post('type');
        $product_id = $this->input->post('product_id');
        $rates = $this->input->post('rates');
	    if($type && $product_id){
	        $data = array(
	            'type'=>$type,
	            'product_id'=>$product_id,
	            'session_id'=>$session_id,
	            'rates'=>$rates
	            );
            $row = $this->db->query("select * from tbl_ratings where product_id = '$product_id' and session_id = '$session_id'")->row();
            if($row){
                $this->db->where('id',$row->id);
                $this->db->update('tbl_ratings',$data);
                $result = array('error'=>false,'msg'=>'Rate Successfully!!!');
            }else{
                $this->db->insert('tbl_ratings',$data);
	            $result = array('error'=>false,'msg'=>'Rate Successfully!!!');
            }
            
	    }else{
	        $result = array('error'=>true,'msg'=>'Something Went Wrong!!!');
	    }		
	    		
		echo json_encode($result);
	}
	
	public function plans_detail($id){
	    $userid = $this->session->userdata('userid');
	     if(!$userid){
	        redirect(base_url('login'));
	        exit;
	    }
	    
	    $data['row'] = $this->db->query("select * from plans_type where id = $id")->row();
	    $amount = ($data['row']->amount)?$data['row']->amount:0;
	    
	    redirect('https://www.videoviewhomesvideography.com/plans-pricing');
	    exit;
	    $data['country'] = $this->home_model->getCountrys();
	   
	    $this->load->view('plans_detail',$data);
	}
	
	public function subscriptionsFormValidation(){
        $this->form_validation->set_rules('name', 'Name', 'required');
	    $this->form_validation->set_rules('lname', 'Last name', 'required');
		$this->form_validation->set_rules('email','Email','required|valid_email');
		$this->form_validation->set_rules('years','Years','required|numeric|greater_than[0]');
		$this->form_validation->set_rules('phone','Phone','required');
		$this->form_validation->set_rules('address','Address','required');
		$this->form_validation->set_rules('country_id','Country','required');
		$this->form_validation->set_rules('state_id','Region','required');
		$this->form_validation->set_rules('city_id','City','required');
		
		$result = array();
		if ($this->form_validation->run()== FALSE)
		{
			foreach ($_POST as $key => $val) {
					$errors[$key] = strip_tags(form_error($key));
				}
			$result = ['error' => true, 'errors' => $errors, 'validation'=>false];
			
		}else{
			$result = array('error'=>false);
		    
		}
		
		echo json_encode($result);
    }
    
    public function saveSubscriptions(){
        $plan_name = $this->input->post('plan_name');
         $plans_type_id = $this->input->post('plans_type_id');
	    $plans_type = $this->input->post('plans_type');
	    $plans_price = $this->input->post('plans_price');
	    $user_id = $this->session->userdata('userid');
	    $name = $this->input->post('name');
        $lname = $this->input->post('lname');
        $phone = $this->input->post('phone');
        $email = $this->input->post('email');
        $years = $this->input->post('years');
        $address = $this->input->post('address');
        $country_id = $this->input->post('country_id');
        $state_id = $this->input->post('state_id');
        $city_id = $this->input->post('city_id');
        $months = $years;
	    $invest_amt = 0;
	    $invest_months = 0;
	    $invest_date = date('Y-m-d H:i:s');
	    $invest_end_date = date('Y-m-d H:i:s');
	    $created_at = date('Y-m-d H:i:s');
	    if($plans_type == 1){
	        $invest_amt =  $months * $plans_price;
	        $invest_months = $months * 12;
	    }else{
            $invest_amt =  $months * $plans_price;
            $invest_months = $months;
	    }
	    $data = array(
        'plans_type_id'=>$plans_type_id,
        'plans_type'=>$plans_type,
        'plans_price'=>$plans_price,
        'user_id'=>$user_id,
        'invest_amt'=>$invest_amt,
        'invest_months'=>$invest_months,
        'invest_date'=>$invest_date,
        'invest_end_date'=>$invest_end_date,
        'created_at'=>$created_at
        );
         if($months){
            $this->db->insert('plans_subscribe',$data);
             $insert_id = $this->db->insert_id();
            if($insert_id){
                $data_save = array(
                    'plans_subscribe_id'=>$insert_id,
                    'name'=>$name,
                    'lname'=>$lname,
                    'phone'=>$phone,
                    'email'=>$email,
                    'address'=>$address,
                    'country_id'=>$country_id,
                    'state_id'=>$state_id,
                    'city_id'=>$city_id
                    );
              $this->db->insert('plans_subscribe_detail',$data_save);  
              ///
                $from_email  = "info@homerentlas.com";
    			$to_email    = $email;
    			$full_name = $name.' '.$lname;
    			$email_body1 = "<html><body><p>Hi ".$full_name.",</p>
    			<p>Your Plan - <b>".$plan_name."</b></p><p>Thanks for subscription. </p></body></html>";
    			
    		    $this->load->library('email');
    			$this->email->set_mailtype("html");
    
    			$this->email->from($from_email, 'Home Rentals');
    			$this->email->to($to_email);
    			$this->email->subject('Home Rentals Subscription Mail');
    			$this->email->message($email_body1);
                $this->email->send();
                $this->email->clear();
              ///
              ///
                $to_email    = "videoviewhomes@gmail.com";
                $full_name = $name.' '.$lname;
    			$email_body1 = "<html><body><p>Vendor -  <b>".$full_name."</b>,</p>
    			<p>Vendor Plan - <b>".$plan_name."</b></p></p>
    			<p>Price - <b>$".$invest_amt."</b></p><p>vendor subscribed this plan.</p></body></html>";
    			
    		    $this->load->library('email');
    			$this->email->set_mailtype("html");
    
    			$this->email->from($from_email, 'Home Rentals');
    			$this->email->to($to_email);
    			$this->email->subject('Home Rentals Subscription Mail');
    			$this->email->message($email_body1);
                $this->email->send();
              
              ///
            }
        }
        $this->session->set_flashdata('success','Congratulation, Your Plans Subscription Success!!!');
        redirect(base_url('plans_detail/'.$plans_type_id));
        exit;
       
    }
    
    function startVideo(){
        /*require_once APPPATH."third_party/VideoStream.php";
        $filePath = base_url().'public/productvideos/videoplayback.mp4';
        $stream = new VideoStream($filePath);
        $stream->start();*/
        
        $userid = $this->session->userdata('userid');
	   //  if(!$userid){
	   //     redirect(base_url('login'));
	   //     exit;
	   // }
		$data['streaming_id'] = $userid; 
		$data['websocket_url'] = "wss://streaming.videoviewhomesandrentals.com:5443";
        
        
        $this->load->view('start-video', $data);
        //echo 'test';
    }
    
    public function plans_detail_subscribe($id){
	    $userid = $this->session->userdata('userid');
	     if(!$userid){
	        redirect(base_url('login'));
	        exit;
	    }
	    
	    $data['row'] = $this->db->query("select * from plans_type where id = $id")->row();
	    $data['country'] = $this->home_model->getCountrys();
	   
	    $this->load->view('plans_detail_subscribe',$data);
	}
    
    
    // WEBHOOKS RECEIVER FOR STREAM STATUS
    
	public function updateLive()
	{
		$args = $this->input->post();
		$id = $args['id'];
		// explode id
		$id = explode('-', $id)[1];
        $state = $args['action'];

		log_message('error', '--------------------------STREAM STATUS CHANGED---------------------');
		log_message('error', $id . " STREAM STATUS ::::  " . $state);
	
		
		if ($state == 'liveStreamStarted') {

			$this->db->update('vendors', ['is_live' => 1], ['id' => $id]);
		} else if ($state == 'liveStreamEnded') {
			$this->db->update('vendors', ['is_live' => 0], ['id' => $id]);
		}
		echo "Update Successful"; 
	}
    



	function purchase($id){
		$data = array();
		
		// Get product data from the database
        $product = '12';
		
		// If payment form is submitted with token
		if($this->input->post('stripeToken')){
			// Retrieve stripe token, card and user info from the submitted form data
			$postData = $this->input->post();
			$postData['product'] = $product;
			
			// Make payment
			$paymentID = $this->payment($postData);
			
			// If payment successful
			if($paymentID){
				redirect('payment_status/'.$paymentID);
			}else{
				$apiError = !empty($this->stripe_lib->api_error)?' ('.$this->stripe_lib->api_error.')':'';
				$data['error_msg'] = 'Transaction has been failed!'.$apiError;
			}
		}
        
        // Pass product data to the details view
		$data['product'] = $product;
        $this->load->view('details', $data);
    }
	
	function payment($postData){
		
		// If post data is not empty
		if(!empty($postData)){
			// Retrieve stripe token, card and user info from the submitted form data
			$token  = $postData['stripeToken'];
			$name = $postData['name'];
			$email = $postData['email'];
			$card_number = $postData['card_number'];
			$card_number = preg_replace('/\s+/', '', $card_number);
			$card_exp_month = $postData['card_exp_month'];
			$card_exp_year = $postData['card_exp_year'];
			$card_cvc = $postData['card_cvc'];
			
			// Unique order ID
			$orderID = strtoupper(str_replace('.','',uniqid('', true)));
			
			// Add customer to stripe
			$customer = $this->stripe_lib->addCustomer($email, $token);
			
			if($customer){
				// Charge a credit or a debit card
				$charge = $this->stripe_lib->createCharge($customer->id, $postData['product']['name'], $postData['product']['price'], $orderID);
				
				if($charge){
					// Check whether the charge is successful
					if($charge['amount_refunded'] == 0 && empty($charge['failure_code']) && $charge['paid'] == 1 && $charge['captured'] == 1){
						// Transaction details 
						$transactionID = $charge['balance_transaction'];
						$paidAmount = $charge['amount'];
						$paidAmount = ($paidAmount/100);
						$paidCurrency = $charge['currency'];
						$payment_status = $charge['status'];
						
						
						// Insert tansaction data into the database
						$orderData = array(
							'product_id' => $postData['product']['id'],
							'buyer_name' => $name,
							'buyer_email' => $email,
							'card_number' => $card_number,
							'card_exp_month' => $card_exp_month,
							'card_exp_year' => $card_exp_year,
							'paid_amount' => $paidAmount,
							'paid_amount_currency' => $paidCurrency,
							'txn_id' => $transactionID,
							'payment_status' => $payment_status
						);
						$orderID = $this->product->insertOrder($orderData);
						
						// If the order is successful
						if($payment_status == 'succeeded'){
							return $orderID;
						}
					}
				}
			}
		}
		return false;
    }
	
	function payment_status($id){
		$data = array();
		
		// Get order data from the database
        $order = $this->product->getOrder($id);
		
        // Pass order data to the view
		$data['order'] = $order;
        $this->load->view('products/payment-status', $data);
    }
















}
?>
