<?php
class Home_model extends CI_Model
{
    
public function __construct()
{
	$this->load->database();
	
}

    function getInvestmentRecords(){
    
        $this->db->select('*');
         $this->db->where('status',1);
        $this->db->order_by('id','desc');
        $query = $this->db->get('investment_projects');
    	if ($query->num_rows() > 0) {
    		foreach ($query->result() as $row) {
    			$data[] = $row;
    		}
    		return $data;
    	}
    	return false;
    }
	function getvideoRecords(){
    
        $this->db->select('youtube_link');
         $this->db->where('status',2);
    
        $query = $this->db->get('investment_projects');
    	if ($query->num_rows() > 0) {
    		foreach ($query->result() as $row) {
    			$data[] = $row;
    		}
    		return $data;
    	}
    	return false;
    }
    
	function getProductService($userid = 0, $category_id = 0){
	    $session_id = $this->session->userdata('random_id');
	    if($userid){
	        $this->db->where('userid', $userid);
	    }
	    if($category_id){
	        $this->db->where('category_id', $category_id);
	    }
	    $city_id = $this->input->post('city_id');
	    if($city_id){
	        $this->db->where('city_id',$city_id);    
	    }
	    
		$this->db->select('*');
		$this->db->from('productservices');
		
		$this->db->order_by('id','desc');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $row->likes = $this->db->query("select * from tbl_likes where type = 1 and product_id = $row->id")->num_rows();
                $row->isLike = $this->db->query("select * from tbl_likes where type = 1 and product_id = $row->id and session_id = '$session_id'")->num_rows();
                $row->rates = $this->db->query("select * from tbl_ratings where type = 1 and product_id = $row->id and session_id = '$session_id'")->row()->rates;
                $row->ratesCount = $this->db->query("select sum(rates) as rates from tbl_ratings where type = 1 and product_id = $row->id group by product_id")->row()->rates;
                $row->ratesTotal = $this->db->query("select * from tbl_ratings where type = 1 and product_id = $row->id")->num_rows();
                $data[] = $row;
            }
            return $data;
        }
        return false;
	}
	
	function getOneProductService($userid = 0, $category_id = 0){
	    if($userid){
	        $this->db->where('userid', $userid);
	    }
	    if($category_id){
	        $this->db->where('category_id', $category_id);
	    }
	    $city_id = $this->input->post('city_id');
	    if($city_id){
	        $this->db->where('city_id',$city_id);    
	    }
		$this->db->select('*');
		$this->db->from('productservices');
		$this->db->where('status', '1');
		$this->db->order_by('created_at','desc');
		$this->db->limit(1);
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                
                $data = $row;
            }
            return $data;
        }
        return false;
		
	}
	
	function getService($userid = 0){
	    $session_id = $this->session->userdata('random_id');
	    if($userid){
	        $this->db->where('userid', $userid);
	    }
	    $city_id = $this->input->post('city_id');
	    if($city_id){
	        $this->db->where('city_id',$city_id);    
	    }
		$this->db->select('*');
		$this->db->from('uploadservices');
		$this->db->where('status', '1');
		$this->db->order_by('id','desc');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $row->likes = $this->db->query("select * from tbl_likes where type = 2 and product_id = $row->id")->num_rows();
                $row->isLike = $this->db->query("select * from tbl_likes where type = 2 and product_id = $row->id and session_id = '$session_id'")->num_rows();
               $row->rates = $this->db->query("select * from tbl_ratings where type = 2 and product_id = $row->id and session_id = '$session_id'")->row()->rates;
                $row->ratesCount = $this->db->query("select sum(rates) as rates from tbl_ratings where type = 2 and product_id = $row->id group by product_id")->row()->rates;
                $row->ratesTotal = $this->db->query("select * from tbl_ratings where type = 2 and product_id = $row->id")->num_rows();
                $data[] = $row;
            }
            return $data;
        }
        return false;
	}

	function getOneService($userid = 0){
	    if($userid){
	        $this->db->where('userid', $userid);
	    }
	    $city_id = $this->input->post('city_id');
	    if($city_id){
	        $this->db->where('city_id',$city_id);    
	    }
		$this->db->select('*');
		$this->db->from('uploadservices');
		$this->db->where('status', '1');
		$this->db->order_by('created_at','desc');
		$this->db->limit(1);
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data = $row;
            }
            return $data;
        }
        return false;
		
	}
	
	function  gettblrating(){
		$this->db->select('*');
		$this->db->from('tbl_ratings');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
            return $data;
        }
        return false;
		
	}
	function getCountrys (){
		$this->db->select('*');
		$this->db->from('country');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
            return $data;
        }
        return false;
		
	}
	
	
	function getStateByCountryId($id){
		$this->db->where('country_id',$id);
		$this->db->select('*');
		$this->db->from('region');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
            return $data;
        }
        return false;
		
	}
	
	function getCityByStateId($id){
		$this->db->where('region_id',$id);
		$this->db->select('*');
		$this->db->from('city');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
            return $data;
        }
        return false;
		
	}
	
	function getProductByCityId($id){
		$this->db->where('city_id',$id);
		$this->db->where('is_deleted',0);
		$this->db->where('is_active',1);
		$this->db->select('*');
		$this->db->from('products');
		$this->db->order_by('created_at','desc');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
            return $data;
        }
        return false;
		
	}
	
	function getCategory(){
		$this->db->where('is_deleted',0);
		$this->db->where('is_active',1);
		$this->db->select('*');
		$this->db->from('categories');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
            return $data;
        }
        return false;
		
	}
	
	function getCategoryByCity($id = ''){
		if($id){
	        $this->db->where('p.city_id',$id);    
	    }
		$this->db->where('p.status',1);
		$this->db->select('p.id, p.category_id,c.name');
		$this->db->from('productservices p');
		$this->db->join('categories c','c.id = p.category_id','LEFT');
		$this->db->group_by('p.category_id');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $row->products = $this->getProductsByCategory($row->category_id,$id);
                $data[] = $row;
            }
            return $data;
        }
        return false;
		
	}
	
	function getServiceCategoryByCity($id =''){
	    if($id){
	        $this->db->where('p.city_id',$id);    
	    }
		
		$this->db->where('p.status',1);
		$this->db->select('p.id, p.category_id,c.name');
		$this->db->from('uploadservices p');
		$this->db->join('categories c','c.id = p.category_id','LEFT');
		$this->db->group_by('p.category_id');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $row->services = $this->getServicesByCategory($row->category_id,$id);
                $data[] = $row;
            }
            return $data;
        }
        return false;
		
	}
	
	function getVendorByCategory($id){
	    $this->db->where('p.category_id',$id);
		$this->db->where('p.status',1);
		$this->db->select('p.id, p.userid,v.name');
		$this->db->from('productservices p');
		$this->db->join('vendors v','v.id = p.userid','LEFT');
		$this->db->group_by('p.userid');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
            return $data;
        }
        return false;
	}
	
	function getProductsByCategory($id,$city_id=''){
	    if($id){
	        $this->db->where('p.category_id',$id);
	    }
	    if($city_id){
		    $this->db->where('p.city_id',$city_id);
	    }
		$this->db->where('p.status',1);
		//$this->db->select('p.id,p.product, p.userid,v.name,p.category_id,p.servicephoto');
		$this->db->select('p.*,v.name, v.is_live, v.id as streaming_id ');
		$this->db->from('productservices p');
		$this->db->join('vendors v','v.id = p.userid','LEFT');
		//$this->db->group_by('p.userid');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $row->likes = $this->db->query("select * from tbl_likes where type = 1 and product_id = $row->id")->num_rows();
                $row->isLike = $this->db->query("select * from tbl_likes where type = 1 and product_id = $row->id and session_id = '$session_id'")->num_rows();
                $row->rates = $this->db->query("select * from tbl_ratings where type = 1 and product_id = $row->id and session_id = '$session_id'")->row()->rates;
                $row->ratesCount = $this->db->query("select sum(rates) as rates from tbl_ratings where type = 1 and product_id = $row->id group by product_id")->row()->rates;
                $row->ratesTotal = $this->db->query("select * from tbl_ratings where type = 1 and product_id = $row->id")->num_rows();
                $data[] = $row;
            }
            return $data;
        }
        return false;
	}
	
	function getServicesByCategory($id,$city_id=''){
	    if($id){
	        $this->db->where('p.category_id',$id);
	    }
	    if($city_id){
		    $this->db->where('p.city_id',$city_id);
	    }
		$this->db->where('p.status',1);
		$this->db->select('p.*,v.name, v.is_live, v.id as streaming_id');
		$this->db->from('uploadservices p');
		$this->db->join('vendors v','v.id = p.userid','LEFT');
		//$this->db->group_by('p.userid');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $row->likes = $this->db->query("select * from tbl_likes where type = 2 and product_id = $row->id")->num_rows();
                $row->isLike = $this->db->query("select * from tbl_likes where type = 2 and product_id = $row->id and session_id = '$session_id'")->num_rows();
                $row->rates = $this->db->query("select * from tbl_ratings where type = 2 and product_id = $row->id and session_id = '$session_id'")->row()->rates;
                $row->ratesCount = $this->db->query("select sum(rates) as rates from tbl_ratings where type = 2 and product_id = $row->id group by product_id")->row()->rates;
                $row->ratesTotal = $this->db->query("select * from tbl_ratings where type = 2 and product_id = $row->id")->num_rows();
                $data[] = $row;
            }
            return $data;
        }
        return false;
	}
	
	function saveUploadProduct(){
		$id = $this->input->post('id');
		$country_id = $this->input->post('country_id');
		$state_id = $this->input->post('state_id');
		$city_id = $this->input->post('city_id');
		$category_id = $this->input->post('category_id');
		$product = $this->input->post('product');
		$service = $this->input->post('service');
		$about = $this->input->post('about');
		$price = $this->input->post('price');
		$quantity_available = $this->input->post('quantity_available');
		$company = $this->input->post('company');
		$website = $this->input->post('website');
		$product_size = $this->input->post('product_size');
		$live_stream_price = $this->input->post('live_stream_price');
		$pick_ship = $this->input->post('pick_ship');
		$sub_category_id = $this->input->post('subcategory_id');
		$exp = $this->input->post('exp');
		$userid = $this->session->userdata('userid');
		$status = 1;
		
		$old_image = $this->input->post('old_image');
		$old_video = $this->input->post('old_video');
		
		$data = array(
				'country_id'=>$country_id,
				'state_id'=>$state_id,
				'city_id'=>$city_id,
				'category_id'=>$category_id,
				'sub_category_id'=>$sub_category_id,
				'product'=>$product,
				'service'=>$service,
				'about'=>$about,
				'price'=>$price,
				'quantity_available'=>$quantity_available,
				'company'=>$company,
				'website'=>$website,
				'product_size'=>$product_size,
				'live_stream_price'=>$live_stream_price,
				'pick_ship'=>$pick_ship,
				'exp'=>$exp,
				'userid'=>$userid,
				'status'=>1
				);
		if($old_image){
		    $data['servicephoto'] = $old_image;
		}
		if($old_video){
		    $data['servicevideo'] = $old_video;
		}
		if($_FILES['servicephoto']['name'])
		{
			$path = 'public/productimages';
			$type = $_FILES['servicephoto']['type'];
			$image = $this->upload('servicephoto', $path, $type , 1);
			$data['servicephoto'] = $image;
		}
		if($_FILES['servicevideo']['name'])
		{
			$path2 = 'public/productvideos';
			$types2 = 'x-flv|mp4|webm|3gpp|quicktime|x-msvideo|x-ms-wmv|x-m4v';
			$image2 = $this->upload('servicevideo', $path2, $types2 , 2);
			$data['servicevideo'] = $image2;
		}
		if($id){
		    $this->db->where('id',$id);
		    $this->db->update('productservices',$data);
		}else{
		    $this->db->insert('productservices',$data);
		    $id = $this->db->insert_id();
		}
		
		if($id){
			
			return true;
		}else{
			
			return false;
		}
	}
	
	function uploadvideo(){
	    
	}
	
	function upload($fieldname, $path, $type, $img = 1)
	{
		if (!is_dir($path))
		{
			mkdir($path, 0777, true);
		}
		
		$config['upload_path'] = $path;
		//$config['allowed_types'] = $types;
		$config['allowed_types'] = '*';
		//$config['max_size'] = '2000';
		$config['remove_spaces'] = true;
		$config['overwrite'] = false;
		$config['encrypt_name'] = false;
		$this->load->library('upload', $config);
		$this->upload->initialize($config);            
		
		if (!$this->upload->do_upload($fieldname)){
			$error = array('error' => $this->upload->display_errors()); 
			print_r($error); exit;
		}else{
			$upload_data = $this->upload->data();
			if($img == 1){
				$info = getimagesize($_FILES[$fieldname]['tmp_name']);
				switch ($type) {
                    case "image/jpg":
                        $image = imagecreatefromjpeg($_FILES[$fieldname]['tmp_name']);
                        break;
                    case "image/jpeg":
                        $image = imagecreatefromjpeg($_FILES[$fieldname]['tmp_name']);
                        break;
                    case "image/png":
                        $image = imagecreatefrompng($_FILES[$fieldname]['tmp_name']);
                        break;
                    case "image/gif":
                        $image = imagecreatefromgif($_FILES[$fieldname]['tmp_name']);
                        break;
                    case "image/webp":
                        $image = imagecreatefromwebp($_FILES[$fieldname]['tmp_name']);
                        break;
                    case "image/bmp":
                        $image = imagecreatefrombmp($_FILES[$fieldname]['tmp_name']);
                        break;
                    case "image/avif":
                        $image = imagecreatefromavif($_FILES[$fieldname]['tmp_name']);
                        break;
                    default:
                        $image = imagecreatefromjpeg($_FILES[$fieldname]['tmp_name']);
                }
				// $image = imagecreatefrompng($_FILES[$fieldname]['tmp_name']);
				imagejpeg($image, $upload_data['full_path'], 60);
			}
			return $upload_data['file_name'];		
		}							
	}
	
	function saveUploadService(){
		$name = $this->input->post('name');
		$address = $this->input->post('address');
		$country_id = $this->input->post('country_id');
		$state_id = $this->input->post('state_id');
		$city_id = $this->input->post('city_id');
		$category_id = $this->input->post('category_id');
		$service = $this->input->post('service');
		$about = $this->input->post('about');
		$price = $this->input->post('price');
		$price_per_hour = $this->input->post('price_per_hour');
		$get_estimate = $this->input->post('get_estimate');
		$company = $this->input->post('company');
		$stream = $this->input->post('stream');
		$opreation_hour = $this->input->post('opreation_hour');
		$live_stream_price = $this->input->post('live_stream_price');
		$pick_ship = $this->input->post('pick_ship');
		$sub_category_id = $this->input->post('subcategory_id');
		$exp = $this->input->post('exp');
		$userid = $this->session->userdata('userid');
		$status = 1;
		
		$data = array(
		        'name'=>$name,
		        'address'=>$address,
				'country_id'=>$country_id,
				'state_id'=>$state_id,
				'city_id'=>$city_id,
				'category_id'=>$category_id,
				'sub_category_id'=>$sub_category_id,
				'service'=>$service,
				'about'=>$about,
				'price'=>$price,
				'price_per_hour'=>$price_per_hour,
				'get_estimate'=>$get_estimate,
				'company'=>$company,
				'stream'=>$stream,
				'opreation_hour'=>$opreation_hour,
				'live_stream_price'=>$live_stream_price,
				'pick_ship'=>$pick_ship,
				'exp'=>$exp,
				'userid'=>$userid,
				'status'=>1
				);
		if($_FILES['servicephoto']['name'])
		{
			$path = 'public/productimages';
// 			$types = 'jpg|png|jpeg|gif|tiff|psd|pdf|eps|ai|indd|raw|svg|mp4|webp';
            $type = $_FILES['servicephoto']['type'];
			$image = $this->upload('servicephoto', $path, $type , 1);
			$data['servicephoto'] = $image;
		}
		if($_FILES['servicevideo']['name'])
		{
			$path2 = 'public/productvideos';
			$types2 = 'x-flv|mp4|webm|3gpp|quicktime|x-msvideo|x-ms-wmv|x-m4v|mov|wmv|avi|avchd|flv|f4v|swf|mkv|webm';
			$image2 = $this->upload('servicevideo', $path2, $types2 , 2);
			$data['servicevideo'] = $image2;
		}
		$this->db->insert('uploadservices',$data);
		if($this->db->insert_id()){
			
			return true;
		}else{
			
			return false;
		}
	}
	
	function getAppointments($userid = 0, $type = 1){
	    if($userid){
	        $this->db->where('a.vendor_id', $userid);
	    }
		//$this->db->select('a.*,u.name, u.last_name');
		$this->db->where('a.type_id', 2);
		$this->db->from('appointments a');
		$this->db->where('a.status', '1');
		//$this->db->join('users u','u.id = a.user_id','LEFT JOIN');
		$this->db->order_by('a.id','desc');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
            return $data;
        }
        return false;
	}
	
	function getContacts($userid = 0){
	    
		$this->db->select('a.*');
		$this->db->from('users a');
		$this->db->where('a.status', '1');
		$this->db->order_by('a.id','RANDOM');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
            return $data;
        }
        return false;
	}
	
	function getSubcategoryByCategoryIdAjax($id){
		$this->db->where('parent_id',$id);
		$this->db->select('*');
		$this->db->from('sub_categories');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
            return $data;
        }
        return false;
		
	}
	
	function getPlansRecords(){
	    $userid = $this->session->userdata('userid');
	     $this->db->select('plans_type.*');
         $this->db->where('plans_type.status',1);
         $this->db->from('plans_type');
        $this->db->order_by('plans_type.id','asc');
        $query = $this->db->get();
    	if ($query->num_rows() > 0) {
    		foreach ($query->result() as $row) {
    		    $row->is_subscribe = $this->db->query("select id from plans_subscribe where plans_type_id = $row->id and user_id = '$userid'")->row();
    			$data[] = $row;
    		}
    		return $data;
    	}
    	return false;
	}
	
	///
	function getVendorProfileById(){
	    $id = $this->session->userdata('userid');
	    $this->db->where('id',$id);
		$this->db->select('*');
		$this->db->from('vendors');
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data = $row;
            }
            return $data;
        }
        return false;
	}
	
	public function saveEditPrfoile($reg_data)
	{
	    $image = $this->input->post('image');
	    if($_FILES['image']['name'])
		{
			$path = 'public/user-image';
			$types = '';
			$image = $this->upload('image', $path, $types , 1);
		}
		$reg_data['image'] = $image;
	    $id = $this->session->userdata('userid');
	    $this->db->where('id',$id);
		$res=$this->db->update('vendors', $reg_data);
		return  true;
	}

    public function getProductById($id){
        $this->db->where('p.id',$id);
        $this->db->select('p.*, c.country, r.region, ct.city, cat.name as category, subc.name as subcategory');
		$this->db->from('productservices as p');
		$this->db->where('p.status', '1');
		$this->db->join('country c','c.id = p.country_id','LEFT');
        $this->db->join('region r','r.id = p.state_id','LEFT');
        $this->db->join('city ct','ct.id = p.city_id','LEFT');
        $this->db->join('categories cat','cat.id = p.category_id','LEFT');
        $this->db->join('sub_categories subc','subc.id = p.sub_category_id','LEFT');
		$this->db->limit(1);
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $row->likes = $this->db->query("select * from tbl_likes where type = 1 and product_id = $row->id")->num_rows();
                
                $data = $row;
            }
            return $data;
        }
        return false;
    }
    
    public function getServiceById($id){
        $this->db->where('p.id',$id);
        $this->db->select('p.*, c.country, r.region, ct.city, cat.name as category, subc.name as subcategory');
		$this->db->from('uploadservices as p');
		$this->db->where('p.status', '1');
		$this->db->join('country c','c.id = p.country_id','LEFT');
        $this->db->join('region r','r.id = p.state_id','LEFT');
        $this->db->join('city ct','ct.id = p.city_id','LEFT');
        $this->db->join('categories cat','cat.id = p.category_id','LEFT');
        $this->db->join('sub_categories subc','subc.id = p.sub_category_id','LEFT');
		$this->db->limit(1);
		$query = $this->db->get();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $row->likes = $this->db->query("select * from tbl_likes where type = 2 and product_id = $row->id")->num_rows();
                
                $data = $row;
            }
            return $data;
        }
        return false;
    }

}
