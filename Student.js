import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class StudentClassManipulator {
    private List<String> studentList;

    public StudentClassManipulator() {
        studentList = new ArrayList<>();
    }

    public void addStudent(String student) {
        studentList.add(student);
    }

    public void removeStudent(int index) {
        if (index >= 0 && index < studentList.size()) {
            studentList.remove(index);
            System.out.println("Student removed successfully.");
        } else {
            System.out.println("Invalid index. No student removed.");
        }
    }

    public void displayStudents() {
        if (studentList.isEmpty()) {
            System.out.println("No students in the class.");
        } else {
            System.out.println("List of students in the class:");
            for (int i = 0; i < studentList.size(); i++) {
                System.out.println((i + 1) + ". " + studentList.get(i));
            }
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StudentClassManipulator classManipulator = new StudentClassManipulator();

        int choice = 0;
        while (choice != 4) {
            System.out.println("\n--- Student Class Manipulator ---");
            System.out.println("1. Add a new student");
            System.out.println("2. Remove a student by index");
            System.out.println("3. Display list of students");
            System.out.println("4. Quit");
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            switch (choice) {
                case 1:
                    System.out.print("Enter the name of the student to add: ");
                    String newStudent = scanner.nextLine();
                    classManipulator.addStudent(newStudent);
                    break;
                case 2:
                    System.out.print("Enter the index of the student to remove: ");
                    int index = scanner.nextInt();
                    classManipulator.removeStudent(index - 1);
                    break;
                case 3:
                    classManipulator.displayStudents();
                    break;
                case 4:
                    System.out.println("Exiting the program. Goodbye!");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }

        scanner.close();
    }
}
