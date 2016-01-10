function truncate(str, num) {
  // Clear out that junk in your trunk
  if (str.length < num) {
  	return str;
  } else if (str.length <= 3) {
  	return str.slice(0,num) + "...";
  } else {
  	return str.slice(0,num-3) + "...";
  }
  
}

console.log(truncate("A-tisket a-tasket A green and yellow basket", 11));