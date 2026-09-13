package org.example.wonderreadsapi.repository;

import org.example.wonderreadsapi.model.QuizQus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizQusRepository extends JpaRepository<QuizQus,Long> {
    List<QuizQus>findByStoryId(Long storyId);
}
