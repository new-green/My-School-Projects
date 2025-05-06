/*
-------Nokta-------
Nokta operatörü ise bir nesnenin özelliklerine veya bir classı içeriğine erişmek için kullanılır.
JavaScripte benzer bir kullanım yapısı vardır.
Örneğin:
*/

class Kisi {
  String isim;
  int yas;

  Kisi(this.isim, this.yas);
  /*
  Burada "Kisi(this.isim, this.yas);" kullanımı classın içerisindeki değişkene erişmek için kullanılır
  "isim" fonksiyonun içersindeki geçici değişkendir. 
  */

  void tanit() {
    print("Merhaba, ben $isim ve $yas yaşındayım.");
  }
}

void main() {
  var kisi1 = Kisi("Ahmet Mushin", 111);
  kisi1.tanit();
  /*
  Bu blokta ise önce kisi1 değikeni oluşturulmuş. 
  Daha sonra Kisi classındaki parametrelere değişkenlerin değerleri yazılmış
  kisi1.tanit(); satırında da tanit(); fonksiyonuna erişilmiş.
  */
}
