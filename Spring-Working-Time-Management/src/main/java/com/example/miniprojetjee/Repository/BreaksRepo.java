package com.example.miniprojetjee.Repository;

import com.example.miniprojetjee.entity.Breaks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface BreaksRepo extends JpaRepository<Breaks, Long> {
}
