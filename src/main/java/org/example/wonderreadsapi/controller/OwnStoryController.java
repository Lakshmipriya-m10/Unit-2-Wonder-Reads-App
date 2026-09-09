package org.example.wonderreadsapi.controller;


import org.example.wonderreadsapi.dto.OwnStoryDto;
import org.example.wonderreadsapi.model.OwnStory;
import org.example.wonderreadsapi.model.Student;
import org.example.wonderreadsapi.repository.OwnStoryRepository;
import org.example.wonderreadsapi.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/own-stories")
@CrossOrigin(origins = "http://localhost:5173")
public class OwnStoryController {

    @Autowired
    public OwnStoryRepository ownStoryRepository;

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping
    public OwnStory createStory(@RequestBody OwnStoryDto request) {

        Student student = studentRepository
                .findByEmail(request.getEmail())
                .orElseGet(() -> {
                    Student newStudent = new Student();

                    newStudent.setName(request.getName());
                    newStudent.setEmail(request.getEmail());
                    newStudent.setContactNo(request.getContactNo());

                    return studentRepository.save(newStudent);
                });

        OwnStory ownStory = new OwnStory();

        ownStory.setStory(request.getStory());
        ownStory.setStudent(student);

        return ownStoryRepository.save(ownStory);
    }


    @GetMapping
    public List<OwnStory> getAllStories(){
        return ownStoryRepository.findAll();
    }
    @GetMapping("/{id}")
    public OwnStory getStoryById(@PathVariable Long id){
        return ownStoryRepository.findById(id).orElseThrow(null);
    }

    @DeleteMapping("/{id}")
    public void deleteStory(@PathVariable Long id) {
        ownStoryRepository.deleteById(id);


    }
    }


