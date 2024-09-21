const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://takestwoeggs.com/wp-content/uploads/2022/02/Dan-Dan-Noodles-Dan-Dan-Mian-5overhead-sq.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let categoryDOM = document.querySelector("#category")
let elementDOM = document.querySelector("#element")

// Menu Category
let menu_category = [];
category_create("All")
menu.forEach((menu)=>{
  
  if(menu_category.indexOf(menu.category)==-1){

  menu_category.push(menu.category) 
  category_create(menu.category)
}
});

//Category Create DOM
function category_create(cat)
{

  let categoryItemDOM=document.createElement('button');
  categoryItemDOM.classList.add("btn-item","btn","btn-outline-dark");
  categoryItemDOM.innerHTML = cat;
  categoryItemDOM.id = cat;
  categoryDOM.append(categoryItemDOM);
  console.log(cat)
}


//All Items List
for(let count=0;count<menu.length;count++)
{
element_create(menu[count])
}


//Item DOM 
function element_create(item) {
  let elementItems=document.createElement("div")
  elementItems.id=item.id;
  elementItems.classList.add("menu-items","col-lg-6","col-sm-12")
  let elementPhoto=document.createElement('img')
  elementPhoto.src=item.img;
  elementPhoto.classList.add("photo")
  let elementInfo=document.createElement("div")
  elementInfo.classList.add("menu-info")
  let elementTitle=document.createElement("div")
  let elementTitle_title=document.createElement("h4")
  let elementTitle_price=document.createElement("h4")
  let elementText =document.createElement("div")
  elementTitle_title.innerHTML=item.title
  elementTitle_price.innerHTML=item.price
  elementTitle.classList.add("menu-title")
  elementText.innerHTML=item.desc
  elementText.classList.add("menu-text")
  elementTitle.appendChild(elementTitle_title)
  elementTitle.appendChild(elementTitle_price)
  elementItems.appendChild(elementPhoto);
  elementInfo.appendChild(elementTitle);
  elementInfo.appendChild(elementText);
  elementItems.appendChild(elementInfo);
  
  elementDOM.append(elementItems);
}

//category click mapping
categoryDOM.addEventListener("click",(e)=>{
  let newElements = []
  elementDOM.innerHTML=""

  //Button active remove before
  for(let count1=0;count1<categoryDOM.childElementCount;count1++)
  {
    categoryDOM.children[count1].classList.remove("active")
  }
  //Button active add 
  e.toElement.classList.add("active")
  
  // ELement not equal All
  if(e.toElement.innerHTML!="All")
  {
    newElements=menu.filter(menu=>menu.category==e.toElement.innerHTML)
  }
  //Element equal All
  else
  {
   newElements=[...menu] 
  }
  
  for(let count=0;count<newElements.length;count++)
    {
    element_create(newElements[count])
    }

})


