//DESCRIPTION:
// Create a function that takes an integer as an argument and returns "Even"
// for even numbers or "Odd" for odd numbers.

//SOLUTION:
    function evenOrOdd(number) {
        if(number % 2 === 0){
            return "Even"
        }
        else {
            return "Odd"
        }
    }
    console.log(evenOrOdd())

//     <script>
//     function evenOrOdd(number) {
//         let num = prompt()
//         number=num
//         let procen = number % 2 === 0;
//         if(procen){
//             return "Even"
//         }
//         else {
//             return "Odd"
//         }
//     }
// console.log(evenOrOdd())
// </script>