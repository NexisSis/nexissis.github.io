const tabletMedia=768;function closeModal(e){$(e).modal("hide")}function closeDropdown(e){$(e).removeClass("show")}function toggleActivateModal(){$("#activateVip-modal").modal("hide");const e=document.getElementById("activateVip-modal");e.addEventListener("hidden.bs.modal",function(e){$("#activateVipScreen2-modal").modal("show")},{once:!0})}$(window).resize(function(){var e=$("#activateVipScreen2-modal").hasClass("show"),o=$("#inboxMessages-modal").hasClass("show"),i=$("#aboutMe-modal").hasClass("show");window.innerWidth>tabletMedia&&(o&&$("#inboxMessages-modal").modal("hide"),e&&$("#activateVipScreen2-modal").modal("hide"),i&&$("#aboutMe-modal").modal("hide"))}),$(document).ready(function(){$(".slider-owl").owlCarousel({nav:!1,items:5,loop:!0,margin:10,slideTransition:"linear",autoplayTimeout:3e3,autoplaySpeed:3e3,autoplay:!0,autoplayHoverPause:!0,autoWidth:!0,dragEndSpeed:3e3})}),$(".slider-changeRegionButton").click(function(){$(".slider-region").is(":visible")?($(".slider-region").hide(),$(".slider-country").show()):$(".slider-country").is(":visible")&&($(".slider-region").show(),$(".slider-country").hide())});const nextArrow="<div class='activateVip-nextArrowIcon'></div>",prevArrow="<div class='activateVip-prevArrowIcon'></div>";$(".activateVip-carousel").owlCarousel({nav:!0,navContainerClass:"activateVip-nav",navClass:["activateVip-prev","activateVip-next"],navText:[prevArrow,nextArrow],items:3,responsive:{0:{items:1},769:{items:3}},loop:!0,margin:20,autoplay:!0}),$(".myProfileMain-carousel").owlCarousel({items:1,loop:!0,margin:20}),$(".strangersProfileMain-carousel").owlCarousel({items:1,loop:!0,margin:20});const nextArrowGifts="<div class='gifts-nextArrowIcon'></div>",prevArrowGifts="<div class='gifts-prevArrowIcon'></div>";function toggleActivateModalFind(){$("#find-modal").modal("hide");const e=document.getElementById("find-modal"),o=document.getElementById("findSettings-modal");e.addEventListener("hidden.bs.modal",function(e){$("#findSettings-modal").modal("show")},{once:!0}),o.addEventListener("hidden.bs.modal",function(e){$("#find-modal").modal("show")},{once:!0})}$(".gifts-carousel").owlCarousel({nav:!0,navContainerClass:"gifts-nav",navClass:["gifts-prev","gifts-next"],navText:[prevArrowGifts,nextArrowGifts],items:1,loop:!1,margin:20}),$("#hobbyTags").tagsinput({confirmKeys:[13,32]}),$(".dropdown-menu").bind("click",e=>{e.stopPropagation()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YWJsZXRNZWRpYSA9IDc2ODtcclxuXHJcbiQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc3QgaXNPcGVuTW9kYWxTY3JlZW4yID0gJChcIiNhY3RpdmF0ZVZpcFNjcmVlbjItbW9kYWxcIikuaGFzQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgY29uc3QgaXNPcGVuTW9kYWxTY3JlZW5JbmJveE1lc3NhZ2VzID0gJChcIiNpbmJveE1lc3NhZ2VzLW1vZGFsXCIpLmhhc0NsYXNzKFwic2hvd1wiKTtcclxuICAgIGNvbnN0IGlzT3Blbk1vZGFsU2NyZWVuQWJvdXRNZSA9ICQoXCIjYWJvdXRNZS1tb2RhbFwiKS5oYXNDbGFzcyhcInNob3dcIik7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gdGFibGV0TWVkaWEpIHtcclxuICAgICAgICBpZiAoaXNPcGVuTW9kYWxTY3JlZW5JbmJveE1lc3NhZ2VzKSB7XHJcbiAgICAgICAgICAgICQoXCIjaW5ib3hNZXNzYWdlcy1tb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc09wZW5Nb2RhbFNjcmVlbjIpIHtcclxuICAgICAgICAgICAgJChcIiNhY3RpdmF0ZVZpcFNjcmVlbjItbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNPcGVuTW9kYWxTY3JlZW5BYm91dE1lKSB7XHJcbiAgICAgICAgICAgICQoXCIjYWJvdXRNZS1tb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsKGlkTW9kYWwpIHtcclxuICAgICQoaWRNb2RhbCkubW9kYWwoXCJoaWRlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZURyb3Bkb3duKGlkRHJvcGRvd24pIHtcclxuICAgICQoaWREcm9wZG93bikucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxufVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLnNsaWRlci1vd2wnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICBpdGVtczogNSxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgc2xpZGVUcmFuc2l0aW9uOiAnbGluZWFyJyxcclxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDMwMDAsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXHJcbiAgICAgICAgYXV0b1dpZHRoOnRydWUsXHJcbiAgICAgICAgZHJhZ0VuZFNwZWVkOiAzMDAwLFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJCgnLnNsaWRlci1jaGFuZ2VSZWdpb25CdXR0b24nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCgnLnNsaWRlci1yZWdpb24nKS5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgICQoJy5zbGlkZXItcmVnaW9uJykuaGlkZSgpO1xyXG4gICAgICAgICQoJy5zbGlkZXItY291bnRyeScpLnNob3coKTtcclxuICAgIH0gZWxzZSBpZiAoJCgnLnNsaWRlci1jb3VudHJ5JykuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAkKCcuc2xpZGVyLXJlZ2lvbicpLnNob3coKTtcclxuICAgICAgICAkKCcuc2xpZGVyLWNvdW50cnknKS5oaWRlKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5mdW5jdGlvbiB0b2dnbGVBY3RpdmF0ZU1vZGFsKCkge1xyXG5cclxuICAgICQoXCIjYWN0aXZhdGVWaXAtbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgY29uc3QgbXlNb2RhbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2YXRlVmlwLW1vZGFsJyk7XHJcbiAgICAvLyDQldGB0LvQuCDRgdC60YDRi9Cy0LDRgtGMINC+0LrQvdC+INCx0LXQtyDQu9C40YHRgtC10L3QtdGA0LAsINGC0L4g0L/QvtGP0LLQu9GP0LXRgtGB0Y8g0LHQsNCzINGB0L4g0YHQutGA0L7Qu9C+0LwgKNGB0LrRgNC+0LvQuNGC0YHRjyDRhNC+0L0pXHJcbiAgICBteU1vZGFsRWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgJChcIiNhY3RpdmF0ZVZpcFNjcmVlbjItbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfSwge29uY2U6IHRydWV9KTtcclxufVxyXG5jb25zdCBuZXh0QXJyb3cgPSBcIjxkaXYgY2xhc3M9J2FjdGl2YXRlVmlwLW5leHRBcnJvd0ljb24nPjwvZGl2PlwiXHJcbmNvbnN0IHByZXZBcnJvdyA9IFwiPGRpdiBjbGFzcz0nYWN0aXZhdGVWaXAtcHJldkFycm93SWNvbic+PC9kaXY+XCJcclxuXHJcbiQoXCIuYWN0aXZhdGVWaXAtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgbmF2OiB0cnVlLFxyXG4gICAgbmF2Q29udGFpbmVyQ2xhc3M6IFwiYWN0aXZhdGVWaXAtbmF2XCIsXHJcbiAgICBuYXZDbGFzczogW1wiYWN0aXZhdGVWaXAtcHJldlwiLFwiYWN0aXZhdGVWaXAtbmV4dFwiXSxcclxuICAgIG5hdlRleHQ6IFtwcmV2QXJyb3csIG5leHRBcnJvd10sXHJcbiAgICBpdGVtczogMyxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njk6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxufSk7XHJcbiQoXCIubXlQcm9maWxlTWFpbi1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICBpdGVtczogMSxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgLy8gYXV0b3BsYXk6IHRydWUsXHJcbn0pO1xyXG5cclxuXHJcbiQoXCIuc3RyYW5nZXJzUHJvZmlsZU1haW4tY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIC8vIGF1dG9wbGF5OiB0cnVlLFxyXG59KTtcclxuY29uc3QgbmV4dEFycm93R2lmdHMgPSBcIjxkaXYgY2xhc3M9J2dpZnRzLW5leHRBcnJvd0ljb24nPjwvZGl2PlwiXHJcbmNvbnN0IHByZXZBcnJvd0dpZnRzID0gXCI8ZGl2IGNsYXNzPSdnaWZ0cy1wcmV2QXJyb3dJY29uJz48L2Rpdj5cIlxyXG5cclxuJChcIi5naWZ0cy1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICBuYXY6IHRydWUsXHJcbiAgICBuYXZDb250YWluZXJDbGFzczogXCJnaWZ0cy1uYXZcIixcclxuICAgIG5hdkNsYXNzOiBbXCJnaWZ0cy1wcmV2XCIsXCJnaWZ0cy1uZXh0XCJdLFxyXG4gICAgbmF2VGV4dDogW3ByZXZBcnJvd0dpZnRzLCBuZXh0QXJyb3dHaWZ0c10sXHJcbiAgICBpdGVtczogMSxcclxuICAgIC8v0LXRgdC70Lgg0LHQtdGB0LrQvtC90LXRh9C90LDRjyDQv9GA0L7QutGA0YPRgtC60LAgLSDQvdC1INGA0LDQsdC+0YLQsNC10YIgYm9yZGVyINC90LAgbGFiZWxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxufSk7XHJcbmZ1bmN0aW9uIHRvZ2dsZUFjdGl2YXRlTW9kYWxGaW5kKCkge1xyXG5cclxuICAgICQoXCIjZmluZC1tb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICBjb25zdCBteU1vZGFsRWxGaW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmQtbW9kYWwnKTtcclxuICAgIGNvbnN0IG15TW9kYWxFbEZpbmRTZXR0aW5ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kU2V0dGluZ3MtbW9kYWwnKTtcclxuICAgIC8vINCV0YHQu9C4INGB0LrRgNGL0LLQsNGC0Ywg0L7QutC90L4g0LHQtdC3INC70LjRgdGC0LXQvdC10YDQsCwg0YLQviDQv9C+0Y/QstC70Y/QtdGC0YHRjyDQsdCw0LMg0YHQviDRgdC60YDQvtC70L7QvCAo0YHQutGA0L7Qu9C40YLRgdGPINGE0L7QvSlcclxuICAgIG15TW9kYWxFbEZpbmQuYWRkRXZlbnRMaXN0ZW5lcignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgJChcIiNmaW5kU2V0dGluZ3MtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfSwge29uY2U6IHRydWV9KTtcclxuICAgIG15TW9kYWxFbEZpbmRTZXR0aW5ncy5hZGRFdmVudExpc3RlbmVyKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAkKFwiI2ZpbmQtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfSwge29uY2U6IHRydWV9KTtcclxufVxyXG5cclxuJCgnI2hvYmJ5VGFncycpLnRhZ3NpbnB1dCh7XHJcbiAgICBjb25maXJtS2V5czogWzEzLCAzMl1cclxufSk7XHJcblxyXG4kKCcuZHJvcGRvd24tbWVudScpLmJpbmQoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG59KTsiXSwibmFtZXMiOlsidGFibGV0TWVkaWEiLCJjbG9zZU1vZGFsIiwiaWRNb2RhbCIsIiQiLCJtb2RhbCIsImNsb3NlRHJvcGRvd24iLCJpZERyb3Bkb3duIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVBY3RpdmF0ZU1vZGFsIiwibXlNb2RhbEVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm9uY2UiLCJ3aW5kb3ciLCJyZXNpemUiLCJpc09wZW5Nb2RhbFNjcmVlbjIiLCJoYXNDbGFzcyIsImlzT3Blbk1vZGFsU2NyZWVuSW5ib3hNZXNzYWdlcyIsImlzT3Blbk1vZGFsU2NyZWVuQWJvdXRNZSIsImlubmVyV2lkdGgiLCJyZWFkeSIsIm93bENhcm91c2VsIiwibmF2IiwiaXRlbXMiLCJsb29wIiwibWFyZ2luIiwic2xpZGVUcmFuc2l0aW9uIiwiYXV0b3BsYXlUaW1lb3V0IiwiYXV0b3BsYXlTcGVlZCIsImF1dG9wbGF5IiwiYXV0b3BsYXlIb3ZlclBhdXNlIiwiYXV0b1dpZHRoIiwiZHJhZ0VuZFNwZWVkIiwiY2xpY2siLCJpcyIsImhpZGUiLCJzaG93IiwibmV4dEFycm93IiwicHJldkFycm93IiwibmF2Q29udGFpbmVyQ2xhc3MiLCJuYXZDbGFzcyIsIm5hdlRleHQiLCJyZXNwb25zaXZlIiwiMCIsIjc2OSIsIm5leHRBcnJvd0dpZnRzIiwicHJldkFycm93R2lmdHMiLCJ0b2dnbGVBY3RpdmF0ZU1vZGFsRmluZCIsIm15TW9kYWxFbEZpbmQiLCJteU1vZGFsRWxGaW5kU2V0dGluZ3MiLCJ0YWdzaW5wdXQiLCJjb25maXJtS2V5cyIsImJpbmQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxZQUFjLElBc0JwQixTQUFTQyxXQUFXQyxHQUNoQkMsRUFBRUQsR0FBU0UsTUFBTSxRQUdyQixTQUFTQyxjQUFjQyxHQUNuQkgsRUFBRUcsR0FBWUMsWUFBWSxRQTRCOUIsU0FBU0Msc0JBRUxMLEVBQUUsc0JBQXNCQyxNQUFNLFFBQzlCLE1BQU1LLEVBQVlDLFNBQVNDLGVBQWUscUJBRTFDRixFQUFVRyxpQkFBaUIsa0JBQW1CLFNBQVVDLEdBQ3BEVixFQUFFLDZCQUE2QkMsTUFBTSxTQUN0QyxDQUFDVSxNQUFNLElBNURkWCxFQUFFWSxRQUFRQyxPQUFPLFdBRWIsSUFBTUMsRUFBcUJkLEVBQUUsNkJBQTZCZSxTQUFTLFFBQzdEQyxFQUFpQ2hCLEVBQUUsd0JBQXdCZSxTQUFTLFFBQ3BFRSxFQUEyQmpCLEVBQUUsa0JBQWtCZSxTQUFTLFFBRTFESCxPQUFPTSxXQUFhckIsY0FDaEJtQixHQUNBaEIsRUFBRSx3QkFBd0JDLE1BQU0sUUFFaENhLEdBQ0FkLEVBQUUsNkJBQTZCQyxNQUFNLFFBRXJDZ0IsR0FDQWpCLEVBQUUsa0JBQWtCQyxNQUFNLFdBY3RDRCxFQUFFTyxVQUFVWSxNQUFNLFdBQ2RuQixFQUFFLGVBQWVvQixZQUFZLENBQ3pCQyxLQUFLLEVBQ0xDLE1BQU8sRUFDUEMsTUFBTSxFQUNOQyxPQUFRLEdBQ1JDLGdCQUFpQixTQUNqQkMsZ0JBQWlCLElBQ2pCQyxjQUFlLElBQ2ZDLFVBQVUsRUFDVkMsb0JBQW9CLEVBQ3BCQyxXQUFVLEVBQ1ZDLGFBQWMsUUFJdEIvQixFQUFFLDhCQUE4QmdDLE1BQU0sV0FDOUJoQyxFQUFFLGtCQUFrQmlDLEdBQUcsYUFDdkJqQyxFQUFFLGtCQUFrQmtDLE9BQ3BCbEMsRUFBRSxtQkFBbUJtQyxRQUNkbkMsRUFBRSxtQkFBbUJpQyxHQUFHLGNBQy9CakMsRUFBRSxrQkFBa0JtQyxPQUNwQm5DLEVBQUUsbUJBQW1Ca0MsVUFZN0IsTUFBTUUsVUFBWSxnREFDWkMsVUFBWSxnREFFbEJyQyxFQUFFLHlCQUF5Qm9CLFlBQVksQ0FDbkNDLEtBQUssRUFDTGlCLGtCQUFtQixrQkFDbkJDLFNBQVUsQ0FBQyxtQkFBbUIsb0JBQzlCQyxRQUFTLENBQUNILFVBQVdELFdBQ3JCZCxNQUFPLEVBQ1BtQixXQUFZLENBQ1JDLEVBQUcsQ0FDQ3BCLE1BQU8sR0FFWHFCLElBQUssQ0FDRHJCLE1BQU8sSUFHZkMsTUFBTSxFQUNOQyxPQUFRLEdBQ1JJLFVBQVUsSUFFZDVCLEVBQUUsMkJBQTJCb0IsWUFBWSxDQUNyQ0UsTUFBTyxFQUNQQyxNQUFNLEVBQ05DLE9BQVEsS0FLWnhCLEVBQUUsa0NBQWtDb0IsWUFBWSxDQUM1Q0UsTUFBTyxFQUNQQyxNQUFNLEVBQ05DLE9BQVEsS0FHWixNQUFNb0IsZUFBaUIsMENBQ2pCQyxlQUFpQiwwQ0FZdkIsU0FBU0MsMEJBRUw5QyxFQUFFLGVBQWVDLE1BQU0sUUFDdkIsTUFBTThDLEVBQWdCeEMsU0FBU0MsZUFBZSxjQUN4Q3dDLEVBQXdCekMsU0FBU0MsZUFBZSxzQkFFdER1QyxFQUFjdEMsaUJBQWlCLGtCQUFtQixTQUFVQyxHQUN4RFYsRUFBRSx1QkFBdUJDLE1BQU0sU0FDaEMsQ0FBQ1UsTUFBTSxJQUNWcUMsRUFBc0J2QyxpQkFBaUIsa0JBQW1CLFNBQVVDLEdBQ2hFVixFQUFFLGVBQWVDLE1BQU0sU0FDeEIsQ0FBQ1UsTUFBTSxJQXJCZFgsRUFBRSxtQkFBbUJvQixZQUFZLENBQzdCQyxLQUFLLEVBQ0xpQixrQkFBbUIsWUFDbkJDLFNBQVUsQ0FBQyxhQUFhLGNBQ3hCQyxRQUFTLENBQUNLLGVBQWdCRCxnQkFDMUJ0QixNQUFPLEVBRVBDLE1BQU0sRUFDTkMsT0FBUSxLQWdCWnhCLEVBQUUsY0FBY2lELFVBQVUsQ0FDdEJDLFlBQWEsQ0FBQyxHQUFJLE1BR3RCbEQsRUFBRSxrQkFBa0JtRCxLQUFLLFFBQVNDLElBQzlCQSxFQUFFQyJ9
