package com.gms.web.board;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.common.AuthController;

@Controller
@RequestMapping("/board")
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	@RequestMapping("/write")
	public String addBoard() {	
		return "board/board_write";
	}
	
	@RequestMapping("/list")
	public String listBoard() {
		return "board/board_list";
	}
	
	@RequestMapping("/detail")
	public String detailBoard() {
		return "board/board_detail";
	}
	
	@RequestMapping("/update")
	public String updateBoard() {
		return "board/board_update";
	}
	
	@RequestMapping("/delete")
	public String deleteBoard() {
		return "board/board_delete";
	}
}
