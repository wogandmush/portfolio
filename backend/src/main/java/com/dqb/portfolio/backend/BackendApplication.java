package com.dqb.portfolio.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.dqb.portfolio.backend.model.Post;
import com.dqb.portfolio.backend.repository.PostRepository;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Autowired
	private PostRepository postRepository;
	
	@Override
	public void run(String... args) throws Exception {
		Post post = new Post("title", "something");
		postRepository.save(post);
		List<Post> posts = (List<Post>)postRepository.findAll();
		posts.forEach(System.out::println);
	}

}
