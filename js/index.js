window.onload = function() {
	//下面是table头部的
	var tableCont = document.querySelector('.table-ngs');

	function scrollHandle(e) {
		var scrollTop = this.scrollTop;
		this.querySelector('thead').style.transform = 'translateY(' + scrollTop + 'px)';
	}
	tableCont.addEventListener('scroll', scrollHandle);
	// 接着就是数组歌单的了
	var musicList = [{
			"no": "01",
			"name": "轻松冥想  7天深度睡眠：安静",
			"singer": "冥想",
			"src": "music/001轻松冥想  7天深度睡眠：安静.mp3",
			"zhuanji": "无",
		},

		{
			"no": "02",
			"name": "轻松冥想  7天深度睡眠：放松.",
			"singer": "冥想",
			"src": "music/002轻松冥想  7天深度睡眠：放松.mp3",
			"zhuanji": "无",
		},

		{
			"no": "03",
			"name": "轻松冥想  7天深度睡眠：舒缓",
			"singer": "冥想",
			"src": "music/003轻松冥想  7天深度睡眠：舒缓.mp3",
			"zhuanji": "无",
		},

		{
			"no": "04",
			"name": "轻松冥想  7天深度睡眠：助眠",
			"singer": "冥想",
			"src": "music/004轻松冥想  7天深度睡眠：助眠.mp3",
			"zhuanji": "无",
		},

		{
			"no": "05",
			"name": "轻松冥想  7天深度睡眠：入眠",
			"singer": "冥想",
			"src": "music/005轻松冥想  7天深度睡眠：入眠.mp3",
			"zhuanji": "无",
		},

		{
			"no": "06",
			"name": "轻松冥想  7天深度睡眠：安眠",
			"singer": "冥想",
			"src": "music/006轻松冥想  7天深度睡眠：安眠.mp3",
			"zhuanji": "无",
		},

		{
			"no": "07",
			"name": "轻松冥想  7天深度睡眠：新生",
			"singer": "冥想",
			"src": "music/007轻松冥想  7天深度睡眠：新生.mp3",
			"zhuanji": "无",
		},

		{
			"no": "08",
			"name": "轻松冥想  7天缓解焦虑  回到当下",
			"singer": "冥想",
			"src": "music/008轻松冥想  7天缓解焦虑  回到当下.mp3",
			"zhuanji": "无",
		},

		{
			"no": "09",
			"name": "轻松冥想  7天缓解焦虑  平衡身心",
			"singer": "冥想",
			"src": "music/009轻松冥想  7天缓解焦虑  平衡身心.mp3",
			"zhuanji": "无",
		},

		{
			"no": "010",
			"name": "轻松冥想  7天缓解焦虑  停止惯性反应",
			"singer": "冥想",
			"src": "music/010轻松冥想  7天缓解焦虑  停止惯性反应.mp3",
			"zhuanji": "无",
		},

		{
			"no": "011",
			"name": "轻松冥想  7天缓解焦虑  观察与标记",
			"singer": "冥想",
			"src": "music/011轻松冥想  7天缓解焦虑  观察与标记.mp3",
			"zhuanji": "无",
		},

		{
			"no": "012",
			"name": "轻松冥想  7天缓解焦虑 接受变化",
			"singer": "冥想",
			"src": "music/012轻松冥想  7天缓解焦虑 接受变化.mp3",
			"zhuanji": "无",
		},

		{
			"no": "013",
			"name": "轻松冥想  7天缓解焦虑 学会暂停",
			"singer": "冥想",
			"src": "music/013轻松冥想  7天缓解焦虑 学会暂停.mp3",
			"zhuanji": "无",
		},

		{
			"no": "014",
			"name": "轻松冥想  7天缓解焦虑 和焦虑做朋友",
			"singer": "冥想",
			"src": "music/014轻松冥想  7天缓解焦虑 和焦虑做朋友.mp3",
			"zhuanji": "无",
		},

		{
			"no": "015",
			"name": "轻松冥想  奇妙自然之旅：自然冥想",
			"singer": "冥想",
			"src": "music/015轻松冥想  奇妙自然之旅：自然冥想.mp3",
			"zhuanji": "无",
		},
		{
			"no": "016",
			"name": "轻松冥想 _ 奇妙自然之旅：山林之音",
			"singer": "冥想",
			"src": "music/016轻松冥想 _ 奇妙自然之旅：山林之音.mp3",
			"zhuanji": "无",

		},
		{
			"no": "017",
			"name": "轻松冥想 _ 奇妙自然之旅：沐浴阳光.",
			"singer": "冥想",
			"src": "music/017轻松冥想 _ 奇妙自然之旅：沐浴阳光.mp3",
			"zhuanji": "无",
		},
		{
			"no": "018",
			"name": "轻松冥想 _ 奇妙自然之旅：森林探险",
			"singer": "冥想",
			"src": "music/018轻松冥想 _ 奇妙自然之旅：森林探险.mp3",
			"zhuanji": "无",
		},
		{
			"no": "019",
			"name": "轻松冥想 _ 奇妙自然之旅：向日葵静心",
			"singer": "冥想",
			"src": "music/019轻松冥想 _ 奇妙自然之旅：向日葵静心.mp3",
			"zhuanji": "无",
		},
		{
			"no": "020",
			"name": "轻松冥想 _ 冥想十课：轻松入门",
			"singer": "冥想",
			"src": "music/020轻松冥想 _ 冥想十课：轻松入门.mp3",
			"zhuanji": "无",
		},
		{
			"no": "021",
			"name": " 轻松冥想 _ 冥想十课：安定心神",
			"singer": "冥想",
			"src": "music/021轻松冥想 _ 冥想十课：安定心神.mp3",
			"zhuanji": "无",
		},
		{
			"no": "022",
			"name": "轻松冥想 _ 冥想十课：数呼吸",
			"singer": "冥想",
			"src": "music/022轻松冥想 _ 冥想十课：数呼吸.mp3",
			"zhuanji": "无",
		},
		{
			"no": "023",
			"name": "轻松冥想 _ 冥想十课：甜蜜冥想",
			"singer": "冥想",
			"src": "music/023轻松冥想 _ 冥想十课：甜蜜冥想.mp3",
			"zhuanji": "无",
		},
		{
			"no": "024",
			"name": "轻松冥想 _ 冥想十课：强化内心",
			"singer": "冥想",
			"src": "music/024轻松冥想 _ 冥想十课：强化内心.mp3",
			"zhuanji": "无",
		},
		{
			"no": "025",
			"name": "轻松冥想 _ 冥想十课：宇宙冥想.",
			"singer": "冥想",
			"src": "music/025轻松冥想 _ 冥想十课：宇宙冥想.mp3",
			"zhuanji": "无",
		},
		{
			"no": "026",
			"name": "轻松冥想 _ 冥想十课：拥抱自己",
			"singer": "冥想",
			"src": "music/026轻松冥想 _ 冥想十课：拥抱自己_.mp3",
			"zhuanji": "无",
		},
		
		
	];
	var updatePlay = null;
	//获得动态列表
	var tbody = document.querySelectorAll('.table tbody');
	// 有两个一样的列表
	for (var i = 0; i < tbody.length; i++) {
		for (var j = 0; j < musicList.length; j++) {
			tbody[i].innerHTML = tbody[i].innerHTML + "<tr><td>" + musicList[j].no + "</td><td>" +
				musicList[j].name + "</td><td>" + musicList[j].singer + "</td><td>" + musicList[j].zhuanji +
				"</td></tr>";
		}
	}
	// 下面是音乐管子的
	var audio = document.getElementById('audio');
	var pipe = document.querySelector('.pipe');
	var turnDisc = document.querySelector('.music-player .music-disc .disc-lg');
	var nowPlay = document.querySelector('.music-play .col-xs-4 i');
	// 定义一样方法，播放时的，暂停时的
	function clickPlay() {
		// 如果现在是暂停的，比如在暂停的时候点击一下，原本为管子在右，是否PLAy阶段，停止
		// getTime();
		if (audio.paused) {
			pipe.style.transform = 'rotate(0deg)';
			nowPlay.className = "glyphicon glyphicon-pause";
			turnDisc.style.animation = ' mymove 5s linear infinite';
			audio.play();
			startCache();
			startUpdate();

		} else {
			pipe.style.transform = 'rotate(-40deg)';
			nowPlay.className = "glyphicon glyphicon-play";
			turnDisc.style.animation = '';
			audio.pause();
			endCache();
			endUpdate();
		}
	}
	// 把秒换算成时间的形式
	function timeFormat(number) {
		var minute = parseInt(number / 60);
		var second = parseInt(number % 60);
		minute = minute >= 10 ? minute : "0" + minute;
		second = second >= 10 ? second : "0" + second;
		return minute + ":" + second;
	}
	// 歌曲总时间
	// 开始时间
	var startTime = document.querySelector(".time-starting");
	// 结束时间
	var endTime = document.querySelector(".time-end");
	// 正在进度
	var nowProgress = document.querySelector(".progress-play");
	// 总长
	var widthProgress = document.querySelector(".progress-progress");
	// 点击总长,想要长到哪
	widthProgress.onclick = function(e) {
		// 获得当前的宽
		var OwidthProgress = widthProgress.clientWidth;
		var newCurrentTime = (e.offsetX / OwidthProgress) * audio.duration;
		// 设置你滑到那的时间我当前播放时间
		audio.currentTime = newCurrentTime;
		// 改变进度条到那个时间
		var nowProgressWidth = (audio.currentTime / audio.duration) * OwidthProgress;
		nowProgress.style.width = nowProgressWidth + 'px';
	};
	// 播放进度实时更新
	// 开始定时器
	function startUpdate() {
		clearInterval(updatePlay);
		updatePlay = setInterval(function() {
			var ProcessNow = (audio.currentTime / audio.duration) * widthProgress.clientWidth;
			nowProgress.style.width = ProcessNow + 'px';
			startTime.innerHTML = timeFormat(audio.currentTime);
			endTime.innerHTML = timeFormat(audio.duration);
		}, 100)
	}
	// 停止定时器
	function endUpdate() {
		clearInterval(updatePlay);
	}
	// 	// 判断文件缓冲进度
	var bufferProgress = document.querySelector(".progress-buffer");
	var buffered, percent;
	var updateCache;
	function startCache(){
		clearInterval(updateCache);
		updateCache = setInterval(function() {
			// 已缓冲部分
			audio.readyState == 4 && (buffered = audio.buffered.end(0));
			// 已缓冲百分百
			audio.readyState == 4 && (percent = Math.round(buffered / audio.duration * 100) + '%');
			bufferProgress.style.width = (Math.round(buffered / audio.duration * 100) * widthProgress.clientWidth * 0.01) +
				'px';
		}, 1000);
	}
	function endCache(){
		clearInterval(updateCache);
	}


	// 点击每一行列表，设置当前为播放
	var Otr = document.querySelectorAll(".table-ngs tbody tr");
	var Ttr = document.querySelectorAll(".music-list tbody tr");
	var index = 0; //索引
	// 电脑双击,重复代码过多，算了
	for (var i = 0; i < Otr.length; i++) {
		// 	Otr[i].index = i 防止闭包函数中无法正常获取当前索引i，而衍生出的一个绑定在dom元素上的数据index
		Otr[i].index = i;
		Otr[i].ondblclick = function() {
			// 设置当前点击歌曲
			index = this.index;
			audio.src = musicList[this.index].src;
			console.log(index);
			getSrcName(index);
			clickPlay();
		}
	}
	// 手机点击
	for (var i = 0; i < Ttr.length; i++) {
		// 	Otr[i].index = i 防止闭包函数中无法正常获取当前索引i，而衍生出的一个绑定在dom元素上的数据index
		Ttr[i].index = i;
		Ttr[i].onclick = function() {
			// 设置当前点击歌曲
			index = this.index;
			audio.src = musicList[this.index].src;
			getSrcName(index);
			clickPlay();
		}
	}
	// 设置点击中间播放按钮
	nowPlay.addEventListener('click', function() {
		clickPlay();
	});
	// 上一首
	var prePlay = document.querySelector('.music-play .music-pre i');
	prePlay.addEventListener('click', function() {
		index--;
		if (index < 0) {
			index = musicList.length - 1;
		}
		audio.src = musicList[index].src;
		getSrcName(index);
		console.log(index);
		clickPlay();
	});
	// 下一首
	var nextPlay = document.querySelector('.music-play .music-next i');

	function getNextPlay() {
		index++;
		if (index > musicList.length - 1) {
			index = 0;
		}
		audio.src = musicList[index].src;
		getSrcName(index);
		console.log(index);
		clickPlay();
	}
	nextPlay.addEventListener('click', function() {
		getNextPlay();
	});
	// 静音
	var mutedPlay = document.querySelector('.music-play .music-muted i');
	mutedPlay.addEventListener('click', function() {
		console.log(audio.muted)
		if (audio.muted) {
			audio.muted = false;
			mutedPlay.className = "glyphicon glyphicon-volume-up";
		} else {
			audio.muted = true;
			console.log(audio.muted)
			mutedPlay.className = "glyphicon glyphicon-volume-off";
		}
	});
	// 循环跟一首
	// 默认播放结束就下一首
	audio.addEventListener('ended', function() {
		getNextPlay();
	});
	// 当点击的时候切换
	var musicRepeat = document.querySelector('.music-play .music-repeat i');
	var musicLoop = document.querySelector('.music-play .music-repeat span');
	musicRepeat.addEventListener('click', function() {
		// 如果在不是1的界面，点击后变成1，让之循环
		if (musicLoop.style.display == 'none') {
			musicLoop.style.display = 'inline';
			audio.loop = true;
		} else {
			// 如果在1的界面，点击后放完就调用下一首的方法循环，
			musicLoop.style.display = 'none';
			audio.loop = false;
			audio.addEventListener('ended', function() {
				getNextPlay();
			});
		}
	})

	// 歌曲名称
	var musicNameP = document.querySelector('.music-player .music-name p');

	function getSrcName(index) {
		var srcName = musicList[index].src;
		srcName = srcName.substring(6, srcName.length - 4);
		musicNameP.innerHTML = srcName;
	}
	getSrcName(index);
	// 名称文字跑马灯
	function musicNameMove() {
		setInterval(function() { //要清理定时器,所以要把它的id存起来,但是现在是在方法里面,保存额话,后面取不出来,所以需要存到data的一个属性里面去
			var start = musicNameP.innerHTML.substring(0, 1);
			var end = musicNameP.innerHTML.substring(1);
			musicNameP.innerHTML = end + start;
		}, 600)
	}
	musicNameMove();
	// 下拉歌单列表
	var btnList = document.querySelector('.music-player .musicList-btn');
	var phoneList = document.querySelector('.music-player .music-list');
	btnList.addEventListener('click', function() {
		if (phoneList.style.top == "-80%") {
			phoneList.style.top = "5%";
		} else {
			phoneList.style.top = "-80%";
		}
	})
// 获取所有的a,设置href属性为#的弄成弹窗
	var allA=document.querySelectorAll('a');
	// var 
	// console.log(allA)
	var hrefNow=location.href;
	// console.log(location)
	for( var i=0;i<allA.length;i++){
		console.log()
			if(allA[i].href==hrefNow){
				// data-toggle="modal"
				//  data-target=".bs-example-modal-sm"
				allA[i].setAttribute("data-toggle","modal")
				allA[i].setAttribute("data-target","#myModal")
			}
	}



}
