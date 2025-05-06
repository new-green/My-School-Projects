void main() {
  /*
  ------Aritmatik operatörler------
  -------Son ek operatörleri-------
  Son ek opertatörler genellikle sonra yazılır. Örneğin
  */

  //Arttırma ve azaltma operatörleri
  var a = 10;
  print("a'nın önceki değeri: $a");
  a--;
  print("a'nın sonraki değeri: $a");
  /*
  Diğer dillerdeki gibi a değerini bir eksiltmek istediğimizde "a = a--;" yazınca çalışmıyor.
  Yeni bir değere a'nın eksiltilmiş değerini de yazdırıp sonrasında yeni değeri de yazdıramıyoruz.
  Çünkü;
    var new_a = a--; yaptığımızda a'nın azaltılmış değerini yeni değere yazmak yerine a'ının orijinal değerine yazıyor.
  Aynı şekide "a++;" yapınca da aynı şekilde yazmalıyız.
  */
  var b = 10;
  print("b'nin önceki değeri: $b");
  b++;
  print("b'nin sonraki değeri: $b");
  /*
  Bu şekilde yapılırsa b'nin değeri 11 olur
  */
}
