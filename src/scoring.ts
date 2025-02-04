export const clickAction = (element: HTMLButtonElement) => {

  element.addEventListener('click', () => {
    // row 1 values

    const space1 = document.getElementById("row1")?.childNodes[1].textContent
    const space2 = document.getElementById("row1")?.childNodes[3].textContent
    const space3 = document.getElementById("row1")?.childNodes[5].textContent

    // row 2 values

    const space4 = document.getElementById("row2")?.childNodes[1].textContent
    const space5 = document.getElementById("row2")?.childNodes[3].textContent
    const space6 = document.getElementById("row2")?.childNodes[5].textContent

    // row 3 values

    const space7 = document.getElementById("row3")?.childNodes[1].textContent
    const space8 = document.getElementById("row3")?.childNodes[3].textContent
    const space9 = document.getElementById("row3")?.childNodes[5].textContent

    console.log(
    `
    ${space1},${space2},${space3},\n
    ${space4},${space5},${space6},\n
    ${space7},${space8},${space9},
    `
    )

    if
    (
    (space1 == "0" && space2 == "0" && space3 == "0") ||
    (space4 == "0" && space5 == "0" && space6 == "0") ||
    (space7 == "0" && space8 == "0" && space9 == "0") ||

    (space1 == "0" && space4 == "0" && space7 == "0") ||
    (space2 == "0" && space5 == "0" && space8 == "0") ||
    (space3 == "0" && space6 == "0" && space9 == "0") ||

    (space1 == "0" && space5 == "0" && space9 == "0") ||
    (space3 == "0" && space5 == "0" && space7 == "0")
    )
    {
      console.log(`player 0 wins`)
    }

    if
    (
    (space1 == "X" && space2 == "X" && space3 == "X") ||
    (space4 == "X" && space5 == "X" && space6 == "X") ||
    (space7 == "X" && space8 == "X" && space9 == "X") ||

    (space1 == "X" && space4 == "X" && space7 == "X") ||
    (space2 == "X" && space5 == "X" && space8 == "X") ||
    (space3 == "X" && space6 == "X" && space9 == "X") ||

    (space1 == "X" && space5 == "X" && space9 == "X") ||
    (space3 == "X" && space5 == "X" && space7 == "X")
    )
    {
      console.log(`player X wins`)
    }



})
}

///notes


// winning scenarios


// // 1,2,3
// // 4,5,6
// // 7,8,9

// // 1,4,7
// // 2,5,8
// // 3,6,9

// // 1,5,9
// // 3,5,7
//   }
