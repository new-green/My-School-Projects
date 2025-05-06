void main() {
  var a = 10;
  print("a'nın önceki değeri: $a");
  ++a;
  print("a'nın sonraki değeri: $a");
  /*
  ---"++"---
  "++" operatörü ise önce değişkeni arttırır ve sonra değişkeni kullanır.
  Değişkenin içersindeki önceki değer silinir ve yeni arttırılmış değer yazdırılır.
  */

  var b = 11;
  print("b'nin önceki değeri: $b");
  --b;
  print("b'nin sonraki değeri: $b");
  /*
  ---"--"---
  "--" operatörü ise önce değişkeni azaltır ve sonra değişkeni kullanır.
  Değişkenin içersindeki önceki değer silinir ve yeni azaltılmış değer yazdırılır.
  */ /*
  Print değeri içersinde yazılsa bir değişkenin yeni değeri yazdırılır.
  Bu şekilde kullanılır ise hata verir. "print("b'nin yeni değeri $++b");" InvalidType hatası verir.
  */
}
