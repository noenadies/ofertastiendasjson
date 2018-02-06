
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).addClass('active');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).removeClass('active');
            showPass = 0;
        }
        
    });


})(jQuery);

var Productos;
var Tiendas;
function myFunction() {
    // body...
 Productos= document.getElementById("Productos").value;
 Tiendas= document.getElementById("Tiendas").value;
    //alert(Productostos);

  alert(Tiendas);
  //if(Tiendas!=""&& Productos!=""){  ajaxProductostienda();}
 if(Productos!=""&&Tiendas==""){  alert(4444444);ajazProductos();}

 if(Tiendas!="" &&Productos==""){  alert("tiendas");ajaxTiendas();}


    

}

function ajaxProductostotienda(){


  $.ajax({
               
                url:   'mi.json',
                 dataType:  'json',
                type:  'get',
                cache:false,
                success:  function (data) {
                     /*   $(data.inicio).each(function(index,vales){
                           console.log(data.inicio[0]);

data.inicio[i].Tiendasword
                        }) ;
                      //  j=data.inicio.uno;*/
alert("buscando");
                      
                        var as=Object.keys(data.Productos);
                   

  
                   for(var i=0; i<as.length;i=i+1){
                   if (data.productos[i].Productostos==Tiendas){
  
  if (data.productos[i].Productostos==Productostos){
alert(data.productos[i].Web);
window.location =data.productos[i].Web;

                    }
                    }

                  

                   }




                       
                }
        });



}

function ajazProductos(){
  $.ajax({
               
                url:   'miproductos.json',
                 dataType:  'json',
                type:  'get',
                cache:false,
                success:  function (data) {
                     /*   $(data.inicio).each(function(index,vales){
                           console.log(data.inicio[0]);

data.inicio[i].Tiendasword
                        }) ;
                      //  j=data.inicio.uno;*/
alert("buscando11");
                      
                        var as=Object.keys(data.productos);
                   

  
                   for(var i=0; i<as.length;i=i+1){
                 
  
  if (data.productos[i].Productos==Productos){
alert(data.productos[i].Web);
window.location =data.productos[i].Web;
                    }
                    

                  

                   }




                       
                }
        });
}







function ajaxTiendas(){
  $.ajax({
               
                url:   'mitiendas.json',
                 dataType:  'json',
                type:  'get',
                cache:false,
                success:  function (data) {
                     /*   $(data.inicio).each(function(index,vales){
                           console.log(data.inicio[0]);

data.inicio[i].Tiendasword
                        }) ;
                      //  j=data.inicio.uno;*/
alert("buscando11ttt");
                      
                        var as=Object.keys(data.tiendas);
                   

  
                   for(var i=0; i<as.length;i=i+1){
                 
  
  if (data.tiendas[i].Tiendas==Tiendas){
alert(data.tiendas[i].Web);
window.location =data.tiendas[i].Web;
                    }
                    

                  

                   }




                       
                }
        });
}






