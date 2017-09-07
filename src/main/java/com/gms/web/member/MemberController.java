package com.gms.web.member;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.common.AuthController;

@Controller
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	@RequestMapping("/add")
	public String addMember() {
		
		return "member/member_add";
	}
	@RequestMapping("/list")
	public String listMember() {
		return "member/member_list";
	}
	@RequestMapping("/detail")
	public String detailMember() {
		return "member/member_detail";
	}
	@RequestMapping("/update")
	public String updateMember() {
		return "member/member_update";
	}
	@RequestMapping("/delete")
	public String deleteMember() {
		return "member/member_delete";
	}
}
