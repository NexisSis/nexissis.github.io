$(".owl-carousel").owlCarousel({loop:!0,autoWidth:!0,dots:!1,nav:!1,autoplay:!0,autoplayTimeout:7e3,fluidSpeed:1e3,dragEndSpeed:1e3,autoplaySpeed:1e3});
$(".menu").click(function(){$(".main__menu").toggleClass("main__menu_active")}),$(document).mouseup(function(e){var t=$(".main__menu"),n=$(".menu");t.is(e.target)||0!==t.has(e.target).length||n.is(e.target)||0!==n.has(e.target).length||t.removeClass("main__menu_active")}),$(document).on("click",'a[href^="#"]',function(e){e.preventDefault();var t=$(this).attr("href");$("html,body").animate({scrollTop:$(t).offset().top},1e3),$(".main__menu").removeClass("main__menu_active")});

var table="river",color="blue",type="yasen",tableRussian={river:"Стол-река",magazine:"Журнальный столик",coffee:"Кофейный столик",whole:"Цельный слэб"},typeRussian={yasen:"Ясень",topol:"Кавказкий тополь",oreh:"Орех",karagach:"Карагач",dub:"Дуб",vyaz:"Вяз",klen:"Клен"},screen5Text={topol:"Продольный спил кавказского тополя может иметь различную окраску, от светлого, почти белого, до коричневого цвета. Ядро будет более темным, ближе к коре древесина заметно светлеет.<br><br>При изготовлении слэбов обычно используют нижнюю комлевую часть ствола. На плоском разрезе образуются необыкновенно красивые рисунки. Особенно ценится горный тополь, который пролежал несколько лет в воде. Такая древесина приобретает свойства моренной.<br><br>После обработки кавказского тополя эпоксидной смолой он становится устойчив к воздействию влаги. Столы из такой древесины можно устанавливать на улице.",karagach:"Древесина этого сорта отличается желто-коричневым или светло-коричневым цветом с небольшим количеством коричневых или красно-коричневых прожилок.<br><br>Особенностью карагача является то, что по мере высыхания, этот сорт дерева меняет свою окраску. Чем дольше карагач сушится, тем более темным он становится.<br><br>Поскольку карагач имеет особую муаровую текстуру, а также характерный блеск, его часто используют для создания эксклюзивной мебели.",oreh:"Древесина ореха ценится за прочность и необыкновенную красоту. Слэб ореха имеет особую декоративную текстуру и богатую цветовую палитру. Особенно выразительна зрелая древесина.<br><br>Для изготовления слэбов применяется нижняя часть ствола и комель, здесь рисунок наиболее контрастный и оригинальный. Также пользуются спросом распилы капов. Это наросты в нижней части дерева, которые могут достигать 1.5 – 2 метра в диаметре.<br><br>Рисунок слэба, полученного из капа, будет уникальным и своеобразным.\nСтол из ореха будет не просто удобным предметом мебели - он станет настоящим украшением дома.",yasen:"Ясень отличается высокой прочность, а узор его спила – неповторимой красотой и уникальным цветом. Деревья, достигшие внушительных размеров, приобретают волнистую свилеватость в нижней части ствола. Поэтому радиальные спилы ясеня чарующе красивы.<br><br>Древесина ясеневой породу устойчива к гниению, и, чем старше дерево, тем это свойство выше. При правильной обработке ясень становится практически неуязвим перед воздействием влаги.",dub:"Ценная порода дерева, известная своей прочностью и необычайно красивой фактурой. Дуб имеет благородный цвет, его спил может иметь оттенок от светло-коричневого до желтоватого коричневого. Ядро обычно немного темнее заболони.<br><br>Если дуб пролежал на дне водоема несколько лет, то он приобретает еще большую прочность, а его цвет изменяется до темно-коричневого, практически черного цвета.<br><br>Стол из дуба прослужит не одно десятилетия. На протяжении этого срока он не только не утратит свой внешний вид, но и станет еще более благородным.",vyaz:"Древесина вяза в зависимости от его разновидности может быть желтовато-белой с светло-бурым или темно-бурым ядром. По мере старения дерева его цвет изменяется.<br><br>Отличительной особенностью этой породы дерева является наличие больших анатомических неровностей. Наибольшей выразительностью текстуры обладают капы.<br><br>Столы, изготовленные из вяза, не боятся влаги и других негативных воздействий. Они будут радовать своим необычным внешним видом долгие годы.",klen:"Клен обычно называют обыкновенным. Но столы, изготавливаемые из кленовых слэбов, назвать такими нельзя. Этот вид дерева отличается бледно кремовым цветом.<br><br>Неповторимый узор кленовой породы создают светло-бурые лучи, исходящие из сердцевины. Такая мозаика придает древесине некую шелковистость.<br><br>После высушивания клен приобретает способность хорошо сохранять форму мебели. Хорошо смотрится в сочетании с элементами из стекла, металла и полимеров."};$("input:checkbox").click(function(){var e=$(this).attr("name"),r=$(this).attr("id"),t="input:checkbox[name='"+e+"']";if($(t).attr("checked",!1),$(this).attr("checked",!0),$(t).removeClass("switch_checked"),$(this).toggleClass("switch_checked"),$(".loading").removeClass(".d-none"),"builder-table"==e&&(table=r),"builder-type"==e&&(type=r),"builder-color"==e&&(color=r),"screen5"==e){$(".screen5__img-1").attr("src","img/"+r+".png");var b=r.slice(8);return $(".screen5__text-2").html(typeRussian[b]),void $(".screen5__text-3").html(screen5Text[b])}"whole"==table?$(".builder__img-1").attr("src","img/"+table+"-"+type+".png"):$(".builder__img-1").attr("src","img/"+table+"-"+color+"-"+type+".png"),$(".builder__text-1").text(tableRussian[table]),$(".builder__text-2").text(typeRussian[type])});
function ajaxSendMail(t){$.ajax({type:"POST",url:"sendMail.php",dataType:"json",data:t,success:function(t){t.success?$(".footer__button").text("Заявка принята!"):$(".footer__button ").text("Ошибка!"),$(':input[type="submit"]').prop("disabled",!1)},error:function(t){$(".footer__button").text("Ошибка!"),$(':input[type="submit"]').prop("disabled",!1)}})}$(".footer__form").submit(function(t){t.preventDefault(),$(':input[type="submit"]').prop("disabled",!0),$(".footer__button ").text("Загрузка");var e=$(".footer__tel").val();console.log(e),e?ajaxSendMail($(".footer__form").serialize()):$(".footer__tel").attr("placeholder","Заполните это поле правильно!")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkvZ2FsbGVyeS5qcyIsIm1haW4vbWFpbi5qcyIsInNjcmVlbjUvc2NyZWVuNS5qcyIsIl9jb21tb24vX2NvbW1vbi5qcyIsInNlbmRtYWlsL3NlbmRNYWlsLmpzIl0sIm5hbWVzIjpbIiQiLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJhdXRvV2lkdGgiLCJkb3RzIiwibmF2IiwiYXV0b3BsYXkiLCJhdXRvcGxheVRpbWVvdXQiLCJmbHVpZFNwZWVkIiwiZHJhZ0VuZFNwZWVkIiwiYXV0b3BsYXlTcGVlZCIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJkb2N1bWVudCIsIm1vdXNldXAiLCJlIiwiY29udGFpbmVyIiwiY29udGFpbmVyTWVudSIsImlzIiwidGFyZ2V0IiwiaGFzIiwibGVuZ3RoIiwicmVtb3ZlQ2xhc3MiLCJvbiIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJ0aGlzIiwiYXR0ciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJ0YWJsZSIsImNvbG9yIiwidHlwZSIsInRhYmxlUnVzc2lhbiIsInJpdmVyIiwibWFnYXppbmUiLCJjb2ZmZWUiLCJ3aG9sZSIsInR5cGVSdXNzaWFuIiwieWFzZW4iLCJ0b3BvbCIsIm9yZWgiLCJrYXJhZ2FjaCIsImR1YiIsInZ5YXoiLCJrbGVuIiwic2NyZWVuNVRleHQiLCJuYW1lIiwiZ3JvdXAiLCJzY3JlZW41TmFtZSIsInNsaWNlIiwiaHRtbCIsInRleHQiLCJhamF4U2VuZE1haWwiLCJkYXRhIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwic3VjY2VzcyIsInByb3AiLCJlcnJvciIsInN1Ym1pdCIsInRlbCIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJzZXJpYWxpemUiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFLGlCQUFpQkMsWUFBWSxDQUMzQkMsTUFBSyxFQUNMQyxXQUFXLEVBQ1hDLE1BQU0sRUFDTkMsS0FBSyxFQUNMQyxVQUFVLEVBQ1ZDLGdCQUFpQixJQUNqQkMsV0FBWSxJ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LEVBQUUseUJBQXlCNkQsS0FBSyxZQUFZLEdBQzVDN0QsRUFBRSxvQkFBb0JzRCxLQUFLLFlBQzNCLElBQUlVLEVBQU1oRSxFQUFFLGdCQUFnQmlFLE1BQzVCQyxRQUFRQyxJQUFJSCxHQUNUQSxFQUNDVCxhQUFhdkQsRUFBRSxpQkFBaUJvRSxhQUVoQ3BFLEVBQUUsZ0JBQWdCMkIsS0FBSyxjQUFlIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgbG9vcDp0cnVlLFxyXG4gICAgYXV0b1dpZHRoOiB0cnVlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVRpbWVvdXQ6IDcwMDAsXHJcbiAgICBmbHVpZFNwZWVkOiAxMDAwLFxyXG4gICAgZHJhZ0VuZFNwZWVkOiAxMDAwLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogMTAwMFxyXG59KTsiLCIkKCcubWVudScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5tYWluX19tZW51JykudG9nZ2xlQ2xhc3MoJ21haW5fX21lbnVfYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuLy9jaGVjayBpZiBjbGljayBvdXRzaWRlIG1lbnVcclxuJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbihlKXtcclxuICAgIHZhciBjb250YWluZXIgPSAkKCcubWFpbl9fbWVudScpO1xyXG4gICAgdmFyIGNvbnRhaW5lck1lbnUgPSAkKCcubWVudScpO1xyXG5cclxuICAgIC8vIGlmIHRoZSB0YXJnZXQgb2YgdGhlIGNsaWNrIGlzbid0IHRoZSBjb250YWluZXIgbm9yIGEgZGVzY2VuZGFudCBvZiB0aGUgY29udGFpbmVyXHJcbiAgICBpZiAoKCFjb250YWluZXIuaXMoZS50YXJnZXQpICYmIGNvbnRhaW5lci5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkgJiZcclxuICAgICAgICAoIWNvbnRhaW5lck1lbnUuaXMoZS50YXJnZXQpICYmIGNvbnRhaW5lck1lbnUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApICkge1xyXG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDbGFzcygnbWFpbl9fbWVudV9hY3RpdmUnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vL3Ntb290aCBzY3JvbGxpbmcgdG8gYmxvY2tcclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2FbaHJlZl49XCIjXCJdJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKGlkKS5vZmZzZXQoKS50b3B9LCAxMDAwKTtcclxuICAgICQoJy5tYWluX19tZW51JykucmVtb3ZlQ2xhc3MoJ21haW5fX21lbnVfYWN0aXZlJyk7XHJcbn0pOyIsIiIsIi8vZGVmYXVsdCB2YWx1ZXNcclxudmFyIHRhYmxlID0gJ3JpdmVyJztcclxudmFyIGNvbG9yID0gJ2JsdWUnO1xyXG52YXIgdHlwZSA9ICd5YXNlbic7XHJcblxyXG52YXIgdGFibGVSdXNzaWFuID0ge1xyXG4gICAgcml2ZXI6ICfQodGC0L7Quy3RgNC10LrQsCcsXHJcbiAgICBtYWdhemluZTogJ9CW0YPRgNC90LDQu9GM0L3Ri9C5INGB0YLQvtC70LjQuicsXHJcbiAgICBjb2ZmZWU6ICfQmtC+0YTQtdC50L3Ri9C5INGB0YLQvtC70LjQuicsXHJcbiAgICB3aG9sZTogJ9Cm0LXQu9GM0L3Ri9C5INGB0LvRjdCxJ1xyXG59O1xyXG52YXIgdHlwZVJ1c3NpYW4gPSB7XHJcbiAgICB5YXNlbjogJ9Cv0YHQtdC90YwnLFxyXG4gICAgdG9wb2w6ICfQmtCw0LLQutCw0LfQutC40Lkg0YLQvtC/0L7Qu9GMJyxcclxuICAgIG9yZWg6ICfQntGA0LXRhScsXHJcbiAgICBrYXJhZ2FjaDogJ9Ca0LDRgNCw0LPQsNGHJyxcclxuICAgIGR1YjogJ9CU0YPQsScsXHJcbiAgICB2eWF6OiAn0JLRj9C3JyxcclxuICAgIGtsZW46ICfQmtC70LXQvSdcclxufTtcclxudmFyIHNjcmVlbjVUZXh0ID0ge1xyXG4gICAgdG9wb2w6ICfQn9GA0L7QtNC+0LvRjNC90YvQuSDRgdC/0LjQuyDQutCw0LLQutCw0LfRgdC60L7Qs9C+INGC0L7Qv9C+0LvRjyDQvNC+0LbQtdGCINC40LzQtdGC0Ywg0YDQsNC30LvQuNGH0L3Rg9GOINC+0LrRgNCw0YHQutGDLCDQvtGCINGB0LLQtdGC0LvQvtCz0L4sINC/0L7Rh9GC0Lgg0LHQtdC70L7Qs9C+LCDQtNC+INC60L7RgNC40YfQvdC10LLQvtCz0L4g0YbQstC10YLQsC4g0K/QtNGA0L4g0LHRg9C00LXRgiDQsdC+0LvQtdC1INGC0LXQvNC90YvQvCwg0LHQu9C40LbQtSDQuiDQutC+0YDQtSDQtNGA0LXQstC10YHQuNC90LAg0LfQsNC80LXRgtC90L4g0YHQstC10YLQu9C10LXRgi48YnI+PGJyPicgK1xyXG4gICAgJ9Cf0YDQuCDQuNC30LPQvtGC0L7QstC70LXQvdC40Lgg0YHQu9GN0LHQvtCyINC+0LHRi9GH0L3QviDQuNGB0L/QvtC70YzQt9GD0Y7RgiDQvdC40LbQvdGO0Y4g0LrQvtC80LvQtdCy0YPRjiDRh9Cw0YHRgtGMINGB0YLQstC+0LvQsC4g0J3QsCDQv9C70L7RgdC60L7QvCDRgNCw0LfRgNC10LfQtSDQvtCx0YDQsNC30YPRjtGC0YHRjyDQvdC10L7QsdGL0LrQvdC+0LLQtdC90L3QviDQutGA0LDRgdC40LLRi9C1INGA0LjRgdGD0L3QutC4LiDQntGB0L7QsdC10L3QvdC+INGG0LXQvdC40YLRgdGPINCz0L7RgNC90YvQuSDRgtC+0L/QvtC70YwsINC60L7RgtC+0YDRi9C5INC/0YDQvtC70LXQttCw0Lsg0L3QtdGB0LrQvtC70YzQutC+INC70LXRgiDQsiDQstC+0LTQtS4g0KLQsNC60LDRjyDQtNGA0LXQstC10YHQuNC90LAg0L/RgNC40L7QsdGA0LXRgtCw0LXRgiDRgdCy0L7QudGB0YLQstCwINC80L7RgNC10L3QvdC+0LkuPGJyPjxicj4nICtcclxuICAgICfQn9C+0YHQu9C1INC+0LHRgNCw0LHQvtGC0LrQuCDQutCw0LLQutCw0LfRgdC60L7Qs9C+INGC0L7Qv9C+0LvRjyDRjdC/0L7QutGB0LjQtNC90L7QuSDRgdC80L7Qu9C+0Lkg0L7QvSDRgdGC0LDQvdC+0LLQuNGC0YHRjyDRg9GB0YLQvtC50YfQuNCyINC6INCy0L7Qt9C00LXQudGB0YLQstC40Y4g0LLQu9Cw0LPQuC4g0KHRgtC+0LvRiyDQuNC3INGC0LDQutC+0Lkg0LTRgNC10LLQtdGB0LjQvdGLINC80L7QttC90L4g0YPRgdGC0LDQvdCw0LLQu9C40LLQsNGC0Ywg0L3QsCDRg9C70LjRhtC1LicsXHJcbiAgICBrYXJhZ2FjaDogJ9CU0YDQtdCy0LXRgdC40L3QsCDRjdGC0L7Qs9C+INGB0L7RgNGC0LAg0L7RgtC70LjRh9Cw0LXRgtGB0Y8g0LbQtdC70YLQvi3QutC+0YDQuNGH0L3QtdCy0YvQvCDQuNC70Lgg0YHQstC10YLQu9C+LdC60L7RgNC40YfQvdC10LLRi9C8INGG0LLQtdGC0L7QvCDRgSDQvdC10LHQvtC70YzRiNC40Lwg0LrQvtC70LjRh9C10YHRgtCy0L7QvCDQutC+0YDQuNGH0L3QtdCy0YvRhSDQuNC70Lgg0LrRgNCw0YHQvdC+LdC60L7RgNC40YfQvdC10LLRi9GFINC/0YDQvtC20LjQu9C+0LouPGJyPjxicj4nICtcclxuICAgICfQntGB0L7QsdC10L3QvdC+0YHRgtGM0Y4g0LrQsNGA0LDQs9Cw0YfQsCDRj9Cy0LvRj9C10YLRgdGPINGC0L4sINGH0YLQviDQv9C+INC80LXRgNC1INCy0YvRgdGL0YXQsNC90LjRjywg0Y3RgtC+0YIg0YHQvtGA0YIg0LTQtdGA0LXQstCwINC80LXQvdGP0LXRgiDRgdCy0L7RjiDQvtC60YDQsNGB0LrRgy4g0KfQtdC8INC00L7Qu9GM0YjQtSDQutCw0YDQsNCz0LDRhyDRgdGD0YjQuNGC0YHRjywg0YLQtdC8INCx0L7Qu9C10LUg0YLQtdC80L3Ri9C8INC+0L0g0YHRgtCw0L3QvtCy0LjRgtGB0Y8uPGJyPjxicj4nICtcclxuICAgICfQn9C+0YHQutC+0LvRjNC60YMg0LrQsNGA0LDQs9Cw0Ycg0LjQvNC10LXRgiDQvtGB0L7QsdGD0Y4g0LzRg9Cw0YDQvtCy0YPRjiDRgtC10LrRgdGC0YPRgNGDLCDQsCDRgtCw0LrQttC1INGF0LDRgNCw0LrRgtC10YDQvdGL0Lkg0LHQu9C10YHQuiwg0LXQs9C+INGH0LDRgdGC0L4g0LjRgdC/0L7Qu9GM0LfRg9GO0YIg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0Y3QutGB0LrQu9GO0LfQuNCy0L3QvtC5INC80LXQsdC10LvQuC4nLFxyXG4gICAgb3JlaDogJ9CU0YDQtdCy0LXRgdC40L3QsCDQvtGA0LXRhdCwINGG0LXQvdC40YLRgdGPINC30LAg0L/RgNC+0YfQvdC+0YHRgtGMINC4INC90LXQvtCx0YvQutC90L7QstC10L3QvdGD0Y4g0LrRgNCw0YHQvtGC0YMuINCh0LvRjdCxINC+0YDQtdGF0LAg0LjQvNC10LXRgiDQvtGB0L7QsdGD0Y4g0LTQtdC60L7RgNCw0YLQuNCy0L3Rg9GOINGC0LXQutGB0YLRg9GA0YMg0Lgg0LHQvtCz0LDRgtGD0Y4g0YbQstC10YLQvtCy0YPRjiDQv9Cw0LvQuNGC0YDRgy4g0J7RgdC+0LHQtdC90L3QviDQstGL0YDQsNC30LjRgtC10LvRjNC90LAg0LfRgNC10LvQsNGPINC00YDQtdCy0LXRgdC40L3QsC48YnI+PGJyPicgK1xyXG4gICAgJ9CU0LvRjyDQuNC30LPQvtGC0L7QstC70LXQvdC40Y8g0YHQu9GN0LHQvtCyINC/0YDQuNC80LXQvdGP0LXRgtGB0Y8g0L3QuNC20L3Rj9GPINGH0LDRgdGC0Ywg0YHRgtCy0L7Qu9CwINC4INC60L7QvNC10LvRjCwg0LfQtNC10YHRjCDRgNC40YHRg9C90L7QuiDQvdCw0LjQsdC+0LvQtdC1INC60L7QvdGC0YDQsNGB0YLQvdGL0Lkg0Lgg0L7RgNC40LPQuNC90LDQu9GM0L3Ri9C5LiDQotCw0LrQttC1INC/0L7Qu9GM0LfRg9GO0YLRgdGPINGB0L/RgNC+0YHQvtC8INGA0LDRgdC/0LjQu9GLINC60LDQv9C+0LIuINCt0YLQviDQvdCw0YDQvtGB0YLRiyDQsiDQvdC40LbQvdC10Lkg0YfQsNGB0YLQuCDQtNC10YDQtdCy0LAsINC60L7RgtC+0YDRi9C1INC80L7Qs9GD0YIg0LTQvtGB0YLQuNCz0LDRgtGMIDEuNSDigJMgMiDQvNC10YLRgNCwINCyINC00LjQsNC80LXRgtGA0LUuPGJyPjxicj4nICtcclxuICAgICfQoNC40YHRg9C90L7QuiDRgdC70Y3QsdCwLCDQv9C+0LvRg9GH0LXQvdC90L7Qs9C+INC40Lcg0LrQsNC/0LAsINCx0YPQtNC10YIg0YPQvdC40LrQsNC70YzQvdGL0Lwg0Lgg0YHQstC+0LXQvtCx0YDQsNC30L3Ri9C8LlxcbicgK1xyXG4gICAgJ9Ch0YLQvtC7INC40Lcg0L7RgNC10YXQsCDQsdGD0LTQtdGCINC90LUg0L/RgNC+0YHRgtC+INGD0LTQvtCx0L3Ri9C8INC/0YDQtdC00LzQtdGC0L7QvCDQvNC10LHQtdC70LggLSDQvtC9INGB0YLQsNC90LXRgiDQvdCw0YHRgtC+0Y/RidC40Lwg0YPQutGA0LDRiNC10L3QuNC10Lwg0LTQvtC80LAuJyxcclxuICAgIHlhc2VuOiAn0K/RgdC10L3RjCDQvtGC0LvQuNGH0LDQtdGC0YHRjyDQstGL0YHQvtC60L7QuSDQv9GA0L7Rh9C90L7RgdGC0YwsINCwINGD0LfQvtGAINC10LPQviDRgdC/0LjQu9CwIOKAkyDQvdC10L/QvtCy0YLQvtGA0LjQvNC+0Lkg0LrRgNCw0YHQvtGC0L7QuSDQuCDRg9C90LjQutCw0LvRjNC90YvQvCDRhtCy0LXRgtC+0LwuINCU0LXRgNC10LLRjNGPLCDQtNC+0YHRgtC40LPRiNC40LUg0LLQvdGD0YjQuNGC0LXQu9GM0L3Ri9GFINGA0LDQt9C80LXRgNC+0LIsINC/0YDQuNC+0LHRgNC10YLQsNGO0YIg0LLQvtC70L3QuNGB0YLRg9GOINGB0LLQuNC70LXQstCw0YLQvtGB0YLRjCDQsiDQvdC40LbQvdC10Lkg0YfQsNGB0YLQuCDRgdGC0LLQvtC70LAuINCf0L7RjdGC0L7QvNGDINGA0LDQtNC40LDQu9GM0L3Ri9C1INGB0L/QuNC70Ysg0Y/RgdC10L3RjyDRh9Cw0YDRg9GO0YnQtSDQutGA0LDRgdC40LLRiy48YnI+PGJyPicgK1xyXG4gICAgJ9CU0YDQtdCy0LXRgdC40L3QsCDRj9GB0LXQvdC10LLQvtC5INC/0L7RgNC+0LTRgyDRg9GB0YLQvtC50YfQuNCy0LAg0Log0LPQvdC40LXQvdC40Y4sINC4LCDRh9C10Lwg0YHRgtCw0YDRiNC1INC00LXRgNC10LLQviwg0YLQtdC8INGN0YLQviDRgdCy0L7QudGB0YLQstC+INCy0YvRiNC1LiDQn9GA0Lgg0L/RgNCw0LLQuNC70YzQvdC+0Lkg0L7QsdGA0LDQsdC+0YLQutC1INGP0YHQtdC90Ywg0YHRgtCw0L3QvtCy0LjRgtGB0Y8g0L/RgNCw0LrRgtC40YfQtdGB0LrQuCDQvdC10YPRj9C30LLQuNC8INC/0LXRgNC10LQg0LLQvtC30LTQtdC50YHRgtCy0LjQtdC8INCy0LvQsNCz0LguJyxcclxuICAgIGR1YjogJ9Cm0LXQvdC90LDRjyDQv9C+0YDQvtC00LAg0LTQtdGA0LXQstCwLCDQuNC30LLQtdGB0YLQvdCw0Y8g0YHQstC+0LXQuSDQv9GA0L7Rh9C90L7RgdGC0YzRjiDQuCDQvdC10L7QsdGL0YfQsNC50L3QviDQutGA0LDRgdC40LLQvtC5INGE0LDQutGC0YPRgNC+0LkuINCU0YPQsSDQuNC80LXQtdGCINCx0LvQsNCz0L7RgNC+0LTQvdGL0Lkg0YbQstC10YIsINC10LPQviDRgdC/0LjQuyDQvNC+0LbQtdGCINC40LzQtdGC0Ywg0L7RgtGC0LXQvdC+0Log0L7RgiDRgdCy0LXRgtC70L4t0LrQvtGA0LjRh9C90LXQstC+0LPQviDQtNC+INC20LXQu9GC0L7QstCw0YLQvtCz0L4g0LrQvtGA0LjRh9C90LXQstC+0LPQvi4g0K/QtNGA0L4g0L7QsdGL0YfQvdC+INC90LXQvNC90L7Qs9C+INGC0LXQvNC90LXQtSDQt9Cw0LHQvtC70L7QvdC4Ljxicj48YnI+JyArXHJcbiAgICAn0JXRgdC70Lgg0LTRg9CxINC/0YDQvtC70LXQttCw0Lsg0L3QsCDQtNC90LUg0LLQvtC00L7QtdC80LAg0L3QtdGB0LrQvtC70YzQutC+INC70LXRgiwg0YLQviDQvtC9INC/0YDQuNC+0LHRgNC10YLQsNC10YIg0LXRidC1INCx0L7Qu9GM0YjRg9GOINC/0YDQvtGH0L3QvtGB0YLRjCwg0LAg0LXQs9C+INGG0LLQtdGCINC40LfQvNC10L3Rj9C10YLRgdGPINC00L4g0YLQtdC80L3Qvi3QutC+0YDQuNGH0L3QtdCy0L7Qs9C+LCDQv9GA0LDQutGC0LjRh9C10YHQutC4INGH0LXRgNC90L7Qs9C+INGG0LLQtdGC0LAuPGJyPjxicj4nICtcclxuICAgICfQodGC0L7QuyDQuNC3INC00YPQsdCwINC/0YDQvtGB0LvRg9C20LjRgiDQvdC1INC+0LTQvdC+INC00LXRgdGP0YLQuNC70LXRgtC40Y8uINCd0LAg0L/RgNC+0YLRj9C20LXQvdC40Lgg0Y3RgtC+0LPQviDRgdGA0L7QutCwINC+0L0g0L3QtSDRgtC+0LvRjNC60L4g0L3QtSDRg9GC0YDQsNGC0LjRgiDRgdCy0L7QuSDQstC90LXRiNC90LjQuSDQstC40LQsINC90L4g0Lgg0YHRgtCw0L3QtdGCINC10YnQtSDQsdC+0LvQtdC1INCx0LvQsNCz0L7RgNC+0LTQvdGL0LwuJyxcclxuICAgIHZ5YXo6ICfQlNGA0LXQstC10YHQuNC90LAg0LLRj9C30LAg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINC10LPQviDRgNCw0LfQvdC+0LLQuNC00L3QvtGB0YLQuCDQvNC+0LbQtdGCINCx0YvRgtGMINC20LXQu9GC0L7QstCw0YLQvi3QsdC10LvQvtC5INGBINGB0LLQtdGC0LvQvi3QsdGD0YDRi9C8INC40LvQuCDRgtC10LzQvdC+LdCx0YPRgNGL0Lwg0Y/QtNGA0L7QvC4g0J/QviDQvNC10YDQtSDRgdGC0LDRgNC10L3QuNGPINC00LXRgNC10LLQsCDQtdCz0L4g0YbQstC10YIg0LjQt9C80LXQvdGP0LXRgtGB0Y8uPGJyPjxicj4nICtcclxuICAgICfQntGC0LvQuNGH0LjRgtC10LvRjNC90L7QuSDQvtGB0L7QsdC10L3QvdC+0YHRgtGM0Y4g0Y3RgtC+0Lkg0L/QvtGA0L7QtNGLINC00LXRgNC10LLQsCDRj9Cy0LvRj9C10YLRgdGPINC90LDQu9C40YfQuNC1INCx0L7Qu9GM0YjQuNGFINCw0L3QsNGC0L7QvNC40YfQtdGB0LrQuNGFINC90LXRgNC+0LLQvdC+0YHRgtC10LkuINCd0LDQuNCx0L7Qu9GM0YjQtdC5INCy0YvRgNCw0LfQuNGC0LXQu9GM0L3QvtGB0YLRjNGOINGC0LXQutGB0YLRg9GA0Ysg0L7QsdC70LDQtNCw0Y7RgiDQutCw0L/Riy48YnI+PGJyPicgK1xyXG4gICAgJ9Ch0YLQvtC70YssINC40LfQs9C+0YLQvtCy0LvQtdC90L3Ri9C1INC40Lcg0LLRj9C30LAsINC90LUg0LHQvtGP0YLRgdGPINCy0LvQsNCz0Lgg0Lgg0LTRgNGD0LPQuNGFINC90LXQs9Cw0YLQuNCy0L3Ri9GFINCy0L7Qt9C00LXQudGB0YLQstC40LkuINCe0L3QuCDQsdGD0LTRg9GCINGA0LDQtNC+0LLQsNGC0Ywg0YHQstC+0LjQvCDQvdC10L7QsdGL0YfQvdGL0Lwg0LLQvdC10YjQvdC40Lwg0LLQuNC00L7QvCDQtNC+0LvQs9C40LUg0LPQvtC00YsuJyxcclxuICAgIGtsZW46ICfQmtC70LXQvSDQvtCx0YvRh9C90L4g0L3QsNC30YvQstCw0Y7RgiDQvtCx0YvQutC90L7QstC10L3QvdGL0LwuINCd0L4g0YHRgtC+0LvRiywg0LjQt9Cz0L7RgtCw0LLQu9C40LLQsNC10LzRi9C1INC40Lcg0LrQu9C10L3QvtCy0YvRhSDRgdC70Y3QsdC+0LIsINC90LDQt9Cy0LDRgtGMINGC0LDQutC40LzQuCDQvdC10LvRjNC30Y8uINCt0YLQvtGCINCy0LjQtCDQtNC10YDQtdCy0LAg0L7RgtC70LjRh9Cw0LXRgtGB0Y8g0LHQu9C10LTQvdC+INC60YDQtdC80L7QstGL0Lwg0YbQstC10YLQvtC8Ljxicj48YnI+JyArXHJcbiAgICAn0J3QtdC/0L7QstGC0L7RgNC40LzRi9C5INGD0LfQvtGAINC60LvQtdC90L7QstC+0Lkg0L/QvtGA0L7QtNGLINGB0L7Qt9C00LDRjtGCINGB0LLQtdGC0LvQvi3QsdGD0YDRi9C1INC70YPRh9C4LCDQuNGB0YXQvtC00Y/RidC40LUg0LjQtyDRgdC10YDQtNGG0LXQstC40L3Riy4g0KLQsNC60LDRjyDQvNC+0LfQsNC40LrQsCDQv9GA0LjQtNCw0LXRgiDQtNGA0LXQstC10YHQuNC90LUg0L3QtdC60YPRjiDRiNC10LvQutC+0LLQuNGB0YLQvtGB0YLRjC48YnI+PGJyPicgK1xyXG4gICAgJ9Cf0L7RgdC70LUg0LLRi9GB0YPRiNC40LLQsNC90LjRjyDQutC70LXQvSDQv9GA0LjQvtCx0YDQtdGC0LDQtdGCINGB0L/QvtGB0L7QsdC90L7RgdGC0Ywg0YXQvtGA0L7RiNC+INGB0L7RhdGA0LDQvdGP0YLRjCDRhNC+0YDQvNGDINC80LXQsdC10LvQuC4g0KXQvtGA0L7RiNC+INGB0LzQvtGC0YDQuNGC0YHRjyDQsiDRgdC+0YfQtdGC0LDQvdC40Lgg0YEg0Y3Qu9C10LzQtdC90YLQsNC80Lgg0LjQtyDRgdGC0LXQutC70LAsINC80LXRgtCw0LvQu9CwINC4INC/0L7Qu9C40LzQtdGA0L7Qsi4nXHJcbn07XHJcblxyXG4kKFwiaW5wdXQ6Y2hlY2tib3hcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIHZhciBuYW1lID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cihcImlkXCIpXHJcbiAgICB2YXIgZ3JvdXAgPSBcImlucHV0OmNoZWNrYm94W25hbWU9J1wiKyBuYW1lICtcIiddXCI7XHJcbiAgICAkKGdyb3VwKS5hdHRyKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICQodGhpcykuYXR0cihcImNoZWNrZWRcIix0cnVlKTtcclxuXHJcbiAgICAkKGdyb3VwKS5yZW1vdmVDbGFzcyhcInN3aXRjaF9jaGVja2VkXCIpO1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcInN3aXRjaF9jaGVja2VkXCIpO1xyXG5cclxuICAgICQoJy5sb2FkaW5nJykucmVtb3ZlQ2xhc3MoJy5kLW5vbmUnKTtcclxuXHJcbiAgICBpZihuYW1lID09ICdidWlsZGVyLXRhYmxlJyl7XHJcbiAgICAgICAgdGFibGUgPSBpZDtcclxuICAgIH1cclxuICAgIGlmKG5hbWUgPT0gJ2J1aWxkZXItdHlwZScpe1xyXG4gICAgICAgIHR5cGUgPSBpZDtcclxuICAgIH1cclxuICAgIGlmKG5hbWUgPT0gJ2J1aWxkZXItY29sb3InKXtcclxuICAgICAgICBjb2xvciA9IGlkO1xyXG4gICAgfVxyXG4gICAgaWYobmFtZSA9PSAnc2NyZWVuNScpe1xyXG4gICAgICAgICQoJy5zY3JlZW41X19pbWctMScpLmF0dHIoJ3NyYycsJ2ltZy8nICsgaWQgKyAnLnBuZycpO1xyXG4gICAgICAgIHZhciBzY3JlZW41TmFtZSA9IGlkLnNsaWNlKDgpO1xyXG4gICAgICAgICQoJy5zY3JlZW41X190ZXh0LTInKS5odG1sKHR5cGVSdXNzaWFuW3NjcmVlbjVOYW1lXSk7XHJcbiAgICAgICAgJCgnLnNjcmVlbjVfX3RleHQtMycpLmh0bWwoc2NyZWVuNVRleHRbc2NyZWVuNU5hbWVdKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGFibGUgPT0gJ3dob2xlJyl7XHJcbiAgICAgICAgJCgnLmJ1aWxkZXJfX2ltZy0xJykuYXR0cignc3JjJywnaW1nLycgKyB0YWJsZSArICctJyArIHR5cGUgKyAnLnBuZycpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgJCgnLmJ1aWxkZXJfX2ltZy0xJykuYXR0cignc3JjJywnaW1nLycgKyB0YWJsZSArICctJyArIGNvbG9yICsgJy0nICsgdHlwZSArICcucG5nJyk7XHJcbiAgICB9XHJcbiAgICAkKCcuYnVpbGRlcl9fdGV4dC0xJykudGV4dCh0YWJsZVJ1c3NpYW5bdGFibGVdKTtcclxuICAgICQoJy5idWlsZGVyX190ZXh0LTInKS50ZXh0KHR5cGVSdXNzaWFuW3R5cGVdKTtcclxufSk7IiwiJChcIi5mb290ZXJfX2Zvcm1cIikuc3VibWl0KGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCc6aW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAkKCcuZm9vdGVyX19idXR0b24gJykudGV4dCgn0JfQsNCz0YDRg9C30LrQsCcpO1xyXG4gICAgdmFyIHRlbCA9ICQoXCIuZm9vdGVyX190ZWxcIikudmFsKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0ZWwpO1xyXG4gICAgaWYodGVsKXtcclxuICAgICAgICBhamF4U2VuZE1haWwoJCgnLmZvb3Rlcl9fZm9ybScpLnNlcmlhbGl6ZSgpKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICQoJy5mb290ZXJfX3RlbCcpLmF0dHIoXCJwbGFjZWhvbGRlclwiLCBcItCX0LDQv9C+0LvQvdC40YLQtSDRjdGC0L4g0L/QvtC70LUg0L/RgNCw0LLQuNC70YzQvdC+IVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYWpheFNlbmRNYWlsKGRhdGEpe1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwic2VuZE1haWwucGhwXCIsXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYoZGF0YS5zdWNjZXNzKXtcclxuICAgICAgICAgICAgICAgICQoJy5mb290ZXJfX2J1dHRvbicpLnRleHQoJ9CX0LDRj9Cy0LrQsCDQv9GA0LjQvdGP0YLQsCEnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAkKCcuZm9vdGVyX19idXR0b24gJykudGV4dCgn0J7RiNC40LHQutCwIScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJzppbnB1dFt0eXBlPVwic3VibWl0XCJdJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgJCgnLmZvb3Rlcl9fYnV0dG9uJykudGV4dCgn0J7RiNC40LHQutCwIScpO1xyXG4gICAgICAgICAgICAkKCc6aW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59Il19