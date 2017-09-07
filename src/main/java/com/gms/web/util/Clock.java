package com.gms.web.util;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class Clock {
   public String getnow(){
      return new SimpleDateFormat("yyyy년 MM월월 dd일 a hh:mm:ss").format(new Date());
   }
}