void main() {
  /*
  -------Çarpma ve Bölme-------
  Diğer dillerdeki gibi çalışır özel bir olayı yoktur.
  Sadece ekstra bölme bölme işareti vardır "~/".
  */

  var a = 10;
  var b = 5;
  var c;

  c = a * b;
  print("a * b sonucu: $c");

  c = a / b;
  print("a / b sonucu: $c");

  c = a % b;
  print("a % b sonucu: $c");

  c = a ~/ b;
  print("a ~/ b sonucu: $c");
}
