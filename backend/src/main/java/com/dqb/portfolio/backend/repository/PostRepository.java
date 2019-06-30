package com.dqb.portfolio.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dqb.portfolio.backend.model.Post;

@Repository
public interface PostRepository extends CrudRepository<Post, Long>{

}
