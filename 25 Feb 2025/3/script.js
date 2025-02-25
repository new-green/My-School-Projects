var matematik=[60,90,100];
var tarih=[80,80];
var fizik=[100, 90, 75];
var ortalamalar = [];

ort1=(matematik[0]+matematik[1]+matematik[2])/3;
ort2=(tarih[0]+tarih[1])/2;
ort3=(fizik[0]+fizik[1]+fizik[2])/3;

ortalamalar.push(ort1);
ortalamalar.push(ort2);
ortalamalar.push(ort3);

var genelortalama=0;

genelortalama=(ortalamalar[0]+ortalamalar[1]+ortalamalar[2])/3;
document.getElementsByClassName("cikti").textContent(genelortalama)