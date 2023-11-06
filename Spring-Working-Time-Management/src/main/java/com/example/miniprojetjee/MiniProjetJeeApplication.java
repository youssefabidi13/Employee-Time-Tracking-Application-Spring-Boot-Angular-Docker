package com.example.miniprojetjee;

import com.example.miniprojetjee.Repository.EmployeeRepo;
import com.example.miniprojetjee.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class MiniProjetJeeApplication {

    public static void main(String[] args) {
        SpringApplication.run(MiniProjetJeeApplication.class, args);
    }
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Bean
    public CommandLineRunner commandLineRunner(
            EmployeeRepo service
    ) {

        return args -> {
            Employee employee= Employee.builder()
                    .email("elmessbahiyoussef@gmail.com")
                    .firstName("Youssef")
                    .lastName("Elmessbahi")
                    .jobTitle("Software Engineer")
                    .phone("0666666666")
                    .password(passwordEncoder.encode("admin"))
                    .roles("ADMIN")
                            .build();
            service.save(employee);

            System.out.println(employee.getEmail()+" _ "+employee.getPassword());
        };
    }
}
