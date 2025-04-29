using Microsoft.AspNetCore.Mvc;

public class KitapController: Controller{
    public IActionResult Kategoriler(){
        return View();
    }
    public IActionResult KitapListesi(int id){
        return View();
    }
}