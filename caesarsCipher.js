function rot13(str) { // LBH QVQ VG!
  var baseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var decodedStr = "";
  var baseStrLength = baseStr.length;
  var shiftCipher = 13;
  for (var i = 0; i < str.length; i++)
  {
      var pos = baseStr.indexOf(str[i]);
      if (pos === -1){
          console.log(str[i]);
          decodedStr += str[i];
          console.log(decodedStr);
      }
      else{//this is a char in the baseStr
        pos += shiftCipher;
        if (pos >= baseStrLength)
        {
            pos -= baseStrLength;
        }
        decodedStr += baseStr.charAt(pos);
        console.log(decodedStr);
      }
  }
    
  return decodedStr;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");