package com.gms.web.grade;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.auth.HomeController;

@Controller
@RequestMapping("/grade")
public class GradeController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping("/add")
	public String addGrade() {
		return "auth:grade/grade_add.tiles";
	}
	@RequestMapping("/list")
	public String listGrade() {
		return "auth:grade/grade_list.tiles";
	}
	@RequestMapping("/detail")
	public String detailGrade() {
		return "auth:grade/grade_detail.tiles";
	}
	@RequestMapping("/update")
	public String updateGrade() {
		return "auth:grade/grade_update.tiles";
	}
	@RequestMapping("/delete")
	public String deleteGrade() {
		return "auth:grade/grade_delete.tiles";
	}
}
