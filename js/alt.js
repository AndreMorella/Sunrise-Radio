const donateBtn = $(".donateButton"),
    donate = $(".donateWindow");


function openDonateWindow() {              
    document.getElementsByClassName('donate')[0].style.display = "flex";
}


const popup = document.getElementsByClassName('donate')[0];
const popupDownload = document.getElementsByClassName('popupDownload')[0];

document.onclick = function (e) {
    // console.log(e.target.className)
    if (!e.target.className.includes("donate") && e.target.className != "button btnflex__button donateButton" || e.target.className == "donate") {
        // console.log(e.target.className)
        document.getElementsByClassName('donate')[0].style.display = "none";
        document.getElementsByClassName('payment succeed')[0].style.display = "none";
        document.getElementsByClassName('payment canceled')[0].style.display = "none";
        document.getElementsByClassName('payment notfound')[0].style.display = "none";
    };

    if (!e.target.parentNode.className.includes("btnDownload")){
        document.getElementsByClassName('popupDownload')[0].style.display = "none";
    }
    // console.log(e.target.parentNode.className)
    // console.log(e.target.parentNode.className.includes("btnDownload"))
};

window.onload = function (e) {
    var status = new URLSearchParams(window.location.search).get('payment')
    if (status == 'success'){
        document.getElementsByClassName('payment succeed')[0].style.display = "flex";
    }else if (status == 'canceled') {
        document.getElementsByClassName('payment canceled')[0].style.display = "flex";
    } else if (status == 'notfound') {
        document.getElementsByClassName('payment notfound')[0].style.display = "flex";
    };

};

function download(){
    ym(89130117,'reachGoal','Download')
    document.location.href = 'https://drive.google.com/file/d/15HqjEkU8SAicx1MCOb5cAF8HENvwacUI/view?usp=sharing'
}



function popupWndDownload () {
    document.getElementsByClassName('popupDownload')[0].style.display = "flex";
}