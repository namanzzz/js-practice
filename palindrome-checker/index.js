

const check = () => {
    const original = document.querySelector('.field').value;
    // console.log(text);
    // console.log(typeof text)
    const array = original.split('');
    const temp = array.reverse();
    const reversed = temp.join('');
    
    original === reversed ? alert('P A L I N D R O M E ! ! !') : alert('Not a Valid Palindrome.');
}