package com.portfolio.sms.model;



import jakarta.persistence.*;

//IgnoreThisComment
@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue
    private Long id;

    private String firstName;
    private String email;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String name) {
        this.firstName = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



    // getter, setters, contructors
}