package com.gms.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;

@Repository
public interface MemberMapper {
	public int insert(MemberDTO member); // 객체에 대한 setter (void, parameter 있음)
	public String countMembers(); //getter (return type 있고 parameter 없음)
	public List<?> selectAll(CommandDTO cmd); //getter (return type 있고 parameter 없음)
	public StudentDTO selectById(CommandDTO cmd); //보안사항이 아니기때문에 public으로..
	public List<?> selectByName(CommandDTO cmd);
	public int update(MemberDTO member);
	public int deleteMember(CommandDTO cmd); //int- 성공여부를 알려주는것임
	public MemberDTO login(CommandDTO cmd); //보안사항이 아니기때문에 public으로..

}
