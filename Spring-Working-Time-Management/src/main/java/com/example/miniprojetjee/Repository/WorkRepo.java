package com.example.miniprojetjee.Repository;

import com.example.miniprojetjee.entity.Work;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface WorkRepo extends JpaRepository<Work, Long> {
}
