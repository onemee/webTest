
//定义初始化函数
var addressInit = function(province, city, area, defaultProvince, defaultCity, defaultArea) {
	var province = document.getElementById(province);
	var city = document.getElementById(city);
	var area = document.getElementById(area);

	//定义下拉列表
	function fillSelect(obj, str) { 
		for(var i = 0; i < obj.options.length; i++) {
			if(obj.options[i].value == str) {
				obj.selectedIndex = i;
				return;
			}
		}
	}

	//创建标签option
	function fillOption(prov, str, obj) {
		var option = document.createElement("option");
		prov.options.add(option);
		option.innerHTML = str;
		option.value = str;
		option.obj = obj;
	}
	
	//加载城市
	function changeCity() {
		area.options.length = 0;
		if(city.selectedIndex == -1) return;
		var item = city.options[city.selectedIndex].obj;
		for(var i = 0; i < item.areaList.length; i++) {
			fillOption(area, item.areaList[i], null);
		}
		fillSelect(area, defaultArea);
	}

	//加载省份
	function changeProvince() {
		city.options.length = 0;
		city.onchange = null;
		if(province.selectedIndex == -1) return;
		var item = province.options[province.selectedIndex].obj;
		for(var i = 0; i < item.cityList.length; i++) {
			fillOption(city, item.cityList[i].name, item.cityList[i]);
		}
		fillSelect(city, defaultCity);
		changeCity();
		city.onchange = changeCity;
	}

	for(var i = 0; i < provinceList.length; i++) {
		fillOption(province, provinceList[i].name, provinceList[i]);
	}
	fillSelect(province, defaultProvince);
	changeProvince();
	province.onchange = changeProvince;
}

