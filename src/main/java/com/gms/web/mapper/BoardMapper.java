package com.gms.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.board.ArticleDTO;

@Repository
public interface BoardMapper {
	public int insert(ArticleDTO bean);
	public List<ArticleDTO> selectAll();
	public List<ArticleDTO> selectById(String id);
	public ArticleDTO selectbySeq(String seq);
	public int count();
	public String update(ArticleDTO board);
	public String delete(String seq);
	
}
