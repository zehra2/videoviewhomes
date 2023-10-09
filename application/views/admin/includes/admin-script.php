
      <script>
    function charOnly(txt, e) {
    var arr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    var code;
    if (window.event)
    code = e.keyCode;
    if(e.keyCode == 8)
        return true;
    if(e.keyCode == 9)
        return true;
    else
        code = e.which;
        var char = keychar = String.fromCharCode(code);
	if (arr.indexOf(char) == -1)
        return false;
    else if (char == ".")
    if(txt.value.indexOf(".")>-1)
    return false;
    }
           
         
            function numberOnly(txt, e) {
            var arr = "0123456789-+.";
            var code;
            if (window.event)
                code = e.keyCode;
                 if(e.keyCode == 8)
                return true;
                  if(e.keyCode == 9)
                return true;
            else
                code = e.which;
            var char = keychar = String.fromCharCode(code);
            
            if (arr.indexOf(char) == -1)
                return false;
            else if (char == ".")
             

                if(txt.value.indexOf(".")>-1)
                    return false;
        }  
           
           </script> 

<script src=".https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="<?php echo base_url();?>assets/admin/assets/jquery/jquery-2.1.1.min.js"><\/script>')</script>
<script src="<?php echo base_url();?>assets/admin/assets/bootstrap/js/bootstrap.min.js"></script>
<script src="<?php echo base_url();?>assets/admin/assets/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<script src="<?php echo base_url();?>assets/admin/assets/jquery-cookie/jquery.cookie.js"></script>

<!--page specific plugin scripts-->
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/chosen-bootstrap/chosen.jquery.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/bootstrap-inputmask/bootstrap-inputmask.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/jquery-tags-input/jquery.tagsinput.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/jquery-pwstrength/jquery.pwstrength.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/bootstrap-fileupload/bootstrap-fileupload.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/bootstrap-duallistbox/duallistbox/bootstrap-duallistbox.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/dropzone/downloads/dropzone.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/bootstrap-timepicker/js/bootstrap-timepicker.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/clockface/js/clockface.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/bootstrap-colorpicker/js/bootstrap-colorpicker.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/bootstrap-daterangepicker/date.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/bootstrap-daterangepicker/daterangepicker.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/bootstrap-switch/static/js/bootstrap-switch.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/bootstrap-wysihtml5/wysihtml5-0.3.0.js"></script> 
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/bootstrap-wysihtml5/bootstrap-wysihtml5.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/ckeditor/ckeditor.js"></script> 

<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/data-tables/jquery.dataTables.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/admin/assets/data-tables/bootstrap3/dataTables.bootstrap.js"></script>


<!--flaty scripts-->
<script src="<?php echo base_url();?>assets/admin/js/flaty.js"></script>
<script src="<?php echo base_url();?>assets/admin/js/flaty-demo-codes.js"></script>
