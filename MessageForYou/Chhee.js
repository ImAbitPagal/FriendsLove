


var dc=document, c=0, s


async function bdy()
{
	hst();
}

async function hst()
{
	s = rplc((await gtF()).split('\n'))
	var i = 0, st, j, l=s.length, ll;
	for(; i<l; ++i)
	{
		if(s[i]=="")
			continue
		st=s[i].split('/');
		s[i]="https://www."+st[0]+(st[0].indexOf(".")!=-1?"/":".com/")+st[1];
		ll=st.length;
		for(j=2; j<ll; ++j)
			s[i]+="/"+st[j]
		s[i]+=".mp4"
	}
	g("a").href=s[Math.floor(Math.random()*100000%l)]
	console.log(g("a").href)
	console.log(s)
	c=1
	setTimeout(()=>{
		if(c<2)
			g("a").click()
		}, 1500000)
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

async function a()
{
	if(!c)
		return
	c=2;
	g("a").click()
}

