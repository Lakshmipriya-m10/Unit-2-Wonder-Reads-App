package org.example.wonderreadsapi.controller;


import org.example.wonderreadsapi.model.ReadingLevel;
import org.example.wonderreadsapi.repository.ReadingLevelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/readinglevels")
@CrossOrigin(origins = "http://localhost:5173")
public class ReadingLevelController {

    @Autowired
    private ReadingLevelRepository readingLevelRepository;


    @GetMapping
    public List<ReadingLevel> getAllReadingLevels() {

        return readingLevelRepository.findAll();
    }
    @GetMapping("/{id}")
    public ReadingLevel getReadingLevelById(@PathVariable Long id) {
        return readingLevelRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reading level not found"));
    }

    @PostMapping
    public ReadingLevel createReadingLevel(@RequestBody ReadingLevel readingLevel) {
        return readingLevelRepository.save(readingLevel);
    }

    @PutMapping("/{id}")
    public ReadingLevel updateReadingLevel(
            @PathVariable Long id,
            @RequestBody ReadingLevel readingLevel) {

        ReadingLevel existing = readingLevelRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reading level not found"));

        existing.setTitle(readingLevel.getTitle());
        existing.setLexile(readingLevel.getLexile());
        existing.setGrade(readingLevel.getGrade());
        existing.setImage(readingLevel.getImage());
        existing.setLink(readingLevel.getLink());

        return readingLevelRepository.save(existing);
    }

    @DeleteMapping("/{id}")
    public void deleteReadingLevel(@PathVariable Long id) {

        readingLevelRepository.deleteById(id);
    }
}
