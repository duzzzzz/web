var myapp = angular.module("myapp", ["ui.router"]);
myapp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
		.when("", "/home")
	$stateProvider
		.state("home", {
			url: "/home",
			views: {
				"st1": {
					//templateUrl: "top.html"
				},
				"st2": {
					templateUrl: "main.html"
				},
				"st3": {
					templateUrl: "footer.html"
				}
			}
		})
		.state("list", {
			url: "/list",
			views: {
				"st1": {
					templateUrl: "list-top.html"
				},
				"st2": {
					templateUrl: "list.html"
				},
				"st3": {
					templateUrl: "footer.html"
				}
			}
		})
		.state("lists", {
			url: "/lists",
			views: {
				"st1": {
					templateUrl: "lists-top.html"
				},
				"st2": {
					templateUrl: "lists.html"
				},
				"st3": {
					//templateUrl: "footer.html"
				}
			}
		})
		.state("user", {
			url: "/user",
			views: {
				"st1": {
					//templateUrl: "lists-top.html"
				},
				"st2": {
					templateUrl: "user.html"
				},
				"st3": {
					templateUrl: "footer.html"
				}
			}
		})
		.state("login", {
			url: "/login",
			views: {
				"st1": {
					//templateUrl: "lists-top.html"
				},
				"st2": {
					templateUrl: "login.html"
				},
				"st3": {
					//templateUrl: "footer.html"
				}
			}
		})
		.state("myOrder", {
			url: "/myOrder",
			views: {
				"st1": {
					//templateUrl: "lists-top.html"
				},
				"st2": {
					templateUrl: "myOrder.html"
				},
				"st3": {
					//templateUrl: "footer.html"
				}
			}
		})
		.state("shezhi", {
			url: "/shezhi",
			views: {
				"st1": {
					//templateUrl: "lists-top.html"
				},
				"st2": {
					templateUrl: "shezhi.html"
				},
				"st3": {
					//templateUrl: "footer.html"
				}
			}
		})
		.state("details", {
			url: "/details",
			views: {
				"st1": {
					//templateUrl: "lists-top.html"
				},
				"st2": {
					templateUrl: "details.html"
				},
				"st3": {
					//templateUrl: "footer.html"
				}
			}
		})
		.state("car", {
			url: "/car",
			views: {
				"st1": {
					//templateUrl: "lists-top.html"
				},
				"st2": {
					templateUrl: "car.html"
				},
				"st3": {
					templateUrl: "footer.html"
				}
			}
		})
		.state("problem", {
			url: "/problem",
			views: {
				"st1": {
					//templateUrl: "lists-top.html"
				},
				"st2": {
					templateUrl: "problem.html"
				},
				"st3": {
					//templateUrl: "footer.html"
				}
			}
		})
		.state("mygift", {
			url: "/mygift",
			views: {
				"st1": {
					//templateUrl: "lists-top.html"
				},
				"st2": {
					templateUrl: "mygift.html"
				},
				"st3": {
					//templateUrl: "footer.html"
				}
			}
		})
});
myapp.controller("homejs", function($scope, $rootScope, $http, $location, $window) {
	$scope.godetails = function(id) {
		$location.path("/details");
		$rootScope.goodsid = id;
	}
	$scope.goToTop = function() {
		$("body").animate({
			"scrollTop": 0
		}, 300);
		//		$(window).scrollTop(0);

	};
	$rootScope.choosegood = function(id, list) {
		var n = -1;
		for(var i in list) {
			if(list[i].id == id) {
				n = i;
			}
		}
		return n;
	}
	var AutoFriend;
	//$(function() {
	var mySwiper = new Swiper('.swiper-container', {
		loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,
		pagination: '.swiper-pagination'
	});

	if (!$rootScope.first) {
		AutoScroll("#friendLinks_slide");
		$("#friendLinks_slide").hover(function() {
			clearTimeout(AutoFriend);
		}, function() {
			AutoScroll("#friendLinks_slide");
		});
		$rootScope.first=true;
	}

	//资讯向上滚动轮换
	function AutoScroll(obj) {
		$(obj).find("ul:first").animate({
			marginTop: "-0.58rem"
		}, 500, function() {
			$(this).css({
				marginTop: "0px"
			}).find("li:first").appendTo(this);
		});
		if(AutoFriend != undefined) {
			clearTimeout(AutoFriend);
		}
		AutoFriend = setTimeout(function() {
			AutoScroll("#friendLinks_slide")
		}, 3000);
	};
	//})
	$scope.citylist = ["上海", "江苏", "浙江", "安徽", "北京", "天津", "广东", "河北", "河南", "山东", "湖北", "湖南", "江西", "福建", "四川", "重庆", "广西", "山西", "辽宁", "吉林", "黑龙江", "贵州", "陕西", "云南", "内蒙古", "甘肃", "青海", "宁夏", "新疆", "海南", "西藏", "香港", "澳门", "台湾"];
	$scope.cityad = "上海";
	$scope.choosecity = function() {
		$(".city").slideDown();
	}
	$scope.fanhuizhuye = function() {
		$(".city").slideUp();
	}
	$scope.choosecityok = function(s) {
		$scope.cityad = s;
		$(".city").slideUp();
	}
	$rootScope.tips = function(txt) {
		var $tips = $('<p class="tips">' + txt + '</p>');
		$("body").append($tips);
		$tips.fadeIn("normal");
		setTimeout(function() {
			$tips.fadeOut("normal", function() {
				$tips.remove();
			});
		}, 1000)
	}
	$http.get("data/details.txt").success(function(data) {
		$rootScope.goodslist = data;
	});
	$rootScope.zhenglicar = function(arr) {
		var newarr = [];
		for(var i in arr) {
			if(arr[i].number != 0) {
				newarr.push(arr[i]);
			}
		}
		$rootScope.allnum = 0;
		for(var i in newarr) {
			$rootScope.allnum += newarr[i].number;
		}

		localStorage.setItem("cardata", JSON.stringify(arr))
		return newarr;
	}
	$rootScope.cardataarr = [];
	if(localStorage.getItem("cardata")) {
		$rootScope.cardataarr = $rootScope.zhenglicar(JSON.parse(localStorage.getItem("cardata")));
		//console.log($rootScope.cardataarr);
		//console.log($rootScope.allnum);
	} else {
		$rootScope.allnum = 0
	}
	$rootScope.addcar = function(arr, id, num) {
		var on = true;
		for(var i in arr) {
			if(arr[i].id == id) {
				arr[i].number += num;
				on = false;
				$rootScope.tips("添加成功");
			}
		}
		if(on) {
			var s = $rootScope.choosegood(id, $rootScope.goodslist);
			if(s == -1) {
				$rootScope.tips("该商品已售完")
			} else {
				var t = $rootScope.goodslist[s];
				t.number = 1;
				arr.push(t);
				$rootScope.tips("添加成功");
			}
		}
		arr = $rootScope.zhenglicar(arr);
		return arr;
	}
	$rootScope.jiancar = function(arr, id) {
		for(var i in arr) {
			if(arr[i].id == id) {
				arr[i].number--;
			}
		}
		arr = $rootScope.zhenglicar(arr);
		return arr;
	}
	var heji = 0;
	for(var i in $rootScope.cardataarr) {
		heji = (heji / 1) + ($rootScope.cardataarr[i].price) * ($rootScope.cardataarr[i].number);
	}
	if($rootScope.allnum == 0) {
		$(".noneBox").show();
	}
	$rootScope.hejijiage = heji;

})
myapp.controller("footerjs", function($scope, $location) {
	$scope.golink = function(target, n) {
		$location.path(target);

		setTimeout(function() {
			$(".footerlist li").removeClass("active");
			$(".footerlist li").eq(n).addClass("active");
		}, 100);
	}
})
myapp.controller("listjs", function($scope, $location, $http, $rootScope) {
	$rootScope.prev = function() {
		window.history.back(-1);
	}
	$http.get("data/list-list.txt").success(function(data) {
		$rootScope.listDate = data;
		//console.log($rootScope.listDate);
	});
	$(".biglist>li").hide();
	$scope.golist = function(a) {
		a = a - 1;
		$rootScope.listON = a;
		$location.path("/lists");
		$rootScope.titltname = $rootScope.listDate[a]["title-chinese"];
		setTimeout(function() {
			$(".biglist>li").hide().eq(a).show();
			$(".list-toplist ul li").removeClass("active").eq(a).addClass("active")
		}, 100)
	}
})
myapp.controller("list-listsjs", function($scope, $location, $http, $rootScope) {
	$scope.godetails = function(id) {
		console.log(id);
		$location.path("/details");
		$rootScope.goodsid = id;
	}
	$scope.listsaddcar = function(id) {
		$rootScope.cardataarr = $rootScope.addcar($rootScope.cardataarr, id, 1);
		//console.log($rootScope.cardataarr);
	}

})

myapp.controller("list-lists-topjs", function($scope, $location, $http, $rootScope) {
	$scope.listshowh = function() {
		if($(".list-toplist ul").is(":hidden")) {
			$(".list-toplist").css("zIndex", 2)
			$(".list-toplist ul").slideDown();
			$(".list-toplist").removeClass("trans");
		} else {
			$(".list-toplist ul").slideUp(500, function() {
				$(".list-toplist").css("zIndex", -1)
			});
			$(".list-toplist").addClass("trans");
		}
	}

	$scope.qiehuan = function(a) {
		a = a - 1;
		$rootScope.titltname = $rootScope.listDate[a]["title-chinese"];
		$(".biglist>li").hide().eq(a).show();
		$(".list-toplist ul li").removeClass("active").eq(a).addClass("active");
		$(".list-toplist ul").slideUp(300, function() {
			$(".list-toplist").css("zIndex", -1)
		});
		$(".list-toplist").addClass("trans");
	}
	$scope.listhide = function() {
		$(".list-toplist ul").slideUp(300, function() {
			$(".list-toplist").css("zIndex", -1)
		});
		$(".list-toplist").addClass("trans");

	}
})
myapp.controller("myFruit", function($scope, $location, $http, $rootScope) {
	$scope.gomyo = function() {
		$location.path('/myOrder');
	}
	$scope.goshezhi = function() {
		$location.path('/shezhi');
	}
	if(localStorage.getItem("username")) {
		$(".yidenglu").show();
		$(".weidenglu").hide();
	} else {
		$(".weidenglu").show();
		$(".yidenglu").hide();
	}

})
myapp.controller("myOrder", function($scope, $location, $http, $rootScope) {
	$scope.qiehuan = function(index) {
		$(".myStatus li span").add(".showStatus li").removeClass("active");
		$(".myStatus li span").eq(index).addClass("active");
		$(".showStatus li").eq(index).addClass("active");
	}
})
myapp.controller("loginjs", function($scope, $location, $http, $rootScope) {
	$scope.loginxianshiyinchang = function() {
		$(".login_bottom").toggleClass("active");
		if($(".login_bottom").find("span").hasClass("icon-bottom")) {
			$(".login_bottom").find("span").removeClass("icon-bottom").addClass("icon-top");
		} else {
			$(".login_bottom").find("span").removeClass("icon-top").addClass("icon-bottom");

		}

	}

	$scope.oN = false;
	$scope.hqyzm = function() {
		var reg = /^0?(13|14|15|18)[0-9]{9}$/;
		if(reg.test($(".telkuang").val())) {
			$rootScope.tips("验证码已发送成功");
			$(".login .login_middle .loginBtn").addClass("active");
			$scope.oN = true;
		} else {
			$rootScope.tips("请输入正确的手机号");
		}
	}
	$scope.login2 = function() {
		var reg = /^\d\d\d\d\d\d$/;
		if($scope.oN) {
			if(reg.test($(".pwkuang").val())) {
				$location.path('/home');
				localStorage.setItem("username", $(".telkuang").val());
			} else {
				$rootScope.tips("验证码错误");
			}
		} else {
			$rootScope.tips("请先获取手机验证码");
		}

	}
})
myapp.controller("settingjs", function($scope, $location, $http, $rootScope) {
	$scope.clearimg = function() {
		$(".clearimg").addClass("clearSave")
		setTimeout(function() {
			$(".clearimg").removeClass("clearSave")
		}, 1500)
	}
	$scope.shareappc = function() {
		$(".shareappi").addClass("shareShow").removeClass("canNotSee");
	}
	$scope.shareappguan = function() {
		$(".shareappi").removeClass("shareShow").addClass("shareHidden");
		setTimeout(function() {
			$(".shareappi").removeClass("shareHidden").addClass("canNotSee");

		}, 600)
	}
	$scope.tuichudenglu = function() {
		localStorage.clear();
		$location.path("/home")
	}
})

myapp.controller("detailsjs", function($scope, $location, $http, $rootScope) {
	$scope.gotocar = function() {
		$location.path("/car")
	}
	$scope.fanhuishangyiye = function() {
		window.history.go(-1);
		$rootScope.titltname = $rootScope.listDate[$rootScope.listON]["title-chinese"];
		setTimeout(function() {
			if($location.path() == "/lists") {
				$(".biglist>li").hide().eq($rootScope.listON).show();
				$(".list-toplist ul li").removeClass("active").eq($rootScope.listON).addClass("active")
			}
		}, 100)

	}
	$scope.shareappc = function() {
		$(".shareappi").addClass("shareShow").removeClass("canNotSee");
	}
	$scope.shoucanganniu = function() {
		$(".zhegeshishoucang").toggleClass("icon-collectDone").toggleClass("icon-like");
	}
	$scope.shareappguan = function() {
		$(".shareappi").removeClass("shareShow").addClass("shareHidden");
		setTimeout(function() {
			$(".shareappi").removeClass("shareHidden").addClass("canNotSee");
		}, 600)
	}
	$scope.daddcar = function() {
		console.log(event);
		$rootScope.cardataarr = $rootScope.addcar($rootScope.cardataarr, $rootScope.goodsid, 1);

	}
	$scope.nnn = $rootScope.choosegood($rootScope.goodsid, $rootScope.goodslist)
	if($rootScope.choosegood($rootScope.goodsid, $rootScope.goodslist) == -1) {
		$rootScope.tips("该商品已售完");
		setTimeout(function() {
			open("index.html", "_self")
		}, 1000)
	} else {
		$scope.goodszhenid = $rootScope.goodslist[$scope.nnn];
	}
	$scope.morelistshow = function() {
		if($(".moreList").is(":hidden")) {
			$(".moreList").fadeIn();
		} else {
			$(".moreList").fadeOut();
		}
	}
	setTimeout(function() {
		var mySwiper = new Swiper('.detail_goods .swiper-container', {
			loop: true,
			autoplay: 2000,
			pagination: '.swiper-pagination'
		});
	}, 200)
	$scope.shangping = function() {
		$(".shangping").addClass("active");
		$(".pingjia").removeClass("active");
		$(".detail_goods").show();
		$(".detail_value").hide();
	}
	$scope.pingjia = function() {
		$(".shangping").removeClass("active");
		$(".pingjia").addClass("active");
		$(".detail_value").show();
		$(".detail_goods").hide();
	}
	$scope.vcount = function() {
		$(".vcount").addClass("active");
		$(".showpic").removeClass("active");
		$(".userValBox").show();
		$(".imgValBox").hide();
	}
	$scope.showpic = function() {
		$(".vcount").removeClass("active");
		$(".showpic").addClass("active");
		$(".imgValBox").show();
		$(".userValBox").hide();
	}
})

myapp.controller("carjs", function($scope, $location, $http, $rootScope) {
	$scope.gohome = function() {
		$location.path("/home")
	}
	$scope.carjian = function(id) {
		$rootScope.cardataarr = $rootScope.jiancar($rootScope.cardataarr, id);
		var heji = 0;
		for(var i in $rootScope.cardataarr) {
			heji = (heji / 1) + ($rootScope.cardataarr[i].price) * ($rootScope.cardataarr[i].number);
		}
		if($rootScope.allnum == 0) {
			$(".noneBox").show();
		}
		$rootScope.hejijiage = heji;
	}

	$scope.caradd = function(id) {
		$rootScope.cardataarr = $rootScope.addcar($rootScope.cardataarr, id, 1);
		var heji = 0;
		for(var i in $rootScope.cardataarr) {
			heji = (heji / 1) + ($rootScope.cardataarr[i].price) * ($rootScope.cardataarr[i].number);
		}
		if($rootScope.allnum == 0) {
			$(".noneBox").show();
		}
		$rootScope.hejijiage = heji;
	}
	var heji = 0;
	for(var i in $rootScope.cardataarr) {
		heji = (heji / 1) + ($rootScope.cardataarr[i].price) * ($rootScope.cardataarr[i].number);
	}
	if($rootScope.allnum == 0) {
		$(".noneBox").show();
	}
	$rootScope.hejijiage = heji;

})
myapp.controller("problemsjs", function($scope, $location, $http, $rootScope) {
	$(".problems dd").click(function() {
		$(this).toggleClass("tipDown");
	})

})
myapp.controller("myGiftjs", function($scope, $location, $http, $rootScope) {
	setTimeout(function() {
		$(".myGiftImgs").addClass("giftDown")
	}, 10)

})