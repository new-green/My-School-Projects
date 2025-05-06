class Kisi {
  String isim;
  int yas;

  Kisi(this.isim, this.yas);
  void tanit() {
    print("Merhaba, ben $isim ve $yas yaşındayım.");
  }
}

void main() {
  Kisi? kisi1 = null;
  kisi1?.tanit();
  /*
  ---Kisi? kisi1 = null;---
  Bu satırda ? kullanmamızın sebebi güveli şekilde değişkene "null" değerini atamaktır.

  ---kisi?.tanit();---
  Bu satırda ?. kullanmamızın sebebi "null" değeri atanmış fonksiyonu hata vermeden çalıştırmaktır. 
  */
}
