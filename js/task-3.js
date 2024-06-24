function getElementWidth(content, padding, border) {
  const contentFloat = Number.parseFloat(content)
  const paddingFloat = Number.parseFloat(padding)
  const borderFloat = Number.parseFloat(border)

  const width = contentFloat + (paddingFloat * 2) + (borderFloat * 2)

  return width
}


console.log("#################### TASK 3 ####################")
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
console.log("\n\n")
