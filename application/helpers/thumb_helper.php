<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

function propertyGalleryThumbURL($type, $thumb_name, $width=630, $height=221)
{
	$image_path = "public/uploads/documents/$type/$thumb_name";
	if(!is_file($image_path)){
		$image_path='assets/images/docs.jpg';
	}
	return base_url(thumb($image_path, $width, $height));
}

function thumb($src, $width, $height, $image_thumb = '') {
	
	if($width == 0 && $height == 0){
		return $src;
	}

	// Get the CodeIgniter super object
	$CI = &get_instance();
	
	if(!file_exists($src)){
		return $src;
	}

	// get src file's dirname, filename and extension
	$path = pathinfo($src);
	
	$mtime_src = filemtime($src);
	
	if(strpos($path['dirname'], 'public/uploads') !== false){
		$thumb_dir = str_replace('public/uploads', 'public/thumbs', $path['dirname']);
		if (!is_dir($thumb_dir))
		{
			mkdir($thumb_dir, 0777,TRUE);
		}
	}
	
	if(strpos($path['dirname'], 'images') !== false){
		$thumb_dir = str_replace('images', 'public/thumbs', $path['dirname']);
		if (!is_dir($thumb_dir))
		{
			mkdir($thumb_dir, 0777,TRUE);
		}
	}
	
	

	// Path to image thumbnail
	if( !$image_thumb )
		$image_thumb = $thumb_dir . DIRECTORY_SEPARATOR . $path['filename'] . "_" . $height . '_' . $width . "." . $path['extension'];
	
	if(file_exists($image_thumb)){
		$mtime_thumb = filemtime($image_thumb);
	}else{
		$mtime_thumb = $mtime_src;
	}

	if ( !file_exists($image_thumb) || $mtime_src > $mtime_thumb) {

		// LOAD LIBRARY
		$CI->load->library('image_lib');
		
		list($src_width, $src_height, $file_type, $attr) = getimagesize($src);
		
		if($src_width < $width && $src_height < $height){
			$r_width = $src_width;
			$r_height = $src_height;
		}
		else{
			$r_width = $width;
			$r_height = $height;
		}
		
		// CONFIGURE IMAGE LIBRARY
		$config['source_image'] = $src;
		$config['new_image'] = $image_thumb;
		$config['width'] = $r_width;
		$config['height'] = $r_height;

		$CI->image_lib->initialize($config);
		$CI->image_lib->resize();
		$CI->image_lib->clear();
		
	}
	

	return $image_thumb;
}
