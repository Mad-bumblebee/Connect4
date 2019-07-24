export {win,winDiag};

function win (arr, num) {
  let temp = 0, max = 0;
  for (let i = 0; i < arr.length; i++){
  if(arr[i] == num) temp++;
  else temp = 0;
  if(temp > max) max = temp;
  }
  return max;
  };

  function winDiag(arr, num) {
    let temp = 0, max = 0;
  
     for(let k = 0; k < 7; k++){
      temp = 0;
      for (let i = 0, j = k; i < arr.length; j++, i++){
        if(arr[i][j] == num) temp++;
        else temp = 0;       
        if(temp > max) max = temp;
       }     
     }      
  
     for(let k = 0; k < 6; k++){
      temp = 0;
        for (let i = k, j = 0; i < arr.length; j++, i++){
          if(arr[i][j] == num) temp++;
          else temp = 0;       
          if(temp > max) max = temp;
         }          
      }    

      for(let k = arr.length; k > 0; k--){
        temp = 0;
          for (let j = k, i = 0; i < arr.length; j++, i++){
            if(arr[i][arr.length-j] == num) temp++;
            else temp = 0;       
            if(temp > max) max = temp;
           }          
        }
        for(let k = 0; k < 7; k++){
              temp = 0;
                for (let i = k, j = 0; i < arr.length; j++, i++){
                  if(arr[i][arr.length-j] == num) temp++;
                  else temp = 0;       
                  if(temp > max) max = temp;
                 }          
              }             
    
        return max;    
  }  
      
 






 
