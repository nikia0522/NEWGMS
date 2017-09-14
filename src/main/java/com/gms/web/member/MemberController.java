package com.gms.web.member;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.complex.PathFactory;
import com.gms.web.grade.MajorDTO;
import com.gms.web.proxy.BlockHandler;
import com.gms.web.proxy.PageHandler;
import com.gms.web.proxy.PageProxy;
import com.google.common.util.concurrent.Service;


@Controller
@SessionAttributes("student")
@RequestMapping({"/member", "/student"})
public class MemberController {
   private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
   @Autowired MemberService service;
   @Autowired CommandDTO cmd;
   @Autowired MemberDTO member;
   @Autowired BlockHandler blockHandler;
   @Autowired PageHandler pageHandler;
   @Autowired PageProxy pxy;
      
   @RequestMapping(value="/member_add", method=RequestMethod.POST)
   public String addStudent(@ModelAttribute MemberDTO member, @RequestParam ("subject") List<String> list) {
	   logger.info("member_add 진입");
	   logger.info("등록Id:: {}",member.getId());
	   logger.info("등록이름:: {}",member.getName());
	   logger.info("등록비번:: {}",member.getPassword());
	   logger.info("등록과목:: {}",list);
	   Map<String,Object>paramMap=new HashMap<>();
	   paramMap.put("member", member);
	   List<MajorDTO>paramList=new ArrayList<>();
	   MajorDTO mj=null;
	   for(String m:list) {
		   mj=new MajorDTO();
	   mj.setId(member.getId());
	   mj.setSubjId(m);
	   mj.setTitle(m);
	   paramList.add(mj);
	   }
	   paramMap.put("list", paramList);
	   service.add(paramMap);
      return "redirect:/member/member_list/1";
   }
   
   @RequestMapping("/member_list/{pageNumber}")
   @SuppressWarnings("unchecked")
   public String memberList(Model model, @PathVariable int pageNumber) {
	  logger.info("member_list{} 진입");
	  pxy.setPageSize(5);
	  pxy.setBlockSize(5);
	  pxy.setPageNumber(pageNumber);
	  int count=Integer.parseInt(service.countMembers());
	  pxy.setTheNumberOfRows(count);
	  int[]result=new int[6];
	  int theNumberOfPages=0, startPage=0, endPage=0;
	  
	  theNumberOfPages=(pxy.getTheNumberOfRows() % pxy.getPageSize()) == 0 ? pxy.getTheNumberOfRows() / pxy.getPageSize() : pxy.getTheNumberOfRows() / pxy.getPageSize() +1;
	  startPage=pxy.getPageNumber() - ((pxy.getPageNumber()-1)%pxy.getBlockSize());
	  endPage=(startPage+pxy.getBlockSize()-1<=theNumberOfPages)?startPage+pxy.getBlockSize() - 1 : theNumberOfPages;
	  result[0]=pxy.getPageNumber();
	  result[1]=theNumberOfPages;
	  result[2]=startPage;
	  result[3]=endPage;
	  result[4]=(startPage-(theNumberOfPages/pxy.getBlockSize())>0)?1:0;
	  result[5]=startPage+pxy.getBlockSize();
	  if(pxy.getPageNumber()<=pxy.getTheNumberOfRows()/pxy.getPageSize()+1) {
		  if(pxy.getPageNumber()==1) {
			  cmd.setStartRow("1");
			  cmd.setEndRow(String.valueOf(pxy.getPageSize()));
		  }else {
			  cmd.setStartRow(String.valueOf((pxy.getPageNumber()-1)*pxy.getPageSize()+1));
			  cmd.setEndRow(String.valueOf(pxy.getPageNumber()*pxy.getPageSize()));
		  }
	  }
	  List<StudentDTO> list=(List<StudentDTO>) service.list(cmd);
	  System.out.println("list결과!!!!!!"+list);
	  pxy.execute(model, result, list);
	  model.addAttribute("count", count);
      return "auth:member/member_list.tiles";
   }
   
   @RequestMapping("/search/{search}")
   @SuppressWarnings("unchecked")
   public String memberSearch(Model model, @PathVariable String search) {
	   logger.info("member search 진입! hooray!");
	   cmd.setSearch(search);
	   List<StudentDTO> list=(List<StudentDTO>) service.findByName(cmd);
	   model.addAttribute("list", list);
	   model.addAttribute("count", list.size());
	   return "auth:member/member_list.tiles";
   }
   
   @RequestMapping("/detail/{id}")
   public String memberDetail(Model model, @PathVariable String id) {
	   logger.info("member detail 진입! hooooray~!");
	   cmd.setSearch(id);
	   service.findById(cmd);
	   model.addAttribute("search", cmd.getSearch());
	   model.addAttribute("student", service.findById(cmd));
	   return "auth:member/member_detail.tiles";
   }
   
   @RequestMapping("/delete/{id}")
   public String memberDelete(Model model, @PathVariable String id) {
	   logger.info("member delete 진입! yay!");
	   System.out.println("넘어온 아이디 %%%%%%"+id);
	   cmd.setAction(id);
	   service.remove(cmd);
       return "redirect:/member/member_list/1";
   }
   
   @RequestMapping(value="/member_update")
   public String updateStudent(@ModelAttribute MemberDTO member) {
	   logger.info("넘어온 아이디::{}",member.getId());
	   logger.info("member update 진입!!!!");
	   service.modify(member);
	   return "redirect:/member/detail/"+member.getId();
   }
}