package org.example.wonderreadsapi.repository;

import org.example.wonderreadsapi.model.ReadingLevel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReadingLevelRepository extends JpaRepository<ReadingLevel, Long> {
}
