// const sentence = 'The quick brown fox jumps over the lazy dog.';

// 1. what is the alphabet on index 6 in the given string?
// let text = sentence.slice(6,7);
// console.log(text)

// 2. What is the alphabet on index 3 in the given string fromm the end?
// let text = sentence.slice(-3,-2);
// console.log(text)

// 3. what will be the character code of the word f, using string method?
// let text = sentence.charCodeAt(16);
// console.log(text)

// 4. Use the concat method to create a full name by combining the first name and last name. Store the result in the variable ‘fullName’ and print it.
// const firstName = "Arzoo";
// const lastName ="Jain";
// const fullName = firstName.concat(" ",lastName);
// console.log(fullName)

// 5. Write a JavaScript code snippet using the endsWith method to check if a given string “message” ends with the word “world”. Return true if it does, otherwise return false
// const message= "Hello world";
// console.log(message.endsWith("world"))

// 6. Use the String.fromCharCode() method to create a string that represents the word “HELLO” in ASCII codes. Store the result in a variable called “greeting”.

// const greeting = String.fromCharCode(72,69,76,76,79);
// console.log(greeting)

// 7. You have a string emoji containing a smiley face emoji 😀. Get the Unicode code point of the emoji using the codePointAt method. What’s the code point?
// codePointAt method returns a non-negetive integer that is the unicode code point value of the character starting at the given index.
// const emoji = '😀';
// console.log(emoji.codePointAt(0));

// 8. You have a string message with the following content: “The code is not working. The code is causing errors.” Replace all occurrences of the word “code” with “program” using the replaceAll method. How would you do it?

// const message= "The code is not working. The code is causing errors.";
// console.log(message.replaceAll("code","program"));

// 9. You have a string sentence that says: “I like to eat bananas. Bananas are a healthy snack.” Replace the word “bananas” with “apples” using the replace method. How would you do it?
// const sentence = "I like to eat bananas. Bananas are a healthy snack.";
// console.log(sentence.replace("bananas","apples"))

// 10. You have a string colors containing a list of colors separated by commas: “red,green,blue,yellow” Use the split method to separate these colors into an array. What will the resulting array look like?

// using split method we can simply convert string to an array
// const color = "red,green,blue,yellow";
// console.log(color.split(","))

// 11. You have a string address that contains: “1234 Elm Street, Citysville” Using the substring method, extract the portion of the address starting from index 6 until the end. What is the extracted portion?

// const address = "1234 Elm Street, Citysville";
// console.log(address.substring(6,address.length))

// 12. You have a string sentence that reads: “JavaScript is a powerful and flexible language.” Extract the substring that starts at index 11 and ends at index 26 (inclusive). What is the extracted substring?

// const sentence = "JavaScript is a powerful and flexible language.";
// console.log(sentence.substring(11,27))

// 13.  You have a string sentence that says: “I enjoy programming in JavaScript.” Use the includes method to check if the sentence contains the word “JavaScript”. What will be the result?

// const str = "I enjoy programming in JavaScript.";
// console.log(str.includes("JavaScript"));

// 14. You have a string fruits with the following content: “apple, banana, orange, mango, grape” Using the includes method with an index, determine whether the word “orange” is present after the comma at index 18. What will be the result?

// const fruits = "apple, banana, orange, mango, grape";
// console.log(fruits.includes("orange",18));

// 15. You have a string rawInput that contains extra spaces at the beginning and end: “ Hello, world! “ Use the trim method to remove the extra spaces from the string. What will be the resulting string?

// const str = "   Hello, world!";
// console.log(str)
// console.log(str.trimStart(" "));

// 16. You have a string word with the content: “elephant” Use the charAt method to retrieve the character at the 3rd position (index 2) of the word. What character will you get?

// const word = "elephant";
// console.log(word.charAt(2));

// 17. Using the String.fromCharCode() method, create a string that represents the characters with Unicode code points 72, 101, 108, 108, and 111. What string will you get? -> Hello

// console.log(String.fromCharCode(72,101,108,108,111))

// 18. Using the String.fromCodePoint() method, create a string that represents the characters with Unicode code points 128512, 128513, and 128514. What string will you get?

// console.log(String.fromCharCode(128512, 128513, 128514));

// 19. You have a string sentence that says: “The sun is shining. The weather is sunny.” Use the match method with a regular expression to find all occurrences of the word “sun” in the sentence. What will be the result?
// match() returns an array containing the results of matching string as well as its index

// const str = "The sun is shining. The weather is sunny.";
// console.log(str.match("sun"))

// 20. You have a string paragraph with the following content: “Apples are delicious. Bananas are tasty. Grapes are sweet.” Use the matchAll method with a regular expression to find all instances of words that end with “es” in the paragraph. How would you retrieve these matches?
// const regexp = /[A-z]*es/g;
// const str = "Apples are delicious. Bananas are tasty. Grapes are sweet.";
// let fruits;
// // exec() executes a search with this regular exp for a match and returns a resulted array
// while((fruits = regexp.exec(str)) !==null){
//     console.log(`Found ${fruits[0]} start=${fruits.index} end=${regexp.lastIndex}.`)
// }

// 21. You have a string greeting that contains the text: “Hello, how are you doing?” Use the startsWith method to check if the greeting starts with the word “Hello”. What will be the result
// startsWith() cant contain regular exp i.e. /g or /i
// const str = "Hello, how are you doing?"
// console.log(str.startsWith("Hello"))

// 22. You have a string paragraph with the following content: “The quick brown fox jumps over the lazy dog.” Use the search method to find the index of the word “fox” in the paragraph. What will be the result?
// search() and indexOf() are have differences, search can't take a second starrt position argument, while indexOf() can't take regular expressions
// const text = "The quick brown fox jumps over the lazy dog.";
// const searchText = text.search("fox");
// console.log(`Found at index ${searchText}`)