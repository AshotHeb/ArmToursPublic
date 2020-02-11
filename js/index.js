





/////////////////////// Language Bar

function englishHover(){
  let height = 0;
  let x = "";
  let y ="";
  let slaq  = document.querySelector(".slaq");
  let englishHover = document.querySelector(".englishHover");
  let flag = document.querySelector(".flag");
  let redArrow  = document.querySelector(".redArrow");
  let blockOne  =document.querySelector(".block_one");
  blockOne.style.position  ="relative";
  let languages = document.querySelector(".languages");
  languages.style.display = "none";
  englishHover.style.position ="absolute";
  englishHover.style.top = 25 +"%";
  englishHover.style.right  = -10+"%";
  

   
      slaq.addEventListener("click",()=>{
        clearInterval(y);
        
        flag.style.display =" none";
        slaq.style.display =" none";
        redArrow.style.display="block";
       
        
        x = setInterval(()=>{
        if(height < 80){
        englishHover.style.height = `${height++}%`;
        }
        if(height ==30){
          languages.style.display = "block";
        }

    },1)
  
  })

    redArrow.addEventListener("click",e=>{
      clearInterval(x);
      flag.style.display =" block";
      slaq.style.display =" block";
      redArrow.style.display="none";

      y  = setInterval(()=>{
        if(height>=0){
          englishHover.style.height = `${height--}%`
        }
        if(height ==30){
          languages.style.display = "none";
        }
      },1)


      
    })
//////////////<div class="englishHover">
					///					<div class="languages"><ul > <li> <a href="#">Հայ</a>  </li>   <li><a href="#">Рус</a> </li> <li><a href="#">Eng</a></li> </ul>  </div>
					///					<div class="redArrow"> <a href="#"> <img src="images/redArrowTop.png" alt="arrow">  </a>     </div>
					//				</div>

}




//////Language English Flag



            //Search       Icon

  function search(){
    let search  =document.querySelector(".searchInput");
    let searchImg = document.querySelector(".searchImg") ;
    let exanak = document.querySelector(".exanak");
    let searchDiv = document.querySelector( ".search" ) ;
    let count =0;
    
    searchImg.addEventListener("click" , e=>{
      
      if(count%2==0){
      searchDiv.style.position = "absolute";
      search.style.width= "60%";
      search.style.marginRight = "0px";
      search.style.transition  = "width 0.8s" ;
      search.style.paddingLeft = "37px";
      exanak.style.visibility = "hidden";
    count++; 
    search.style.cursor ="text";

    }else{
      
      search.style.width= "0%";
      search.style.transition  = "width 0.8s" ;
      search.style.paddingLeft = "32px";
      exanak.style.visibility = "visible";
     
      count++;

    }
    

    
    
  })
            }
            search();

  //////Search Icon




  /////menu akardion
function akkordeon(){
  let arajinakkordeon = document.querySelectorAll(".arajinakkordeon");
  let erkrordAkkordeon  =document.querySelectorAll(".erkrordAkkordeon");
  
  let navList = document.querySelector(".nav_list");
  let list =document.querySelectorAll(".list");
  list = Array.from(list)
  let akkordeonBoolean = false;
  let arajinakkordeonArray = document.querySelectorAll(".arajinakkordeon");
  let block =document.querySelectorAll(".listBlock");
  let heads = document.querySelectorAll(".head");

  
  
  navList.addEventListener("click",e=>{
      let target = e.target;

  
      if(target.className =="listBlock" && target.dataset.id !="home" && target.dataset.id != "gallery"){

        
  
          arajinakkordeonArray.forEach(item=>{
              if(target.dataset.id != item.dataset.id){
              item.classList.remove("active");
             
              }
          });
  
         if(target.nextElementSibling.classList[1] != "active"){
  
          target.nextElementSibling.classList.add("active");
          akkordeonBoolean = true;
          
         }else{
          target.nextElementSibling.classList.remove("active");
          akkordeonBoolean =false;
         }
  
         erkrordAkkordeon.forEach(item=>{
             item.classList.remove("active")
         });   
      
      
      if(akkordeonBoolean){
          list.forEach(item=>{
              item.classList.add("listActive")
          })
  
      }else{
          list.forEach(item=>{
              item.classList.remove("listActive");
          })
      }
  }else{
      
  } 
     
  });
  
  
  
  
  ////Erkrord Akkorden
  
  
  
  
  arajinakkordeon.forEach(list2=>{
  
      list2.addEventListener("click",e=>{
          let target =e.target;
          
  
          if(target.className=="list2"){
              erkrordAkkordeon.forEach(item=>{
                  if(target.dataset.id == item.dataset.id){
                      item.classList.add("active");
                      list2.classList.remove("active");
                      
                    
  
  
                  }
              })
          }
          
      //headClick
      heads.forEach(head=>{
        head.addEventListener("click",e=>{
            erkrordAkkordeon.forEach(item=>{
              item.classList.remove("active");
              arajinakkordeon.forEach(list2=>{
                if(list2.dataset.id=="tours"){
                  list2.classList.add("active");
                }
              })
            })
        })
      })

      })
  
  });
  
        
  
  
  
  
  
  



}

akkordeon();

/////////Menu events

////Contents

let DynamicTourContent= document.querySelector("#DynamicTourContent");
let StaticTourContent= document.querySelector("#StaticTourContent");
let GastroTourContent= document.querySelector("#GastroTourContent");
let NightTourContent= document.querySelector("#NightTourContent");
let ExtremalTourContent= document.querySelector("#ExtremalTourContent");


class Tours{
  constructor(leftImg, nameofTour, name, bottomBackground ,bottomText,id,content){
      this.leftImg = leftImg;
      this.nameofTour = nameofTour;
      this.name=name;
      this.bottomBackground = bottomBackground;
      this.bottomText = bottomText;
      this.id=id;
      this.content=content;
  }

  paintPage(){
    
    let toursBig = document.createElement("div");
    toursBig.setAttribute("class","toursBig");
    toursBig.setAttribute("id",this.id);

    let toursTop= document.createElement("div");
    toursTop.setAttribute("class","toursTop");



    let topLeftBlock= document.createElement("div");
    topLeftBlock.setAttribute("class","topLeftBlock");
    toursTop.append(topLeftBlock);
    let topRightBlock = document.createElement("div");
    topRightBlock.setAttribute("class","topRightBlock");
    toursTop.append(topRightBlock);
    
    let topLeftText = document.createElement("div");
    topLeftText.setAttribute("class","topLeftText");
    topRightBlock.append(topLeftText);
    toursBig.append(toursTop);

    


    //TOP LEft
    let topLeftImg = document.createElement("img");
    topLeftImg.setAttribute("src",this.leftImg);
    topLeftBlock.append(topLeftImg);
    let topLeftSpan = document.createElement("span");
    topLeftSpan.innerHTML = this.nameofTour;
    topLeftBlock.append(topLeftSpan);
    //Top Right
    let LeftImgDiv = document.createElement("div");
    LeftImgDiv.setAttribute("class","toursRightImgDiv");
    let leftImg = document.createElement("img");
    leftImg.setAttribute("src","images/staticTour/top_right_icon.png");
    LeftImgDiv.append(leftImg)
    let topRightpar = document.createElement("p");
    topRightpar.innerHTML = this.name;
    topLeftText.append(topRightpar);
    topLeftText.append(LeftImgDiv)

    //Bottom Block

    
    let toursBottom =document.createElement("div");
    toursBottom.setAttribute("class","toursBottom");
    

    let toursBottom1  =document.createElement("div");
    toursBottom1.setAttribute("class","toursBottom1");
    toursBottom.append(toursBottom1);


    let toursBottomTextContent =document.createElement("div");
    toursBottomTextContent.setAttribute("class","toursBottomTextContent")
    let toursBottomText =document.createElement("div");

    toursBottomTextContent.append(toursBottomText);
    toursBottomText.setAttribute("class","toursBottomText");
    toursBottom1.append(toursBottomTextContent);
    

    let tourText = document.createElement("p");
    tourText.innerHTML = this.bottomText;
    toursBottomText.append(tourText);

    
    toursBottomTextContent.append(toursBottomText);
    

    toursBottom1.style.backgroundImage = `url(${this.bottomBackground})`; 
   
    
    toursBig.append(toursBottom);
    
    let moreOrder=  document.createElement("div");
    moreOrder.setAttribute("class","moreOrder");
    let moreOrderImg = document.createElement("img");
    moreOrderImg.setAttribute("class","moreOrderImg");
    moreOrderImg.setAttribute("src","images/dinamicTour/bottom.png");
    let more = document.createElement("span");
    more.innerHTML = "More";
    more.setAttribute("class","more")

    let order = document.createElement("span");
    order.innerHTML="Order";
    order.setAttribute("class","order")
    more.setAttribute("class","more");
    moreOrder.append(more);
    moreOrder.append(order)
    moreOrder.append(moreOrderImg);
  
    toursBig.append(moreOrder)

    this.content.append(toursBig)

    


    


  }
}



let Garni =new Tours("images/dinamicTour/dinamiclogo.png", "Dynamic Tour", " GARNI", "images/dinamicTour/garni.jpg" ,"Garni is remarkable with a number of historical and architectural monuments of the Hellenistic and early Christian era. The most prominent among them are Garni temple and the fortress of the same name. Moreover, there you will find the ruins of the royal palace and baths built according to the Roman methodology. The museum-reserve is situated on the territory of 5 hectares, 28 kilometers away from Yerevan. In 2011 the complex received the prestigious award of the UNESCO-Greece Melina Mercouri International Prize. " ,"garni",DynamicTourContent);
Garni.paintPage();

let Gexard =new Tours("images/dinamicTour/dinamiclogo.png", "Dynamic Tour", "GEGHARD", "images/dinamicTour/geghard.jpg" ,"The monastery of Geghard contains a number of churches and tombs, most of them cut into the rock, which illustrate the very peak of Armenian medieval architecture. The complex of medieval buildings is set into a landscape of great natural beauty, surrounded by towering cliffs at the entrance to the Azat Valley. ","geghard",DynamicTourContent );
Gexard.paintPage();

let Tatev =new Tours("images/dinamicTour/dinamiclogo.png", "Dynamic Tour", "TATEV", "images/dinamicTour/tatev.jpg" ,`The Tatev Monastery (Armenian: Տաթևի վանք Tat'evi vank') is a 9th-century Armenian Apostolic monastery located on a large basalt plateau near the Tatev village in Syunik Province in southeastern Armenia. The term "Tatev" usually refers to the monastery. The monastic ensemble stands on the edge of a deep gorge of the Vorotan River. Tatev is known as the bishopric seat of Syunik and played a significant role in the history of the region as a center of economic, political, spiritual and cultural activity.`,"tatev",DynamicTourContent );
Tatev.paintPage();

let Sevan =new Tours("images/dinamicTour/dinamiclogo.png", "Dynamic Tour", "SEVAN", "images/dinamicTour/sevan.jpg" ,`Lake Sevan is located in the north-eastern part of the Armenian Highland, in Gegharkunik Region. Sevan is considered to be one of the three ancient and biggest lakes (Vana and Urmia) of the Armenian Kingdom. It was called the “blue eyes” of Armenia and is surrounded by Geghama, Vardenis, Pambak, Sevan and Areguni mountain chains. The blue beauty of Armenia situates at an altitude of 1900m above sea level and the total surface area is about 5000 km2. It was famous with the names of "Geghama Tsov(in English sea), Gegharkunyats Tsov".` ,"sevan",DynamicTourContent);
Sevan.paintPage();


let Parz =new Tours("images/dinamicTour/dinamiclogo.png", "Dynamic Tour", "PARZ LAKE", "images/dinamicTour/parzLich.jpg" ,`It is located in Dilijan National Park (Tavush region of Armenia), at the altitude of 1400 meters above sea. It is  about 7 kilometers far from Dilijan city, so you can choose to drive to lake or to walk through forest.Take into consideration, that the road is old and rather bad in some parts.

Don’t forget to bring your photo cameras with you, because you’re about to find something fantastic.

There is no “best time” for visiting lake Parz : it is beautiful any time of the year. The view of lake is stunning in winter, spring, summer and especially in autumn. But no matter which season it is, lake Parz  is a heaven for those who love to enjoy peace and silence.`,"parz",DynamicTourContent );
Parz.paintPage();



class StaticTour extends Tours{
  paintPage(){
    let toursBig = document.createElement("div");
    toursBig.setAttribute("class","toursBig");
    toursBig.setAttribute("id",this.id);

    let toursTop= document.createElement("div");
    toursTop.setAttribute("class","toursTop");



    let topLeftBlock= document.createElement("div");
    topLeftBlock.setAttribute("class","topLeftBlock");
    toursTop.append(topLeftBlock);
    let topRightBlock = document.createElement("div");
    topRightBlock.setAttribute("class","topRightBlock");
    toursTop.append(topRightBlock);
    
    let topLeftText = document.createElement("div");
    topLeftText.setAttribute("class","topLeftText");
    topRightBlock.append(topLeftText);
    toursBig.append(toursTop);

    


    //TOP LEft
    let topLeftImg = document.createElement("img");
    topLeftImg.setAttribute("src",this.leftImg);
    topLeftBlock.append(topLeftImg);
    let topLeftSpan = document.createElement("span");
    topLeftSpan.innerHTML = this.nameofTour;
    topLeftBlock.append(topLeftSpan);
    //Top Right
    let LeftImgDiv = document.createElement("div");
    LeftImgDiv.setAttribute("class","toursRightImgDiv");
    let leftImg = document.createElement("img");
    leftImg.setAttribute("src","images/staticTour/top_right_icon.png");
    LeftImgDiv.append(leftImg);
    let LeftImgDiv2 = document.createElement("div");
    LeftImgDiv2.setAttribute("class","toursRightImgDiv2");
    let leftImg2 = document.createElement("img");
    leftImg2.setAttribute("src","images/staticTour/top_right_icon.png");
    LeftImgDiv2.append(leftImg2);



    let topRightpar = document.createElement("p");
    topRightpar.innerHTML = this.name;
    topLeftText.append(topRightpar);
    topLeftText.append(LeftImgDiv)
    topLeftText.append(LeftImgDiv2)

    //Bottom Block

    
    let toursBottom =document.createElement("div");
    toursBottom.setAttribute("class","toursBottom");
    

    let toursBottom1  =document.createElement("div");
    toursBottom1.setAttribute("class","toursBottom1");
    toursBottom.append(toursBottom1);


    let toursBottomTextContent =document.createElement("div");
    toursBottomTextContent.setAttribute("class","toursBottomTextContent")
    let toursBottomText =document.createElement("div");

    toursBottomTextContent.append(toursBottomText);
    toursBottomText.setAttribute("class","toursBottomText");
    toursBottom1.append(toursBottomTextContent);
    

    let tourText = document.createElement("p");
    tourText.innerHTML = this.bottomText;
    toursBottomText.append(tourText);

    
    toursBottomTextContent.append(toursBottomText);
    

    toursBottom1.style.backgroundImage = `url(${this.bottomBackground})`; 
   
    
    toursBig.append(toursBottom);
    
    let moreOrder=  document.createElement("div");
    moreOrder.setAttribute("class","moreOrder");
    let moreOrderImg = document.createElement("img");
    moreOrderImg.setAttribute("class","moreOrderImg");
    moreOrderImg.setAttribute("src","images/dinamicTour/bottom.png");
    let more = document.createElement("span");
    more.innerHTML = "More";
    more.setAttribute("class","more")

    let order = document.createElement("span");
    order.innerHTML="Order";
    order.setAttribute("class","order")
    more.setAttribute("class","more");
    moreOrder.append(more);
    moreOrder.append(order)
    moreOrder.append(moreOrderImg);
  
    toursBig.append(moreOrder)

    this.content.append(toursBig)
  }
}

let Cascade = new StaticTour("images/staticTour/top_left.png","Static Tour","CASCADE","images/staticTour/cascade.jpg","The building that now houses the Cafesjian Center for the Arts is well known to the Armenian people, especially those living in its capital city of Yerevan. Known as “The Cascade,” the complex was originally conceived by the architect Alexander Tamanyan (1878–1936). Tamanyan desired to connect the northern and central parts of the city—the historic residential and cultural centers of the city—with a vast green area of waterfalls and gardens, cascading down one of the city’s highest promontories. ", "cascade",StaticTourContent)
Cascade.paintPage();

let Opera = new StaticTour("images/staticTour/top_left.png","Static Tour","OPERA","images/staticTour/opera.jpg","The next wonder of Armenian Architecture is the building of Opera and Ballet Theatre named after Aleksandr Spendarian. Being located right in the heart of Yerevan, this building is the other masterpiece of Aleksandr Tamanyan. His masterpiece awarded for the big prize in the worldwide exhibition in Paris. This building is considered to be the symbol of music culture which shows us its luxury and classic beauty. ", "opera",StaticTourContent)
Opera.paintPage();

let Square = new StaticTour("images/staticTour/top_left.png","Static Tour","R. SQUARE","images/staticTour/square.jpg","The building that now houses the Cafesjian Center for the Arts is well known to the Armenian people, especially those living in its capital city of Yerevan. Known as “The Cascade,” the complex was originally conceived by the architect Alexander Tamanyan (1878–1936). Tamanyan desired to connect the northern and central parts of the city—the historic residential and cultural centers of the city—with a vast green area of waterfalls and gardens, cascading down one of the city’s highest promontories. ", "square",StaticTourContent)
Square.paintPage();

let LovePark = new StaticTour("images/staticTour/top_left.png","Static Tour","LOVERS PARK","images/staticTour/lovePark.jpeg","Lovers' Park Landscaping and Design Project started in 2006. The design for the reconstruction of the new Lovers' Park was conceived by Pierre Rambach, a well-known landscape architect from Switzerland, author of many books and articles on Japanese... ", "lovePark",StaticTourContent)
LovePark.paintPage();

let FrenchPark = new StaticTour("images/staticTour/top_left.png","Static Tour","FRENCH PARK","images/staticTour/frenchPark.jpeg","Parks are lovely places that we go when we want to relax or need to be alone. There are many beautiful parks in Yerevan where you can rest and reconnect with nature. Here is the list of the best parks which are located in the capital of the country. We are sure that you will spend a great time in any of those cozy parks. Don't forget to visit them, when you are in our city. Let's start! ", "frenchPark",StaticTourContent)
FrenchPark.paintPage();


class NightTour extends Tours{
  paintPage(){
    let toursBig = document.createElement("div");
    toursBig.setAttribute("class","toursBig");
    toursBig.setAttribute("id",this.id);

    let toursTop= document.createElement("div");
    toursTop.setAttribute("class","toursTop");



    let topLeftBlock= document.createElement("div");
    topLeftBlock.setAttribute("class","topLeftBlock");
    toursTop.append(topLeftBlock);
    let topRightBlock = document.createElement("div");
    topRightBlock.setAttribute("class","topRightBlock");
    toursTop.append(topRightBlock);
    
    let topLeftText = document.createElement("div");
    topLeftText.setAttribute("class","topLeftText");
    topRightBlock.append(topLeftText);
    toursBig.append(toursTop);

    


    //TOP LEft
    let topLeftImg = document.createElement("img");
    topLeftImg.setAttribute("src",this.leftImg);
    topLeftBlock.append(topLeftImg);
    let topLeftSpan = document.createElement("span");
    topLeftSpan.innerHTML = this.nameofTour;
    topLeftBlock.append(topLeftSpan);
    //Top Right
    let LeftImgDiv = document.createElement("div");
    LeftImgDiv.setAttribute("class","toursRightImgDiv");
    LeftImgDiv.classList.add("birdNight")
    let leftImg = document.createElement("img");
    leftImg.setAttribute("src","images/staticTour/top_right_icon.png");
    LeftImgDiv.append(leftImg);
    



    let topRightpar = document.createElement("p");
    topRightpar.innerHTML = this.name;
    topLeftText.append(topRightpar);
    topLeftText.append(LeftImgDiv)
  

    //Bottom Block

    
    let toursBottom =document.createElement("div");
    toursBottom.setAttribute("class","toursBottom");
    

    let toursBottom1  =document.createElement("div");
    toursBottom1.setAttribute("class","toursBottom1");
    toursBottom.append(toursBottom1);


    let toursBottomTextContent =document.createElement("div");
    toursBottomTextContent.setAttribute("class","toursBottomTextContent")
    let toursBottomText =document.createElement("div");

    toursBottomTextContent.append(toursBottomText);
    toursBottomText.setAttribute("class","toursBottomText");
    toursBottom1.append(toursBottomTextContent);
    

    let tourText = document.createElement("p");
    tourText.innerHTML = this.bottomText;
    toursBottomText.append(tourText);

    
    toursBottomTextContent.append(toursBottomText);
    

    toursBottom1.style.backgroundImage = `url(${this.bottomBackground})`; 
   
    
    toursBig.append(toursBottom);
    
    let moreOrder=  document.createElement("div");
    moreOrder.setAttribute("class","moreOrder");
    let moreOrderImg = document.createElement("img");
    moreOrderImg.setAttribute("class","moreOrderImg");
    moreOrderImg.setAttribute("src","images/dinamicTour/bottom.png");
    let more = document.createElement("span");
    more.innerHTML = "More";
    more.setAttribute("class","more")

    let order = document.createElement("span");
    order.innerHTML="Order";
    order.setAttribute("class","order")
    more.setAttribute("class","more");
    moreOrder.append(more);
    moreOrder.append(order)
    moreOrder.append(moreOrderImg);
  
    toursBig.append(moreOrder)

    this.content.append(toursBig)
  }
} 



let CascadeNight = new NightTour("images/nightTour/top_left.png","Night Tour","Yerevan Cascade","images/nightTour/cascade.png","The building that now houses the Cafesjian Center for the Arts is well known to the Armenian people, especially those living in its capital city of Yerevan. Known as “The Cascade,” the complex was originally conceived by the architect Alexander Tamanyan (1878–1936). Tamanyan desired to connect the northern and central parts of the city—the historic residential and cultural centers of the city—with a vast green area of waterfalls and gardens, cascading down one of the city’s highest promontories. ", "cascadeNight",NightTourContent)
CascadeNight.paintPage();

let SquareNight = new NightTour("images/nightTour/top_left.png","Night Tour","Republic Square","images/nightTour/square.jpg","The next wonder of Armenian Architecture is the building of Opera and Ballet Theatre named after Aleksandr Spendarian. Being located right in the heart of Yerevan, this building is the other masterpiece of Aleksandr Tamanyan. His masterpiece awarded for the big prize in the worldwide exhibition in Paris. This building is considered to be the symbol of music culture which shows us its luxury and classic beauty. ", "squareNight",NightTourContent)
SquareNight.paintPage();

let GarniNight = new NightTour("images/nightTour/top_left.png","Night Tour","Yerevan	City","images/nightTour/night1.jpg","The building that now houses the Cafesjian Center for the Arts is well known to the Armenian people, especially those living in its capital city of Yerevan. Known as “The Cascade,” the complex was originally conceived by the architect Alexander Tamanyan (1878–1936). Tamanyan desired to connect the northern and central parts of the city—the historic residential and cultural centers of the city—with a vast green area of waterfalls and gardens, cascading down one of the city’s highest promontories. ", "garniNight",NightTourContent)
GarniNight.paintPage();

let XorvirapNight = new NightTour("images/nightTour/top_left.png","Night Tour"," Swan Lake","images/nightTour/karap.jpg","Lovers' Park Landscaping and Design Project started in 2006. The design for the reconstruction of the new Lovers' Park was conceived by Pierre Rambach, a well-known landscape architect from Switzerland, author of many books and articles on Japanese... ", "xorvirapNight",NightTourContent)
XorvirapNight.paintPage();

let OperaNight = new NightTour("images/nightTour/top_left.png","Night Tour","Opera Theatre","images/nightTour/opera.jpg","Parks are lovely places that we go when we want to relax or need to be alone. There are many beautiful parks in Yerevan where you can rest and reconnect with nature. Here is the list of the best parks which are located in the capital of the country. We are sure that you will spend a great time in any of those cozy parks. Don't forget to visit them, when you are in our city. Let's start! ", "aparanNight",NightTourContent)
OperaNight.paintPage();
















// function menuEvents(){
//   let DynamicToursArray  =[Garni,Gexard,Tatev,Sevan,Parz]
//   //home Content
//   let homeContent = document.querySelector(".homeContent");
//   let home = document.querySelector("#home");

//     home.addEventListener("click",e=>{
//       homeContent.scrollIntoView({behavior:"smooth"});
//     });
//   //tours Content
//   let toursContent= document.querySelector(".toursContent");
//   let arajinakkordeonAll=document.querySelectorAll(".arajinakkordeon");
//   arajinakkordeonAll.forEach(arajinakkordeon=>{
//     arajinakkordeon.addEventListener("click",e=>{
//       let arajinakkordeonChild=arajinakkordeon.children;
     
  
//       arajinakkordeonChild =Array.from(arajinakkordeonChild);
//       arajinakkordeonChild.forEach(item=>{
        
//         item.addEventListener("click",e=>{
          
//           item.scrollIntoView({behavior:"smooth"});
          
         
            
            
         
            
          
    
//       });
//       });
//     });
   
//   })
      
//    let erkrordAkkordeon  =document.querySelector(".erkrordAkkordeon");
//    let erkrordAkkordeonChild = erkrordAkkordeon.children;
//    erkrordAkkordeonChild = Array.from(erkrordAkkordeonChild);
   
//    erkrordAkkordeonChild.forEach(item=>{
//      item.addEventListener("click",e=>{
//       erkrordAkkordeonChild.forEach(andam=>andam.classList.remove("headDivActive"));
      
//       DynamicToursArray.forEach(elen=>{
//         if(item.dataset.id ==  elen.id  ){
//          let toursContentChild =  toursContent.children;
//          toursContentChild =Array.from(toursContentChild);
//          toursContentChild.forEach(child=>{
//            if(child.id == elen.id){
            
//             child.scrollIntoView({behavior:"smooth"});
//             item.classList.add("headDivActive");
//            }
//          })
//         }
//       })

//      })
//    })
  
  
//   //tour types

      

  
  
  
 
// }

function menuEventsClick2(){

  let homeContent = document.querySelector(".homeContent");
  let home = document.querySelector("#home");
  let arajinakkordeonAll= Array.from(  document.querySelectorAll(".arajinakkordeon") )
  let erkrordAkkordeonAll= Array.from(  document.querySelectorAll(".erkrordAkkordeon") );

 
   //home Content
 
     home.addEventListener("click",e=>{
       homeContent.scrollIntoView({behavior:"smooth"});
     });



     ////ErkrordAkkordeon Content  Items Click 


  arajinakkordeonAll.forEach(arajinakkordeon=>{
    arajinakkordeonChilds  = Array.from( arajinakkordeon.children );
    
    arajinakkordeonChilds.forEach(child=>{
      child.addEventListener("click",e=>{
                /////Jnjum enq bolor menui urac andamnery :)
                erkrordAkkordeonAll.forEach(erkrordAkkordeon=>{
                  let erkrordAkkordeonChild  =Array.from(erkrordAkkordeon.children);
                  erkrordAkkordeonChild.forEach(item=>{
                    item.classList.remove("headDivActive");
                  })
                })



        erkrordAkkordeonAll.forEach(erkrordAkkordeon=>{
          if(erkrordAkkordeon.dataset.id == child.dataset.id){
            let erkrordAkkordeonChild = Array.from(erkrordAkkordeon.children);
            erkrordAkkordeonChild.forEach(item=>{
              item.addEventListener("click",e=>{
                if(item.dataset.id){
                  let toursContents = Array.from(document.querySelectorAll(".Content"));
                  let contentChildren =[];
                  let contentChildrenEnding = []; 
                  toursContents.forEach(contentchilds=>{
                    contentChildren.push(Array.from(contentchilds.children))
                  })
                  contentChildren.forEach(child=>{
                    child.forEach(childchild=>{
                      contentChildrenEnding.push(childchild)
                      
                    })
                  })       

                  contentChildrenEnding.forEach(tour=>{
                    if(tour.id == item.dataset.id){
                      tour.scrollIntoView({behavior:"smooth"});


                      ///Menui vor andami dashtna erevum inqy uruma
                      erkrordAkkordeonChild.forEach(child=>{
                        child.classList.remove("headDivActive");
                      })
                      
                      item.classList.add("headDivActive");
                    }
                  })


                }
              })
            })
          }
        })


      })
    })

  })

  



}
menuEventsClick2();



