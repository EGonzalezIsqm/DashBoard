$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 10000
    })
    $('.fdi-Carousel .item').each(function () {
        var siguiente = $(this).next();
        if (!siguiente.length) {
            siguiente = $(this).siblings(':first');
        }
        siguiente.children(':first-child').clone().appendTo($(this));

        if (siguiente.next().length > 0) {
            siguiente.next().children(':first-child').clone().appendTo($(this));
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});

$(function () {
    var actualizarHora = function () {
        var fecha = new Date(),
            hora = fecha.getHours(),
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            anio = fecha.getFullYear(),
            ampm;

        var $pHoras = $("#horas"),
            $pSegundos = $("#segundos"),
            $pMinutos = $("#minutos"),
            $pAMPM = $("#ampm"),
            $pDiaSemana = $("#diaSemana"),
            $pDia = $("#dia"),
            $pMes = $("#mes"),
            $pAnio = $("#anio");
        var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        $pDiaSemana.text(semana[diaSemana]);
        $pDia.text(dia);
        $pMes.text(meses[mes]);
        $pAnio.text(anio);
        if (hora >= 12) {
            hora = hora - 12;
            ampm = "PM";
        } else {
            ampm = "AM";
        }
        if (hora == 0) {
            hora = 12;
        }
        if (hora < 10) {
            $pHoras.text("0" + hora)
        } else {
            $pHoras.text(hora)
        }
        ;
        if (minutos < 10) {
            $pMinutos.text("0" + minutos)
        } else {
            $pMinutos.text(minutos)
        }
        ;
        if (segundos < 10) {
            $pSegundos.text("0" + segundos)
        } else {
            $pSegundos.text(segundos)
        };
        $pAMPM.text(ampm);

    };


    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);
});