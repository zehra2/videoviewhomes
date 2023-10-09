<?php
$servername='localhost';
$username="root";
$password="";
$db="videoals_homerental";
try
{
    $con=new PDO("mysql:host=$servername;dbname=$db",$username,$password);
    $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    //echo 'connected';
}
catch(PDOException $e)
{
    echo '<br>'.$e->getMessage();
}
if(isset($_POST['view'])){
 
    if($_POST["view"] != '')
    {
       $stmt=$con->prepare("update appointments set status = 1 where status = 0");
       $stmt->execute();
    }
    //Fetching the rows from database
    $stmt1=$con->prepare("SELECT * FROM appointments ORDER BY id DESC LIMIT 5");
    $stmt1->execute();
 
$output = '';
    if($stmt1->rowCount() > 0)
    {
    while($row = $stmt1->fetch(PDO::FETCH_ASSOC))
    {
      $output .= '
      <li>
      <a href="#">
      <strong>'.$row["subject"].'</strong><br />
      <small><em>'.$row["comment"].'</em></small>
      </a>
      </li>
      ';
    }
    }
    else{
        $output .= '<li><a href="#" class="text-bold text-italic">No Notification Found</a></li>';
    }
    $stmt2=$con->prepare("SELECT * FROM appointments WHERE status = 0");
    $stmt2->execute();
    $count = $stmt2->rowCount();
    $data = array(
       'notification' => $output,
       'unseen_notification'  => $count
    );
    echo json_encode($data);
    }
?>