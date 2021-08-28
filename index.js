// $(document).ready(()=>{
//    //write jquery code here



// })
var body=document.querySelector("body");
body.style.margin=0;
body.style.margin=0;
body.style.backgroundImage="linear-gradient(to right,#00e676,#00b0ff)";

var root=document.querySelector("#root");
var h3=document.createElement("h3");
//heading div 
h3.innerText="Rate Your Favourite Picture";
h3.style.textAlign="center";

root.appendChild(h3);


//adding the image div
var div=document.createElement("div");
div.style.width="300px";
div.style.height="300px";
// div.style.border="2px solid black";
div.style.boxShadow="0 0 15px 2px black";
div.style.position="absolute";
div.style.left="50%";
div.style.transform="translateX(-50%)";
var img=document.createElement("img");
// img.setAttribute("src","F:/Web Notes and Projects/Visual studio codes/Images/tree6.jpg");
img.setAttribute("src","https://picsum.photos/300/300");
img.style.width="300px";
img.style.height="300px";
img.setAttribute("alt","Image not found");
// img.style.marginLeft="-90px";
img.style.clipPath="clip-path: inset(5% 20% 15% 10%);"
// div.style.backgroundImage="url(F:/Web Notes and Projects/Visual studio codes/Images/hande ercel.jpg)"
div.appendChild(img);
root.appendChild(div);


//adding the rating stars
var div2=document.createElement("div");
// div2.innerText="Here we will add stars";
// div2.style.border="2px solid black";
div2.style.width="300px";
div2.style.height="50px";
div2.style.marginLeft="50%";
div2.style.transform="translateX(-50%)"
div2.style.marginTop="340px";
root.appendChild(div2);




//making a star
for(let i=0;i<5;i++){
var star=document.createElement("div");
star.setAttribute("class","star");
star.style.width="50px";
star.style.height="50px";
star.style.backgroundColor="white";
star.style.float="left";
star.style.padding="3px";
star.style.marginLeft="4px";
star.style.clipPath="polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
// star.style.backgroundColor="orange";
// star.classList.add("orange");
div2.appendChild(star);
}//for

//if we are hovering at the stars then
var star=document.querySelectorAll(".star");
star.forEach((item,index,array)=>{
    item.index=index+1;
    // item.addEventListener("click",ratingFun);
    item.addEventListener("mouseover",ratingFun);
    item.addEventListener("mouseout",ratingFun); 
    item.addEventListener("click",ratingFun);   
})
var flag=true;
function ratingFun(e){
    // console.log(e);
    
    let star=document.querySelectorAll(".star");
    let arr=Array.from(star);
    // console.log(star)
    // console.log(arr)
    //click event
    if(e.type==="click"){
        
        console.log(`${this.index} is clicked`);
        let a=this.index;
        for(let i=0;i<a;i++){
            console.log(`Till ${this.index} is colored orange`);
            arr[i].style.backgroundColor="orange";
            flag=false;
            document.querySelector(".rate").innerText=`You have rated this picture as ${this.index} stars`;
            // arr[i].classList.add("orange");
           
        }
       
        for(let j=a;j<arr.length;j++){
            
            console.log(`from ${this.index+1} is colored white`);
            arr[j].style.backgroundColor="white";
        }
    }//if
   
    //mouseover event
    if(e.type==="mouseover"){
        if(flag){
        var a=this.index;
        for(let i=0;i<a;i++){
            console.log(`Till ${this.index} is colored yellow`);
            arr[i].style.backgroundColor="Yellow";
        }
       
        for(let j=a;j<arr.length;j++){
            
            console.log(`from ${this.index+1} is colored white`);
            arr[j].style.backgroundColor="white";
        }
    }//if for flag
    }//if
    //mouseout event
    if(e.type==="mouseout"){
        if(flag){
        for(let j=0;j<arr.length;j++){
            
            console.log(`from ${this.index+1} is colored white`);
            arr[j].style.backgroundColor="white";
        }
    }//flag if
    }//if mouseout event
  


}//ratingFun

//adding the Rating comment div
var div3=document.createElement("div");
div3.setAttribute("class","rate");
div3.innerText="Ratings";

div3.style.backgroundImage="linear-gradient(to right,#00e676,#00b0ff);";
div3.style.marginLeft="50%";
div3.style.transform="translateX(-50%)";
// div3.style.border="2px solid black";
div3.style.width="300px";
div3.style.height="30px";
div3.style.lineHeight="30px";
div3.style.textAlign="center";
div3.style.marginTop="20px";
div3.style.boxShadow="5px 5px 20px 2px black";
root.appendChild(div3);


//adding the NEXT button
var btn=document.createElement("button");
btn.innerText="NEXT";
btn.style.width="70px";
btn.style.marginLeft="50%";
btn.style.transform="translateX(-50%)";
btn.style.marginTop="15px";
// btn.style.backgroundImage="linear-gradient(to right,#00e676,#00b0ff)"
btn.style.backgroundColor="#00bfa5";
btn.style.height="40px";
btn.style.outline="none";
btn.style.border="none";
btn.style.boxShadow="0 0 10px 0.1px white";
root.appendChild(btn);



btn.addEventListener("mouseover",()=>{
    btn.style.backgroundColor="white";
})
btn.addEventListener("mouseout",()=>{
    btn.style.backgroundColor="#00bfa5";
})
btn.addEventListener("click",()=>{
    window.location.reload();
})




