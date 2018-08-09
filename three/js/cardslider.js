


$(document).ready(function(){
   flag=1;
    $("#nex").click(function(){
       if(flag==0)
        {
            $("#side1").css("z-index","99");
            $("#side2").css("z-index","98");
            $("#side3").css("z-index","97");
            $("#side4").css("z-index","96");
            $("#side5").css("z-index","95");
            $("#side6").css("z-index","96");
            $("#side7").css("z-index","97");
            $("#side8").css("z-index","98");
            $("#side1").css({
                "transform": "translateX(0px) scale(1)",
                "opacity": "1",
                "visibility": "visible"
            });
            $("#side2").css({
                "transform": "translateX(100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side3").css({
                "transform": "translateX(150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side4").css("visibility","hidden");
            $("#side5").css("visibility","hidden");
            $("#side6").css("visibility","hidden");
            $("#side7").css({
                "transform": "translateX(-150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side8").css({
                "transform": "translateX(-100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            flag=1;
        }
        else if(flag==1)
        {
            $("#side1").css("z-index","98");
            $("#side2").css("z-index","99");
            $("#side3").css("z-index","98");
            $("#side4").css("z-index","97");
            $("#side5").css("z-index","96");
            $("#side6").css("z-index","95");
            $("#side7").css("z-index","96");
            $("#side8").css("z-index","97");
            $("#side1").css({
                "transform": "translateX(-100px) scale(0.9)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side2").css({
                "transform": "translateX(0px) scale(1)",
                "opacity": "1",
                "visibility": "visible"
            });
            $("#side3").css({
                "transform": "translateX(100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side4").css({
                "transform": "translateX(150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side5").css("opacity","0");
            $("#side6").css("opacity","0");
            $("#side7").css("opacity","0");
            $("#side8").css({
                "transform": "translateX(-150px) scale(0.8)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            flag=2;
        }
        else if(flag==2)
        {
            $("#side1").css("z-index","97");
            $("#side2").css("z-index","98");
            $("#side3").css("z-index","99");
            $("#side4").css("z-index","98");
            $("#side5").css("z-index","97");
            $("#side6").css("z-index","96");
            $("#side7").css("z-index","95");
            $("#side8").css("z-index","94");
            $("#side1").css({
                "transform": "translateX(-150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side2").css({
                "transform": "translateX(-100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side3").css("transform","translateX(0px) scale(1)");
            $("#side4").css({
                "transform": "translateX(100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side5").css({
                "transform": "translateX(150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side6").css("opacity","0");
            $("#side7").css("opacity","0");
            $("#side8").css("opacity","0");
            flag=3;
        }
         else if(flag==3)
        {
            $("#side1").css("z-index","96");
            $("#side2").css("z-index","97");
            $("#side3").css("z-index","98");
            $("#side4").css("z-index","99");
            $("#side5").css("z-index","98");
            $("#side6").css("z-index","97");
            $("#side7").css("z-index","96");
            $("#side8").css("z-index","95");
            $("#side1").css("opacity","0");
            $("#side2").css({
                "transform": "translateX(-150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side3").css({
                "transform": "translateX(-100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side4").css("transform","translateX(0px) scale(1)");
            $("#side5").css({
                "transform": "translateX(100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side6").css({
                "transform": "translateX(150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side7").css("opacity","0");
            $("#side8").css("opacity","0");
            flag=4;
        }
         else if(flag==4)
        {
            $("#side1").css("z-index","95");
            $("#side2").css("z-index","96");
            $("#side3").css("z-index","97");
            $("#side4").css("z-index","98");
            $("#side5").css("z-index","99");
            $("#side6").css("z-index","98");
            $("#side7").css("z-index","97");
            $("#side8").css("z-index","96");
            $("#side1").css("opacity","0");
            $("#side2").css("opacity","0");
            $("#side3").css({
                "transform": "translateX(-150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side4").css({
                "transform": "translateX(-100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side5").css("transform","translateX(0px) scale(1)");
            $("#side6").css({
                "transform": "translateX(100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side7").css({
                "transform": "translateX(150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side8").css("opacity","0");
            flag=5;
        }
         else if(flag==5)
        {
            $("#side1").css("z-index","96");
            $("#side2").css("z-index","95");
            $("#side3").css("z-index","96");
            $("#side4").css("z-index","97");
            $("#side5").css("z-index","98");
            $("#side6").css("z-index","99");
            $("#side7").css("z-index","98");
            $("#side8").css("z-index","97");
            $("#side1").css("opacity","0");
            $("#side2").css("opacity","0");
            $("#side3").css("opacity","0");
            $("#side4").css({
                "transform": "translateX(-150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side5").css({
                "transform": "translateX(-100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side6").css("transform","translateX(0px) scale(1)");
            $("#side7").css({
                "transform": "translateX(100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side8").css({
                "transform": "translateX(150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            flag=6;
        }
         else if(flag==6)
        {
            $("#side1").css("z-index","97");
            $("#side2").css("z-index","96");
            $("#side3").css("z-index","95");
            $("#side4").css("z-index","96");
            $("#side5").css("z-index","97");
            $("#side6").css("z-index","98");
            $("#side7").css("z-index","99");
            $("#side8").css("z-index","98");
            $("#side1").css({
                "transform": "translateX(150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side2").css("opacity","0");
            $("#side3").css("opacity","0");
            $("#side4").css("opacity","0");
            $("#side5").css({
                "transform": "translateX(-150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side6").css({
                "transform": "translateX(-100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side7").css("transform","translateX(0px) scale(1)");
            $("#side8").css({
                "transform": "translateX(100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            flag=7;
        }
         else if(flag==7)
        {
            $("#side1").css("z-index","98");
            $("#side2").css("z-index","97");
            $("#side3").css("z-index","96");
            $("#side4").css("z-index","95");
            $("#side5").css("z-index","96");
            $("#side6").css("z-index","97");
            $("#side7").css("z-index","98");
            $("#side8").css("z-index","99");
            $("#side1").css({
                "transform": "translateX(100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side2").css({
                "transform": "translateX(150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side3").css("opacity","0");
            $("#side4").css("opacity","0");
            $("#side5").css("opacity","0");
            $("#side6").css({
                "transform": "translateX(-150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side7").css({
                "transform": "translateX(-100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side8").css("transform","translateX(0px) scale(1)");
            flag=0;
        }
    });
    $("#pre").click(function(){
       if(flag==1)
        {
            $("#side1").css("z-index","98");
            $("#side2").css("z-index","97");
            $("#side3").css("z-index","96");
            $("#side4").css("z-index","95");
            $("#side5").css("z-index","96");
            $("#side6").css("z-index","97");
            $("#side7").css("z-index","98");
            $("#side8").css("z-index","99");
            $("#side1").css({
                "transform": "translateX(100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side2").css({
                "transform": "translateX(150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side3").css("opacity","0");
            $("#side4").css("opacity","0");
            $("#side5").css("opacity","0");
            $("#side6").css({
                "transform": "translateX(-150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side7").css({
                "transform": "translateX(-100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side8").css("transform","translateX(0px) scale(1)");
            flag=7;
        }
        else if(flag==7)
        {
            $("#side1").css("z-index","97");
            $("#side2").css("z-index","96");
            $("#side3").css("z-index","95");
            $("#side4").css("z-index","96");
            $("#side5").css("z-index","97");
            $("#side6").css("z-index","98");
            $("#side7").css("z-index","99");
            $("#side8").css("z-index","98");
            $("#side1").css({
                "transform": "translateX(150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side2").css("opacity","0");
            $("#side3").css("opacity","0");
            $("#side4").css("opacity","0");
            $("#side5").css({
                "transform": "translateX(-150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side6").css({
                "transform": "translateX(-100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side7").css("transform","translateX(0px) scale(1)");
            $("#side8").css({
                "transform": "translateX(100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            flag=6;
        }
         else if(flag==6)
        {
            $("#side1").css("z-index","96");
            $("#side2").css("z-index","95");
            $("#side3").css("z-index","96");
            $("#side4").css("z-index","97");
            $("#side5").css("z-index","98");
            $("#side6").css("z-index","99");
            $("#side7").css("z-index","98");
            $("#side8").css("z-index","97");
            $("#side1").css("opacity","0");
            $("#side2").css("opacity","0");
            $("#side3").css("opacity","0");
            $("#side4").css({
                "transform": "translateX(-150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side5").css({
                "transform": "translateX(-100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side6").css("transform","translateX(0px) scale(1)");
            $("#side7").css({
                "transform": "translateX(100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side8").css({
                "transform": "translateX(150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            flag=5;
        }
        else if(flag==5)
        {
            $("#side1").css("z-index","95");
            $("#side2").css("z-index","96");
            $("#side3").css("z-index","97");
            $("#side4").css("z-index","98");
            $("#side5").css("z-index","99");
            $("#side6").css("z-index","98");
            $("#side7").css("z-index","97");
            $("#side8").css("z-index","96");
            $("#side1").css("opacity","0");
            $("#side2").css("opacity","0");
            $("#side3").css({
                "transform": "translateX(-150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side4").css({
                "transform": "translateX(-100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side5").css("transform","translateX(0px) scale(1)");
            $("#side6").css({
                "transform": "translateX(100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side7").css({
                "transform": "translateX(150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side8").css("opacity","0");
            flag=4;
        }
        else if(flag==4)
        {
            $("#side1").css("z-index","96");
            $("#side2").css("z-index","97");
            $("#side3").css("z-index","98");
            $("#side4").css("z-index","99");
            $("#side5").css("z-index","98");
            $("#side6").css("z-index","97");
            $("#side7").css("z-index","96");
            $("#side8").css("z-index","95");
            $("#side1").css("opacity","0");
            $("#side2").css({
                "transform": "translateX(-150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side3").css({
                "transform": "translateX(-100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side4").css("transform","translateX(0px) scale(1)");
            $("#side5").css({
                "transform": "translateX(100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side6").css({
                "transform": "translateX(150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side7").css("opacity","0");
            $("#side8").css("opacity","0");
            flag=3;
        }
        else if(flag==3)
        {
            $("#side1").css("z-index","97");
            $("#side2").css("z-index","98");
            $("#side3").css("z-index","99");
            $("#side4").css("z-index","98");
            $("#side5").css("z-index","97");
            $("#side6").css("z-index","96");
            $("#side7").css("z-index","95");
            $("#side8").css("z-index","94");
            $("#side1").css({
                "transform": "translateX(-150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side2").css({
                "transform": "translateX(-100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side3").css("transform","translateX(0px) scale(1)");
            $("#side4").css({
                "transform": "translateX(100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side5").css({
                "transform": "translateX(150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side6").css("opacity","0");
            $("#side7").css("opacity","0");
            $("#side8").css("opacity","0");
            flag=2;
        }
        else if(flag==2)
         {
            $("#side1").css("z-index","98");
            $("#side2").css("z-index","99");
            $("#side3").css("z-index","98");
            $("#side4").css("z-index","97");
            $("#side5").css("z-index","96");
            $("#side6").css("z-index","95");
            $("#side7").css("z-index","96");
            $("#side8").css("z-index","97");
            $("#side1").css({
                "transform": "translateX(-100px) scale(0.9)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side2").css({
                "transform": "translateX(0px) scale(1)",
                "opacity": "1",
                "visibility": "visible"
            });
            $("#side3").css({
                "transform": "translateX(100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side4").css({
                "transform": "translateX(150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side5").css("opacity","0");
            $("#side6").css("opacity","0");
            $("#side7").css("opacity","0");
            $("#side8").css({
                "transform": "translateX(-150px) scale(0.8)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            flag=0;
        }
        else if(flag==0)
        {
            $("#side1").css("z-index","99");
            $("#side2").css("z-index","98");
            $("#side3").css("z-index","97");
            $("#side4").css("z-index","96");
            $("#side5").css("z-index","95");
            $("#side6").css("z-index","96");
            $("#side7").css("z-index","97");
            $("#side8").css("z-index","98");
            $("#side1").css({
                "transform": "translateX(0px) scale(1)",
                "opacity": "1",
                "visibility": "visible"
            });
            $("#side2").css({
                "transform": "translateX(100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            $("#side3").css({
                "transform": "translateX(150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side4").css("opacity","0");
            $("#side5").css("opacity","0");
            $("#side6").css("opacity","0");
            $("#side7").css({
                "transform": "translateX(-150px) scale(0.8)",
                "opacity": "0.6",
                "visibility": "visible"
            });
            $("#side8").css({
                "transform": "translateX(-100px) scale(0.9)",
                "opacity": "0.8",
                "visibility": "visible"
            });
            flag=1;
        }
       
    });    
});