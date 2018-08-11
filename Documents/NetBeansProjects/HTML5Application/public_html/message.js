/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

try{
    
//    function loadJSON(file, callback) {   
//
//    var xobj = new XMLHttpRequest();
//    xobj.overrideMimeType("application/json");
//    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
//    xobj.onreadystatechange = function () {
//          ///if (xobj.readyState == 4 && xobj.status == "200") {
//            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//            callback(xobj.responseText);
//         // }
//    };
//    xobj.send(null);  
// }
// 

//function load() {
//    
//    loadJSON("data.json", function(response) {
//  
//        var actual_JSON = JSON.parse(response);
//        console.log(actual_JSON);
//    });
//    
//    
//}

  function GetResponseText(){
      

  }  
//file is path of JSOn file

    function fun(){
         var myObj;
     var xmlobj;
       xmlobj=new XMLHttpRequest();
      
      xmlobj.onreadystatechange=function (){
          if (this.readyState == 4 && this.status == 200){
              alert(this.responseText);
          }
      };
 xmlobj.open("GET", "testJSON.json", true);     
xmlobj.send();
        
       
           //var myObj=JSON.parse(GetResponseText()); 
        
        
     document.write(myObj.name);

}
}
catch(err){
   document.write(err.message); 
}


