var input = document.getElementById('input');
var body = document.body;

function doStuff(){
  console.log(input.value);
  console.log( "https://nhentai.net/search/?q=" + input.value );
  location.href = "https://nhentai.net/search/?q=" + input.value 
}

$(function() {
        $("input[name='numonly']").on('input', function(e) {
            $(this).val($(this).val().replace(/[^0-9]/g, ''));
        });
    });
