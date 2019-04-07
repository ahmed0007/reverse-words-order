// Reverse words in a string

var reverseWords = function(sentence){

  //thinks for es6 we finally have trim method build in within the language itself
  
  var trimed = sentence.trim();
  // Or we can just do it using regEx if we E8< browsers 
  /*
  * sentence.replace(new RegExp("^[" + charlist + "]+"), ""); to trim left
  * sentence.replace(new RegExp("[" + charlist + "]+$"), ""); to trim right
  */

	var words = trimed.split(" ").reverse(); // Split the sentence into an array of words and reverse it
	var string = "";
  
  // Or we can simply call words.join(" ");
	for(word in words)
		string += (word > 0 ? " " : "") + words[word]; // Concatenate each word to the output and add spaces where required
	return string;
	
}

// Outputs: "backwards better look really would string This"
reverseWords("This string would really look better backwards");
