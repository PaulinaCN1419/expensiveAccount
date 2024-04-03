// function solution(year) {
//     let currentCentury = 21
//     let century
//     for (let i = 1 ; i <= currentCentury; i++){
//         if((year >= (i -1)* 100 + 1) && year <= i* 100){
//             century = i
//             console.log(`Century: ${i}`)
//         }
//     }
    

// }
// solution(4)

// function searchYear(year){
//     let century = year/100
//     let result = Math.ceil(century)
//     console.log(result)
//     return result
// }
// searchYear(1988)

function solution(inputString) {

    let cadenaSplit = inputString.split("")
    cadenaSplit.forEach(cadena => {
        if(cadena === ','){
            cadena.replace('')
        }
        
    });
    // let cadenaReverse = cadenaSplit.reverse()
    // let cadenaJoin = cadenaReverse.join("")
    
    // let datos = (inputString === cadenaJoin) ? 'This is palindrome' : 'No is a  palindrome'
    // console.log(datos)
    
}