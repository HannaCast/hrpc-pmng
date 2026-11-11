package utez.edu.mx.service;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/people")
@CrossOrigin
@RequiredArgsConstructor
public class PeopleController {

	private final PersonRepository repository;

	@GetMapping
	public List<Person> listar() {
		return repository.findAll();
	}

	@PostMapping
	public Person guardar(@RequestBody Person person) {
		return repository.save(person);
	}
}
