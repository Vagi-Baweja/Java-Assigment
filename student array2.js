import java.util.Arrays;

public class NumberArrayManipulator {
    public static void main(String[] args) {
        
        int[] numbers = { 1, 2, 3, 4, 5 };

       
        int[] subset = Arrays.copyOfRange(numbers, 1, 3);

        
        System.out.println("Subset array: " + Arrays.toString(subset));

        int indexToRemove = 2;
        int[] updatedNumbers = new int[numbers.length - 1];
        System.arraycopy(numbers, 0, updatedNumbers, 0, indexToRemove);
        System.arraycopy(numbers, indexToRemove + 1, updatedNumbers, indexToRemove, numbers.length - indexToRemove - 1);

        System.out.println("Updated numbers array after removing element at index 2: " + Arrays.toString(updatedNumbers));

        
        int numberToInsert = 6;
        int[] finalNumbers = new int[updatedNumbers.length + 1];
        System.arraycopy(updatedNumbers, 0, finalNumbers, 0, indexToRemove);
        finalNumbers[indexToRemove] = numberToInsert;
        System.arraycopy(updatedNumbers, indexToRemove, finalNumbers, indexToRemove + 1, updatedNumbers.length - indexToRemove);

        
        System.out.println("Final numbers array after inserting number 6 at index 2: " + Arrays.toString(finalNumbers));
    }
}
