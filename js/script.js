

$(document).ready(function() {
    var images = ["img/services2.jpg", "img/services.jpg", "img/project1.jpg"
    ,"img/project2.jpg" , "img/project3.jpg"];
    var currentIndex = 0;
    function changeImage() {
      $("#change").attr("src", images[currentIndex]);
      currentIndex = (currentIndex + 1) % images.length;
    }
    
    setInterval(changeImage, 1000);
  });
    $(document).ready(function () {
        $("#mobile").clickToggle(function () {
            $("#navbar").show();        
            $("#mobile").hide();        
            });       
            $("#close").click(function () {
                $("#navbar").hide();   
                $("#mobile").show();        
     
                });       
                
        });

$(document).ready(function () {
    $(".rev-content2").show();
    $(".rev-content1").hide();         
    $(".rev-content3").hide(); 
    $("#s1").click(function() {
        $(".rev-content1").slideDown(2000);
        $(".rev-content2").hide();
        $(".rev-content3").hide();
        $("#s1").css("background-color", " burlywood");
        $("#s2").css("background-color", "aliceblue");
        $("#s3").css("background-color", "aliceblue");
    });
        $("#s2").click(function() {
            $(".rev-content2").slideDown(2000);
            $(".rev-content1").hide();
            $(".rev-content3").hide();
            $("#s2").css("background-color", "burlywood");
            $("#s3").css("background-color", "aliceblue");
            $("#s1").css("background-color", "aliceblue");
        });
            $("#s3").click(function() {
                $(".rev-content3").slideDown(2000);
                $(".rev-content2").hide();
                $(".rev-content1").hide();
                $("#s3").css("background-color", "burlywood");
                $("#s2").css("background-color", "aliceblue");
                $("#s1").css("background-color", "aliceblue");
            });
       
            
    });
   

      
    $(document).ready(function() {
        var bar = $('#bar');
        var nav = $('#navbar');
        var close = $('#close');
      
        if (bar.length) {
          bar.on('click', function() {
            nav.addClass('active');
            $("#bar").hide()
          });
        }
      
        if (close.length) {
          close.on('click', function() {
            nav.removeClass('active');
            $("#bar").show()
    
          });
        }
      });
    if(close){
        close.addEventListener('click' , () => {
            nav.classList.remove('active');
            
        })
    }