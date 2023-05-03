const facts= ["Did you know: Fish are the oldest vertebrates on the planet, with fossil records dating back more than 500 million years.",
"Did you know: Some species of fish are capable of changing their color and even their sex.",
"Did you know: Fish are an important source of food for humans and are also used in the production of many products, including fish oil and fertilizer.",
"Did you know: Some species of fish, such as the clownfish, are able to change the sex of their offspring depending on environmental factors."];
function pagetwonavigate(){
    window.location.href = "page2.html";
}
function pagethreenavigate(){
    window.location.href = "page3.html";
}
function pagefourenavigate(){
    window.location.href = "page4.html";
}

function Showfacts(array) {
    let index = 0;
    const interval = setInterval(() => {
      document.getElementById("random-fact").innerHTML="<br><br>"+array[index];
      index++;
      if (index >= array.length) {
        index = 0;
      }
    }, 5000);
}
function randomfact() {
    Showfacts(facts)
}

function cookfish(){
    var fish = document.getElementsByName("fish");
    for(i = 0; i < fish.length; i++) {
        if(fish[i].value=="Sardine" && fish[i].checked){
        document.getElementById("fish-cook").innerHTML="<br> Best ways to cook Sardine is: Grilled: Brush with oil, season and grill for 3-4 minutes per side. <br>Pan-fried: Season and fry for 2-3 minutes per side.<br>Baked: Brush with oil, season and bake at 400°F (200°C) for 10-12 minutes.<br>Canned: Eat straight out of the can or use in recipes."
        }
        else if(fish[i].value=="Marlin" && fish[i].checked){
        document.getElementById("fish-cook").innerHTML="<br> Best ways to cook Marlin is: Grilled: Brush with oil, season and grill for 4-5 minutes per side. <br>Pan-seared: Season and cook for 3-4 minutes per side.<br>Broiled: Brush with oil, season and broil on high for 5-7 minutes per side.<br>Smoked: Marinate, then smoke over low heat for 2-3 hours."
        }
        else if(fish[i].value=="Tuna" && fish[i].checked){
            document.getElementById("fish-cook").innerHTML="<br> Best ways to cook Tuna is: Grilled: Brush with oil, season and grill for 2-3 minutes per side.<br>Pan-seared: Season and cook for 1-2 minutes per side.<br>Raw or seared: Use as sushi or sear briefly on each side.<br>Baked: Brush with oil, season and bake at 400°F (200°C) for 12-15 minutes."
        }
    }
    
}

function incquantity(id){
    var newvalue = parseInt(document.getElementById(id).value);
    newvalue += 1;
    document.getElementById(id).value = newvalue;
}
function decquantity(id){
    var newvalue = parseInt(document.getElementById(id).value);
    if(newvalue !=0){
        newvalue -= 1;
        document.getElementById(id).value = newvalue;
    }
}

function cash(){
    document.getElementById("confirm-purchase").innerHTML="<h1>Thank you for your purchase</h1>"
}
function credit(){
    document.getElementById("confirm-purchase").innerHTML=`Cardholder name: <input type="text"> <br> CVD: <input type="text"> <br> Cardnumber: <input type="text"> <br> City: <input type="text"> <br> <button onclick=cash()>submit</button>`
}