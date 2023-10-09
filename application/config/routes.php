<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/

$route['default_controller'] = 'home';
$route['404_override'] = '';

$route['home'] = 'Home/index';
$route['aboutus'] = 'Home/aboutus';
$route['products'] = 'Home/products';
$route['products/(:any)'] = 'Home/products/$1';
$route['products/(:any)/(:any)'] = 'Home/products/$1/$2';
$route['products_detail/(:any)'] = 'Home/products_detail/$1';
$route['services'] = 'Home/services';
$route['services/(:any)'] = 'Home/services/$1';
$route['services/(:any)/(:any)'] = 'Home/services/$1/$2';
$route['services_detail/(:any)'] = 'Home/services_detail/$1';
$route['Requestlivestream/(:any)'] = 'Home/Requestlivestream/$1';
$route['bid'] = 'Home/bid';
$route['price'] = 'Home/price';
$route['serviceform'] = 'Home/serviceform';
$route['listing'] = 'Home/listing';

$route['uploadproduct'] = 'Home/uploadproduct';
$route['uploadproduct_service'] = 'Home/uploadproduct_service';
$route['inputDevices'] = 'Home/inputDevices';

$route['countries'] = 'Home/countries';
$route['states/(:any)'] = 'Home/statesget/$1';
$route['city/(:any)/(:any)'] = 'Home/cityget/$1/$2';
$route['citycategory/(:any)/(:any)'] = 'Home/citycategory/$1/$2';
$route['citycategory/(:any)/(:any)/(:any)'] = 'Home/citycategory/$1/$2/$3';
$route['citycategory/(:any)/(:any)/(:any)/(:any)'] = 'Home/citycategory/$1/$2/$3/$4';
$route['categoryvendor/(:any)/(:any)'] = 'Home/categoryvendor/$1/$2';
$route['cityproducts/(:any)/(:any)'] = 'Home/cityproducts/$1';

/// ajax ///
$route['getStateByCountryIdAjax'] = 'Home/getStateByCountryIdAjax';
$route['getCityByStateIdAjax'] = 'Home/getCityByStateIdAjax';
$route['getSubcategoryByCategoryIdAjax'] = 'Home/getSubcategoryByCategoryIdAjax';
/// ajax ///

$route['login'] = 'Login/index';
$route['forgetpassword'] = 'Login/forgetpass';

$route['signindb'] = 'Login/signindb';
$route['signupdb'] = 'Login/signupdb';
$route['signup'] = 'Login/signup';
$route['signindbemail'] = 'Login/signindbemail';
$route['logout'] = 'Logout/index';
$route['verify-email/(:any)'] = 'Login/verify_email/$1';
$route['thanks'] = 'Login/thanks';

$route['profile'] = 'Home/getProfile';
$route['service-profile'] = 'Home/getServiceProfile';

$route['uploadservice'] = 'Home/uploadservice';
$route['saveUploadService'] = 'Home/saveUploadService';
$route['sendMail'] = 'Login/sendMail';
$route['formValidation'] = 'Login/formValidation';

$route['edit-profile'] = 'Home/editProfile';
$route['formValidationEditProfile'] = 'Home/formValidationEditProfile';
$route['saveEditProfile'] = 'Home/saveEditProfile';

$route['request-for-service/(:any)'] = 'Home/request_for_service/$1';
$route['appointmentFormValidation'] = 'Home/appointmentFormValidation';
$route['saveAppointments'] = 'Home/saveAppointments';
$route['edit_product/(:any)'] = 'Home/edit_product/$1';
$route['delete_product_profile/(:any)'] = 'Home/delete_product_profile/$1';
$route['delete_product_profile_recover/(:any)'] = 'Home/delete_product_profile_recover/$1';

$route['delete_service_profile/(:any)'] = 'Home/delete_service_profile/$1';
$route['deleteProductData/(:any)/(:any)'] = 'Home/deleteProductData/$1/$2';
$route['submitLikes'] = 'Home/submitLikes';
$route['submitDislikes'] = 'Home/submitDislikes';
$route['submitRates'] = 'Home/submitRates';

$route['plans_detail/(:any)'] = 'Home/plans_detail/$1';
$route['subscriptionsFormValidation']='Home/subscriptionsFormValidation';
$route['saveSubscriptions'] = 'Home/saveSubscriptions';

$route['plans_detail_subscribe/(:any)'] = 'Home/plans_detail_subscribe/$1';

$route['startVideo'] = 'Home/startVideo';
$route['admin'] = 'admin/home';
$route['admin/(:any)'] = "admin/$1";

$route["updateLive"] = "Home/updateLive"; 

?>