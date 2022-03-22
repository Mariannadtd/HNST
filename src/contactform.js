jQuery(document).ready(function($) {

$(".form-inner").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "index.php",
data: str,
success: function(msg) {
if(msg == 'OK') {
result = '<p>Thank U <3</p>';
$(".fields").hide();
} else {
result = msg;
}
$('.note').html(result);
}
});
return false;
});
});