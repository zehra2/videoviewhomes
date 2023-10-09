<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {
	
	public function __Construct()
	{
	   	parent::__Construct();
		$this->load->library('session');
		$this->load->helper('url');
		$this->output->enable_profiler(false);
		$this->load->model('admin/home_model');
		if(!$this->session->userdata('adminid')){
          redirect(base_url('admin/login'));
		  exit;
        }
	}
		
	public function index()
	{
		$this->load->view('admin/dashboard');
	}
	
	public function investment()
	{
	    $data['title']="Investment";
		
		$data['records']=$this->home_model->getInvestmentRecords();
		$this->load->view('admin/investment',$data);
		
	}
	
	public function investment_detail($id = 0)
	{
	    $data['title']="Investment";
		
		$data['row']=$this->home_model->getInvestmentSingleRecords($id);
		$this->load->view('admin/investment-detail',$data);
		
	}
	
	public function saveInvestment(){
	        $id = $this->input->post('id');
	        $this->form_validation->set_rules('name', 'Title', 'required');
    		$this->form_validation->set_rules('youtube_link','Youtube URL','required');
    		$result = array();
    		if ($this->form_validation->run()== FALSE)
    		{
    			$this->form_validation->set_error_delimiters('<div class="error"><i class="fa fa-exclamation-circle"></i> ', '</div>');
    			$this->session->set_flashdata('info-message-error','Please Enter All Valid Details!!!');
    			if($id){
    			    redirect(base_url('admin/home/investment_detail/'.$id));
    			    exit;
    			}else{
    			     redirect(base_url('admin/home/investment_detail'));
    			     exit;
    			}
    			
    			
    		}else{
    		   $id = $this->input->post('id');
    		   $name = $this->input->post('name');
    		   $youtube_link = $this->input->post('youtube_link');
    		   $status = 1;
    		   
    		   $data = array(
    		       'name'=>$name,
    		       'youtube_link'=>$youtube_link,
    		       'status'=>$status,
    		       );
		       if($id){
    		       $this->db->where('id',$id);
    		       $this->db->update('investment_projects',$data);
    		       $this->session->set_flashdata('info-message-success','Investment Projects Update Successfully!!');
    		   }else{
    		       $this->db->insert('investment_projects',$data);
    		       $this->session->set_flashdata('info-message-success','Investment Projects Add Successfully!!');
    		   }
    		   
    		   redirect(base_url('admin/home/investment'));
			     exit;
    		}
	}
	
	public function investment_delete($id = 0)
	{
	    $data = array(
	        'status'=>0
	        );
	   $this->db->where('id',$id);
       $this->db->update('investment_projects',$data);
       $this->session->set_flashdata('info-message-success','Investment Projects Delete Successfully!!');
		redirect(base_url('admin/home/investment'));
		exit;
	}
	
	///
	public function category()
	{
	    $data['title']="Category";
		
		$data['records']=$this->home_model->getCategoryRecords();
		$this->load->view('admin/category',$data);
		
	}
	
	public function category_detail($id = 0)
	{
	    $data['title']="Category";
		
		$data['row']=$this->home_model->getCategorySingleRecords($id);
		$this->load->view('admin/category-detail',$data);
		
	}
	
	public function saveCategory(){
	        $id = $this->input->post('id');
	        $this->form_validation->set_rules('name', 'Title', 'required');
    		$result = array();
    		if ($this->form_validation->run()== FALSE)
    		{
    			$this->form_validation->set_error_delimiters('<div class="error"><i class="fa fa-exclamation-circle"></i> ', '</div>');
    			$this->session->set_flashdata('info-message-error','Please Enter All Valid Details!!!');
    			if($id){
    			    redirect(base_url('admin/home/category_detail/'.$id));
    			    exit;
    			}else{
    			     redirect(base_url('admin/home/category_detail'));
    			     exit;
    			}
    			
    			
    		}else{
    		   $id = $this->input->post('id');
    		   $name = $this->input->post('name');
    		   $status = 1;
    		   
    		   $data = array(
    		       'name'=>$name,
    		       'is_active'=>$status,
    		       'createdby_id'=>$this->session->userdata('adminid')
    		       );
		       if($id){
    		       $this->db->where('id',$id);
    		       $this->db->update('categories',$data);
    		       $this->session->set_flashdata('info-message-success','Category Update Successfully!!');
    		   }else{
    		       $this->db->insert('categories',$data);
    		       $this->session->set_flashdata('info-message-success','Category Add Successfully!!');
    		   }
    		   
    		   redirect(base_url('admin/home/category'));
			     exit;
    		}
	}
	
	public function category_delete($id = 0)
	{
	    $data = array(
	        'is_active'=>0
	        );
	   $this->db->where('id',$id);
       $this->db->update('categories',$data);
       $this->session->set_flashdata('info-message-success','Category Delete Successfully!!');
		redirect(base_url('admin/home/category'));
		exit;
	}
	
    ///
    public function subcategory()
	{
	    $data['title']="Sub Category";
		
		$data['records']=$this->home_model->getSubCategoryRecords();
		$this->load->view('admin/subcategory',$data);
		
	}
	
	public function subcategory_detail($id = 0)
	{
	    $data['title']="Sub Category";
		
		$data['category']=$this->home_model->getCategoryRecords();
		$data['row']=$this->home_model->getSubCategorySingleRecords($id);
		$this->load->view('admin/subcategory-detail',$data);
		
	}
	
	public function saveSubCategory(){
	        $id = $this->input->post('id');
	        $this->form_validation->set_rules('name', 'Title', 'required');
	        $this->form_validation->set_rules('parent_id', 'Category', 'required');
    		$result = array();
    		if ($this->form_validation->run()== FALSE)
    		{
    			$this->form_validation->set_error_delimiters('<div class="error"><i class="fa fa-exclamation-circle"></i> ', '</div>');
    			$this->session->set_flashdata('info-message-error','Please Enter All Valid Details!!!');
    			if($id){
    			    redirect(base_url('admin/home/subcategory_detail/'.$id));
    			    exit;
    			}else{
    			     redirect(base_url('admin/home/subcategory_detail'));
    			     exit;
    			}
    			
    			
    		}else{
    		   $id = $this->input->post('id');
    		   $name = $this->input->post('name');
    		   $parent_id = $this->input->post('parent_id');
    		   $status = 1;
    		   
    		   $data = array(
    		       'name'=>$name,
    		       'parent_id'=>$parent_id,
    		       'is_active'=>$status,
    		       'createdby_id'=>$this->session->userdata('adminid')
    		       );
		       if($id){
    		       $this->db->where('id',$id);
    		       $this->db->update('sub_categories',$data);
    		       $this->session->set_flashdata('info-message-success','Sub Category Update Successfully!!');
    		   }else{
    		       $this->db->insert('sub_categories',$data);
    		       $this->session->set_flashdata('info-message-success','Sub Category Add Successfully!!');
    		   }
    		   
    		   redirect(base_url('admin/home/subcategory'));
			     exit;
    		}
	}
	
	public function subcategory_delete($id = 0)
	{
	    $data = array(
	        'is_active'=>0
	        );
	   $this->db->where('id',$id);
       $this->db->update('sub_categories',$data);
       $this->session->set_flashdata('info-message-success','Sub Category Delete Successfully!!');
		redirect(base_url('admin/home/subcategory'));
		exit;
	}
	///
	public function vendors()
	{
	    $data['title']="Vendors";
		
		$data['records']=$this->home_model->getVendorsRecords();
		$this->load->view('admin/vendors',$data);
		
	}
	public function vendors_delete($id = 0)
	{
	    $data = array(
	        'status'=>0
	        );
	   $this->db->where('id',$id);
       $this->db->update('vendors',$data);
       ///
       $this->db->where('userid',$id);
       $this->db->update('uploadservices',$data);
       
       $this->db->where('userid',$id);
       $this->db->update('productservices',$data);
       ///
       $this->session->set_flashdata('info-message-success','Vendors Delete Successfully!!');
		redirect(base_url('admin/home/vendors'));
		exit;
	}
	
	public function users()
	{
	    $data['title']="Users";
		
		$data['records']=$this->home_model->getUsersRecords();
		$this->load->view('admin/users',$data);
		
	}
	
	public function users_delete($id = 0)
	{
	    $data = array(
	        'status'=>0
	        );
	   $this->db->where('id',$id);
       $this->db->update('users',$data);
       $this->session->set_flashdata('info-message-success','Users Delete Successfully!!');
		redirect(base_url('admin/home/users'));
		exit;
	}
	///
	public function plans()
	{
	    $data['title']="Plans";
		
		$data['records']=$this->home_model->getPlansRecords();
		$this->load->view('admin/plans',$data);
		
	}
	
	public function plans_detail($id = 0)
	{
	    $data['title']="Plans";
		
		$data['row']=$this->home_model->getPlansSingleRecords($id);
		$this->load->view('admin/plans-detail',$data);
		
	}
	
	public function savePlans(){
	        $id = $this->input->post('id');
	        $this->form_validation->set_rules('name', 'Title', 'required');
	        $this->form_validation->set_rules('type', 'Type', 'required');
	        $this->form_validation->set_rules('amount', 'Amount', 'required');
    		$result = array();
    		if ($this->form_validation->run()== FALSE)
    		{
    			$this->form_validation->set_error_delimiters('<div class="error"><i class="fa fa-exclamation-circle"></i> ', '</div>');
    			$this->session->set_flashdata('info-message-error','Please Enter All Valid Details!!!');
    			if($id){
    			    redirect(base_url('admin/home/plans_detail/'.$id));
    			    exit;
    			}else{
    			     redirect(base_url('admin/home/plans_detail'));
    			     exit;
    			}
    			
    			
    		}else{
    		   $id = $this->input->post('id');
    		   $name = $this->input->post('name');
    		   $type = $this->input->post('type');
    		   $title = $this->input->post('title');
    		   $text = $this->input->post('text');
    		   $amount = $this->input->post('amount');
		        $max_service = $this->input->post('max_service');
		        $max_product = $this->input->post('max_product');
    		   $status = 1;
    		   
    		   $data = array(
    		       'type'=>$type,
    		       'name'=>$name,
    		       'months'=>($type == 1)?12:1,
    		       'title'=>$title,
    		       'text'=>$text,
    		       'amount'=>$amount,
    		       'status'=>$status,
    		       'max_product'=>$max_product,
    		       'max_service'=>$max_service
    		       );
		       if($id){
    		       $this->db->where('id',$id);
    		       $this->db->update('plans_type',$data);
    		       $this->session->set_flashdata('info-message-success','Plans Update Successfully!!');
    		   }else{
    		       $this->db->insert('plans_type',$data);
    		       $this->session->set_flashdata('info-message-success','Plans Add Successfully!!');
    		   }
    		   
    		   redirect(base_url('admin/home/plans'));
			     exit;
    		}
	}
	
	public function plans_delete($id = 0)
	{
	    $data = array(
	        'status'=>0
	        );
	   $this->db->where('id',$id);
       $this->db->update('plans_type',$data);
       $this->session->set_flashdata('info-message-success','Plans Delete Successfully!!');
		redirect(base_url('admin/home/plans'));
		exit;
	}
	
	///
	public function plans_subscribe()
	{
	    $data['title']="Plans";
		
		$data['records']=$this->home_model->getPlansSubscibeRecords();
		$this->load->view('admin/plans-subscribe',$data);
		
	}
	///
	
	public function change_password()
	{
	    $data['title']="Change Password";
		$data['description']="Human Rights";
		$data['keyword']="Human Rights";
		
		$this->load->view('admin/change-password',$data);
		
	}
	
	public function saveChangePassword(){
	    $this->form_validation->set_rules('password', 'Password', 'required');
		$this->form_validation->set_rules('confirm_password', 'Confirm Password', 'required');
		if($this->form_validation->run())
		{
 	    	$password = trim($this->input->post('password'));
 	    	$confirm_password = trim($this->input->post('confirm_password'));
 	    	if($confirm_password != $password){
 	    	    $this->session->set_flashdata('info-message-error', 'Password and confirm password is different');
				redirect(base_url().'admin/home/change_password');
				exit;
 	    	}
    		$data=array(
    		    'admin_password' => $password
			);
			$update=$this->home_model->update_change_password($data);

			if(isset($update))
			{
				$this->session->set_flashdata('info-message-success', 'Change Password has been updated');
				redirect(base_url().'admin/home/change_password');
			}
			else
			{
				$this->session->set_flashdata('info-message-error', 'Something went wrong');
				redirect(base_url().'admin/home/change_password');
			}
		}
		else
    	{ 
    		$this->session->set_flashdata('info-message-error', 'Fill form all properly');
    		redirect(base_url().'admin/home/change_password');
	    }
	    
	}
	
	///
	public function heading()
	{
	    $data['title']="About";
		
		$data['select']=$this->home_model->getHeading();
		$this->load->view('admin/heading',$data);
		
	}
	public function headinginfo()
	{
		
		$this->form_validation->set_rules('url', 'Url', 'required');
		if($this->form_validation->run())
		{
 	    	$url = trim($this->input->post('url')); 
			
 	    	
    		$data=array(
				'url' => $url,
				'date' =>Date('Y-m-d'),
				'status' => '1'
			);
        	$update=$this->home_model->update_heading($data);
            $this->session->set_flashdata('info-message-success', 'Header Video has been updated');
				redirect(base_url().'admin/home/heading');
			
		}
		else
    	{ 
    		$this->session->set_flashdata('info-message-error', 'Fill form properly');
    		redirect(base_url().'admin/home/heading');
	    }
	    

	}
	///
	public function permissions()
	{
	    $data['title']="Plans";
		
		$data['records']=$this->home_model->getPermissionsRecords();
		$this->load->view('admin/permissions',$data);
		
	}
	
	public function permissions_detail($id = 0)
	{
	    $data['title']="Plans";
		
		$data['row']=$this->home_model->getPermissionsSingleRecords($id);
		$this->load->view('admin/permissions-detail',$data);
		
	}
	
	public function savePermissions(){
	        $id = $this->input->post('id');
	        $this->form_validation->set_rules('name', 'Title', 'required');
	      	$result = array();
    		if ($this->form_validation->run()== FALSE)
    		{
    			$this->form_validation->set_error_delimiters('<div class="error"><i class="fa fa-exclamation-circle"></i> ', '</div>');
    			$this->session->set_flashdata('info-message-error','Please Enter All Valid Details!!!');
    			if($id){
    			    redirect(base_url('admin/home/permissions_detail/'.$id));
    			    exit;
    			}else{
    			     redirect(base_url('admin/home/permissions_detail'));
    			     exit;
    			}
    			
    			
    		}else{
    		   $id = $this->input->post('id');
    		   $name = $this->input->post('name');
    		   $status = 1;
    		   
    		   $data = array(
    		       'name'=>$name,
    		       );
		       if($id){
    		       $this->db->where('id',$id);
    		       $this->db->update('tbl_permissions',$data);
    		       $this->session->set_flashdata('info-message-success','Permissions Update Successfully!!');
    		   }else{
    		       $this->db->insert('tbl_permissions',$data);
    		       $this->session->set_flashdata('info-message-success','Permissions Add Successfully!!');
    		   }
    		   
    		   redirect(base_url('admin/home/permissions'));
			     exit;
    		}
	}
	
	public function permissions_delete($id = 0)
	{
	    $data = array(
	        'status'=>0
	        );
	   $this->db->where('id',$id);
       $this->db->update('tbl_permissions',$data);
       $this->session->set_flashdata('info-message-success','Permissions Delete Successfully!!');
		redirect(base_url('admin/home/permissions'));
		exit;
	}
	
}
