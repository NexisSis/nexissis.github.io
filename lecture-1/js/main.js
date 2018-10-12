function audioAnalyzer(e){var n=document.getElementById("video-"+e),t=initAudioAnalyzer();if(t){var a=t.createMediaElementSource(n),i=t.createAnalyser();i.fftSize=32,a.connect(i);var o=new Uint8Array(i.frequencyBinCount);a.connect(t.destination),function e(){requestAnimationFrame(e),i.getByteFrequencyData(o);var n="translateX("+parseInt(100-o[0]/2.55)+"%)";$(".video__volume-line").css("transform",n)}()}else console.log("audioContext is null")}
function initAudioAnalyzer(){var o=null;try{window.AudioContext=window.AudioContext||window.webkitAudioContext,o=new AudioContext}catch(o){alert("Opps.. Your browser do not support audio API")}return o}
function initVideo(e,t){if(Hls.isSupported()){var i=new Hls;i.loadSource(t),i.attachMedia(e),i.on(Hls.Events.MANIFEST_PARSED,function(){e.play()})}else e.canPlayType("application/vnd.apple.mpegurl")&&(e.src="https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8",e.addEventListener("loadedmetadata",function(){e.play()}))}function initVideoFilters(){for(var e={},t=$(".video__item").length,i=0;i<t;i++)e[i]={},e[i].contrast=1,e[i].brightness=1;return e}
initVideo(document.getElementById("video-1"),"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"),initVideo(document.getElementById("video-2"),"https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"),initVideo(document.getElementById("video-3"),"https://www.streambox.fr/playlists/test_001/stream.m3u8"),initVideo(document.getElementById("video-4"),"https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8");var videoNum=1,videoFilters=initVideoFilters();450<$(document).width()?videoAnimation():setVideoDefaultCss(),$(window).resize(function(){450<$(document).width()?videoAnimation():setVideoDefaultCss()});
function videoAnimation(){$(".video__item-1").click(function(){$(".video__item-1").addClass("h-40 w-100"),$(".video__item-2").addClass("h-40 w-0 o-0"),$(".video__item-3").addClass("h-0 o-0"),$(".video__item-4").addClass("h-0 o-0"),$(".video__controls").addClass("o-1"),$("#video-1").prop("controls",!0),document.getElementById("video-2").pause(),document.getElementById("video-3").pause(),document.getElementById("video-4").pause(),videoNum=1,videoControlsChangeValue(videoNum),audioAnalyzer(videoNum)}),$(".video__item-2").click(function(){$(".video__item-1").addClass("h-40 w-0 o-0"),$(".video__item-2").addClass("h-40 w-100"),$(".video__item-3").addClass("h-0 o-0"),$(".video__item-4").addClass("h-0 o-0"),$(".video__controls").addClass("o-1"),$("#video-2").prop("controls",!0),document.getElementById("video-1").pause(),document.getElementById("video-3").pause(),document.getElementById("video-4").pause(),videoNum=2,videoControlsChangeValue(videoNum),audioAnalyzer(videoNum)}),$(".video__item-3").click(function(){$(".video__item-1").addClass("h-0 o-0"),$(".video__item-2").addClass("h-0 o-0"),$(".video__item-3").addClass("w-100 h-40"),$(".video__item-4").addClass("w-0 h-0 o-0"),$("#video-3").prop("controls",!0),$(".video__controls").addClass("o-1"),document.getElementById("video-1").pause(),document.getElementById("video-2").pause(),document.getElementById("video-4").pause(),videoNum=3,videoControlsChangeValue(videoNum),audioAnalyzer(videoNum)}),$(".video__item-4").click(function(){$(".video__item-1").addClass("h-0 o-0"),$(".video__item-2").addClass("h-0 o-0"),$(".video__item-3").addClass("w-0 h-0 o-0"),$(".video__item-4").addClass("w-100 h-40"),$("#video-4").prop("controls",!0),$(".video__controls").addClass("o-1"),document.getElementById("video-1").pause(),document.getElementById("video-2").pause(),document.getElementById("video-3").pause(),videoNum=4,videoControlsChangeValue(videoNum),audioAnalyzer(videoNum)}),$(".video__button").click(function(){setVideoDefaultCss(),document.getElementById("video-1").play(),document.getElementById("video-2").play(),document.getElementById("video-3").play(),document.getElementById("video-4").play(),$("#video-1").prop("controls",!1),$("#video-1").prop("muted",!0),$("#video-2").prop("controls",!1),$("#video-2").prop("muted",!0),$("#video-3").prop("controls",!1),$("#video-3").prop("muted",!0),$("#video-4").prop("controls",!1),$("#video-4").prop("muted",!0),videoNum=null})}function setVideoDefaultCss(){$(".video__item-1").removeClass("h-0 w-0 o-0 h-40 w-100"),$(".video__item-2").removeClass("h-0 w-0 o-0 h-40 w-100"),$(".video__item-3").removeClass("h-0 w-0 o-0 h-40 w-100"),$(".video__item-4").removeClass("h-0 w-0 o-0 h-40 w-100"),$(".video__controls").removeClass("o-1")}
function videoControlsChangeValue(i){videoFilters[i-1]&&(videoFilters[i-1].contrast||0==videoFilters[i-1].contrast?$("#video__contrast").val(100*videoFilters[i-1].contrast):$("#video__contrast").val(100),videoFilters[i-1].brightness||0==videoFilters[i-1].brightness?$("#video__brightness").val(100*videoFilters[i-1].brightness):$("#video__brightness").val(100))}function changeContrast(i){if(videoNum){var e=".video__item-"+videoNum,t="contrast("+i/100+")";$(e).css("filter",t),videoFilters||(videoFilters=initVideoFilters()),videoFilters[videoNum-1].contrast=i/100}}function changeBrightness(i){if(videoNum){var e=".video__item-"+videoNum,t="brightness("+i/100+")";$(e).css("filter",t),videoFilters||(videoFilters=initVideoFilters()),videoFilters[videoNum-1].brightness=i/100}}
function cutSongName(n){if($(window).width()<450){var t=n;23<t.length&&(t=t.substring(0,23),t+="..."),$(".player__song").text(t)}}$(document).ready(function(){var n=$(".player__song").text();cutSongName(n),$(window).resize(function(){cutSongName(n)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvL2F1ZGlvQW5hbHl6ZXIuanMiLCJ2aWRlby9pbml0QXVkaW9BbmFseXplci5qcyIsInZpZGVvL2luaXRWaWRlby5qcyIsInZpZGVvL3ZpZGVvLmpzIiwidmlkZW8vdmlkZW9BbmltYXRlLmpzIiwidmlkZW8vdmlkZW9Db250cm9scy5qcyIsIm1haW4vY2FyZC9wbGF5ZXIvcGxheWVyLmpzIl0sIm5hbWVzIjpbImF1ZGlvQW5hbHl6ZXIiLCJ2aWRlb051bSIsImF1ZGlvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImF1ZGlvQ29udGV4dCIsImluaXRBdWRpb0FuYWx5emVyIiwiYXVkaW9TcmMiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiZmZ0U2l6ZSIsImNvbm5lY3QiLCJmcmVxdWVuY3lEYXRhIiwiVWludDhBcnJheSIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZGVzdGluYXRpb24iLCJyZW5kZXJGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdldEJ5dGVGcmVxdWVuY3lEYXRhIiwidHJhbnNsYXRlIiwicGFyc2VJbnQiLCIkIiwiY3NzIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImUiLCJhbGVydCIsImluaXRWaWRlbyIsInZpZGVvIiwidXJsIiwiSGxzIiwiaXNTdXBwb3J0ZWQiLCJobHMiLCJsb2FkU291cmNlIiwiYXR0YWNoTWVkaWEiLCJvbiIsIkV2ZW50cyIsIk1BTklGRVNUX1BBUlNFRCIsInBsYXkiLCJjYW5QbGF5VHlwZSIsInNyYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0VmlkZW9GaWx0ZXJzIiwicmVzdWx0IiwiY291bnQiLCJsZW5ndGgiLCJpIiwiY29udHJhc3QiLCJicmlnaHRuZXNzIiwidmlkZW9GaWx0ZXJzIiwid2lkdGgiLCJ2aWRlb0FuaW1hdGlvbiIsInNldFZpZGVvRGVmYXVsdENzcyIsInJlc2l6ZSIsImNsaWNrIiwiYWRkQ2xhc3MiLCJwcm9wIiwicGF1c2UiLCJ2aWRlb0NvbnRyb2xzQ2hhbmdlVmFsdWUiLCJyZW1vdmVDbGFzcyIsIm51bSIsInZhbCIsImNoYW5nZUNvbnRyYXN0IiwiaXRlbUNsYXNzTmFtZSIsImNzc0NvbnRyYWN0IiwiY2hhbmdlQnJpZ2h0bmVzcyIsImNzc0JyaWdodG5lc3MiLCJjdXRTb25nTmFtZSIsInNvbmdOYW1lIiwiYSIsInN1YnN0cmluZyIsInRleHQiLCJyZWFkeSIsImZpcnN0U29uZ05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLGNBQWNDLEdBQ25CLElBQUlDLEVBQVFDLFNBQVNDLGVBQWUsU0FBU0gsR0FDekNJLEVBQWVDLG9CQUNuQixHQUFHRCxFQUFjLENBQ2IsSUFBSUUsRUFBV0YsRUFBYUcseUJBQXlCTixHQUNqRE8sRUFBV0osRUFBYUssaUJBRzVCRCxFQUFTRSxRQUFVLEdBQ25CSixFQUFTSyxRQUFRSCxHQUNqQixJQUFJSSxFQUFnQixJQUFJQyxXQUFXTCxFQUFTTSxtQkFDNUNSLEVBQVNLLFFBQVFQLEVBQWFXLGFBRzlCLFNBQVNDLElBQ0xDLHNCQUFzQkQsR0FHdEJSLEVBQVNVLHFCQUFxQk4sR0FHOUIsSUFDSU8sRUFBWSxjQURIQyxTQUFTLElBQUtSLEVBQWMsR0FBRyxNQUNQLEtBQ3JDUyxFQUFFLHVCQUF1QkMsSUFBSSxZQUFZSCxHQUU3Q0gsUUFFQU8sUUFBUUMsSUFBSTtBQzNCcEIsU0FBU25CLG9CQUNMLElBQUlELEVBQWUsS0FDbkIsSUFDSXFCLE9BQU9DLGFBQWVELE9BQU9DLGNBQWNELE9BQU9FLG1CQUNsRHZCLEVBQWUsSUFBSXNCLGFBRXZCLE1BQU1FLEdBQ0ZDLE1BQU0sZ0RBRVYsT0FBT3pCO0FDUlgsU0FBUzBCLFVBQVVDLEVBQU9DLEdBQ3RCLEdBQUlDLElBQUlDLGNBQWUsQ0FDbkIsSUFBSUMsRUFBTSxJQUFJRixJQUNkRSxFQUFJQyxXQUFXSixHQUNmRyxFQUFJRSxZQUFZTixHQUNoQkks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Q1IsSUFBSWtFLEVBQWdCLGdCQUFnQmxFLFNBQ2hDbUUsRUFBWSxZQUFZSCxFQUFJLElBQUksSUFDcEMzQyxFQUFFNkMsR0FBZTVDLElBQUksU0FBUzZDLEdBRzFCZixlQUNBQSxhQUFlUCxvQkFFbkJPLGFBQWFwRCxTQUFTLEdBQUdrRCxTQUFXYyxFQUFJLEtBSWhELFNBQVNJLGlCQUFpQkosR0FDdEIsR0FBR2hFLFNBQVMsQ0FDUixJQUFJa0UsRUFBZ0IsZ0JBQWdCbEUsU0FDaENxRSxFQUFjLGNBQWNMLEVBQUksSUFBSSxJQUN4QzNDLEVBQUU2QyxHQUFlNUMsSUFBSSxTQUFTK0MsR0FHMUJqQixlQUNBQSxhQUFlUCxvQkFFbkJPLGFBQWFwRCxTQUFTLEdBQUdtRCxXQUFhYSxFQUFJO0FDaENsRCxTQUFTTSxZQUFZQyxHQUNqQixHQUFJbEQsRUFBRUksUUFBUTRCLFFBQVUsSUFBSyxDQUN6QixJQUFJbUIsRUFBSUQsRUFDTyxHQUFYQyxFQUFFeEIsU0FDRndCLEVBQUlBLEVBQUVDLFVBQVUsRUFBRyxJQUNuQkQsR0FBSyxPQUVUbkQsRUFBRSxpQkFBaUJxRCxLQUFLRixJQWpCaENuRCxFQUFFbkIsVUFBVXlFLE1BQU0sV0FFZCxJQUFJQyxFQUFnQnZELEVBQUUsaUJBQWlCcUQsT0FDdkNKLFlBQVlNLEdBQ1p2RCxFQUFHSSxRQUFTK0IsT0FBTyxXQUNmYyxZQUFZTSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXVkaW9BbmFseXplcih2aWRlb051bSl7XHJcbiAgICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8tJyt2aWRlb051bSk7XHJcbiAgICB2YXIgYXVkaW9Db250ZXh0ID0gaW5pdEF1ZGlvQW5hbHl6ZXIoKTtcclxuICAgIGlmKGF1ZGlvQ29udGV4dCkge1xyXG4gICAgICAgIHZhciBhdWRpb1NyYyA9IGF1ZGlvQ29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xyXG4gICAgICAgIHZhciBhbmFseXNlciA9IGF1ZGlvQ29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xyXG5cclxuICAgICAgICAvL21ha2Ugc21hbGxlciBjb3VudCBvZiBzb3VuZCBmb3IgZHJhd1xyXG4gICAgICAgIGFuYWx5c2VyLmZmdFNpemUgPSAzMjtcclxuICAgICAgICBhdWRpb1NyYy5jb25uZWN0KGFuYWx5c2VyKTtcclxuICAgICAgICB2YXIgZnJlcXVlbmN5RGF0YSA9IG5ldyBVaW50OEFycmF5KGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50KTtcclxuICAgICAgICBhdWRpb1NyYy5jb25uZWN0KGF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XHJcblxyXG4gICAgICAgIC8vIGxvb3BcclxuICAgICAgICBmdW5jdGlvbiByZW5kZXJGcmFtZSgpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlckZyYW1lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBkYXRhIGluIGZyZXF1ZW5jeURhdGFcclxuICAgICAgICAgICAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZnJlcXVlbmN5RGF0YSk7XHJcblxyXG4gICAgICAgICAgICAvL21vdmUgc291bmQgbGluZVxyXG4gICAgICAgICAgICB2YXIgbW92ZVRvID0gcGFyc2VJbnQoMTAwLShmcmVxdWVuY3lEYXRhWzBdLzIuNTUpKTtcclxuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZSA9IFwidHJhbnNsYXRlWChcIittb3ZlVG8rXCIlKVwiO1xyXG4gICAgICAgICAgICAkKFwiLnZpZGVvX192b2x1bWUtbGluZVwiKS5jc3MoXCJ0cmFuc2Zvcm1cIix0cmFuc2xhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXJGcmFtZSgpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2F1ZGlvQ29udGV4dCBpcyBudWxsJyk7XHJcbiAgICB9XHJcbn0iLCJmdW5jdGlvbiBpbml0QXVkaW9BbmFseXplcigpe1xyXG4gICAgdmFyIGF1ZGlvQ29udGV4dCA9IG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdpbmRvdy5BdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0fHx3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xyXG4gICAgICAgIGF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcclxuICAgIH1cclxuICAgIGNhdGNoKGUpIHtcclxuICAgICAgICBhbGVydCgnT3Bwcy4uIFlvdXIgYnJvd3NlciBkbyBub3Qgc3VwcG9ydCBhdWRpbyBBUEknKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhdWRpb0NvbnRleHQ7XHJcbn0iLCIvL1ZpZGVvIGZyb20gaHR0cHM6Ly9iaXRtb3Zpbi5jb20vbXBlZy1kYXNoLWhscy1leGFtcGxlcy1zYW1wbGUtc3RyZWFtcy9cclxuZnVuY3Rpb24gaW5pdFZpZGVvKHZpZGVvLCB1cmwpIHtcclxuICAgIGlmIChIbHMuaXNTdXBwb3J0ZWQoKSkge1xyXG4gICAgICAgIHZhciBobHMgPSBuZXcgSGxzKCk7XHJcbiAgICAgICAgaGxzLmxvYWRTb3VyY2UodXJsKTtcclxuICAgICAgICBobHMuYXR0YWNoTWVkaWEodmlkZW8pO1xyXG4gICAgICAgIGhscy5vbihIbHMuRXZlbnRzLk1BTklGRVNUX1BBUlNFRCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHZpZGVvLmNhblBsYXlUeXBlKCdhcHBsaWNhdGlvbi92bmQuYXBwbGUubXBlZ3VybCcpKSB7XHJcbiAgICAgICAgdmlkZW8uc3JjID0gJ2h0dHBzOi8vdmlkZW8tZGV2LmdpdGh1Yi5pby9zdHJlYW1zL3gzNnhoenoveDM2eGh6ei5tM3U4JztcclxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGluaXRWaWRlb0ZpbHRlcnMoKXtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIHZhciBjb3VudCA9ICQoJy52aWRlb19faXRlbScpLmxlbmd0aDtcclxuICAgIGZvcih2YXIgaT0wO2k8Y291bnQ7aSsrKXtcclxuICAgICAgICByZXN1bHRbaV09e307XHJcbiAgICAgICAgcmVzdWx0W2ldLmNvbnRyYXN0PTE7XHJcbiAgICAgICAgcmVzdWx0W2ldLmJyaWdodG5lc3M9MTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn0iLCJpbml0VmlkZW8oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8tMScpLFxyXG4gICAgJ2h0dHBzOi8vYml0ZGFzaC1hLmFrYW1haWhkLm5ldC9jb250ZW50L01JMjAxMTA5MjEwMDg0XzEvbTN1OHMvZjA4ZTgwZGEtYmYxZC00ZTNkLTg4OTktZjBmNjE1NWY2ZWZhLm0zdTgnXHJcbik7XHJcbmluaXRWaWRlbyhcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlby0yJyksXHJcbiAgICAnaHR0cHM6Ly9iaXRkYXNoLWEuYWthbWFpaGQubmV0L2NvbnRlbnQvc2ludGVsL2hscy9wbGF5bGlzdC5tM3U4J1xyXG4pO1xyXG5pbml0VmlkZW8oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8tMycpLFxyXG4gICAgJ2h0dHBzOi8vd3d3LnN0cmVhbWJveC5mci9wbGF5bGlzdHMvdGVzdF8wMDEvc3RyZWFtLm0zdTgnXHJcbik7XHJcbmluaXRWaWRlbyhcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlby00JyksXHJcbiAgICAnaHR0cHM6Ly9tbm1lZGlhcy5hcGkudGVsZXF1ZWJlYy50di9tM3U4LzI5ODgwLm0zdTgnXHJcbik7XHJcblxyXG4vL29wZW5lZCB2aWRlb1xyXG52YXIgdmlkZW9OdW0gPTE7XHJcblxyXG52YXIgdmlkZW9GaWx0ZXJzID0gaW5pdFZpZGVvRmlsdGVycygpO1xyXG5cclxuaWYoJChkb2N1bWVudCkud2lkdGgoKT40NTApIHtcclxuICAgIHZpZGVvQW5pbWF0aW9uKCk7XHJcbn1lbHNle1xyXG4gICAgc2V0VmlkZW9EZWZhdWx0Q3NzKCk7XHJcbn1cclxuXHJcbiQoIHdpbmRvdyApLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICBpZigkKGRvY3VtZW50KS53aWR0aCgpPjQ1MCl7XHJcbiAgICAgIHZpZGVvQW5pbWF0aW9uKCk7XHJcbiAgfWVsc2V7XHJcbiAgICAgIHNldFZpZGVvRGVmYXVsdENzcygpO1xyXG4gIH1cclxufSk7IiwiZnVuY3Rpb24gdmlkZW9BbmltYXRpb24oKXtcclxuICAgICQoJy52aWRlb19faXRlbS0xJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcudmlkZW9fX2l0ZW0tMScpLmFkZENsYXNzKCdoLTQwIHctMTAwJyk7XHJcbiAgICAgICAgJCgnLnZpZGVvX19pdGVtLTInKS5hZGRDbGFzcygnaC00MCB3LTAgby0wJyApO1xyXG4gICAgICAgICQoJy52aWRlb19faXRlbS0zJykuYWRkQ2xhc3MoJ2gtMCBvLTAnKTtcclxuICAgICAgICAkKCcudmlkZW9fX2l0ZW0tNCcpLmFkZENsYXNzKCdoLTAgby0wJyk7XHJcbiAgICAgICAgJCgnLnZpZGVvX19jb250cm9scycpLmFkZENsYXNzKCdvLTEnKTtcclxuICAgICAgICAkKFwiI3ZpZGVvLTFcIikucHJvcChcImNvbnRyb2xzXCIsdHJ1ZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlby0yXCIpLnBhdXNlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlby0zXCIpLnBhdXNlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlby00XCIpLnBhdXNlKCk7XHJcbiAgICAgICAgdmlkZW9OdW0gPSAxO1xyXG4gICAgICAgIHZpZGVvQ29udHJvbHNDaGFuZ2VWYWx1ZSh2aWRlb051bSk7XHJcbiAgICAgICAgYXVkaW9BbmFseXplcih2aWRlb051bSk7XHJcbiAgICB9KTtcclxuICAgICQoJy52aWRlb19faXRlbS0yJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcudmlkZW9fX2l0ZW0tMScpLmFkZENsYXNzKCdoLTQwIHctMCBvLTAnICk7XHJcbiAgICAgICAgJCgnLnZpZGVvX19pdGVtLTInKS5hZGRDbGFzcygnaC00MCB3LTEwMCcpO1xyXG4gICAgICAgICQoJy52aWRlb19faXRlbS0zJykuYWRkQ2xhc3MoJ2gtMCBvLTAnKTtcclxuICAgICAgICAkKCcudmlkZW9fX2l0ZW0tNCcpLmFkZENsYXNzKCdoLTAgby0wJyk7XHJcbiAgICAgICAgJCgnLnZpZGVvX19jb250cm9scycpLmFkZENsYXNzKCdvLTEnKTtcclxuICAgICAgICAkKFwiI3ZpZGVvLTJcIikucHJvcChcImNvbnRyb2xzXCIsdHJ1ZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlby0xXCIpLnBhdXNlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlby0zXCIpLnBhdXNlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlby00XCIpLnBhdXNlKCk7XHJcbiAgICAgICAgdmlkZW9OdW0gPSAyO1xyXG4gICAgICAgIHZpZGVvQ29udHJvbHNDaGFuZ2VWYWx1ZSh2aWRlb051bSk7XHJcbiAgICAgICAgYXVkaW9BbmFseXplcih2aWRlb051bSk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAkKCcudmlkZW9fX2l0ZW0tMycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnZpZGVvX19pdGVtLTEnKS5hZGRDbGFzcygnaC0wIG8tMCcpO1xyXG4gICAgICAgICQoJy52aWRlb19faXRlbS0yJykuYWRkQ2xhc3MoJ2gtMCBvLTAnICk7XHJcbiAgICAgICAgJCgnLnZpZGVvX19pdGVtLTMnKS5hZGRDbGFzcygndy0xMDAgaC00MCcpO1xyXG4gICAgICAgICQoJy52aWRlb19faXRlbS00JykuYWRkQ2xhc3MoJ3ctMCBoLTAgby0wJyk7XHJcbiAgICAgICAgJChcIiN2aWRlby0zXCIpLnByb3AoXCJjb250cm9sc1wiLHRydWUpO1xyXG4gICAgICAgICQoJy52aWRlb19fY29udHJvbHMnKS5hZGRDbGFzcygnby0xJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlby0xXCIpLnBhdXNlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlby0yXCIpLnBhdXNlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlby00XCIpLnBhdXNlKCk7XHJcbiAgICAgICAgdmlkZW9OdW0gPSAzO1xyXG4gICAgICAgIHZpZGVvQ29udHJvbHNDaGFuZ2VWYWx1ZSh2aWRlb051bSk7XHJcbiAgICAgICAgYXVkaW9BbmFseXplcih2aWRlb051bSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcudmlkZW9fX2l0ZW0tNCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnZpZGVvX19pdGVtLTEnKS5hZGRDbGFzcygnaC0wIG8tMCcpO1xyXG4gICAgICAgICQoJy52aWRlb19faXRlbS0yJykuYWRkQ2xhc3MoJ2gtMCBvLTAnICk7XHJcbiAgICAgICAgJCgnLnZpZGVvX19pdGVtLTMnKS5hZGRDbGFzcygndy0wIGgtMCBvLTAnKTtcclxuICAgICAgICAkKCcudmlkZW9fX2l0ZW0tNCcpLmFkZENsYXNzKCd3LTEwMCBoLTQwJyk7XHJcbiAgICAgICAgJChcIiN2aWRlby00XCIpLnByb3AoXCJjb250cm9sc1wiLHRydWUpO1xyXG4gICAgICAgICQoJy52aWRlb19fY29udHJvbHMnKS5hZGRDbGFzcygnby0xJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlby0xXCIpLnBhdXNlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlby0yXCIpLnBhdXNlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlby0zXCIpLnBhdXNlKCk7XHJcbiAgICAgICAgdmlkZW9OdW0gPSA0O1xyXG4gICAgICAgIHZpZGVvQ29udHJvbHNDaGFuZ2VWYWx1ZSh2aWRlb051bSk7XHJcbiAgICAgICAgYXVkaW9BbmFseXplcih2aWRlb051bSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnLnZpZGVvX19idXR0b24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHNldFZpZGVvRGVmYXVsdENzcygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlkZW8tMVwiKS5wbGF5KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlby0yXCIpLnBsYXkoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvLTNcIikucGxheSgpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlkZW8tNFwiKS5wbGF5KCk7XHJcbiAgICAgICAgJChcIiN2aWRlby0xXCIpLnByb3AoXCJjb250cm9sc1wiLGZhbHNlKTtcclxuICAgICAgICAkKFwiI3ZpZGVvLTFcIikucHJvcChcIm11dGVkXCIsdHJ1ZSk7XHJcbiAgICAgICAgJChcIiN2aWRlby0yXCIpLnByb3AoXCJjb250cm9sc1wiLGZhbHNlKTtcclxuICAgICAgICAkKFwiI3ZpZGVvLTJcIikucHJvcChcIm11dGVkXCIsdHJ1ZSk7XHJcbiAgICAgICAgJChcIiN2aWRlby0zXCIpLnByb3AoXCJjb250cm9sc1wiLGZhbHNlKTtcclxuICAgICAgICAkKFwiI3ZpZGVvLTNcIikucHJvcChcIm11dGVkXCIsdHJ1ZSk7XHJcbiAgICAgICAgJChcIiN2aWRlby00XCIpLnByb3AoXCJjb250cm9sc1wiLGZhbHNlKTtcclxuICAgICAgICAkKFwiI3ZpZGVvLTRcIikucHJvcChcIm11dGVkXCIsdHJ1ZSk7XHJcbiAgICAgICAgdmlkZW9OdW0gPSBudWxsO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gc2V0VmlkZW9EZWZhdWx0Q3NzKCl7XHJcbiAgICAkKCcudmlkZW9fX2l0ZW0tMScpLnJlbW92ZUNsYXNzKCdoLTAgdy0wIG8tMCBoLTQwIHctMTAwJyk7XHJcbiAgICAkKCcudmlkZW9fX2l0ZW0tMicpLnJlbW92ZUNsYXNzKCdoLTAgdy0wIG8tMCBoLTQwIHctMTAwJyk7XHJcbiAgICAkKCcudmlkZW9fX2l0ZW0tMycpLnJlbW92ZUNsYXNzKCdoLTAgdy0wIG8tMCBoLTQwIHctMTAwJyk7XHJcbiAgICAkKCcudmlkZW9fX2l0ZW0tNCcpLnJlbW92ZUNsYXNzKCdoLTAgdy0wIG8tMCBoLTQwIHctMTAwJyk7XHJcbiAgICAkKCcudmlkZW9fX2NvbnRyb2xzJykucmVtb3ZlQ2xhc3MoJ28tMScpO1xyXG59IiwiLy9jaGFuZ2VkIHZhbHVlIG9mIHZpZGVvIGNvbnRyb2xzIGFmdGVyIG9wZW4gYW5vdGhlciB2aWRlb1xyXG5mdW5jdGlvbiB2aWRlb0NvbnRyb2xzQ2hhbmdlVmFsdWUobnVtKXtcclxuICAgIGlmKHZpZGVvRmlsdGVyc1tudW0tMV0pe1xyXG4gICAgICAgIGlmKHZpZGVvRmlsdGVyc1tudW0tMV0uY29udHJhc3QgfHwgdmlkZW9GaWx0ZXJzW251bS0xXS5jb250cmFzdCA9PSAwICl7XHJcbiAgICAgICAgICAgICQoJyN2aWRlb19fY29udHJhc3QnKS52YWwodmlkZW9GaWx0ZXJzW251bS0xXS5jb250cmFzdCoxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAkKCcjdmlkZW9fX2NvbnRyYXN0JykudmFsKDEwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih2aWRlb0ZpbHRlcnNbbnVtLTFdLmJyaWdodG5lc3MgfHwgdmlkZW9GaWx0ZXJzW251bS0xXS5icmlnaHRuZXNzID09IDApe1xyXG4gICAgICAgICAgICAkKCcjdmlkZW9fX2JyaWdodG5lc3MnKS52YWwodmlkZW9GaWx0ZXJzW251bS0xXS5icmlnaHRuZXNzKjEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICQoJyN2aWRlb19fYnJpZ2h0bmVzcycpLnZhbCgxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VDb250cmFzdCh2YWwpe1xyXG4gICAgaWYodmlkZW9OdW0pe1xyXG4gICAgICAgIHZhciBpdGVtQ2xhc3NOYW1lID0gJy52aWRlb19faXRlbS0nK3ZpZGVvTnVtO1xyXG4gICAgICAgIHZhciBjc3NDb250cmFjdD0nY29udHJhc3QoJyt2YWwvMTAwKycpJztcclxuICAgICAgICAkKGl0ZW1DbGFzc05hbWUpLmNzcygnZmlsdGVyJyxjc3NDb250cmFjdCk7XHJcblxyXG4gICAgICAgIC8vc2F2ZSBmaWx0ZXJzXHJcbiAgICAgICAgaWYoIXZpZGVvRmlsdGVycyl7XHJcbiAgICAgICAgICAgIHZpZGVvRmlsdGVycyA9IGluaXRWaWRlb0ZpbHRlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmlkZW9GaWx0ZXJzW3ZpZGVvTnVtLTFdLmNvbnRyYXN0ID0gdmFsLzEwMDtcclxuXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlQnJpZ2h0bmVzcyh2YWwpe1xyXG4gICAgaWYodmlkZW9OdW0pe1xyXG4gICAgICAgIHZhciBpdGVtQ2xhc3NOYW1lID0gJy52aWRlb19faXRlbS0nK3ZpZGVvTnVtO1xyXG4gICAgICAgIHZhciBjc3NCcmlnaHRuZXNzPSdicmlnaHRuZXNzKCcrdmFsLzEwMCsnKSc7XHJcbiAgICAgICAgJChpdGVtQ2xhc3NOYW1lKS5jc3MoJ2ZpbHRlcicsY3NzQnJpZ2h0bmVzcyk7XHJcblxyXG4gICAgICAgIC8vc2F2ZSBmaWx0ZXJzXHJcbiAgICAgICAgaWYoIXZpZGVvRmlsdGVycyl7XHJcbiAgICAgICAgICAgIHZpZGVvRmlsdGVycyA9IGluaXRWaWRlb0ZpbHRlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmlkZW9GaWx0ZXJzW3ZpZGVvTnVtLTFdLmJyaWdodG5lc3MgPSB2YWwvMTAwO1xyXG4gICAgfVxyXG59IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIGZpcnN0U29uZ05hbWUgPSAkKCcucGxheWVyX19zb25nJykudGV4dCgpO1xyXG4gICAgY3V0U29uZ05hbWUoZmlyc3RTb25nTmFtZSk7XHJcbiAgICAkKCB3aW5kb3cgKS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY3V0U29uZ05hbWUoZmlyc3RTb25nTmFtZSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gY3V0U29uZ05hbWUoc29uZ05hbWUpe1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNDUwKSB7XHJcbiAgICAgICAgdmFyIGEgPSBzb25nTmFtZTtcclxuICAgICAgICBpZiAoYS5sZW5ndGggPiAyMykge1xyXG4gICAgICAgICAgICBhID0gYS5zdWJzdHJpbmcoMCwgMjMpO1xyXG4gICAgICAgICAgICBhICs9IFwiLi4uXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJy5wbGF5ZXJfX3NvbmcnKS50ZXh0KGEpO1xyXG4gICAgfVxyXG59Il19
