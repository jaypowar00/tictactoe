var name = "";
var turn = true;
var move = 1;
var places;
var rand;
var tic = [
			"#dashboard tr:nth-child(1) td:nth-child(1)",
			"#dashboard tr:nth-child(1) td:nth-child(2)",
			"#dashboard tr:nth-child(1) td:nth-child(3)",
			"#dashboard tr:nth-child(2) td:nth-child(1)",
			"#dashboard tr:nth-child(2) td:nth-child(2)",
			"#dashboard tr:nth-child(2) td:nth-child(3)",
			"#dashboard tr:nth-child(3) td:nth-child(1)",
			"#dashboard tr:nth-child(3) td:nth-child(2)",
			"#dashboard tr:nth-child(3) td:nth-child(3)"
];
function validate(button){
	console.log("this is js");
	if($("#name").val()){
		name = $("#name").val();
		document.getElementById('input').innerHTML = `<input type="submit" id="btn" value="Play" onclick="startTheGame(this)"></button><br>`;
		console.log("Name is "+name);
	}else{
		alert("Enter Name Please");
		reload();
		window.location.href = "index.html";
	}
}
function startTheGame(playbtn){
	document.getElementById('input').innerHTML = ``;
	document.getElementById('input1').innerHTML = `<h1><pre>${name} Vs Computer(BOT)</pre></h1>`;
	document.getElementById('dashboard').innerHTML = `<tr class="row">
    	<td id="c00"></td>
	    <td id="c01"></td>
	    <td id="c02"></td>
  	</tr>
  	<tr class="row">
	    <td id="c10"></td>
	    <td id="c11"></td>
	    <td id="c12"></td>
 	</tr>
 	<tr class="row">
	    <td id="c20"></td>
	    <td id="c21"></td>
	    <td id="c22"></td>
 	</tr>`;
	places = [1,2,3,4,5,6,7,8,9];
 	theGameBegins();
}
function theGameBegins(){

 	console.log(places);
 	console.log(tic);
 	console.log("Bot Is Working");
      move = 1;
      turn = true;
      $("#dashboard tr td").click(function() {
        if ($(this).text()=="" && turn) {
          if ((move%2)==1){
            $(this).append("X");
            modifyArray();
          }
          move++;
          if (ForWinner()!=-1 && ForWinner()!=""){ 
            if (ForWinner()=="X"){
              alert(`Congratulations ${name} !\nYou Won!`);
            }else{
              alert("Better Luck Next Time!\nYou Lost");
            }
            turn = false; 
          }
        }
    });
      function ForWinner() {
        var field1 = $("#dashboard tr:nth-child(1) td:nth-child(1)").text();
        var field2 = $("#dashboard tr:nth-child(1) td:nth-child(2)").text();
        var field3 = $("#dashboard tr:nth-child(1) td:nth-child(3)").text();
        var field4 = $("#dashboard tr:nth-child(2) td:nth-child(1)").text();
        var field5 = $("#dashboard tr:nth-child(2) td:nth-child(2)").text();
        var field6 = $("#dashboard tr:nth-child(2) td:nth-child(3)").text();
        var field7 = $("#dashboard tr:nth-child(3) td:nth-child(1)").text();
        var field8 = $("#dashboard tr:nth-child(3) td:nth-child(2)").text();
        var field9 = $("#dashboard tr:nth-child(3) td:nth-child(3)").text();
        if  ((field1==field2)&&(field2==field3)) { return field3; }
        else if ((field4==field5)&&(field5==field6)) { return field6; }
        else if ((field7==field8)&&(field8==field9)) { return field9; }
        else if ((field1==field4)&&(field4==field7)) { return field7; }
        else if ((field2==field5)&&(field5==field8)) { return field8; }
        else if ((field3==field6)&&(field6==field9)) { return field9; }
        else if ((field1==field5)&&(field5==field9)) { return field9; }
        else if ((field3==field5)&&(field5==field7)) { return field7; }
        return -1;
      };
		function startTheBot(){
			console.log(move);
			if (turn) {
				console.log("before bot"+places.length);
				rand = places[Math.floor(Math.random() * places.length)];
				while(rand >= places.length){
					rand = places[Math.floor(Math.random() * places.length)];
				}
				console.log("rand 1- "+rand);
				console.log("rand 2- "+rand);
				console.log("place[rand] - "+places[rand]);
				var newindex = places[rand];
				remove_array_element(places[rand]);
				$(tic[newindex-1]).text("O");
				move++;
				console.log("after bot"+places.length);
			}
		};
		function modifyArray(){
			console.log("Modifying array");
				if($("#dashboard tr:nth-child(1) td:nth-child(1)").text()){
					remove_array_element(1);
				}
				if($("#dashboard tr:nth-child(1) td:nth-child(2)").text()){
					remove_array_element(2);
				}
				if($("#dashboard tr:nth-child(1) td:nth-child(3)").text()){
					remove_array_element(3);
				}
				if($("#dashboard tr:nth-child(2) td:nth-child(1)").text()){
					remove_array_element(4);
				}
				if($("#dashboard tr:nth-child(2) td:nth-child(2)").text()){
					remove_array_element(5);
				}
				if($("#dashboard tr:nth-child(2) td:nth-child(3)").text()){
					remove_array_element(6);
				}
				if($("#dashboard tr:nth-child(3) td:nth-child(1)").text()){
					remove_array_element(7);
				}
				if($("#dashboard tr:nth-child(3) td:nth-child(2)").text()){
					remove_array_element(8);
				}
				if($("#dashboard tr:nth-child(3) td:nth-child(3)").text()){
					remove_array_element(9);
				}
				console.log(places);
				startTheBot();
		};
		function remove_array_element(n){
	  		var index = places.indexOf(n);
			if (index > -1) {
	   			places.splice(index, 1);
			}
	 	};
    };