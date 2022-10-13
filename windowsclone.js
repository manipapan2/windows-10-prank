document.getElementById("windowsStart").addEventListener("click" ,blueIt)

function blueIt(){

    setTimeout(() => {
        document.getElementById("bodyFake").style.display="none"
        document.getElementById("middleSection").style.display="none"
        document.getElementById("blueScreen").style.display="flex"
      }, "400");

    setTimeout(() => {
      document.getElementById("nonebarcode").style.display="none"
      document.getElementById("barcode").style.display="flex"
    }, "4000");

}