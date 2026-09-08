package org.example.wonderreadsapi.repository;

import org.example.wonderreadsapi.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
