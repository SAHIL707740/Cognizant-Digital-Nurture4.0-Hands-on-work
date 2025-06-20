import java.util.*;

public class ECommerceSearch {

    static class Product {
        int productId;
        String productName;
        String category;

        public Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        public String toString() {
            return "Product ID: " + productId + ", Name: " + productName + ", Category: " + category;
        }
    }

    public static Product linearSearch(Product[] products, String targetName) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(targetName)) return p;
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String targetName) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(targetName);
            if (cmp == 0) return products[mid];
            else if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shirt", "Clothing"),
            new Product(3, "Mouse", "Electronics"),
            new Product(4, "Book", "Stationery"),
            new Product(5, "Headphones", "Electronics"),
            new Product(6, "Shoes", "Footwear"),
            new Product(7, "Notebook", "Stationery"),
            new Product(8, "Charger", "Electronics"),
            new Product(9, "Bag", "Accessories"),
            new Product(10, "Pen", "Stationery")
        };

        Scanner sc = new Scanner(System.in);
        System.out.println();
        System.out.print("Enter product name: ");
        String searchName = sc.nextLine();
        System.out.println();

        Product res1 = linearSearch(products, searchName);
        if (res1 != null)
            System.out.println("Linear Search Result: " + res1);
        else
            System.out.println("Product not found in Linear Search.");

        Arrays.sort(products, Comparator.comparing(p -> p.productName));
        Product res2 = binarySearch(products, searchName);
        System.out.println();

        if (res2 != null)
            System.out.println("Binary Search Result: " + res2);
        else
            System.out.println("Product not found in Binary Search.");
    }
}
