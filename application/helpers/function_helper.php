<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

	if (!function_exists('sendSMS'))
	{
		function sendSMS($phone, $message){
			$phone = '91'.$phone;
			if(strlen($phone) > 12) return false;
			$message = urlencode($message);
			$response = file_get_contents("http://sms.itechcanny.com/api.php?username=brolabs11&password=802156&sender=DGENIT&sendto=$phone&message=$message");
			return $response;
		}
	}
	
	if (!function_exists('mysql_date_dmy'))
	{
		function mysql_date_dmy($date){
			if(!empty($date) && $date != '0000-00-00'){
				$date = DateTime::createFromFormat('d/m/Y', $date);
				return $date->format('Y-m-d');
			}else{
				return '';
			}
		}
	}