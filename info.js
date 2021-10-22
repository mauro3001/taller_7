window.onload=function leerapi(){  
   
   fetch('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json')
    .then(response => response.json()) 
    .then(json => api(json)) 
    .catch(error=>console.log(error))   

    const api=(json)=>{
        for(i=0;i<=json.length;i++){ 
            Jzon=json; 
            departemento=json[i].departamento;
             id=json[i].id; 
            
            document.getElementById('departamentos').innerHTML+= `<option value="${id}">${departemento}</option>`
           
        }
      

        
    }
 
        var select = document.getElementById('departamentos'); 
    select.addEventListener('change',function(){ 
         v = this.options[select.selectedIndex];
         ciudad=Jzon[v.value].ciudades;
         for(i=0;i<ciudad.length;i++){
            ciu=ciudad[i];
            
            document.getElementById('ciudades').innerHTML+= `<option >${ciu}</option>`
           
        }
         
    });
    



    
}

