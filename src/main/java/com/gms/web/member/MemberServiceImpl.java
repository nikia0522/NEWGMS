package com.gms.web.member;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.catalina.mapper.Mapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gms.web.auth.AuthController;
import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;
import com.gms.web.member.MemberService;

@Service
public class MemberServiceImpl implements MemberService{
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);	
	@Autowired MemberMapper mapper;
	@Autowired MemberDTO member;
	@Autowired CommandDTO cmd;
	@Override
	public String addMember(Map<String, Object> map) {
		System.out.println("member service 진입");
		MemberDTO m=(MemberDTO)map.get("member");
		System.out.println("넘어온 회원 정보:"+m.toString());
		@SuppressWarnings("unchecked")
		List<MajorDTO>list=(List<MajorDTO>)map.get("major");
		System.out.println("넘어온 수강과목:"+list);
		
		return null;
	}
	//(MemberDAOImpl.getInstance().insert(member).equals("1"))? "성공":"실패"
		
	@Override
	public List<?> list(CommandDTO cmd) {		
		return mapper.selectAll(cmd);
	}
	
	@Override
	public String countMembers() {
		String count=mapper.countMembers();
		return count;
	}
	
	@Override
	public StudentDTO findById(CommandDTO cmd) {
		return mapper.selectById(cmd);
	}

	@Override
	public List<?> findByName(CommandDTO cmd) {
		System.out.println("findByName("+cmd.getSearch()+")");
		return mapper.selectByName(cmd);
		}

	@Override
	public int modify(MemberDTO member) {		

		return mapper.update(member);
	}
	
	@Override
	public String remove(CommandDTO cmd) {
		int rs=0;
		return String.valueOf(mapper.deleteMember(cmd));
	}
	@Override
	public Map<String,Object> login(CommandDTO cmd) {
		Map<String,Object> map=new HashMap<>();
		member=mapper.login(cmd);
		logger.info("cmd Id:"+cmd.getSearch());
		String page="";
		String result="";
		if(member!=null) {
			if(cmd.getColumn().equals(member.getPassword())) {
				logger.info("login success");
				page="auth:common/main.tiles";
				map.put("user", member);
				
			}else {
				logger.info("wrong pass");
				page="public:common/login.tiles";
				result="비밀번호 틀림";
			}			
		} else {
			logger.info("wrong id");
			page="public:common/login.tiles";
			result="아이디 없음";
		}
//		String page=(member!=null)?((cmd.getSearch().equals(member.getId()))?"":"login_fail"):"join";
		/*3항 2번 쓴거*/	
		map.put("page", page);
		map.put("result", result);
		map.put("user", member);
		return map;
		}
}

