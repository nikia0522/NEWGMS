package com.gms.web.member;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;

@Component
public interface MemberService {
	public int add(Map<?,?>map); // 객체에 대한 setter (void, parameter 있음)
	public String countMembers(); //getter (return type 있고 parameter 없음)
	public List<?> list(CommandDTO cmd); //getter (return type 있고 parameter 없음)
	public StudentDTO findById(CommandDTO cmd); //보안사항이 아니기때문에 public으로..
	public List<?> findByName(CommandDTO cmd);
	public int modify(MemberDTO member);
	public String remove(CommandDTO cmd);
	public Map<String,Object> login(CommandDTO cmd);

}
