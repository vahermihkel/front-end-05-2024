package ee.mihkel.webshop.controller;

// Spring Web dependency
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    // CGI --> @GetMapping(value = "getBooks")
    @GetMapping("getProducts") // localhost:8080/api/product/getProducts
    public ResponseEntity<String> getProducts() {
        return ResponseEntity.ok("Võtan mitu");
    }

    @GetMapping("getProduct") // localhost:8080/api/product/getProduct?productId=10
    public ResponseEntity<String> getProduct(@RequestParam String productId) {
        return ResponseEntity.ok("Võtan ühe, kelle ID on " + productId);
    }

    @PostMapping("saveProduct") // localhost:8080/api/product/saveProduct
    public ResponseEntity<String> saveProduct(@RequestBody String product) {
        return ResponseEntity.ok("Lisan ühe " + product);
    }

    @DeleteMapping("deleteProduct") // localhost:8080/api/product/deleteProduct?productId=10
    public ResponseEntity<String> deleteProduct(@RequestParam String productId) {
        return ResponseEntity.ok("Kustutan ühe, kelle ID on " + productId);
    }
}
