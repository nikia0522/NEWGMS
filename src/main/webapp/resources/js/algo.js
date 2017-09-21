var series={
		 arithmetic : (f,l)=>{
	         var sum=0;
	         var start=f*1;
	         var end=l*1;
	         for(var i=start;i<=end;i++){
	            sum+=i;
	         }         
	      return sum;
	      },
	      switchSeries :()=>{
	         var sum=0;
	         var sw=0;
	         var start=0;
	         do{
	            start++;
	         if(sw==0){
	            sum+=start;
	            sw=1;
	         }else{
	            sum-=start;
	            sw=0;
	         }}
	         while(start<100);
	         return sum;
	      },
	      diffSeries:(n)=>{
	         var j=1;
	         var i=0;
	         var sum=0;
	         
	         do{
		         j+=i;
		         sum+=j;
		         i++;
	         }while(i<n);
	         return sum;
	      },
	      factorial:(n)=>{
	    	  var i=1;
	    	  var j=1;
	    	  var sum=0;   	  
	      	  do{
	      		 j*=i;
	      		 i++;
	      		 sum+=j;
	      	  }while(i<=n);
	    	  return sum;
	      },
	      fibonacci:(n)=>{
	    	  alert('확인 -->'+n);
	    	  var sum, count, c;
	    	  var a=1;
	    	  var b=1;
	    	  sum=2; count=2;
	    	  while(1){
	    		  c=a+b;
	    		  sum+=c;
	    		  count++;
	    		  if(count<n){
	    			  a=b;
	    			  b=c;
	    		  }else{
	    			  return sum;
	    			  break;
	    		  }
	    	  }
	      }
}

var sort={
/*		//selection
		selection : (sortList)=>{
			console.log('start'+sortList);
			var m,i,j,j,x;
			var p=sortList;
			m=-1;
			do{
				m++
			}while(m<4);
			i=-1;
			do{i++; j=1;
				do{j++ 
					if(sortList[i]*>sortList[j]*1){
						k=sortList[i;]
					}
					}while()
					}while();
			return 'selection';
		},*/
		//burble
		burble : ()=>{
			return 'burble';
		},
		//insertion
		insertion : ()=>{
			return 'insertion';
		},
		//ranking
		ranking : ()=>{
			return 'ranking';
		}
}