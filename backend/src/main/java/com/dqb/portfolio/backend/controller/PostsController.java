package com.dqb.portfolio.backend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dqb.portfolio.backend.model.Post;
import com.dqb.portfolio.backend.repository.PostRepository;

@RestController
public class PostsController {

	@Autowired
	private PostRepository postRepository;
	
	@GetMapping(path="/post")
	public String getPost() {
		List<Post> posts = new ArrayList<>();
		postRepository.findAll().forEach(posts::add);
		posts.forEach(System.out::println);
		return "Hello";
	}
	
	@PostMapping(path="/post")
	public String insertPost() {
		return "Post";
	}
}
