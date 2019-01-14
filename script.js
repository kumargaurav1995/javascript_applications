function validation(){
    
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var password= document.getElementById("psw").value;
    var repassword=document.getElementById("re-psw").value;
    if(name=="" || email=="" || password=="" || repassword==""){
        document.getElementById("eresult1").innerHTML="All field Required";
        return false;
    }else if(name.length<4){
        document.getElementById("eresult1").innerHTML="Name must be atleast four character";
        return false;
    }else if(email.length<8){
        document.getElementById("eresult2").innerHTML="Email must be atleast eight character";
        return false;
    }else if(password.length<4){
        document.getElementById("eresult3").innerHTML="Password must be atleast four character";
        return false;
    }else if(password !== repassword){
        document.getElementById("eresult4").innerHTML="Password must be same";
        return false;
    }else{
        //window.location.href="http://www.google.com";
        return true;
        
    }
}