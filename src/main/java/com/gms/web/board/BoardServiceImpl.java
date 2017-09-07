package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gms.web.board.ArticleDTO;

@Service
public class BoardServiceImpl implements BoardService{
	public static BoardServiceImpl getInstance() {
		return new BoardServiceImpl();
	}

	private BoardServiceImpl(){}
	@Override
	public String write(ArticleDTO bean) {
		return null;
		
	}

	@Override
	public List<ArticleDTO> list() {
		return null;
	}

	@Override
	public String countArticles() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public List<ArticleDTO> findById(String id) {
		return null;
	}

	@Override
	public ArticleDTO findbySeq(String seq) {
		return null;
	}

	@Override
	public String modify(ArticleDTO board) {
		int rs=0;
		return (rs==1)?"변경 성공":"변경 실패";
	}

	@Override
	public String remove(String articleSeq) {
		int rs=0;
		return (rs==1)?"삭제 성공":"삭제 실패";
	}
}
