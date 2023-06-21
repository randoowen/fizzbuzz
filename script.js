function pengecekkan(a){
    if(a%5 == 0){
        console.log("Ini kelipatan 5")
    } else if(a%3 == 0) {
            console.log("Ini kelipatan 3")
    }

}
let input = document.getElementById("Nilai")
pengecekkan(input.value)
