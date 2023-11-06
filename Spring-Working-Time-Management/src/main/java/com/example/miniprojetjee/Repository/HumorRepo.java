package com.example.miniprojetjee.Repository;

import com.example.miniprojetjee.entity.Humor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface HumorRepo extends JpaRepository<Humor, Long> {
}
