import "dart:math"; //Burada matematiksel işlemleri yapabilmek için kütüphane eklenmiş

void main() {
  var sayi = 40;
  print(karesinial(sayi));
  /*
  ------karesinial------
  Bu fonksiyonda bizden parametre alınması istenmiş.
  Parametremiz ise "sayi" olarak atanmış. Eğer istersek "sayi" yerine "20" de yazabilirdik.
  */
}

num karesinial(sayi1) {
  return (pow(sayi1, 2));
  /*
  ------pow------
  Pow, üst alma işlemidir. Dart programlama dilinde "dart:math" kütüphanesi eklendikten sonra kullanılabilir.
  İlk parametre (sayi1) taban sayımzıdır. Yani main fonksiyonu içerisinde tanımlanan sayi değeridir.
  İkinci patametre (2 veya herhangi bir sayı) ise bizim kuvvetimizdir. İkici parametremiz neyse o sayı kadar çarpılır.

  ------num------
  Num, numberik bir fonksiyondur. Sadece sayısal değer döndürebilir. 
  "return(pow(sayi1,2));" ifadesi yenine "return (print("Herkese selam"));" ifadesi yazılır ise kod hata verir.
  Nedeni ise fonksiyonumuz void olarak tanımlanmadığından dolayı kaynaklanır.
  */
}
