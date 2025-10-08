body_html= document.body;
body_html.style.cssText="background-color: #ccc"

/////header
let header_elemnet = document.createElement('div')
header_elemnet.id="header_Id";
header_elemnet.style.cssText="background-color: #eee ; border-radius:10px ; display:flex;justify-content:space-between;align-items:center ;padding:10px 20px;font-family:Arial;margin:10px"

//////////////////////// 
//title
let title_elemnet = document.createElement('div');
title_elemnet.id="htitle_Id";
title_elemnet.innerText="Abdo";
title_elemnet.style.cssText="color:Green ; font-weight:bold ; font-size:30px";


//nav
let nav_list = document.createElement('ul');
nav_list.id="nav_list_Id";

let li_elemnet1 = document.createElement('li');
li_elemnet1.innerHTML="Home";
nav_list.append(li_elemnet1);

let li_elemnet2 = document.createElement('li');
li_elemnet2.innerHTML="About";

nav_list.append(li_elemnet2);
let li_elemnet3 = document.createElement('li');
li_elemnet3.innerHTML="Services";

nav_list.append(li_elemnet3);
let li_elemnet4 = document.createElement('li');
li_elemnet4.innerHTML="Contact";

nav_list.append(li_elemnet4);

nav_list.style.cssText="list-style:none;display:flex;gap:20px;font-size:20px;color:#888 ;font-weight:bold ;cursor:pointer";


header_elemnet.append(title_elemnet, nav_list);
body_html.append(header_elemnet)

////////////////////////////////////////////////////////////////


/////main
let main_elemnet= document.createElement('div')
main_elemnet.id="main_Id";
main_elemnet.style.cssText="gap:20px; min-height:100vh  ;background-color: #eee ; border-radius:10px ; display:flex;justify-content:space-evenly;flex-wrap:wrap ;align-items:center ;padding:10px 20px;font-family:Arial;margin:10px"

for (let i=1 ; i<=15 ; i++){
    let box_elemnet = document.createElement('div');
    box_elemnet.className="box_class";
    box_elemnet.innerText=i;

    let div = document.createElement('div');
    div.innerText = "product";
    box_elemnet.append(div);

    box_elemnet.style.cssText=" display:flex ; flex-direction:column; align-items:center; justify-content: center ;  background-color:#fff ; border-radius:10px ; height:150px ; width:calc(80%/3) ;font-size:20px;color:black ;font-weight:bold ;cursor:pointer ; gap:10px;";
    main_elemnet.append(box_elemnet)
}

body_html.append(main_elemnet)

document.querySelectorAll('.box_class div').forEach(e => e.style.color = "#ccc");
