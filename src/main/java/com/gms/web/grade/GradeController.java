package com.gms.web.grade;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.common.HomeController;

@Controller
@RequestMapping("/grade")
		
public class GradeController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping("/add")
	public String addGrade() {
		return "grade/grade_add";
	}
	@RequestMapping("/list")
	public String listGrade() {
		return "grade/grade_list";
	}
	@RequestMapping("/detail")
	public String detailGrade() {
		return "grade/grade_detail";
	}
	@RequestMapping("/update")
	public String updateGrade() {
		return "grade/grade_update";
	}
	@RequestMapping("/delete")
	public String deleteGrade() {
		return "grade/grade_delete";
	}
}
