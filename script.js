let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let downloadBtn = document.querySelector('#download');
let loadingDiv = document.getElementById('loading');
let generateButton = document.getElementById('generateButton');

function generateQR() {
    if (qrText.value.length > 0) {
        generateButton.innerText = "GENERATING";

        setTimeout(function () {
            qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
            imgBox.classList.add("show-img");
            document.getElementById("download").style.display = "block";
            generateButton.innerText = "GENERATE";
        }, 2000);
    } else {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
}

downloadBtn.addEventListener("click", async () => {
    const response = await fetch(qrImage.src);
    const blob = await response.blob();
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'qrcode.jpg';
    downloadLink.click();
})
