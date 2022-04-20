package com.github.curriculeon.services;

import com.github.curriculeon.models.Person;
import com.github.curriculeon.repositories.PersonRepository;
import com.github.curriculeon.utils.Loggable;
import org.springframework.stereotype.Service;

@Service
public class PersonService implements Loggable {
    private PersonRepository repository;

    public PersonService(PersonRepository repository) {
        this.repository = repository;
    }

    public Iterable<Person> index() {
        getLogger().info("Getting all person objects:");
        Iterable<Person> result = repository.findAll();
        result.forEach(person -> getLogger().info("\t\t" + person.asJsonString()));
        return result;
    }

    public Person show(Long id) {
        return repository.findById(id).get();
    }

    public Person create(Person person) {
        getLogger().info("Creating person:\n\t" + person.asJsonString());
        Person result = repository.save(person);
        getLogger().info("Successfully created person:\n\t" + person.asJsonString());
        return result;
    }

    public Person update(Long id, Person newPersonData) {
        Person originalPerson = repository.findById(id).get();
        originalPerson.setFirstName(newPersonData.getFirstName());
        originalPerson.setLastName(newPersonData.getLastName());
        return repository.save(originalPerson);
    }

    public Boolean delete(Long id) {
        repository.deleteById(id);
        return true;
    }
}
