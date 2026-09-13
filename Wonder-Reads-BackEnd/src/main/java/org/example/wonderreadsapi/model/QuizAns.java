package org.example.wonderreadsapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "quiz-ans")
public class QuizAns {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String answer;

    @ManyToOne
    @JoinColumn(name = "question_id")
    @JsonIgnore
    private QuizQus question;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }


    public QuizQus getQuestion() {
        return question;
    }

    public void setQuestion(QuizQus question) {
        this.question = question;
    }
}