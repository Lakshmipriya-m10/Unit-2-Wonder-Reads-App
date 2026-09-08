package org.example.wonderreadsapi.model;


import jakarta.persistence.*;

@Entity
@Table(name="own_stories")
public class OwnStory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long storyId;

    @Column(length = 700)
    private String story;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    public OwnStory(){

    }

    public Long getStoryId() {
        return storyId;
    }

    public void setStoryId(Long storyId) {
        this.storyId = storyId;
    }

    public String getStory() {
        return story;
    }

    public void setStory(String story) {
        this.story = story;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
}
