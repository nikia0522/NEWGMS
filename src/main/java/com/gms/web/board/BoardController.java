package com.gms.web.board;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	
	@RequestMapping("/get/{cate}/list")
	public @ResponseBody Map<?,?> deleteBoard(@PathVariable String cate) {
		logger.info("board ContList{}", "진입");
		Map<String,String> map=new HashMap<>();
		System.out.println("list 에 들어옴!!");
		switch(cate) {
		case "board":
		map.put("msg", "게시판"+"리스트");
		break;
		case "grade":
		map.put("msg", "성적"+"리스트");
		break;
		default : break;
		} 			
		return map;
	}
}
