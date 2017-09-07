package com.gms.web.proxy;



import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

import lombok.Getter;


@Component
public abstract class proxy { //request에다가 짐 실어주는 녀석, 핸들러랑 같이 일함
	@Getter HttpServletRequest request; //setter가 있으면 보안이 깨짐!
	public proxy (HttpServletRequest request){
		this.request=request;
	}

}
