(new WOW).init();
$(".contact__arrow").each(function(){$(this).click(function(){return $("html,body").animate({scrollTop:0},"slow"),!1})});
$(".menu").click(function(){$(window).width()<=600&&$("body").toggleClass("overflow-hidden"),$(".header__menu").toggleClass("header__menu_active"),$(".menu div").toggleClass("menu_active"),$(".main__text-2").toggleClass("hide"),$(".main__social").toggleClass("main__social_active")}),$(".header__text-1").click(function(e){e.preventDefault();var a=$(this).attr("href");console.log(a),$("html,body").animate({scrollTop:$(a).offset().top-100},1e3),$(".header__menu").removeClass("header__menu_active"),$(".menu div").removeClass("menu_active"),$(".main__text-2").removeClass("hide"),$(".main__social").removeClass("main__social_active")});
function addBodyHidden(){$(window).width()<=600&&$("body").addClass("overflow-hidden")}$(".popup__menu").click(function(){$("body").removeClass("overflow-hidden"),$(".popup").removeClass("popup_active")}),$(".main__text-7, .way__text-5").click(function(){addBodyHidden(),$(".popup").addClass("popup_active"),$(".popup__email").removeClass("d-none"),$(".popup__text").removeClass("d-none"),$(".popup__text-2").html('<span class="smart-break">Оставьте данные для связи,</span>\n<span class="smart-break">в которых вам комфортно общаться -</span>\n<span class="smart-break" >напишем в месседжер или перезвоним.</span>')}),$(".main__text-2").click(function(){addBodyHidden(),$(".popup").addClass("popup_active"),$(".popup__text-2").text("Звонок в светлое будущее вашей компании - пишите, мы на линии."),$(".popup__email").addClass("d-none"),$(".popup__text").addClass("d-none")}),$(".about__text-2").click(function(){$(".popup").addClass("popup_active"),$(".popup__text-2").text("Расскажите о деле, которое вдохновляет вас просыпаться по утрам, о планах и мечтах на будущее."),$(".popup__email").removeClass("d-none"),$(".popup__text").removeClass("d-none")}),$(".landing-power__text-6").click(function(){addBodyHidden(),$(".popup").addClass("popup_active"),$(".popup__text-2").text("Описание: время постичь дзен и презентовать миру свой бизнес."),$(".popup__email").removeClass("d-none"),$(".popup__text").removeClass("d-none")}),$(".big__represent").click(function(){addBodyHidden(),$(".popup").addClass("popup_active"),$(".popup__text-2").text("Тут начинается путь к признанию и узнаваемости."),$(".popup__email").removeClass("d-none"),$(".popup__text").removeClass("d-none")}),$(".sales_promotion").click(function(){addBodyHidden(),$(".popup").addClass("popup_active"),$(".popup__text-2").text("Честный путь к сокровищам и миллионам."),$(".popup__email").removeClass("d-none"),$(".popup__text").removeClass("d-none")}),$(".wow_branding").click(function(){addBodyHidden(),$(".popup").addClass("popup_active"),$(".popup__text-2").text("Вы нашли бомбический огонь для абсолютной власти над миром."),$(".popup__email").removeClass("d-none"),$(".popup__text").removeClass("d-none")}),$(".inline__text-2").click(function(){addBodyHidden(),$(".popup").addClass("popup_active"),$(".popup__text-2").text("Заполните форму - отправим вам презентацию и поможем с планом развитии компании."),$(".popup__email").addClass("d-none"),$(".popup__text").addClass("d-none")});
function portfolioSlider(){var o=0,t=$(".portfolio__card").last().outerWidth(!0),r=$(".portfolio__card").length,l=1;$(".portfolio__text-2_total").text("0"+r),$(".portfolio__arrow-link_r").click(function(){o<(r-1)*t?(l++,$(".portfolio__text-2_count").text("0"+l),o+=t,$(".portfolio__container-2").css("transform","translate(-"+o+"px)"),$(".portfolio__arrow-link_l").removeClass("hide")):(o=0,l=1,$(".portfolio__text-2_count").text("0"+l),$(".portfolio__container-2").css("transform","translate(-"+o+"px)"),$(".portfolio__arrow-link_l").addClass("hide")),console.log(o+" "+t),0==o&&$(".portfolio__arrow-link_l").addClass("hide")}),$(".portfolio__arrow-link_l").click(function(){0<o?(l--,$(".portfolio__text-2_count").text("0"+l),o-=t):($(".portfolio__arrow-link_l").addClass("hide"),o=0,l=1,$(".portfolio__text-2_count").text("0"+l)),$(".portfolio__container-2").css("transform","translate(-"+o+"px)"),0==o&&$(".portfolio__arrow-link_l").addClass("hide")})}portfolioSlider(),$(window).resize(function(){portfolioSlider()});
$(".price__card").hover(function(){$(".price__card, .price__img ").removeClass("opacity-1"),$(this).addClass("opacity-1"),$(this).find(".price__img").addClass("opacity-1 zoomIn")});
function waySlider(){var t=$(".way__card").length,a=$(".way__card").outerWidth(!0);$(".way__text-7_total").text("0"+t),$(".way__overflow").scroll(throttle(function(){var t=$(".way__overflow").scrollLeft();$(".way__text-7_count").text("0"+(Math.floor(t/(a-25))+1))},50))}function throttle(t,a){var _=Date.now();return function(){_+a-Date.now()<0&&(t(),_=Date.now())}}$(".way__text-2").hover(function(t){if(600<$(window).width()){var a=$(this).index();$(".way__text-2").removeClass("white"),$(this).addClass("white"),0==a&&($(".way__text-3").text("Изучаем компанию и конкурентов, находим преимущества, закрываем возражения, нивелируем страхи, создаем сильное предложение."),$(".way__icon").css("background-image","url(../img/way__1.png)")),1==a&&($(".way__text-3").text("Проводим brain storm: продумываем структуру, блоки, характер и стиль исходя из задач бизнеса."),$(".way__icon").css("background-image","url(../img/way__2.png)")),2==a&&($(".way__text-3").text("Управляем вниманием, создаём интерес к услуге/продукту в удобной навигации и стильном дизайне"),$(".way__icon").css("background-image","url(../img/way__3.png)")),3==a&&($(".way__text-3").text("Создаём эффект присутствия, “проводим экскурсию” по сайту, выводим фокус на целевые действия."),$(".way__icon").css("background-image","url(../img/way__4.png)")),4==a&&($(".way__text-3").text("Подбираем целевые для ниши рекламные площади (PPC, smm) помогаем отбить затраты на рекламу и выйти в прибыль"),$(".way__icon").css("background-image","url(../img/way__5.png)")),5==a&&($(".way__text-3").text("Укрепляем имидж бренда, собираем и оптимизируем результаты"),$(".way__icon").css("background-image","url(../img/way__6.png)"))}}),$(window).width()<=600&&waySlider(),$(window).resize(function(){$(window).width()<=600&&waySlider()});
var cursor={delay:8,_x:0,_y:0,endX:window.innerWidth/2,endY:window.innerHeight/2,cursorVisible:!0,cursorEnlarged:!1,$dot:document.querySelector(".cursor-dot"),$outline:document.querySelector(".cursor-dot-outline"),init:function(){this.dotSize=this.$dot.offsetWidth,this.outlineSize=this.$outline.offsetWidth,this.setupEventListeners(),this.animateDotOutline()},setupEventListeners:function(){var t=this;document.querySelectorAll("a").forEach(function(e){e.addEventListener("mouseover",function(){t.cursorEnlarged=!0,t.toggleCursorSize()}),e.addEventListener("mouseout",function(){t.cursorEnlarged=!1,t.toggleCursorSize()})}),document.querySelectorAll(".cursor").forEach(function(e){e.addEventListener("mouseover",function(){t.cursorEnlarged=!0,t.toggleCursorSize()}),e.addEventListener("mouseout",function(){t.cursorEnlarged=!1,t.toggleCursorSize()})}),document.addEventListener("mousedown",function(){t.cursorEnlarged=!0,t.toggleCursorSize()}),document.addEventListener("mouseup",function(){t.cursorEnlarged=!1,t.toggleCursorSize()}),document.addEventListener("mousemove",function(e){t.cursorVisible=!0,t.toggleCursorVisibility(),t.endX=e.pageX,t.endY=e.pageY,t.$dot.style.top=t.endY+"px",t.$dot.style.left=t.endX+"px"}),document.addEventListener("mouseenter",function(e){t.cursorVisible=!0,t.toggleCursorVisibility(),t.$dot.style.opacity=1,t.$outline.style.opacity=1}),document.addEventListener("mouseleave",function(e){t.cursorVisible=!0,t.toggleCursorVisibility(),t.$dot.style.opacity=0,t.$outline.style.opacity=0})},animateDotOutline:function(){var e=this;e._x+=(e.endX-e._x)/e.delay,e._y+=(e.endY-e._y)/e.delay,e.$outline.style.top=e._y+"px",e.$outline.style.left=e._x+"px",requestAnimationFrame(this.animateDotOutline.bind(e))},toggleCursorSize:function(){var e=this;e.cursorEnlarged?(e.$dot.style.transform="translate(-50%, -50%) scale(0.75)",e.$outline.style.transform="translate(-50%, -50%) scale(2)"):(e.$dot.style.transform="translate(-50%, -50%) scale(1)",e.$outline.style.transform="translate(-50%, -50%) scale(1)")},toggleCursorVisibility:function(){var e=this;e.cursorVisible?(e.$dot.style.opacity=1,e.$outline.style.opacity=1):(e.$dot.style.opacity=0,e.$outline.style.opacity=0)}};cursor.init();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21tb24vY29tbW9uLmpzIiwiZm9vdGVyL2Zvb3Rlci5qcyIsImhlYWRlci9oZWFkZXIuanMiLCJwb3B1cC9wb3B1cC5qcyIsInBvcnRmb2xpby9wb3J0Zm9saW8uanMiLCJwcmljZS9wcmljZS5qcyIsIndheS93YXkuanMiLCJfY29tbW9uL2N1cnNvci9jdXJzb3IuanMiXSwibmFtZXMiOlsiV09XIiwiaW5pdCIsIiQiLCJlYWNoIiwidGhpcyIsImNsaWNrIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIndpbmRvdyIsIndpZHRoIiwidG9nZ2xlQ2xhc3MiLCJlIiwicHJldmVudERlZmF1bHQiLCJpZCIsImF0dHIiLCJjb25zb2xlIiwibG9nIiwib2Zmc2V0IiwidG9wIiwicmVtb3ZlQ2xhc3MiLCJhZGRCb2R5SGlkZGVuIiwiYWRkQ2xhc3MiLCJodG1sIiwidGV4dCIsInBvcnRmb2xpb1NsaWRlciIsIndpZHRoQ2FyZCIsImxhc3QiLCJvdXRlcldpZHRoIiwiY291bnRPZkNhcmRzIiwibGVuZ3RoIiwiY2FyZE5vdyIsImNzcyIsInJlc2l6ZSIsImhvdmVyIiwiZmluZCIsIndheVNsaWRlciIsImNvdW50T2ZDYXJkIiwic2Nyb2xsIiwidGhyb3R0bGUiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsIk1hdGgiLCJmbG9vciIsImZuIiwid2FpdCIsInRpbWUiLCJEYXRlIiwibm93IiwiaW5kZXgiLCJjdXJzb3IiLCJkZWxheSIsIl94IiwiX3kiLCJlbmRYIiwiaW5uZXJXaWR0aCIsImVuZFkiLCJpbm5lckhlaWdodCIsImN1cnNvclZpc2libGUiLCJjdXJzb3JFbmxhcmdlZCIsIiRkb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkb3V0bGluZSIsImRvdFNpemUiLCJvZmZzZXRXaWR0aCIsIm91dGxpbmVTaXplIiwic2V0dXBFdmVudExpc3RlbmVycyIsImFuaW1hdGVEb3RPdXRsaW5lIiwic2VsZiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlQ3Vyc29yU2l6ZSIsInRvZ2dsZUN1cnNvclZpc2liaWxpdHkiLCJwYWdlWCIsInBhZ2VZIiwic3R5bGUiLCJvcGFjaXR5IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsInRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6IkNBQ0EsSUFBSUEsS0FBTUM7QUNEVkMsRUFBRSxtQkFBbUJDLEtBQUssV0FDdEJELEVBQUVFLE1BQU1DLE1BQU0sV0FFVixPQURBSCxFQUFFLGFBQWFJLFFBQVEsQ0FBRUMsVUFBVyxHQUFLLFNBQ2xDO0FDSGZMLEVBQUUsU0FBU0csTUFBTSxXQUNWSCxFQUFFTSxRQUFRQyxTQUFXLEtBRXBCUCxFQUFFLFFBQVFRLFlBQVksbUJBRTFCUixFQUFFLGlCQUFpQlEsWUFBWSx1QkFDL0JSLEVBQUUsYUFBYVEsWUFBWSxlQUMzQlIsRUFBRSxpQkFBaUJRLFlBQVksUUFDL0JSLEVBQUUsaUJBQWlCUSxZQUFZLHlCQUtuQ1IsRUFBRSxtQkFBbUJHLE1BQU0sU0FBU00sR0FDaENBLEVBQUVDLGlCQUNGLElBQUlDLEVBQUtYLEVBQUVFLE1BQU1VLEtBQUssUUFDdEJDLFFBQVFDLElBQUlILEdBQ1pYLEVBQUUsYUFBYUksUUFBUSxDQUFDQyxVQUFXTCxFQUFFVyxHQUFJSSxTQUFTQyxJQUFJLEtBQU0sS0FDNURoQixFQUFFLGlCQUFpQmlCLFlBQVksdUJBQy9CakIsRUFBRSxhQUFhaUIsWUFBWSxlQUMzQmpCLEVBQUUsaUJBQWlCaUIsWUFBWSxRQUMvQmpCLEVBQUUsaUJBQWlCaUIsWUFBWTtBQzBEbkMsU0FBU0MsZ0JBQ0ZsQixFQUFFTSxRQUFRQyxTQUFXLEtBQ3BCUCxFQUFFLFFBQVFtQixTQUFTLG1CQWpGM0JuQixFQUFFLGdCQUFnQkcsTUFBTSxXQUNwQkgsRUFBRSxRQUFRaUIsWUFBWSxtQkFDdEJqQixFQUFFLFVBQVVpQixZQUFZLGtCQUc1QmpCLEVBQUUsK0JBQStCRyxNQUFNLFdBQ25DZSxnQkFDQWxCLEVBQUUsVUFBVW1C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S0FHdERLLGlCQUFrQixXQUNkLElBQUlMLEVBQU9oRSxLQUVQZ0UsRUFBS1YsZ0JBQ0xVLEVBQUtULEtBQUtrQixNQUFNSSxVQUFZLG9DQUM1QmIsRUFBS04sU0FBU2UsTUFBTUksVUFBWSxtQ0FFaENiLEVBQUtULEtBQUtrQixNQUFNSSxVQUFZLGlDQUM1QmIsRUFBS04sU0FBU2UsTUFBTUksVUFBWSxtQ0FJeENQLHVCQUF3QixXQUNwQixJQUFJTixFQUFPaEUsS0FFUGdFLEVBQUtYLGVBQ0xXLEVBQUtULEtBQUtrQixNQUFNQyxRQUFVLEVBQzFCVixFQUFLTixTQUFTZSxNQUFNQyxRQUFVLElBRTlCVixFQUFLVCxLQUFLa0IsTUFBTUMsUUFBVSxFQUMxQlYsRUFBS04sU0FBU2UsTUFBTUMsUUFBVSxLQUsxQzdCLE9BQU9oRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5uZXcgV09XKCkuaW5pdCgpOyIsIiQoJy5jb250YWN0X19hcnJvdycpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAkKHRoaXMpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgJ3Nsb3cnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufSk7IiwiJCgnLm1lbnUnKS5jbGljayhmdW5jdGlvbigpe1xuICAgIGlmKCQod2luZG93KS53aWR0aCgpIDw9IDYwMCl7XG5cbiAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdy1oaWRkZW4nKTtcbiAgICB9XG4gICAgJCgnLmhlYWRlcl9fbWVudScpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX21lbnVfYWN0aXZlJyk7XG4gICAgJCgnLm1lbnUgZGl2JykudG9nZ2xlQ2xhc3MoJ21lbnVfYWN0aXZlJyk7XG4gICAgJCgnLm1haW5fX3RleHQtMicpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgJCgnLm1haW5fX3NvY2lhbCcpLnRvZ2dsZUNsYXNzKCdtYWluX19zb2NpYWxfYWN0aXZlJyk7XG59KTtcblxuXG5cbiQoJy5oZWFkZXJfX3RleHQtMScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChpZCkub2Zmc2V0KCkudG9wLTEwMH0sIDEwMDApO1xuICAgICQoJy5oZWFkZXJfX21lbnUnKS5yZW1vdmVDbGFzcygnaGVhZGVyX19tZW51X2FjdGl2ZScpO1xuICAgICQoJy5tZW51IGRpdicpLnJlbW92ZUNsYXNzKCdtZW51X2FjdGl2ZScpO1xuICAgICQoJy5tYWluX190ZXh0LTInKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICQoJy5tYWluX19zb2NpYWwnKS5yZW1vdmVDbGFzcygnbWFpbl9fc29jaWFsX2FjdGl2ZScpO1xufSk7IiwiJCgnLnBvcHVwX19tZW51JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93LWhpZGRlbicpO1xuICAgICQoJy5wb3B1cCcpLnJlbW92ZUNsYXNzKCdwb3B1cF9hY3RpdmUnKTtcbn0pO1xuXG4kKCcubWFpbl9fdGV4dC03LCAud2F5X190ZXh0LTUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgYWRkQm9keUhpZGRlbigpO1xuICAgICQoJy5wb3B1cCcpLmFkZENsYXNzKCdwb3B1cF9hY3RpdmUnKTtcblxuICAgICQoJy5wb3B1cF9fZW1haWwnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgJCgnLnBvcHVwX190ZXh0JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gICAgJCgnLnBvcHVwX190ZXh0LTInKS5odG1sKFxuICAgICAgICAnPHNwYW4gY2xhc3M9XCJzbWFydC1icmVha1wiPtCe0YHRgtCw0LLRjNGC0LUg0LTQsNC90L3Ri9C1INC00LvRjyDRgdCy0Y/Qt9C4LDwvc3Bhbj5cXG4nICtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwic21hcnQtYnJlYWtcIj7QsiDQutC+0YLQvtGA0YvRhSDQstCw0Lwg0LrQvtC80YTQvtGA0YLQvdC+INC+0LHRidCw0YLRjNGB0Y8gLTwvc3Bhbj5cXG4nICtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwic21hcnQtYnJlYWtcIiA+0L3QsNC/0LjRiNC10Lwg0LIg0LzQtdGB0YHQtdC00LbQtdGAINC40LvQuCDQv9C10YDQtdC30LLQvtC90LjQvC48L3NwYW4+J1xuICAgICk7XG59KTtcblxuJCgnLm1haW5fX3RleHQtMicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBhZGRCb2R5SGlkZGVuKCk7XG4gICAgJCgnLnBvcHVwJykuYWRkQ2xhc3MoJ3BvcHVwX2FjdGl2ZScpO1xuICAgICQoJy5wb3B1cF9fdGV4dC0yJykudGV4dCgn0JfQstC+0L3QvtC6INCyINGB0LLQtdGC0LvQvtC1INCx0YPQtNGD0YnQtdC1INCy0LDRiNC10Lkg0LrQvtC80L/QsNC90LjQuCAtINC/0LjRiNC40YLQtSwg0LzRiyDQvdCwINC70LjQvdC40LguJyk7XG4gICAgJCgnLnBvcHVwX19lbWFpbCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAkKCcucG9wdXBfX3RleHQnKS5hZGRDbGFzcygnZC1ub25lJyk7XG59KTtcblxuJCgnLmFib3V0X190ZXh0LTInKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnBvcHVwJykuYWRkQ2xhc3MoJ3BvcHVwX2FjdGl2ZScpO1xuICAgICQoJy5wb3B1cF9fdGV4dC0yJykudGV4dCgn0KDQsNGB0YHQutCw0LbQuNGC0LUg0L4g0LTQtdC70LUsINC60L7RgtC+0YDQvtC1INCy0LTQvtGF0L3QvtCy0LvRj9C10YIg0LLQsNGBINC/0YDQvtGB0YvQv9Cw0YLRjNGB0Y8g0L/QviDRg9GC0YDQsNC8LCDQviDQv9C70LDQvdCw0YUg0Lgg0LzQtdGH0YLQsNGFINC90LAg0LHRg9C00YPRidC10LUuJyk7XG5cbiAgICAkKCcucG9wdXBfX2VtYWlsJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICQoJy5wb3B1cF9fdGV4dCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbn0pO1xuXG4kKCcubGFuZGluZy1wb3dlcl9fdGV4dC02JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGFkZEJvZHlIaWRkZW4oKTtcbiAgICAkKCcucG9wdXAnKS5hZGRDbGFzcygncG9wdXBfYWN0aXZlJyk7XG4gICAgJCgnLnBvcHVwX190ZXh0LTInKS50ZXh0KCfQntC/0LjRgdCw0L3QuNC1OiDQstGA0LXQvNGPINC/0L7RgdGC0LjRh9GMINC00LfQtdC9INC4INC/0YDQtdC30LXQvdGC0L7QstCw0YLRjCDQvNC40YDRgyDRgdCy0L7QuSDQsdC40LfQvdC10YEuJyk7XG5cbiAgICAkKCcucG9wdXBfX2VtYWlsJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICQoJy5wb3B1cF9fdGV4dCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbn0pO1xuXG4kKCcuYmlnX19yZXByZXNlbnQnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgYWRkQm9keUhpZGRlbigpO1xuICAgICQoJy5wb3B1cCcpLmFkZENsYXNzKCdwb3B1cF9hY3RpdmUnKTtcbiAgICAkKCcucG9wdXBfX3RleHQtMicpLnRleHQoJ9Ci0YPRgiDQvdCw0YfQuNC90LDQtdGC0YHRjyDQv9GD0YLRjCDQuiDQv9GA0LjQt9C90LDQvdC40Y4g0Lgg0YPQt9C90LDQstCw0LXQvNC+0YHRgtC4LicpO1xuXG4gICAgJCgnLnBvcHVwX19lbWFpbCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAkKCcucG9wdXBfX3RleHQnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG59KTtcblxuJCgnLnNhbGVzX3Byb21vdGlvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBhZGRCb2R5SGlkZGVuKCk7XG4gICAgJCgnLnBvcHVwJykuYWRkQ2xhc3MoJ3BvcHVwX2FjdGl2ZScpO1xuICAgICQoJy5wb3B1cF9fdGV4dC0yJykudGV4dCgn0KfQtdGB0YLQvdGL0Lkg0L/Rg9GC0Ywg0Log0YHQvtC60YDQvtCy0LjRidCw0Lwg0Lgg0LzQuNC70LvQuNC+0L3QsNC8LicpO1xuXG4gICAgJCgnLnBvcHVwX19lbWFpbCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAkKCcucG9wdXBfX3RleHQnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG59KTtcblxuJCgnLndvd19icmFuZGluZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBhZGRCb2R5SGlkZGVuKCk7XG4gICAgJCgnLnBvcHVwJykuYWRkQ2xhc3MoJ3BvcHVwX2FjdGl2ZScpO1xuICAgICQoJy5wb3B1cF9fdGV4dC0yJykudGV4dCgn0JLRiyDQvdCw0YjQu9C4INCx0L7QvNCx0LjRh9C10YHQutC40Lkg0L7Qs9C+0L3RjCDQtNC70Y8g0LDQsdGB0L7Qu9GO0YLQvdC+0Lkg0LLQu9Cw0YHRgtC4INC90LDQtCDQvNC40YDQvtC8LicpO1xuXG4gICAgJCgnLnBvcHVwX19lbWFpbCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAkKCcucG9wdXBfX3RleHQnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG59KTtcblxuJCgnLmlubGluZV9fdGV4dC0yJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGFkZEJvZHlIaWRkZW4oKTtcbiAgICAkKCcucG9wdXAnKS5hZGRDbGFzcygncG9wdXBfYWN0aXZlJyk7XG4gICAgJCgnLnBvcHVwX190ZXh0LTInKS50ZXh0KCfQl9Cw0L/QvtC70L3QuNGC0LUg0YTQvtGA0LzRgyAtINC+0YLQv9GA0LDQstC40Lwg0LLQsNC8INC/0YDQtdC30LXQvdGC0LDRhtC40Y4g0Lgg0L/QvtC80L7QttC10Lwg0YEg0L/Qu9Cw0L3QvtC8INGA0LDQt9Cy0LjRgtC40Lgg0LrQvtC80L/QsNC90LjQuC4nKTtcbiAgICAkKCcucG9wdXBfX2VtYWlsJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICQoJy5wb3B1cF9fdGV4dCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRCb2R5SGlkZGVuKCkge1xuICAgIGlmKCQod2luZG93KS53aWR0aCgpIDw9IDYwMCl7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgfVxufSIsInBvcnRmb2xpb1NsaWRlcigpO1xuJCggd2luZG93ICkucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgIHBvcnRmb2xpb1NsaWRlcigpO1xufSk7XG5cblxuXG5cbmZ1bmN0aW9uIHBvcnRmb2xpb1NsaWRlcigpe1xuICAgIHZhciB3aWR0aCA9IDA7XG4vL9Cx0LXRgNC10YjQuNC8INGI0LjRgNC40L3RgyDQutCw0YDRgtC+0YfQutC4INGBINC+0YLRgdGC0YPQv9Cw0LzQuFxuICAgIHZhciB3aWR0aENhcmQgPSAkKCcucG9ydGZvbGlvX19jYXJkJykubGFzdCgpLm91dGVyV2lkdGgodHJ1ZSk7XG4vL9C60L7Qu9C40YfQtdGB0YLQstC+INC60LDRgNGC0L7Rh9C10LpcbiAgICB2YXIgY291bnRPZkNhcmRzID0gJCgnLnBvcnRmb2xpb19fY2FyZCcpLmxlbmd0aDtcblxuICAgIHZhciBjYXJkTm93ID0gMTtcblxuLy/Qt9Cw0L/QuNGB0YvQstCw0LXQvCDQutC+0LvQuNGH0LXRgdGC0LLQviDRjdC70LXQvNC10L3RgtC+0LJcbiAgICAkKCcucG9ydGZvbGlvX190ZXh0LTJfdG90YWwnKS50ZXh0KCcwJyArIGNvdW50T2ZDYXJkcyk7XG5cblxuICAgICQoJy5wb3J0Zm9saW9fX2Fycm93LWxpbmtfcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYod2lkdGggPCAoY291bnRPZkNhcmRzIC0gMSkgKiB3aWR0aENhcmQpe1xuICAgICAgICAgICAgY2FyZE5vdysrO1xuICAgICAgICAgICAgJCgnLnBvcnRmb2xpb19fdGV4dC0yX2NvdW50JykudGV4dCgnMCcgKyBjYXJkTm93KTtcbiAgICAgICAgICAgIHdpZHRoICs9IHdpZHRoQ2FyZDtcbiAgICAgICAgICAgICQoJy5wb3J0Zm9saW9fX2NvbnRhaW5lci0yJykuY3NzKCd0cmFuc2Zvcm0nLCd0cmFuc2xhdGUoLScgKyB3aWR0aCArICdweCknKTtcbiAgICAgICAgICAgICQoJy5wb3J0Zm9saW9fX2Fycm93LWxpbmtfbCcpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgd2lkdGggPSAwO1xuICAgICAgICAgICAgY2FyZE5vdyA9IDE7XG4gICAgICAgICAgICAkKCcucG9ydGZvbGlvX190ZXh0LTJfY291bnQnKS50ZXh0KCcwJyArIGNhcmROb3cpO1xuICAgICAgICAgICAgJCgnLnBvcnRmb2xpb19fY29udGFpbmVyLTInKS5jc3MoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgtJyArIHdpZHRoICsgJ3B4KScpO1xuICAgICAgICAgICAgJCgnLnBvcnRmb2xpb19fYXJyb3ctbGlua19sJykuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh3aWR0aCArICcgJyArIHdpZHRoQ2FyZCk7XG4gICAgICAgIGlmKHdpZHRoID09IDApe1xuICAgICAgICAgICAgJCgnLnBvcnRmb2xpb19fYXJyb3ctbGlua19sJykuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLnBvcnRmb2xpb19fYXJyb3ctbGlua19sJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih3aWR0aCA+IDApe1xuICAgICAgICAgICAgY2FyZE5vdy0tO1xuICAgICAgICAgICAgJCgnLnBvcnRmb2xpb19fdGV4dC0yX2NvdW50JykudGV4dCgnMCcgKyBjYXJkTm93KTtcbiAgICAgICAgICAgIHdpZHRoIC09IHdpZHRoQ2FyZDtcbiAgICAgICAgICAgICQoJy5wb3J0Zm9saW9fX2NvbnRhaW5lci0yJykuY3NzKCd0cmFuc2Zvcm0nLCd0cmFuc2xhdGUoLScgKyB3aWR0aCArICdweCknKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKCcucG9ydGZvbGlvX19hcnJvdy1saW5rX2wnKS5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgd2lkdGggPSAwO1xuICAgICAgICAgICAgY2FyZE5vdyA9IDE7XG4gICAgICAgICAgICAkKCcucG9ydGZvbGlvX190ZXh0LTJfY291bnQnKS50ZXh0KCcwJyArIGNhcmROb3cpO1xuICAgICAgICAgICAgJCgnLnBvcnRmb2xpb19fY29udGFpbmVyLTInKS5jc3MoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgtJyArIHdpZHRoICsgJ3B4KScpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHdpZHRoID09IDApe1xuICAgICAgICAgICAgJCgnLnBvcnRmb2xpb19fYXJyb3ctbGlua19sJykuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSIsIiQoJy5wcmljZV9fY2FyZCcpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcucHJpY2VfX2NhcmQsIC5wcmljZV9faW1nICcpLnJlbW92ZUNsYXNzKCdvcGFjaXR5LTEnKTtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdvcGFjaXR5LTEnKTtcbiAgICAkKHRoaXMpLmZpbmQoJy5wcmljZV9faW1nJykuYWRkQ2xhc3MoJ29wYWNpdHktMSB6b29tSW4nKTtcbn0pOyIsIi8vINC00YPQvNCw0Lsg0L/RgNC40LLRj9C30LDRgtGM0YHRjyDQuiDQuNC90LTQtdC60YHRgyDQuNC70Lgg0LogaWQsINGA0LXRiNC40Lsg0Log0L/QvtGA0Y/QtNC60YMsINC90LUg0YPQstC10YDQtdC9LCDRh9GC0L4g0Y3RgtC+INC/0YDQsNCy0LjQu9GM0L3QvlxuJCgnLndheV9fdGV4dC0yJykuaG92ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICBpZigkKHdpbmRvdykud2lkdGgoKSA+IDYwMCl7XG4gICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgJCgnLndheV9fdGV4dC0yJykucmVtb3ZlQ2xhc3MoJ3doaXRlJyk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3doaXRlJyk7XG4gICAgICAgIGlmKGluZGV4ID09IDApe1xuICAgICAgICAgICAgJCgnLndheV9fdGV4dC0zJykudGV4dCgn0JjQt9GD0YfQsNC10Lwg0LrQvtC80L/QsNC90LjRjiDQuCDQutC+0L3QutGD0YDQtdC90YLQvtCyLCDQvdCw0YXQvtC00LjQvCDQv9GA0LXQuNC80YPRidC10YHRgtCy0LAsINC30LDQutGA0YvQstCw0LXQvCDQstC+0LfRgNCw0LbQtdC90LjRjywg0L3QuNCy0LXQu9C40YDRg9C10Lwg0YHRgtGA0LDRhdC4LCDRgdC+0LfQtNCw0LXQvCDRgdC40LvRjNC90L7QtSDQv9GA0LXQtNC70L7QttC10L3QuNC1LicpO1xuICAgICAgICAgICAgJCgnLndheV9faWNvbicpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsJ3VybCguLi9pbWcvd2F5X18xLnBuZyknKVxuICAgICAgICB9XG4gICAgICAgIGlmKGluZGV4ID09IDEpe1xuICAgICAgICAgICAgJCgnLndheV9fdGV4dC0zJykudGV4dCgn0J/RgNC+0LLQvtC00LjQvCBicmFpbiBzdG9ybTog0L/RgNC+0LTRg9C80YvQstCw0LXQvCDRgdGC0YDRg9C60YLRg9GA0YMsINCx0LvQvtC60LgsINGF0LDRgNCw0LrRgtC10YAg0Lgg0YHRgtC40LvRjCDQuNGB0YXQvtC00Y8g0LjQtyDQt9Cw0LTQsNGHINCx0LjQt9C90LXRgdCwLicpO1xuICAgICAgICAgICAgJCgnLndheV9faWNvbicpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsJ3VybCguLi9pbWcvd2F5X18yLnBuZyknKVxuICAgICAgICB9XG4gICAgICAgIGlmKGluZGV4ID09IDIpe1xuICAgICAgICAgICAgJCgnLndheV9fdGV4dC0zJykudGV4dCgn0KPQv9GA0LDQstC70Y/QtdC8INCy0L3QuNC80LDQvdC40LXQvCwg0YHQvtC30LTQsNGR0Lwg0LjQvdGC0LXRgNC10YEg0Log0YPRgdC70YPQs9C1L9C/0YDQvtC00YPQutGC0YMg0LIg0YPQtNC+0LHQvdC+0Lkg0L3QsNCy0LjQs9Cw0YbQuNC4INC4INGB0YLQuNC70YzQvdC+0Lwg0LTQuNC30LDQudC90LUnKTtcbiAgICAgICAgICAgICQoJy53YXlfX2ljb24nKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCd1cmwoLi4vaW1nL3dheV9fMy5wbmcpJylcbiAgICAgICAgfVxuICAgICAgICBpZihpbmRleCA9PSAzKXtcbiAgICAgICAgICAgICQoJy53YXlfX3RleHQtMycpLnRleHQoJ9Ch0L7Qt9C00LDRkdC8INGN0YTRhNC10LrRgiDQv9GA0LjRgdGD0YLRgdGC0LLQuNGPLCDigJzQv9GA0L7QstC+0LTQuNC8INGN0LrRgdC60YPRgNGB0LjRjuKAnSDQv9C+INGB0LDQudGC0YMsINCy0YvQstC+0LTQuNC8INGE0L7QutGD0YEg0L3QsCDRhtC10LvQtdCy0YvQtSDQtNC10LnRgdGC0LLQuNGPLicpO1xuICAgICAgICAgICAgJCgnLndheV9faWNvbicpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsJ3VybCguLi9pbWcvd2F5X180LnBuZyknKVxuICAgICAgICB9XG4gICAgICAgIGlmKGluZGV4ID09IDQpe1xuICAgICAgICAgICAgJCgnLndheV9fdGV4dC0zJykudGV4dCgn0J/QvtC00LHQuNGA0LDQtdC8INGG0LXQu9C10LLRi9C1INC00LvRjyDQvdC40YjQuCDRgNC10LrQu9Cw0LzQvdGL0LUg0L/Qu9C+0YnQsNC00LggKFBQQywgc21tKSDQv9C+0LzQvtCz0LDQtdC8INC+0YLQsdC40YLRjCDQt9Cw0YLRgNCw0YLRiyDQvdCwINGA0LXQutC70LDQvNGDINC4INCy0YvQudGC0Lgg0LIg0L/RgNC40LHRi9C70YwnKTtcbiAgICAgICAgICAgICQoJy53YXlfX2ljb24nKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCd1cmwoLi4vaW1nL3dheV9fNS5wbmcpJylcbiAgICAgICAgfVxuICAgICAgICBpZihpbmRleCA9PSA1KXtcbiAgICAgICAgICAgICQoJy53YXlfX3RleHQtMycpLnRleHQoJ9Cj0LrRgNC10L/Qu9GP0LXQvCDQuNC80LjQtNC2INCx0YDQtdC90LTQsCwg0YHQvtCx0LjRgNCw0LXQvCDQuCDQvtC/0YLQuNC80LjQt9C40YDRg9C10Lwg0YDQtdC30YPQu9GM0YLQsNGC0YsnKTtcbiAgICAgICAgICAgICQoJy53YXlfX2ljb24nKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCd1cmwoLi4vaW1nL3dheV9fNi5wbmcpJylcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cblxuLy9tb2JpbGUgc2xpZGVyIHN0YXJ0XG5pZigkKHdpbmRvdykud2lkdGgoKSA8PSA2MDApe1xuICAgIHdheVNsaWRlcigpO1xufVxuXG4kKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XG4gICAgaWYoJCh3aW5kb3cpLndpZHRoKCkgPD0gNjAwKXtcbiAgICAgICAgd2F5U2xpZGVyKCk7XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIHdheVNsaWRlcigpe1xuICAgIHZhciBjb3VudE9mQ2FyZCA9ICQoJy53YXlfX2NhcmQnKS5sZW5ndGg7XG4gICAgdmFyIHdpZHRoQ2FyZCA9ICQoJy53YXlfX2NhcmQnKS5vdXRlcldpZHRoKHRydWUpO1xuXG4gICAgJCgnLndheV9fdGV4dC03X3RvdGFsJykudGV4dCgnMCcgKyBjb3VudE9mQ2FyZCk7XG5cbiAgICAvLyDRgtGA0L7RgtC70LjQvdCzXG4gICAgJCggJy53YXlfX292ZXJmbG93JyApLnNjcm9sbCh0aHJvdHRsZShmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIGxlZnQgPSAkKCcud2F5X19vdmVyZmxvdycpLnNjcm9sbExlZnQoKTtcbiAgICAgICAgICAgIC8v0LjRidGDINC60LDQutC+0Lkg0Y3Qu9C10LzQtdC90YLQsCwgMjUg0YTQsNC90YLQvtC80L3QvtC1INGH0LjRgdC70L4g0LTQu9GPINCx0L7Qu9C10LUg0LvQvtCz0LjRh9C90YvRhSDQtNCw0L3QvdGL0YVcbiAgICAgICAgICAgICQoJy53YXlfX3RleHQtN19jb3VudCcpLnRleHQoICcwJyArICggKE1hdGguZmxvb3IoIGxlZnQgLyAoIHdpZHRoQ2FyZCAtIDI1ICkpKSArIDEgKSk7XG5cbiAgICAgICAgfSw1MClcbiAgICApO1xufVxuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHdhaXQpIHtcbiAgICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoKHRpbWUgKyB3YWl0IC0gRGF0ZS5ub3coKSkgPCAwKSB7XG4gICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgdGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwidmFyIGN1cnNvciA9IHtcbiAgICBkZWxheTogOCxcbiAgICBfeDogMCxcbiAgICBfeTogMCxcbiAgICBlbmRYOiAod2luZG93LmlubmVyV2lkdGggLyAyKSxcbiAgICBlbmRZOiAod2luZG93LmlubmVySGVpZ2h0IC8gMiksXG4gICAgY3Vyc29yVmlzaWJsZTogdHJ1ZSxcbiAgICBjdXJzb3JFbmxhcmdlZDogZmFsc2UsXG4gICAgJGRvdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnNvci1kb3QnKSxcbiAgICAkb3V0bGluZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnNvci1kb3Qtb3V0bGluZScpLFxuXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFNldCB1cCBlbGVtZW50IHNpemVzXG4gICAgICAgIHRoaXMuZG90U2l6ZSA9IHRoaXMuJGRvdC5vZmZzZXRXaWR0aDtcbiAgICAgICAgdGhpcy5vdXRsaW5lU2l6ZSA9IHRoaXMuJG91dGxpbmUub2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgdGhpcy5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZURvdE91dGxpbmUoKTtcbiAgICB9LFxuXG4gICAgc2V0dXBFdmVudExpc3RlbmVyczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAvLyBBbmNob3IgaG92ZXJpbmdcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY3Vyc29yRW5sYXJnZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlQ3Vyc29yU2l6ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY3Vyc29yRW5sYXJnZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZWxmLnRvZ2dsZUN1cnNvclNpemUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL2N1c3RvbSBob3ZlclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3Vyc29yJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jdXJzb3JFbmxhcmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VsZi50b2dnbGVDdXJzb3JTaXplKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jdXJzb3JFbmxhcmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlQ3Vyc29yU2l6ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENsaWNrIGV2ZW50c1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuY3Vyc29yRW5sYXJnZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi50b2dnbGVDdXJzb3JTaXplKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmN1cnNvckVubGFyZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzZWxmLnRvZ2dsZUN1cnNvclNpemUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgLy8gU2hvdyB0aGUgY3Vyc29yXG4gICAgICAgICAgICBzZWxmLmN1cnNvclZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi50b2dnbGVDdXJzb3JWaXNpYmlsaXR5KCk7XG5cbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIHRoZSBkb3RcbiAgICAgICAgICAgIHNlbGYuZW5kWCA9IGUucGFnZVg7XG4gICAgICAgICAgICBzZWxmLmVuZFkgPSBlLnBhZ2VZO1xuICAgICAgICAgICAgc2VsZi4kZG90LnN0eWxlLnRvcCA9IHNlbGYuZW5kWSArICdweCc7XG4gICAgICAgICAgICBzZWxmLiRkb3Quc3R5bGUubGVmdCA9IHNlbGYuZW5kWCArICdweCc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEhpZGUvc2hvdyBjdXJzb3JcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY3Vyc29yVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLnRvZ2dsZUN1cnNvclZpc2liaWxpdHkoKTtcbiAgICAgICAgICAgIHNlbGYuJGRvdC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIHNlbGYuJG91dGxpbmUuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBzZWxmLmN1cnNvclZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi50b2dnbGVDdXJzb3JWaXNpYmlsaXR5KCk7XG4gICAgICAgICAgICBzZWxmLiRkb3Quc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBzZWxmLiRvdXRsaW5lLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgYW5pbWF0ZURvdE91dGxpbmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc2VsZi5feCArPSAoc2VsZi5lbmRYIC0gc2VsZi5feCkgLyBzZWxmLmRlbGF5O1xuICAgICAgICBzZWxmLl95ICs9IChzZWxmLmVuZFkgLSBzZWxmLl95KSAvIHNlbGYuZGVsYXk7XG4gICAgICAgIHNlbGYuJG91dGxpbmUuc3R5bGUudG9wID0gc2VsZi5feSArICdweCc7XG4gICAgICAgIHNlbGYuJG91dGxpbmUuc3R5bGUubGVmdCA9IHNlbGYuX3ggKyAncHgnO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGVEb3RPdXRsaW5lLmJpbmQoc2VsZikpO1xuICAgIH0sXG5cbiAgICB0b2dnbGVDdXJzb3JTaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChzZWxmLmN1cnNvckVubGFyZ2VkKSB7XG4gICAgICAgICAgICBzZWxmLiRkb3Quc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjc1KSc7XG4gICAgICAgICAgICBzZWxmLiRvdXRsaW5lLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMiknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi4kZG90LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSknO1xuICAgICAgICAgICAgc2VsZi4kb3V0bGluZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpJztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB0b2dnbGVDdXJzb3JWaXNpYmlsaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChzZWxmLmN1cnNvclZpc2libGUpIHtcbiAgICAgICAgICAgIHNlbGYuJGRvdC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIHNlbGYuJG91dGxpbmUuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLiRkb3Quc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBzZWxmLiRvdXRsaW5lLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jdXJzb3IuaW5pdCgpOyJdfQ==
