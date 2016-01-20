describe('isPalindrome',function(){
  it("will return false if not palindrome",function(){
    expect(isPalindrome("mirror")).to.equal(false);
  });
  it("will return true if it is a palindrome",function(){
    expect(isPalindrome("abccba")).to.equal(true);
  });
  it("will return true if first char. = last char.",function(){
    expect(isPalindrome("abcabca")).to.equal(true);
  });
});
