// complete the given function

function palindrome(str){
let ans=str.reverse();
	if(str===ans){
		return true;
	}else{
		return false;
	}
}
module.exports = palindrome
