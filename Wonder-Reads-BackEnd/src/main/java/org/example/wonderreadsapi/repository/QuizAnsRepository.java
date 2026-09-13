package org.example.wonderreadsapi.repository;

import org.example.wonderreadsapi.model.QuizAns;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizAnsRepository extends JpaRepository<QuizAns, Long> {

    List<QuizAns> findByQuestionId(Long questionId);
}
