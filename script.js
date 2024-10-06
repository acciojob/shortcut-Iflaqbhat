function shortcut(s1, s2) {
  // your code here
	if (s1.charAt(0)||s2.charAt(0)=="") {
		console.log('');
	}
	else{
	let a=s1.chatAt(0)+s2.charAt(0);
	console.log(a) ;
	}
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
