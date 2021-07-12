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
    
    animateValue(document.getElementById("consumersChartNum"), 0, 72, 2000)
    animateValue(document.getElementById("marketChartNum"), 0, 80, 2000)
    animateValue(document.getElementById("metersChartNum"), 0, 245, 2000)
    animateValue(document.getElementById("benefitsChartNum"), 0, 309, 2000)
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            obj.innerHTML = Math.floor(progress * (end - start) + start)
        if (progress < 1) {
            window.requestAnimationFrame(step)
        }
    };
    window.requestAnimationFrame(step)
}