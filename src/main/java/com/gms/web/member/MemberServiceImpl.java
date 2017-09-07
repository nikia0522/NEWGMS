package com.gms.web.member;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;
import com.gms.web.member.MemberService;

@Service
public class MemberServiceImpl implements MemberService{
	public static MemberServiceImpl getInstance(){
		return new MemberServiceImpl();
	}
	private MemberServiceImpl(){}
	
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
		return null;
	}
	
	@Override
	public String countMembers(CommandDTO cmd) {
		return null;
	}
	
	@Override
	public StudentDTO findById(CommandDTO cmd) {	
		return null;
	}

	@Override
	public List<?> findByName(CommandDTO cmd) {
		System.out.println("findByName("+cmd.getSearch()+")");
		return null;
		}

	@Override
	public String modify(MemberDTO member) {		
		String msg="";
		/*		int rs=Integer.parseInt(MemberDAOImpl.getInstance().updatePass(member));
		return (rs==1)?"성공":"실패";*/
		return msg;
	}
	
	@Override
	public String remove(CommandDTO cmd) {
		int rs=0;
		return (rs==1)?"실패":"성공";
	}
	@Override
	public Map<String,Object> login(MemberDTO member) {
		Map<String,Object> map=new HashMap<>();
		CommandDTO cmd=new CommandDTO();
		cmd.setSearch(member.getId());
		MemberDTO mem=null;
		System.out.println("아이디야~~" + member.getId());
		System.out.println("db에서받아온 비번" + mem.getPassword());
		String page=(mem!=null)?((member.getPassword().equals(mem.getPassword()))?"main":"login_fail"):"join";
		System.out.println("비번:::::"+member.getPassword());
		/*3항 2번 쓴거*/	
		map.put("page", page);
		map.put("user", mem);
		return map;
		}
}

