var dc=document, c=0, s

async function bdy()
{
	hst();
}

async function hst()
{
	s = rplc((await gtF()).split('\n'))
	var i = 0, st, j, l=s.length, ll, ss=[];
	for(; i<l; ++i)
	{
		if(""+s[i].length<3)
			continue
		st=s[i].split('/');
		ss.push("https://www."+st[0]+(st[0].indexOf(".")!=-1?"/":".com/")+st[1]);
		ll=st.length;
		for(j=2; j<ll; ++j)
			ss[i]+="/"+st[j]
		ss[i]+=".mp4"
	}
	s=ss
	a(l)
	console.log(s)
	c=1
	setTimeout(()=>{
		if(c<2)
			g("a").click()
		}, 10000)
}

function rplc(s)
{
	var lst=[["shckchn", "shockchan/wp-content/uploads"], ], i=0, l=s.length, j, ll=1
	for(; i<l; ++i)
		for(j=0; j<ll; ++j)
			s[i]=s[i].replace(lst[j][0], lst[j][1])
	return s
}

function g(a){return dc.getElementById(a);}

function gtF()
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "Chhee.txt");
	return new Promise(
	(resolve)=>
	{
		xhr.onload = () =>
		{
			resolve(xhr.response);
		};
		xhr.send();
	});
}

async function a(l=29)
{
	g("a").href=s[Math.floor(Math.random()*100000)%l]
	if(!c)
		return
	c=2;
	g("a").click()
}
