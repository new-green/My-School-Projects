using Microsoft.AspNetCore.Mvc;

public class ListeController: Controller{
    public String Liste(int id){
        return $"Parametreden Gelen Değer:{id}";
    }
}