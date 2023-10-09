<?php
class Home_model extends CI_Model {
    
	function __construct(){
		parent::__construct();
		$this->load->database();
	}
	
	 public function select($page)
    {
        $this->db->select('*');
        $this->db->from('tbl_about');
		$this->db->where('page',$page);
        $this->db->where('status',1);
        $this->db->limit('1');
        $result = $this->db->get();
        return $result->row_array();
    }
	
	 public function update($page,$data)
    {
		$this->db->where('page',$page);
        $result=$this->db->update('tbl_about',$data);
        return $result;
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
    
    function getInvestmentSingleRecords($id){
    
        $this->db->select('*');
        $this->db->where('id',$id);
        $query = $this->db->get('investment_projects');
    	if ($query->num_rows() > 0) {
    		foreach ($query->result() as $row) {
    			$data = $row;
    		}
    		return $data;
    	}
    	return false;
    }
    
    function getCategoryRecords(){
    
        $this->db->select('*');
         $this->db->where('is_active',1);
        $this->db->order_by('id','desc');
        $query = $this->db->get('categories');
    	if ($query->num_rows() > 0) {
    		foreach ($query->result() as $row) {
    			$data[] = $row;
    		}
    		return $data;
    	}
    	return false;
    }
    
    function getCategorySingleRecords($id){
    
        $this->db->select('*');
        $this->db->where('id',$id);
        $query = $this->db->get('categories');
    	if ($query->num_rows() > 0) {
    		foreach ($query->result() as $row) {
    			$data = $row;
    		}
    		return $data;
    	}
    	return false;
    }
    
    function getSubCategoryRecords(){
    
        $this->db->select('s.*,c.name as category_name');
         $this->db->where('s.is_active',1);
         $this->db->from('sub_categories as s');
         $this->db->join('categories c','c.id = s.parent_id','LEFT');
        $this->db->order_by('s.id','desc');
        $query = $this->db->get();
    	if ($query->num_rows() > 0) {
    		foreach ($query->result() as $row) {
    			$data[] = $row;
    		}
    		return $data;
    	}
    	return false;
    }
    
    function getSubCategorySingleRecords($id){
    
        $this->db->select('*');
        $this->db->where('id',$id);
        $query = $this->db->get('sub_categories');
    	if ($query->num_rows() > 0) {
    		foreach ($query->result() as $row) {
    			$data = $row;
    		}
    		return $data;
    	}
    	return false;
    }
    
    function getVendorsRecords(){
    
        $this->db->select('v.*, c.country, r.region, ct.city');
         $this->db->where('v.status',1);
         $this->db->from('vendors as v');
        $this->db->join('country c','c.id = v.country_id','LEFT');
        $this->db->join('region r','r.id = v.state_id','LEFT');
        $this->db->join('city ct','ct.id = v.city_id','LEFT');
        $this->db->order_by('v.id','desc');
        $query = $this->db->get();
    	if ($query->num_rows() > 0) {
    		foreach ($query->result() as $row) {
    			$data[] = $row;
    		}
    		return $data;
    	}
    	return false;
    }
    
    function getUsersRecords(){
    
         $this->db->select('v.*, c.country, r.region, ct.city');
         $this->db->where('v.status',1);
         $this->db->from('users as v');
        $this->db->join('country c','c.id = v.country_id','LEFT');
        $this->db->join('region r','r.id = v.state_id','LEFT');
        $this->db->join('city ct','ct.id = v.city_id','LEFT');
        $this->db->order_by('v.id','desc');
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
    
         $this->db->select('plans_type.*');
         $this->db->where('plans_type.status',1);
         $this->db->from('plans_type');
        $this->db->order_by('plans_type.id','desc');
        $query = $this->db->get();
    	if ($query->num_rows() > 0) {
    		foreach ($query->result() as $row) {
    			$data[] = $row;
    		}
    		return $data;
    	}
    	return false;
    }
    
    function getPlansSingleRecords($id){
    
        $this->db->select('*');
        $this->db->where('id',$id);
        $query = $this->db->get('plans_type');
    	if ($query->num_rows() > 0) {
    		foreach ($query->result() as $row) {
    			$data = $row;
    		}
    		return $data;
    	}
    	return false;
    }
    
    function getPlansSubscibeRecords(){
        $this->db->select('ps.*, pt.name, concat(u.name," ",u.last_name) as username');
         $this->db->from('plans_subscribe as ps');
         $this->db->join('plans_type as pt','pt.id = ps.plans_type_id','LEFT');
          $this->db->join('vendors as u','u.id = ps.user_id','LEFT');
        $this->db->order_by('ps.id','desc');
        $query = $this->db->get();
    	if ($query->num_rows() > 0) {
    		foreach ($query->result() as $row) {
    		    $row->detail = $this->getPlansVendorDetail($row->id);
    			$data[] = $row;
    		}
    		return $data;
    	}
    	return false;
    }
    
    function getPlansVendorDetail($id){
        $this->db->where('ps.id',$id);
        $this->db->select('ps.*,c.country, r.region, ct.city,');
         $this->db->from('plans_subscribe_detail as ps');
         $this->db->join('country c','c.id = ps.country_id','LEFT');
        $this->db->join('region r','r.id = ps.state_id','LEFT');
        $this->db->join('city ct','ct.id = ps.city_id','LEFT');
        $this->db->order_by('ps.id','desc');
        $query = $this->db->get();
    	if ($query->num_rows() > 0) {
    		foreach ($query->result() as $row) {
    		   	$data = $row;
    		}
    		return $data;
    	}
    	return false;
    }
    
    public function update_change_password($data)
    {
        $id = $this->session->userdata('adminid');
        $this->db->where('adminID',$id);
        $result=$this->db->update('tbl_admin',$data);
		
        return $result;
    }
    
     public function getHeading()
    {
        $this->db->select('*');
        $this->db->from('tbl_heading');
		$this->db->where('status',1);
        $this->db->limit('1');
        $result = $this->db->get();
        return $result->row_array();
    }
	
	 public function update_heading($data)
    {
		$result=$this->db->update('tbl_heading',$data);
       
    }
    ///
    function getPermissionsRecords(){
    
         $this->db->select('tbl_permissions.*');
         $this->db->where('tbl_permissions.status',1);
         $this->db->from('tbl_permissions');
        $this->db->order_by('tbl_permissions.id','desc');
        $query = $this->db->get();
    	if ($query->num_rows() > 0) {
    		foreach ($query->result() as $row) {
    			$data[] = $row;
    		}
    		return $data;
    	}
    	return false;
    }
    
    function getPermissionsSingleRecords($id){
    
        $this->db->select('*');
        $this->db->where('id',$id);
        $query = $this->db->get('tbl_permissions');
    	if ($query->num_rows() > 0) {
    		foreach ($query->result() as $row) {
    			$data = $row;
    		}
    		return $data;
    	}
    	return false;
    }
}
