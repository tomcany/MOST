$(document).ready(function () {
    sliderFitToScreenHeight()
    $('#index-slider').on('slid.bs.carousel', function (e) {
        if(e.to == 5){
            IndexSliderDrawCharts()
        }
    })
})

$(window).resize(function () {
    sliderFitToScreenHeight()
})

window.addEventListener("load", function() {
    $("#index-slider-loading").fadeOut(300)
}, false)

function sliderFitToScreenHeight() {
    var windowH = $(window).height()
    var headerH = $(".main-header").height();
    $("#index-slider").height(windowH - headerH);
}

function IndexSliderDrawCharts(){       
    const options = {
        borderWidth: 0,
        events: [],
        animation: {
            duration: 3000
        }
    }         
    new Chart(document.getElementById('consumersChart').getContext('2d'), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [72, 28],
                backgroundColor: [
                '#f9ae28',
                '#eff7f7'
                ]
            }]},
        options: options
    })
    new Chart(document.getElementById('marketChart').getContext('2d'), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [80, 20],
                backgroundColor: [
                '#f9ae28',
                '#eff7f7'
                ]
            }]},
        options: options
    })
}