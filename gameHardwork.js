user1="";
user2="";
function login(){
    user1=document.getElementById("input_player1").value;
    user2=document.getElementById("input_player2").value;
    localStorage.setItem("username1",user1);
    localStorage.setItem("username2",user2);
    window.location="game_2ndpage.html";
}