package org.example.wonderreadsapi.model;

import jakarta.persistence.*;

@Entity
@Table(name ="readinglevel")
public class ReadingLevel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String lexile;
    private String grade;
    private String image;
    private String link;

    public ReadingLevel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLexile() {
        return lexile;
    }

    public void setLexile(String lexile) {
        this.lexile = lexile;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
