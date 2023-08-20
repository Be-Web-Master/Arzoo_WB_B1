// 1. Use getElementById to target the element with the ID "main-heading" and print it to the console. (getElementById)

// const getId = document.getElementById("main-heading");
// console.log(getId)

// 2. Utilize elem.type to target the input element with the ID "name" and print its type to the console. (elem.type)

// const inputType = document.getElementById("name").type
// console.log(inputType)

// 3.Make use of elem.name to target the input element with the ID "name" and print its name attribute to the console. (elem.name)

// const inputName = document.getElementById("name").name
// console.log(inputName)

// 4. Using elem.id, target the input element with the ID "name" and print its ID attribute to the console. (elem.id)

// const inputId = document.getElementById("name").id
// console.log(inputId)

// 5. With the help of elem.value, target the input element with the ID "name" and print its value to the console. (elem.value)

// const inputValue = document.getElementById('name').value
// console.log(inputValue)

// 6. Using querySelectorAll, target all <li> elements within the <ul> with class "list" and print them to the console. (querySelectorAll)

// const targetLI = document.querySelectorAll(".list")
// console.log(targetLI[0].innerHTML)

// 7. Leveraging querySelector, target the <p> element within the <div> with class "content" and print it to the console. (querySelector)

// const targetTagP = document.querySelector(".content").innerHTML
// console.log(targetTagP)

// 8. Utilizing document.body.children, target all child elements of the <body> element and print them to the console. (document.body.children)

// const targetBodyChildren = document.body.children
// console.log(targetBodyChildren)

// 9. Using getElementsByTagName, target the first <li> element within the <ul> with class "list" and print it to the console. (getElementsByTagName)

// const targetFirstLIElem = document.getElementsByTagName("li")[0];
// console.log(targetFirstLIElem)

// 10. Make use of getElementsByClassName, target all elements with the class "content" and print them to the console. (getElementsByClassName)

// const targetAllClass = document.getElementsByClassName("content")[0];
// console.log(targetAllClass)

// 11. Using getElementsByName, target the input element with the name "fullName" and print it to the console. (getElementsByName)

// const targetInpElemName = document.getElementsByName("fullName")[0];
// console.log(targetInpElemName)

// 12. What classes are present in the classList of the element with the ID "main-heading"? (classList)

// const printAllClasses = document.getElementById("main-heading").classList;
// console.log(printAllClasses)

// 13. Add the class "highlight" to the element with the ID "main-heading". What classes are present now? (classList.add)

// const addClass = document.getElementById("main-heading").classList.add("highlight");

// const getClass = document.getElementById("main-heading")
// console.log(getClass)

// 14. Remove the class "highlight" from the element with the ID "main-heading". What classes are present now? (classList.remove)

// const removeClass = document.getElementById("main-heading").classList.remove("highlight");

// const getClass = document.getElementById("main-heading")
// console.log(getClass)

// 15. Toggle the class "active" on the element with the class "inner-box" inside the element with the ID "container". What classes are present on the "inner-box" element? (classList.toggle)

// const toggleClass = document.getElementsByClassName("inner-box")[0].classList.toggle("active");
// console.log(toggleClass)

// const getClass = document.getElementsByClassName("inner-box")[0].classList
// console.log(getClass)

//  Check if the element with the class "inner-box" has the class "active". Print true or false. (elem.classList.contains)

// const elem = document.getElementsByClassName("inner-box")[0];
// const ContainsClass = elem.classList.contains("active")
// console.log(ContainsClass)

// 16. Does the element with the ID "name" have the class "input-field"? Print true or false. (classList.contains)

// const ContainsClass = document.getElementById("name").classList.contains("input-feild")
// console.log(ContainsClass)

// 17. What is the background color of the element with the ID "main-heading"? (style.background-color)

// const checkColor = document.getElementById("main-heading")
// checkColor.style.backgroundColor = "red"
// const color= checkColor.style.backgroundColor
// console.log(color)

// **18. Does the element with the class "list" contain an <li> element with the text "Item 2"? Print true or false. (matches)

// const elemList = document.getElementsByClassName("list")[0]
// const check = document.hasChildNodes("li")
// console.log(check)

// **19. Does the element with the class "content" match a <div> tag? Print true or false. (matches)
// got true here, matches worked, why?
// const elem = document.getElementsByClassName("content")[0];
// console.log(elem.matches("div"))

// 20. What is the nearest ancestor of the element with the class "inner-box" that has the ID "container"? (closest)

// const elem = document.getElementsByClassName("inner-box")[0];
// const nearestAncestor = elem.closest("#container");
// console.log(nearestAncestor)

// 21. Print the first child element of the <body> element. (document.body)

// const firstChild = document.body.firstElementChild;
// console.log(firstChild)

// 22. Print the number of child elements within the <body> element. (document.body.children)

// const numOfChild = document.body.children;
// console.log(numOfChild)

// 23. What is the tag name of the first child element of the <body> element? (document.body.firstChild.tagName)

// const tag_Name = document.body.firstElementChild.tagName;
// console.log(tag_Name)

// **24. What is the class name of the first child element of the <body> element? (document.body.firstChild.className)
// should get div? but not!

// const class_Name = document.body.firstElementChild.className;
// console.log(class_Name)

// 25. Print the innerHTML of the element with the class "content". (innerHTML)

// const elem = document.getElementsByClassName("content")[0];
// const getInnerHtml = elem.innerHTML;
// console.log(getInnerHtml)

// 26. Print the innerText of the element with the class "content". (innerText)

// const elem = document.getElementsByClassName("content")[0];
// const getInnerText = elem.innerText;
// console.log(getInnerText)

// 27. Get the value of the "type" attribute of the input element with the ID "name". (getAttribute())

// const inputElem = document.getElementById("name");
// const getValue = inputElem.getAttribute("type");
// console.log(getValue)

// 28. Set the "placeholder" attribute of the input element with the ID "name" to "Enter your full name". (setAttribute())

// const inpElem = document.getElementById("name");
// const setValue = inpElem.setAttribute("placeholder","Enter your full name");
// console.log(inpElem);

// 29. Does the input element with the ID "name" have the "placeholder" attribute? Print true or false. (hasAttribute())

// const inpElem2 = document.getElementById("name");
// const hasElem = inpElem.hasAttribute("placeholder");
// console.log(hasElem)

// 30. Remove the "value" attribute from the input element with the ID "name". (removeAttribute())

// const inpElem = document.getElementById("name");
// const removeElem = inpElem.removeAttribute("value");
// console.log(inpElem)