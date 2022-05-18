$(function(){
  // console.log("body");
  // console.log(window.location.href);
  // console.log($(location).attr("href"));
  /*
  #inb의 메뉴와 같은 서브페이지의 주소값을 매칭하여
  해당 메뉴에 on class 추가하시오.
  */
  function splitLocation(el){
    let href = el.attr("href").split("/");
    href = href[href.length -1].split(".");
    href = href[0];
    return href;
  }
  let currentHref = splitLocation($(location));
  $("#lnb a").each(function(){
    if( splitLocation($(this)) == splitLocation($(location)) ){
      $(this).addClass("on");
    }
  });

  // accordion area
  $(".accordion dd:not(:first)").css({"display":"none","height":"0px"});
  let isAni = $(".accordion dd").is(":animated")
  $(".accordion dl dt").click(function(){
    let thisElem = $(this);
    if( $("+dd",thisElem).css("display") == "none" );
      $("dd").each(function(){
        if( $(this).css("display") == "block" ){
          $(this).animate({ height: 0},300,function(){
            $(this).css("display","none");
          })
        }
      });
      $("+dd",thisElem).css("display","block").animate({ height: 300});
    })
  });
