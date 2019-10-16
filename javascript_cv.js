function showMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function button1(){
    document.getElementById("skillset1").style.display = "none";
    document.getElementById("skillset2").style.display = "block";
}

function button2(){
    document.getElementById("skillset2").style.display = "none";
    document.getElementById("skillset1").style.display = "block";
}

function CVprof(){
    document.getElementById("cv1").style.display = "block";
    document.getElementById("cv2").style.display = "none";
    document.getElementById("cv3").style.display = "none";
    addClass("prof", "active");
    removeClass("coop", "active");
    removeClass("creative", "active");
}

function CVcoop(){
    document.getElementById("cv1").style.display = "none";
    document.getElementById("cv2").style.display = "block";
    document.getElementById("cv3").style.display = "none";
    addClass("coop", "active");
    removeClass("prof", "active");
    removeClass("creative", "active");
}

function CVcreative(){
    document.getElementById("cv1").style.display = "none";
    document.getElementById("cv2").style.display = "none";
    document.getElementById("cv3").style.display = "block";
    addClass("creative", "active");
    removeClass("prof", "active");
    removeClass("coop", "active");
}

function addClass(elementid, name){
    if (document.getElementById(elementid).className.indexOf(name) == -1){
        document.getElementById(elementid).className += " " + name
    }

}

function removeClass(elementid, name){
    $(document.getElementById(elementid)).removeClass(name);
}