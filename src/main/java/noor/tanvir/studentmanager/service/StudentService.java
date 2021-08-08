package noor.tanvir.studentmanager.service;

import noor.tanvir.studentmanager.model.Student;
import noor.tanvir.studentmanager.repo.StudentRepo;
import noor.tanvir.studentmanager.exception.UserNotFoundException;

import java.util.List;
import java.util.UUID;

public class StudentService {
    private final StudentRepo studentRepo;

    public StudentService(StudentRepo studentRepo) {
        this.studentRepo = studentRepo;
    }

    public Student addStudent(Student student){
        student.setStudentCode(UUID.randomUUID().toString());
        return studentRepo.save(student);
    }

    public List<Student> findAllStudents(){
        return studentRepo.findAll();
    }

    public Student updateStudent(Student student){
        return studentRepo.save(student);
    }

    public Student findStudent(Long id) {
        return studentRepo.findStudentById(id).orElseThrow(() -> new UserNotFoundException("User by id " + id + "was not found"));
    }


    public void deleteStudent(Long id){
        studentRepo.deleteStudentById(id);
    }
}
