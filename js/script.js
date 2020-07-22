//RICERCA QUADRATO
function ricercaQuadrato(){

    var quadrato = $('.quadrato-griglia')
    quadrato.click(clickQuadrato)
}

//CLICK QUADRATO
function clickQuadrato(){

    var quadratoClick = $(this);
    var cliccato = quadratoClick.hasClass('clicked');

    if (!cliccato){

        $.ajax({

            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET' ,
            success: function( data, state){
    
                var success = data['success'];
                var val = data['response'];
    
                if (success){
    
                    quadratoClick.addClass('clicked');
    
                    if (val <= 5) {
    
                        quadratoClick.addClass('yellow');
                        quadratoClick.text(val);
    
                    } else {
                        quadratoClick.addClass('green');
                        quadratoClick.text(val);
    
                    }
                    
                } else {
                    console.log('ERROR');
                }
    
               console.log(data['response']);
    
            },
            error: function(request,state,error){
    
            }
    
        })

    }
    
    

}

//INIT
function init(){
 
    ricercaQuadrato();

}

$(document).ready(init());
