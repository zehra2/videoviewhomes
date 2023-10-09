<?php
class Login_model extends CI_Model
{
    
public function __construct()
{
	$this->load->database();
	
}


	public function check_email_password($email_id,$password)
	{
		$this->db->select('*');
		$this->db->from('vendors');
		$this->db->where('status',1);
		$this->db->where('email',$email_id);
		$this->db->where('password',$password);
		$query=$this->db->get();
		return $query;
	}
	
	public function check_email_duplicate($email_id)
	{
		$this->db->select('*');
		$this->db->from('vendors');
		$this->db->where('email',$email_id);
		$query=$this->db->get();
		return $query;
	}
	
	public function add_registration($reg_data)
	{
		$res=$this->db->insert('vendors', $reg_data);
		$insert_id = $this->db->insert_id();
		return  $insert_id;
	}
	
	public function getVendor($id)
	{
    	$query = $this->db->get_where('vendors',array('id'=>$id));
    	return $query->row_array();
    }
	
	public function activate($data, $id)
	{
	    $this->db->where('vendors.id', $id);
	    return $this->db->update('vendors', $data);
	}
	

}
