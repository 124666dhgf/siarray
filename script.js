

    

const colors=["red","yellow","green","magenta"];

document.getElementById("p").innerHTML=colors;
colors.pop();
document.getElementById("q").innerHTML=colors;
colors.push("purple");
document.getElementById("r").innerHTML=colors;
colors.shift();
document.getElementById("s").innerHTML=colors;
colors.unshift("red");
document.getElementById("t").innerHTML=colors;




const animals=["elephant","cat","lion","zebra"];
document.getElementById("par").innerHTML=animals;
animals.splice(2,2,"cow","sheep","goat");
document.getElementById("vac").innerHTML=animals;
animals.sort();
document.getElementById("aoi").innerHTML=animals;



/*function simpleinterest(p,t,r)
{
    si= ((p*t*r)/100);
    return si;
}
function totalamount(p,si)
{
    t=p+si;
    return t;
}

let SI=simplenterest(10000,5,100);
let ta=totalamount(p,si);
let sip=`simpleinterest=${SI} and Totalamount=${ta}`;

document.getElementById("hif").innerHTML=sip;*/



const veggies=["brinjal","tomato","carrot","beetroot"];

document.getElementById.apply("d1").innerHTML=veggies;
veggies.sort();
document.getElementById.apply("d2").innerHTML=veggies;
