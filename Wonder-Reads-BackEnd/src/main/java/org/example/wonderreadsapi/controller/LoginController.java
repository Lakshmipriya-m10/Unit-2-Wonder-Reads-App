package org.example.wonderreadsapi.controller;

import org.example.wonderreadsapi.dto.LoginDto;
import org.example.wonderreadsapi.model.Student;
import org.example.wonderreadsapi.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = "http://localhost:5173")
public class LoginController {

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping
    public ResponseEntity<?> login(@RequestBody LoginDto loginDto) {

        Optional<Student> student =
                studentRepository.findByUsername(loginDto.getUsername());

        if (student.isPresent()) {

            Student foundStudent = student.get();

            if (foundStudent.getPassword().equals(loginDto.getPassword())) {
                return ResponseEntity.ok("Login successful");
            }
        }

        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body("Please enter the correct username or password.");
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> updateLogin(
            @PathVariable Long id,
            @RequestBody Student student) {

        Optional<Student> existingStudent =
                studentRepository.findById(id);

        if (existingStudent.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Student currentStudent = existingStudent.get();

        if (student.getUsername() != null) {
            currentStudent.setUsername(student.getUsername());
        }

        if (student.getPassword() != null) {
            currentStudent.setPassword(student.getPassword());
        }

        studentRepository.save(currentStudent);

        return ResponseEntity.ok("Username and password updated successfully");
    }


}