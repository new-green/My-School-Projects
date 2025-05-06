void main() {
  /*
  -------Parantez-------
  Bu operaörün görevi ise fonksiyon oluşturmaktır.
  Örneğin:
  */
  int fibonacci(int n) {
    if (n == 0 || n == 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  var result = fibonacci(50);
  print(result);
  /*
  ---int fibonacci()---
  Burada int değer döndürebilecek bir fonksiyon açılmış. 
  fibonacchi fonksiyonuna bir sayısal parametre girildiğinde fibonacchi sayısını hesaplıyor.
  Örneğin 10. fibonacchi sayısını hesaplamak için "fibonacchi(10);" şekilde yazılır.
  */
}
