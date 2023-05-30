          let condiv=document.createElement('div');
          condiv.setAttribute('class','container');
           document.body.appendChild(condiv);
          
           
          
          // let rowdiv=document.createElement('div');
          // rowdiv.setAttribute('id','display');
          // condiv.appendChild(rowdiv);

          var inputElement=document.createElement('input');
              inputElement.setAttribute('type','text');
              inputElement.setAttribute('id','display');
             //inputElement.setAttribute('class','form-control');
              condiv.appendChild(inputElement);
   
          
        //   let coldiv=document.createElement('div');
        //   coldiv.setAttribute('class','col');
        //   rowdiv.appendChild(coldiv);

        //   
          let rowdiv2=document.createElement('row');
          rowdiv2.setAttribute('class','button');
          rowdiv2.setAttribute('type','button');
          rowdiv2.innerHTML=1;
          condiv.appendChild(rowdiv2);


      //     let btn=document.createElement('button');
      // //btn.setAttribute('class','button');
      //     btn.innerHTML=1;
      //     rowdiv2.appendChild(btn);

         let display=document.getElementById('display');
         let buttons=Array.from(document.getElementsByClassName('button'));
         buttons.map(button=>{
          button.addEventListener('click',(e)=>{
            switch(e.target.innerText){
              default:
                display.innerText+=e.target.innerText;
            }
          });
         });













          // var inputElement=document.createElement('input');
          // inputElement.setAttribute('type','text');
          // inputElement.setAttribute('id','result')
          // rowdiv2.appendChild(inputElement);

          // var btn = document.createElement("button");
          // btn.setAttribute('onclick','append(1)')
          // btn.innerHTML = 1;
          //   rowdiv2.appendChild(btn);

          //   var btn = document.createElement("button");
          //   btn.setAttribute('onclick','append(2)')
          // btn.innerHTML = 2;
          //   rowdiv2.appendChild(btn);

          //   var btn = document.createElement("button");
          //   btn.setAttribute('onclick','append('+')')
            
          // btn.innerHTML = '+';
          //   rowdiv2.appendChild(btn);

          //   var btn = document.createElement("button");
          //    btn.setAttribute('onclick','evaluateExpression()')
          //  btn.innerHTML = ('=');
          //   rowdiv2.appendChild(btn);

            
            
          //   function append(value){
          //       let result = document.getElementById('result');
          //       result.value += value;
          //   }

          //   function evaluateExpression(){
          //       let result = document.getElementById('result');
          //       result.value = eval(result.value);
          //   }
             
          
            
            
            
            
            
            
            
            
            
            
            
            
            
            //  let demo=document.getElementById('demo');
            // demo.addEventListener('onclick',function(event)){
            //     demo.style.color='red'
            // }
          
        
        
        
        
          //   let coldiv1=document.createElement('div');
        //   coldiv1.setAttribute('class','col-3');
        //   rowdiv2.appendChild(coldiv1);
          
        //   var btn = document.createElement("button");
        //   btn.innerHTML = 1;
        //     coldiv1.appendChild(btn);

                
          

        //   let coldiv2=document.createElement('div');
        //   coldiv2.setAttribute('class','col-3');
        //   rowdiv2.appendChild(coldiv2);
          
        //   var btn = document.createElement("button");
        //   btn.innerHTML = 2;
        //   coldiv1.appendChild(btn);
          
          