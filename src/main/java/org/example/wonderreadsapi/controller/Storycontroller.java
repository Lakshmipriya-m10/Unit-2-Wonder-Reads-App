package org.example.wonderreadsapi.controller;

import org.example.wonderreadsapi.model.Story;
import org.example.wonderreadsapi.repository.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stories")
@CrossOrigin(origins = "http://localhost:5173")
public class Storycontroller {

    @Autowired
    private StoryRepository storyRepository;

    @GetMapping
    public List<Story> getAllStories() {

        return storyRepository.findAll();
    }

    @GetMapping("/{id}")
    public Story getStoryById(@PathVariable Long id) {
        return storyRepository.findById(id).orElseThrow(() -> new RuntimeException("Story Not found"));
    }
    @PostMapping
    public Story createStory(@RequestBody Story story) {

        return storyRepository.save(story);
    }
    @PutMapping("/{id}")
    public Story updateStory(@PathVariable Long id,@RequestBody Story story){
        Story existingStory = storyRepository.findById(id).orElseThrow(() -> new RuntimeException("Story Not Found"));

        existingStory.setTitle(story.getTitle());
        existingStory.setGrade(story.getGrade());
        existingStory.setText(story.getText());
        existingStory.setImage(story.getImage());

        return storyRepository.save(existingStory);
    }
    @DeleteMapping("/{id}")
    public void deleteStory(@PathVariable Long id) {

        storyRepository.deleteById(id);
    }

}
