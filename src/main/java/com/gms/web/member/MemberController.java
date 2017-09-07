package com.gms.web.member;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.auth.AuthController;

@Controller
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	@RequestMapping("/add")
	public String addMember() {		
		return "auth:member/member_add.tiles";
	}
	@RequestMapping("/list")
	public String listMember() {
		return "auth:member/member_list.tiles";
	}
	@RequestMapping("/detail")
	public String detailMember() {
		return "auth:member/member_detail.tiles";
	}
	@RequestMapping("/update")
	public String updateMember() {
		return "auth:member/member_update.tiles";
	}
	@RequestMapping("/delete")
	public String deleteMember() {
		return "auth:member/member_delete.tiles";
	}
}
