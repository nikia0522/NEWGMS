package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Component;

import com.gms.web.board.ArticleDTO;

@Component
public interface BoardService {
	public String write(ArticleDTO bean);
	public List<ArticleDTO> list();
	public List<ArticleDTO> findById(String id);
	public ArticleDTO findbySeq(String seq);
	public String countArticles();
	public String modify(ArticleDTO board);
	public String remove(String seq);
	
}
