
$(document).ready(function(){

  var userName, userSpeed, userFocus, rockyWager, achillesWager, userWager;
  var rockyWins = 0; 
  var achillesWins= 0;
  var userWins = 0;
  var totalWinnings = 0;

  $("#userStats").hide();

  $('#submit').on("click", function (){
    userName = $("#userAnimalName").val();
    userSpeed = $("#userAnimalSpeed").val();
    userFocus = $("#userAnimalFocus").val();

    if (isNaN(userFocus)){
      alert("Please enter a number between 1-10 for your Speed and Focus.")
    }

    $("#userTablePic").html("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPy7ZnI46zizXRVoXLbV4Gl6LamFU6g5pqtJj1ijxnO8i-gJWp' width='120em' height='100em'/> ");
    $("#userTableName").html(userName);
    $("#userTableFocus").html(userFocus);
    $("#userTableSpeed").html(userSpeed);

     $("#userStats").show();

   });

  $('#betRocky').on('click', function(){
    rockyWager = prompt("Enter your bet here:")
    rockyWager = parseInt(rockyWager);
    if (isNaN(rockyWager)){
      alert("Please enter a number for your bet.")
    }
  });

   $('#betAchilles').on('click', function(){
    achillesWager = prompt("Enter your bet here:")
    achillesWager = parseInt(achillesWager);
     if (isNaN(achillesWager)){
      alert("Please enter a number for your bet.")
    }
  });

  $('#betUser').on('click', function(){
    userWager = prompt("Enter your bet here:")
    userWager = parseInt(userWager);
     if (isNaN(userWager)){
      alert("Please enter a number for your bet.")
    }
  });

  $('#startRace').on('click', function() {
    $('aside').empty();
    var Animal = function (n, s, f){
        this.name = n;
        this.speed = s;
        this.focus = f;
        this.position = 0;
        this.report = function() {
          return this.name + " is at " + this.position;
        };
        this.run = function() {
          if (this.focus > (Math.random() * 10)) {
            this.position += this.speed;
            //console.log(this.name + ":" + this.position);
          }
        };

      } 
     
    var turtle = new Animal("Rocky", 3, 8),
        rabbit = new Animal("Achilles", 8, 4),
        userAnimal = new Animal(userName, parseInt(userSpeed), parseInt(userFocus));
     
    var distance = 25;
     
    while (turtle.position < distance && rabbit.position < distance && userAnimal.position < distance) {
      turtle.run();
      rabbit.run();
      userAnimal.run();
      if (turtle.position >= 25) { 
          if (rockyWager){
          totalWinnings += rockyWager;
          $("<p> Congradulations! You bet on a winner today. </p>").prependTo('aside');
          $('aside').html(" Total winnings: " + totalWinnings );
          }
          else {
          $("<p> You bet on a looser. Pay up. </p>").prependTo('aside');
          }
        console.log(turtle.name + " wins the race!");
        $('aside').prepend("<p> Rocky won the Race. </p>");
        $('<img src="http://www.ecology.com/wp-content/uploads/2012/05/eastern-box-turtle.jpg" width="120em" height="100em"/>').prependTo('aside');
        
        rockyWins = rockyWins + 1;
        $('#rockyWins').html(rockyWins);

      }
      
      else if (rabbit.position >= 25){
        if (achillesWager){
          totalWinnings += achillesWager;
          $("<p> Congradulations! You bet on a winner today. </p>").prependTo('aside');
           $('aside').html(" Total winnings: " + totalWinnings );
          }
          else {
          $("<p> You bet on a looser. Pay up. </p>").prependTo('aside');
          }

        console.log(rabbit.name + " wins the race!");
        $('aside').prepend("<p> Achilles won the Race. </p>");
        $('<img src="http://www.depi.vic.gov.au/__data/assets/image/0005/182390/rabbit_img1.jpg" width="120em" height="100em"/>').prependTo('aside');
      
       achillesWins = achillesWins + 1;
        $('#achillesWins').html(achillesWins);

      }
      
      else if (userAnimal.position >= 25){
         if (userWager){
          totalWinnings += userWager;
          $("<p> Congradulations! You bet on a winner today. </p>").prependTo('aside');
          $('aside').html(" Total winnings: " + totalWinnings ); 
          }
          else {
          $("<p> You bet on a looser. Pay up. </p>").prependTo('aside');
          }

        console.log("You won the race!");
        $('aside').prepend("You won the Race!");
        $('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPy7ZnI46zizXRVoXLbV4Gl6LamFU6g5pqtJj1ijxnO8i-gJWp" width="120em" height="100em"/>').prependTo('aside');
        

        userWins = userWins + 1;
        $('#userWins').html(userWins);
      }
    }
     

    console.log(turtle.report());
    console.log(rabbit.report());
    console.log(userAnimal.report()); 
  });


}); 
