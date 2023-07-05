// type If<C, T, F> = any;
type If<C extends boolean, T, F> = C extends true ? T : F;

/*
js

function If(C, T, F) {
  return C ? T : F
}

知识点
类型兼容性 | 分配规则
null 严格模式和非严格模式的区别
1. https://www.typescriptlang.org/docs/handbook/type-compatibility.html



The following table summarizes assignability between some abstract types. 
Rows indicate what each is assignable to, columns indicate what is assignable to them. 
A ”✓” indicates a combination that is compatible only when strictNullChecks is off.

any	      unknown	object	void	undefined	null	never
any →		     ✓	    ✓	     ✓	     ✓	    ✓	    ✕
unknown →	   ✓		  ✕	     ✕	     ✕	    ✕	    ✕
object →	   ✓	    ✓		   ✕	     ✕	    ✕	    ✕
void →	     ✓	    ✓	     ✕	     ✕	    ✕	    ✕
undefined →  ✓	    ✓	     ✓       ✓		  ✓	    ✕
null →	     ✓	    ✓      ✓	     ✓	    ✓		  ✕
never →	     ✓    	✓      ✓	     ✓	    ✓	    ✓	
*/
