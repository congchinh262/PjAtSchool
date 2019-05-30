
//tạo database ảo://////////////////////////
function sanpham(pic,id,name,price)
{
	this.pic=pic;
	this.id=id;
	this.name=name;
	this.price=price;
}
function mangsanpham(){
	var a = new Array();
	a[0]=new sanpham("/LKRapMay/Vga/gtx1030.jpg","VGA00","GTX 1030",60000);
	a[1]=new sanpham("/LKRapMay/Vga/gtx1050.jpg","VGA01","GTX 1050",650000);
	a[2]=new sanpham("/LKRapMay/Vga/gtx1050_ti.jpg","VGA02","GTX 1050 Ti",310000);
	a[3]=new sanpham("/LKRapMay/Vga/gtx1060.jpg","VGA03","gtx1060",60000);
	a[4]=new sanpham("/LKRapMay/Vga/gtx1060_ti.jpg","VGA04","gtx1060_ti",650000);
	a[5]=new sanpham("/LKRapMay/Vga/gtx1070.jpg","VGA05","gtx1070",310000);
	a[6]=new sanpham("/LKRapMay/Vga/gtx1070_ti.jpg","VGA06","gtx1070_ti",60000);
	a[7]=new sanpham("/LKRapMay/Vga/gtx1080_ti.jpg","VGA07","gtx1080_ti",650000);
	a[8]=new sanpham("/LKRapMay/Vga/rtx2060.jpg","VGA08","rtx2060",310000);
	a[9]=new sanpham("/LKRapMay/Vga/rtx2070.jpg","VGA09","rtx2070",60000);
	a[10]=new sanpham("/LKRapMay/Vga/rtx2080.jpg","VGA10","rtx2080",650000);
    a[11]=new sanpham("/LKRapMay/Vga/rtx2080ti.jpg","VGA11","rtx2080ti",310000);
    a[12]=new sanpham("/Gear/Banphim/Bàn phím Asus Cerberus.jpg","BP00","Bàn phím Asus Cerberus",300000);
	a[13]=new sanpham("/Gear/Banphim/Bàn phím Corsair K68 RGB Blue switch.png","BP01","Bàn phím Corsair K68 RGB Blue switch",650000);
	a[14]=new sanpham("/Gear/Banphim/Bàn phím Cougar Aurora S.png","BP02","Bàn phím Cougar Aurora S",310000);
	a[15]=new sanpham("/Gear/Banphim/Bàn phím Durgod Taurus K320 - Nature White.jpg","BP03","Bàn phím Durgod Taurus K320 - Nature White",400000);
	a[16]=new sanpham("/Gear/Banphim/Bàn phím Durgod V87.png","BP04","Bàn phím Durgod V87",650000);
	a[17]=new sanpham("/Gear/Banphim/Bàn phím Fuhlen D (Destroyer).jpg","BP05","Bàn phím Fuhlen D (Destroyer)",610000);
	a[18]=new sanpham("/Gear/Banphim/Bàn phím Fuhlen G87 (Cherry Switches).jpg","BP06","Bàn phím Fuhlen G87 (Cherry Switches)",610000);
	a[19]=new sanpham("/Gear/Banphim/Bàn phím MSI GK70.jpg","BP07","Bàn phím MSI GK70",610000);
    a[20]=new sanpham("/Gear/Banphim/Bàn phím Rapoo V720 RGB.jpg","BP08","Bàn phím Rapoo V720 RGB",610000);
    a[21]=new sanpham("/LKRapMay/Nguon/infinitygene_350w.jpg","BN00","Infinitygene_350w",60000);
	a[22]=new sanpham("/LKRapMay/Nguon/infinityrampage_500w.jpg","BN01","Infinityrampage_500we",650000);
    a[23]=new sanpham("/LKRapMay/Nguon/infinityrampage_750w.jpg","BN02","Infinityrampage_750w",310000);
    a[24]=new sanpham("/LKRapMay/Phukien/Capcacloai/Cáp mạng bẫm sẵn Cat5e 2m Foxdigi Japan FD30.jpg","CAP00","Cáp mạng bẫm sẵn Cat5e 2m",300000);
	a[25]=new sanpham("/LKRapMay/Phukien/Capcacloai/Cáp mạng bẫm sẵn Cat5e 10m Foxdigi Japan FD150.jpg","CAP01","Cáp mạng bẫm sẵn Cat5e 10m",650000);
	a[26]=new sanpham("/LKRapMay/Phukien/Capcacloai/Cáp mạng bấm sẵn UTP Golden Japan 3 mét.jpg","CAP02","Cáp mạng bấm sẵn UTP Golden Japan 3 mét",310000);
	a[27]=new sanpham("/LKRapMay/Phukien/Capcacloai/Cáp mạng Cat6 UTP Orico 2m PUG-C6-20.jpg","CAP03","Cáp mạng Cat6 UTP Orico 2m",400000);
	a[28]=new sanpham("/LKRapMay/Phukien/Capcacloai/Cáp mạng Cat6e Tenda thùng cuộn 300m.jpg","CAP04","Cáp mạng Cat6e Tenda thùng cuộn 300m",650000);
	a[29]=new sanpham("/LKRapMay/Phukien/Capcacloai/Cáp mạng đúc sẵn Cat6 100m Ugreen UG-11228.jpg","CAP05","Cáp mạng đúc sẵn Cat6 100m",610000);
    a[30]=new sanpham("/LKRapMay/Phukien/Capcacloai/Cáp mạng đúc sẵn Cat6 dài 20m Ugreen UG-11221.jpg","CAP06","Cáp mạng đúc sẵn Cat6 dài 20m",60000);
    a[31]=new sanpham("/Gear/Chuot/CORSAIR Glaive Pro.jpg","CHUOT00","Chuột CORSAIR Glaive Pro",300000);
	a[32]=new sanpham("/Gear/Chuot/Gaming Mouse Wired Programmable 7 Buttons - Hcman .jpg","CHUOT01","Chuột Gaming Mouse Wired Programmable 7",650000);
	a[33]=new sanpham("/Gear/Chuot/LIGHTSPEED Wireless Gaming Mouse G502.png","CHUOT02","Chuột LIGHTSPEED Wireless Gaming Mouse G502",310000);
	a[34]=new sanpham("/Gear/Chuot/MMO Gaming Mouse G600.png","CHUOT03","Chuột MMO Gaming Mouse G600",400000);
	a[35]=new sanpham("/Gear/Chuot/PICTEK Gaming Mouse Wired, 8 Programmable Buttons, Chroma RGB.jpg","CHUOT04","Chuột PICTEK Gaming Mouse Wired",650000);
	a[36]=new sanpham("/Gear/Chuot/SteelSeries Rival 600.jpg","CHUOT05","Chuột SteelSeries Rival 600",100000);
	a[37]=new sanpham("/Gear/Chuot/Wireless Gaming Mouse G602.png","CHUOT06","Chuột Wireless Gaming Mouse G602",310000);
	a[38]=new sanpham("/Gear/Chuot/Wireless Gaming Mouse VEGCOO C8.jpg","CHUOT07","Chuột Wireless Gaming Mouse VEGCOO C8",610000);
	a[39]=new sanpham("/Gear/Loa/Creative SBS A350 2.1.png","LOA00","Creative SBS A350 2.1",300000);
	a[40]=new sanpham("/Gear/Loa/Creative Sound BlasterX Katana.jpg","LOA01","Creative Sound BlasterX Katana",650000);
	a[41]=new sanpham("/Gear/Loa/Creative Sound BlasterX Kratos S5.png","LOA02","Creative Sound BlasterX Kratos S5",310000);
	a[42]=new sanpham("/Gear/Loa/Loa Edifier 2.1 M1360.jpg","LOA03","Loa Edifier 2.1 M1360",400000);
	a[43]=new sanpham("/Gear/Loa/Loa Logitech Z607 5.1.jpg","LOA04","Loa Logitech Z607 5.1",650000);
	a[44]=new sanpham("/Gear/Loa/Loa Razer Leviathan 5.1 Channel Surround Sound Bar.jpg","LOA05","Loa Razer Leviathan 5.1 Channel Surround Sound Bar",610000);
	a[45]=new sanpham("/Gear/Loa/Loa Razer Nommo Pro.png","LOA06","Loa Razer Nommo Pro",610000);
	a[46]=new sanpham("/Gear/Lotchuot/Corsair MM200 Medium.jpg","LT00","Corsair MM200 Medium",60000);
	a[47]=new sanpham("/Gear/Lotchuot/Corsair MM350 Premium Anti-Fray XL.jpg","LT01","Corsair MM350 Premium Anti-Fray XL",650000);
	a[48]=new sanpham("/Gear/Lotchuot/Lót chuột Alpha Gamer Micron.jpg","LT02","Lót chuột Alpha Gamer Micron",310000);
	a[49]=new sanpham("/Gear/Lotchuot/MSI GAMING SHIELD MOUSEPAD.png","LT03","MSI GAMING SHIELD MOUSEPAD",60000);
	a[50]=new sanpham("/Gear/Lotchuot/Razer Goliathus Mobile.png","LT04","Razer Goliathus Mobile",650000);
	a[51]=new sanpham("/Gear/Lotchuot/Razer Sphex V2.jpg","LT05","Razer Sphex V2",310000);
	a[52]=new sanpham("/Gear/Lotchuot/ROG Strix Edge COD (NC03).jpg","LT06","ROG Strix Edge COD (NC03)",60000);
	a[53]=new sanpham("/Gear/Lotchuot/SteelSeries QcK Limited Micro-Woven Cloth.jpg","LT07","SteelSeries QcK Limited Micro-Woven Cloth",650000);
	a[54]=new sanpham("/LKRapMay/Mainboard/Code.jpg","MAIN00","Code",60000);
	a[55]=new sanpham("/LKRapMay/Mainboard/Extreme.jpg","MAIN01","Extreme",650000);
	a[56]=new sanpham("/LKRapMay/Mainboard/F_Gaming.jpg","MAIN02","F_Gaming",310000);
	a[57]=new sanpham("/LKRapMay/Mainboard/Formula.jpg","MAIN03","Formula",60000);
	a[58]=new sanpham("/LKRapMay/Mainboard/Mortar.jpg","MAIN04","Mortar",650000);
	a[59]=new sanpham("/LKRapMay/Mainboard/Pro4_F.jpg","MAIN05","Pro4_F",310000);
	a[60]=new sanpham("/LKRapMay/Mainboard/Z390_designare.jpg","MAIN06","Z390_designare",60000);
	a[61]=new sanpham("/LKRapMay/Mainboard/Z390_elite.jpg","MAIN07","Z390_elite",650000);
	a[62]=new sanpham("/LKRapMay/Mainboard/Z390_extreme.jpg","MAIN08","Z390_extreme",310000);
	a[63]=new sanpham("/LKRapMay/RAM/corsair_4gb.jpg","RAM00","Ram Corsair_4gb",100000);
	a[64]=new sanpham("/LKRapMay/RAM/corsair_8gb.jpg","RAM01","Ram Corsair_8gb",150000);
	a[65]=new sanpham("/LKRapMay/RAM/gskill_aegis_4gb.jpg","RAM02","Ram Gskill_aegis_4gb",310000);
	a[66]=new sanpham("/LKRapMay/RAM/gskill_aegis_8gb.jpg","RAM03","Ram Gskill_aegis_8gb",260000);
	a[67]=new sanpham("/LKRapMay/RAM/gskill_ripjaws_16gb.jpg","RAM04","Ram Gskill_ripjaws_16gb",23000);
	a[68]=new sanpham("/LKRapMay/RAM/gskill_trident_32gb.jpg","RAM05","Ram Gskill_trident_32gb",200000);
	a[69]=new sanpham("/LKRapMay/RAM/kingston_16gb.jpg","VGA06","Ram Kingston_16gb",280000);
	a[70]=new sanpham("/LKRapMay/Phukien/Sacduphong/Sạc dự phòng Iwalk 12000mAh.png","SAC00","Sạc dự phòng Iwalk 12000mAh",300000);
	a[71]=new sanpham("/LKRapMay/Phukien/Sacduphong/Sạc dự phòng không dây Unik 10000mAh wireless.jpg","SAC01","Sạc dự phòng không dây Unik 10000mAh wireless",650000);
	a[72]=new sanpham("/LKRapMay/Phukien/Sacduphong/Sạc dự phòng Proda 10000mAh wireless.png","SAC02","Sạc dự phòng Proda 10000mAh wireless",310000);
	a[73]=new sanpham("/LKRapMay/Phukien/Sacduphong/Sạc dự phòng Prolink 15000mAh.jpg","SAC03","Sạc dự phòng Prolink 15000mAh",400000);
	a[74]=new sanpham("/LKRapMay/Phukien/Sacduphong/Sạc dự phòng Unik 5000mAh.jpg","SAC04","Sạc dự phòng Unik 5000mAh",650000);
	a[75]=new sanpham("/LKRapMay/Phukien/Sacduphong/Sạc dự phòng Unik 10000mAh (Quick Charger 3.0).png","SAC05","Sạc dự phòng Unik 10000mAh (Quick Charger 3.0)",100000);
	a[76]=new sanpham("/LKRapMay/Phukien/Sacduphong/Sạc dự phòng Unik 10000mAh.png","SAC06","Sạc dự phòng Unik 10000mAh",310000);
	a[77]=new sanpham("/LKRapMay/Phukien/Sacduphong/Sạc Dự Phòng Xiaomi 5.000 mAh.png","SAC07","Sạc Dự Phòng Xiaomi 5.000 mAh",610000);
	a[78]=new sanpham("/LKRapMay/Phukien/Sacduphong/Sạc dự phòng Yoobao 10200mAh.jpg","SAC08","Sạc dự phòng Yoobao 10200mAh",610000);
	a[79]=new sanpham("/Gear/Tainghe//Gear/Tainghe/Plantronics RIG 500 - Stereo Gaming Headset.jpg","TN00","Plantronics RIG 500 - Stereo Gaming Headset",300000);
	a[80]=new sanpham("/Gear/Tainghe/Plantronics RIG 500HX - Stereo Gaming Headset.png","TN01","Plantronics RIG 500HX - Stereo Gaming Headset",650000);
	a[81]=new sanpham("/Gear/Tainghe/Tai nghe Corsair HS50 Stereo Gaming Blue.png","TN02","Tai nghe Corsair HS50 Stereo Gaming Blue",310000);
	a[82]=new sanpham("/Gear/Tainghe/Tai nghe DareU EH925 7.1 RGB.jpg","TN03","Tai nghe DareU EH925 7.1 RGB",400000);
	a[83]=new sanpham("/Gear/Tainghe/Tai nghe HyperX Cloud - White ( KHX-H3CLW ).jpg","TN04","Tai nghe HyperX Cloud - White ( KHX-H3CLW )",650000);
	a[84]=new sanpham("/Gear/Tainghe/Tai nghe HyperX Cloud Flight Wireless.jpg","TN05","Tai nghe HyperX Cloud Flight Wireless",610000);
	a[85]=new sanpham("/Gear/Tainghe/Tai nghe Rapoo VH200 RGB.png","TN06","Tai nghe Rapoo VH200 RGB",610000);
	a[86]=new sanpham("/Gear/Tainghe/Tai nghe Rapoo VH300 Blue Virtual 7.1.png","TN07","Tai nghe Rapoo VH300 Blue Virtual 7.1",610000);
	a[87]=new sanpham("/Gear/Tainghe/Tai nghe Razer Electra V2 USB.jpg","TN08","Tai nghe Razer Electra V2 USB",610000);
	a[88]=new sanpham("/LKRapMay/Tannhiet/Linh kiện tản nhiệt nước - Block EK-RAM Monarch X4 - Nickel.jpg","TNH00","Tản nhiệt Nickel",300000);
	a[89]=new sanpham("/LKRapMay/Tannhiet/Tản nhiệt nước cho CPU DEEPCOOL Castle 240 RGB.jpg","TNH01","Tản nhiệt DEELCOOL",650000);
	a[90]=new sanpham("/LKRapMay/Tannhiet/Tản nhiệt nước CPU cooler master MASTERLIQUID ML240R .jpg","TNH02","Tản nhiệt MASTERLIQUID",310000);
	a[91]=new sanpham("/LKRapMay/Tannhiet/Tản nhiệt nước CPU corsair Hydro Series™ H115i PRO RGB .jpg","TNH03","Tản nhiệt Hydro",400000);
	a[92]=new sanpham("/LKRapMay/Tannhiet/Tản nhiệt nước CPU Deepcool Gammax L120 RGB.jpg","TNH04","Tản nhiệt Deelcool Gammax L120",650000);
	a[93]=new sanpham("/LKRapMay/Tannhiet/Tản nhiệt nước CPU Deepcool Gammax L240 RGB.jpg","TNH05","Tản nhiệt Deelcool Gammax L240 ",610000);
	a[94]=new sanpham("/LKRapMay/Tannhiet/Tản nhiệt nước custom Freezemod RGB sync KIT.jfif","TNH06","Tản nhiệt Freezemod",60000);
	a[95]=new sanpham("/LKRapMay/Tannhiet/Tản nhiệt khí Air Cooling Deepcool gammaxx 400 (Blue).jpg","TNH07","Tản nhiệt Ari Cooling blue",300000);
	a[96]=new sanpham("/LKRapMay/Tannhiet/Tản nhiệt khí Air Cooling Deepcool gammaxx 400 led RED.jpg","TNH08","Tản nhiệt DEELCOOL red",650000);
	a[97]=new sanpham("/LKRapMay/Tannhiet/Tản nhiệt khí CoolerMaster Hyper 212 LED Turbo Red.jpg","TNH09","Tản nhiệt CoolerMaster",310000);
	a[98]=new sanpham("/LKRapMay/Tannhiet/Tản nhiệt khí CPU cooler master MASTERAIR MA620P led RGB.jpg","TNH10","Tản nhiệt Cooler",400000);
	a[99]=new sanpham("/LKRapMay/Tannhiet/Tản nhiệt khí CPU Cooler Master Wraith Ripper.jpg","TNH11","Tản nhiệt Ripper",650000);
	a[100]=new sanpham("/LKRapMay/Tannhiet/Tản nhiệt khí CPU deepcool FRYZEN - AMD.jpg","TNH12","Tản nhiệt FRYZEN",610000);
	a[101]=new sanpham("/LKRapMay/Tannhiet/Tản nhiệt khí CPU DEEPCOOL GAMMAXX GTE RGB.jpg","TNH13","Tản nhiệt GTE",60000);
	a[102]=new sanpham("/LKRapMay/Tannhiet/FAN CPU LIQUID AIO ASUS ROG RYUJIN 240 AURA SYNC RGB.png","TNH14","Tản nhiệt LIQUID",300000);
	a[103]=new sanpham("/LKRapMay/Tannhiet/FAN CPU LIQUID AIO COOLER MASTER ML360R RGB .jpg","TNH15","Tản nhiệt COOLER MASTER",650000);
	a[104]=new sanpham("/LKRapMay/Tannhiet/FAN CPU LIQUID AIO DEEPCOOL CAPTAIN 120EX WHITE .jpg","TNH16","Tản nhiệt CAPTAIN",310000);
	a[105]=new sanpham("/LKRapMay/Tannhiet/FAN CPU LIQUID AIO GAMER STORM CASTEL 240 RGB.jpg","TNH17","Tản nhiệt GAMEMR STORM",400000);
	a[106]=new sanpham("/LKRapMay/Tannhiet/FAN CPU LIQUID AIO THERMALTAKE LCS FLOE RING 280.jpg","TNH18","Tản nhiệt THERMALTAKE",650000);
	a[107]=new sanpham("/LKRapMay/Phukien/Thenho/Thẻ nhớ Micro SD 128GB Sandisk C10.jpg","TNHO00","Thẻ nhớ Micro SD 128GB Sandisk",100000);
	a[108]=new sanpham("/LKRapMay/Phukien/Thenho/Thẻ nhớ MicroSD 8GB Kingston Class 4.png","TNHO01","Thẻ nhớ MicroSD 8GB Kingston",150000);
	a[109]=new sanpham("/LKRapMay/Phukien/Thenho/Thẻ nhớ MicroSD 16GB Kingston.jpg","TNHO02","Thẻ nhớ MicroSD 16GB Kingston",310000);
	a[110]=new sanpham("/LKRapMay/Phukien/Thenho/Thẻ nhớ MicroSD 16GB Remax Class 10.png","TNHO03","Thẻ nhớ MicroSD 16GB Remax",260000);
	a[111]=new sanpham("/LKRapMay/Phukien/Thenho/Thẻ nhớ MicroSD 16GB Sandisk C4.jpg","TNHO04","Thẻ nhớ MicroSD 16GB Sandisk",23000);
	a[112]=new sanpham("/LKRapMay/Phukien/Thenho/Thẻ nhớ MicroSD 32GB.png","TNHO05","Thẻ nhớ MicroSD 32GB",200000);
	a[113]=new sanpham("/LKRapMay/Phukien/Thenho/Thẻ nhớ MicroSD 64GB Kingston C10.jpg","TNHO06","Thẻ nhớ MicroSD 64GB Kingston",280000);
	a[114]=new sanpham("/LKRapMay/Phukien/Thietbimang/Bộ khuếch đại Wifi Asus RT-N800HP.png","TBM00","Bộ khuếch đại Asus",300000);
	a[115]=new sanpham("/LKRapMay/Phukien/Thietbimang/Bộ phát sóng không dây APTEK 196GU.jpg","TBM01","Bộ phát sóng không dây APTEK",650000);
	a[116]=new sanpham("/LKRapMay/Phukien/Thietbimang/Bộ phát sóng wifi Linksys EA6350.jpg","TBM02","Bộ phát sóng wifi Linksys",310000);
	a[117]=new sanpham("/LKRapMay/Phukien/Thietbimang/Draytek Vigor3900 Super Load.jpg","TBM03","Draytek Vigor3900 Super Load",400000);
	a[118]=new sanpham("/LKRapMay/Phukien/Thietbimang/Router Wifi ASUS ROG Rapture GT-AC5300 (Gaming Router) .png","TBM04","Router Wifi ASUS ROG Rapture",650000);
	a[119]=new sanpham("/LKRapMay/Phukien/Thietbimang/Router Wifi ASUS RT-AC86U (Gaming Router) AC2900 MU-MIMO hỗ trợ AiMesh, bảo vệ mạng AiProtection.jpg","TBM05","Router Wifi ASUS RT-AC86U",610000);
	a[120]=new sanpham("/LKRapMay/Phukien/Thietbimang/TP Link TL-WN725N.jpg","TBM06","TP Link TL-WN725N",610000);
	a[121]=new sanpham("/LKRapMay/Phukien/Thietbimang/TP-Link Archer C20 - AC750.jpg","TBM07","TP-Link Archer C20 - AC750",610000);
	a[122]=new sanpham("/LKRapMay/Phukien/USB/USB 2.0 OTG 16GB Adata.jfif","USB00","USB OTG",300000);
	a[123]=new sanpham("/LKRapMay/Phukien/USB/USB 3.0 32GB Sandisk.png","USB01","USB Sandisk 32GB",650000);
	a[124]=new sanpham("/LKRapMay/Phukien/USB/USB 3.0 OTG 16GB Sandisk.png","USB02","USB Sandisk 16GB",310000);
	a[125]=new sanpham("/LKRapMay/Phukien/USB/USB 3.0 OTG lightning 32GB Sandisk Ixpand Mini.png","USB03","USB OTG Lightning 32GB",400000);
	a[126]=new sanpham("/LKRapMay/Phukien/USB/Usb 3.0 OTG Type-C 32G Sandisk.png","USB04","USB OTG Type",650000);
	a[127]=new sanpham("/LKRapMay/Phukien/USB/USB Sandisk SDCZ50 8GB 2.0.jpg","USB05","USB Sandisk 8GB",610000);
	return a;
}
//Format tiền//////////////////////////////
function formatPricetoPrint(a){
	a=a.toLocaleString()
	a=a.split(',').join('.');
	return a;
}
function formatPricetoMath(a){
	a=a.split('.').join('');
	return a;
}

// Xử lý thông tin giỏ hàng
function productInCart(id,quantity,price){
	this.id=id;
	this.quantity=quantity;
	this.price=price;
}
function addCart(x,quantity){
	var prdt = new productInCart(x,parseInt(quantity),0);
	var cartArray = localStorage.getItem("cartArray");
	cartArray = JSON.parse(cartArray);
	var flag=0;
	if(cartArray == null){
		cartArray = new Array();
		cartArray.push(prdt);
	} else {
		for (var i = 0; i<cartArray.length;i++){
			if ( cartArray[i].id == x){ 
                cartArray[i].quantity+=parseInt(quantity);
                flag=1;
                break;
			}
		}
		if(flag==0)cartArray.push(prdt);
	}
	localStorage.setItem("cartArray",JSON.stringify(cartArray));
	alert("Đã cho vào giỏ");
}
function printCart(){
    var cartArray = localStorage.getItem("cartArray");
    cartArray = JSON.parse(cartArray);
    if(cartArray==null)
    {
        document.getElementById('sl-sp').innerHTML="0";
    }
    var sl=0;
    for(var i=0;i<cartArray.length;i++)
    {
        sl+=parseInt(cartArray[i].quantity);
    }
    document.getElementById('sl-sp').innerHTML=sl;
    var s="";
    var a = mangsanpham();
    for (var i = 0;i<cartArray.length;i++){
        for (var j = 0;j<a.length;j++){
            if (cartArray[i].id==a[j].id){
                s+="<tr class='line-item'>"+
                "<td class='item-image'><img src='./image"+a[j].pic+"'></td>"+
                "<td class='item-title'>"+a[j].name+"</td>"+
                "<td class='item-soluog'><input class='box_so_luong' id='prdt-quantity-"+a[j].id+"' type='number' value='"+cartArray[i].quantity+"' name='quantity' min='0' max='1000' style='width: 80px;' onchange='Quantity("+'"'+a[j].id+'"'+")'></td>"+
                "<td class='item-price' id='prdt-price-"+a[j].id+"'>"+formatPricetoPrint(parseInt(a[j].price))+"</td>"+
                "<td class='item-delete'><a href='#' onclick='removeCart("+'"'+a[j].id+'"'+")'>Xóa</a></td>"+
                "</tr>";
            }
        }
    }
    document.getElementById("info-cart").innerHTML=s;
}

function removeCart(x){
	var r = confirm("Bạn có muốn xoá sản phẩm này?");
    if (r == true) {
        var cartArray = localStorage.getItem("cartArray");
		cartArray = JSON.parse(cartArray);
		for (var i = 0; i<cartArray.length;i++){
			if (cartArray[i].id==x){ 
				x=i;
			} 
		}
		cartArray.splice(x,1);
		localStorage.setItem("cartArray",JSON.stringify(cartArray));
    } else {
        document.getElementById("prdt-quantity-"+x).value=1;
        Quantity(x);
    }
	printCart();
}
function Quantity(x){
	var s = document.getElementById("prdt-quantity-"+x).value;
	if ( s == 0) removeCart(x);
	
	var cartArray = localStorage.getItem("cartArray");
	cartArray = JSON.parse(cartArray);
	for (var i = 0; i<cartArray.length;i++){
		if ( cartArray[i].id == x){ 
			cartArray[i].quantity = s;
		}
	}
    var a = mangsanpham();
    var price = 0;
    for (var i = 0; i<a.length;i++){
		if ( a[i].id == x){ 
            price =  a[i].price;
            break;
		}
	}
	price*= s;
    price = formatPricetoPrint(price);
    document.getElementById("prdt-price-"+x).innerHTML=price;
	localStorage.setItem("cartArray",JSON.stringify(cartArray));
}
//Show giỏ hàng
function showGioHang(){
	document.getElementById('khungGioHang').style.display = "block";
	printCart();
	
}
window.onclick = function(event) {
	var cart = document.getElementById("khungGioHang");
	if (event.target == cart) {
		cart.style.display = "none";
    }

    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function closeCart(){
	document.getElementById('khungGioHang').style.display = "none";
}

//Hiện thông tin sản phẩm////////////////////////
function showDetail(code){
	document.getElementById('myModal').style.display = "block";
	var a = mangsanpham();
	for ( var i = 0 ; i<a.length ; i++){
		if(a[i].id == code ){
			document.getElementById("ten").innerHTML=a[i].name;
			document.getElementById("hinh").src="./image"+a[i].pic;
			document.getElementById("gia").innerHTML=formatPricetoPrint(a[i].price);
		}
	}
	document.getElementById("btn-buy").onclick = function(){addCart(code,document.getElementById('prdt-quantity').value)};
}


function closeDetail(){
	document.getElementById('myModal').style.display = "none";
}
