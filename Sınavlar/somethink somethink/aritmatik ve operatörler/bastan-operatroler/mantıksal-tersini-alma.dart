void main() {
  bool open = true;
  print(!open);

  /*
  ---"!open"---
  Bu kullanım bool tipindeki değişkenler için uygundur.
  "true" değerini "false yapar"
  */

  bool closed = false;
  print(!closed);
  /*
  ---"!closed"---
  "false" değerindeki değişkeni "true" yapar.
  "-" fonksiyonundaki gibi bir özelliği olmasa da birbirleri arasında değişim yapabilirler (false -> true, true -> false)
  */
}
