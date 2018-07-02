const codes = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
  ];
  
function init(){
  
 let index = 0;
 
  document.addEventListener('keydown', function(e){ 
      const key = e.key;
    
      if (key === codes[index]) {
        index++;
       } else {
         index = 0;
       }
        
     if (index === codes.length) {
       console.log("hurray!");
       // made it console.log() since alert() did not work in the test envirement.
      index = 0;
    }
  });

}


