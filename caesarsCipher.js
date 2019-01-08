function rot13(str) { // LBH QVQ VG!
  if (typeof process.argv[2] !== "undefined"){
    str = process.argv[2];
  }
  console.log("encoded str = " + str);
  var baseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var decodedStr = "";
  var baseStrLength = baseStr.length;
  var shiftCipher = 13;


  for (var i = 0; i < str.length; i++)
  {
      var pos = baseStr.indexOf(str[i]);
      if (pos === -1){
          decodedStr += str[i];
      }
      else{//this is a char in the baseStr
        pos += shiftCipher;
        if (pos >= baseStrLength)
        {
            pos -= baseStrLength;
        }
        decodedStr += baseStr.charAt(pos);
      }
  }
  
  console.log("decoded Str = " + decodedStr);  
  return decodedStr;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
