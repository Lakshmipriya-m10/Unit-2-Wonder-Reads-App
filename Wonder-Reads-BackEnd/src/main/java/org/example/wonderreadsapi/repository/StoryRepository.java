package org.example.wonderreadsapi.repository;

import org.example.wonderreadsapi.model.Story;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoryRepository extends JpaRepository<Story,Long> {
}
