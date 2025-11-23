

package com.example.repository;
 import com.example.model.*;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    
}
