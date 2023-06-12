import java.util.Scanner;

public class FruitMessageProgram {
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        
        
        System.out.print("Enter a fruit name: ");
        String fruitName = scanner.nextLine();
        
         
        String fruitMessage = getFruitMessage(fruitName);
        
        
        System.out.println(fruitMessage);
    }
    
    public static String getFruitMessage(String fruit) {
        String message = "";
        
        
        fruit = fruit.toLowerCase();
        
        
        switch (fruit) {
            case "apple":
                message = "Apples are delicious and nutritious.";
                break;
            case "banana":
                message = "Bananas are a great source of potassium.";
                break;
            case "orange":
                message = "Oranges are packed with vitamin C.";
                break;
            case "kiwi":
                message = "Kiwis are rich in vitamin K and fiber.";
                break;
            case "mango":
                message = "Mangoes are sweet and juicy.";
                break;
            default:
                message = "Unknown fruit";
        }
        
        return message;
    }
}
