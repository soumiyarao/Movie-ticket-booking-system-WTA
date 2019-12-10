var slideIndex = 0;
var flag=false;
var flag1=false;
var org;
var i=0;
var arr_seat;

var arr=new Array();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function change(row,col){
   
    
    var str=String();
    var r=String(row)
    var c=String(col)
  //  console.log("change",str.concat(row,col))
    var rc=str.concat(row,col)
    //console.log("arr",arr_seat)
//   //  var y= document.getElementById(rc).getAttribute("class")
//        if(flag!=true){
//        document.getElementById(rc).style.backgroundColor="green";
//        flag=true;
//    }
//    else if(flag==true){
//     document.getElementById(rc).style.backgroundColor="brown";
//     flag=false;
//    }

// for(var k=0;k<arr.length;k++){
//     if(arr[k]==rc){
//     if(flag==false){
//         document.getElementById(rc).style.backgroundColor="green";
//        flag=true;
//     }
//     else if(flag==true){
//         document.getElementById(rc).style.backgroundColor="brown";
//         flag=false;
//     }
// }
// }
// for(var l=0;l<arr.length;l++){
// if(arr[l]!==rc){
//     if(flag1==false){
//         document.getElementById(rc).style.backgroundColor="green";
//        flag=true;
//     }
//     else if(flag1==true){
//         document.getElementById(rc).style.backgroundColor="brown";
//         flag=false;
//     }
// }
// }
var seat_booked=false;
var present=false;
console.log("change",arr_seat.arr,rc)
for(var h=0;h<arr_seat.arr.length;h++){
    console.log("arr_seat",arr_seat.arr[h])
    console.log("Inside for --change func")
    if(rc==arr_seat.arr[h]){
        seat_booked=true;
       console.log("IF");
      // break;
       
}
}
if(seat_booked==true){
    console.log("Nothing ie already booked")
}
else
{
    console.log("check and rc",present,rc)
  
    for(var j=0;j<arr.length;j++){
        
       if(arr[j]==rc){
           
           arr.splice(j,1)
           i=i-1;
           document.getElementById(rc).style.backgroundColor="brown";
           present=true;
          // break;
       
      }
    }
    if(present==false){
      document.getElementById(rc).style.backgroundColor="green";
        arr[i++]=rc;
    }
    
    
  
  
  
}

console.log("change Array_seat",arr)
      return arr;
}
function changecolor(){
    for(var s=0;s<8;s++){
        for(var p=0;p<16;p++){
            var str=String();
            var s=String(s);
            var p=String(p)
           // console.log("change",str.concat(s,p))
            var rc=str.concat(s,p)
            document.getElementById(rc).style.backgroundColor="brown";

        }
    }
}
function selected(Array_seat){
    //console.log("selected")
   changecolor();
   arr_seat=Array_seat;
   //console.log("selected arr_seat",arr_seat)
   // console.log("selected js seat",Array_seat)
    for(var f=0;f<Array_seat.arr.length;f++){
       // console.log("for loop js seat",Array_seat.arr[f])
        document.getElementById(Array_seat.arr[f]).style.backgroundColor="green";
    }
}
function active(num){
    console.log("num",num)
    document.getElementById(num).style.backgroundColor="green";
   // console.log("name",name)
}


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  
  // Modal Image Gallery
  function onClick(element) {
      console.log("on",element)
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  function active(id){
      var ooty="sav.png"
      console.log(id);
     var img= document.getElementById(id);
     console.log(img)
     img.title="SELECTED";
     img.src="../../assets/images/"+id;
    
     
  }

  function deact(id){
      var imgid,titleid
      if(id=="1.jpg"){
       imgid="pop.jpg"
       titleid="PopCorn -200"
      }
      if(id=="2.jpg"){
        imgid="coke.jpg"
        titleid="Coke -150"
       }
       if(id=="3.jpg"){
        imgid="sand.jpg"
        titleid="SandWich -200"
       }
       if(id=="4.jpg"){
        imgid="samosa.jpg"
        titleid="Samosa -100"
       }
       if(id=="5.jpg"){
        imgid="burger.jpg"
        titleid="Burger -250"
       }
       if(id=="6.jpg"){
         imgid="combo.jpg"
         titleid="Combo -350"
        }
        if(id=="7.jpg"){
         imgid="nach.jpg"
         titleid="Nachos -200"
        }
        if(id=="8.jpg"){
         imgid="ice.jpg"
         titleid="Moccha -250"
        }
      
      
     
      var img= document.getElementById(id);
      console.log(img)
      img.title=titleid;
      img.src="../../assets/images/"+imgid;
       
  }