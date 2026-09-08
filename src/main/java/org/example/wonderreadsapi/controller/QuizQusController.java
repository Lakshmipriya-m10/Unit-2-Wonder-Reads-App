package org.example.wonderreadsapi.controller;
import org.example.wonderreadsapi.model.QuizQus;
import org.example.wonderreadsapi.repository.QuizQusRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quiz")
@CrossOrigin(origins = "http://localhost:5173")
public class QuizQusController {

    private final QuizQusRepository quizQusRepository;

    public QuizQusController(QuizQusRepository quizQusRepository) {
        this.quizQusRepository = quizQusRepository;
    }

    @GetMapping
    public List<QuizQus> getAllQuiz() {
        return quizQusRepository.findAll();
    }

    @GetMapping("/story/{storyId}")
    public List<QuizQus> getQuizByStory(
            @PathVariable Long storyId) {

        return quizQusRepository.findByStoryId(storyId);
    }

    // POST a new quiz question
    @PostMapping
    public QuizQus createQuiz(@RequestBody QuizQus quizQus) {
        return quizQusRepository.save(quizQus);
    }

    @DeleteMapping("/{id}")
    public void deleteQuiz(@PathVariable Long id) {
        quizQusRepository.deleteById(id);
    }
}
