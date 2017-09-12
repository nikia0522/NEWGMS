package com.gms.web.member;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/member")
public class MemberController {
   private static final Logger logger = LoggerFactory.getLogger(MemberController.class);

   
   @RequestMapping("/member_add")
   public String memberAdd(Model model) {
	   logger.info("member_add 진입");
      return "auth:member/member_add.tiles";
   }
   
   @RequestMapping("/path/{directory}/{page}/{pageNumber}")
   public String memberList(@PathVariable String directory, @PathVariable String page, @PathVariable String pageNumber) {
	  logger.info("member_list{} 진입");
      return String.format("auth:%s/%s.tiles", directory, page, pageNumber);
   }
   
   @RequestMapping("/delete")
   public String memberDelete(Model model) {
      return "auth:member/member_delete.tiles";
   }
}