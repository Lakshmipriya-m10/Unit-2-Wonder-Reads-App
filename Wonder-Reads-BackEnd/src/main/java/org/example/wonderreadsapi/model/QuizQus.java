package org.example.wonderreadsapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "quiz-qus")
public class QuizQus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String question;

    private String correctAnswer;

    // Each question belongs to one story
    @ManyToOne
    @JoinColumn(name = "story_id")
    @JsonIgnore
    private Story story;


    // Each question has multiple answers
    @OneToMany(
            mappedBy = "question",
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER
    )
    private List<QuizAns> answers;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }


    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }


    public Story getStory() {
        return story;
    }

    public void setStory(Story story) {
        this.story = story;
    }


    public List<QuizAns> getAnswers() {
        return answers;
    }

    public void setAnswers(List<QuizAns> answers) {
        this.answers = answers;
    }
}