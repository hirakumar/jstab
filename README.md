# JS Tab

JS Tab is tiny javascript to show tab function in your webpage

## Getting Started

This is native javascript plugins which shows tab controls in your webpage without any third party framework.


### Installing

Make sure you have Browser Software . For example Internet Explore/Edge/Firefox/Chrome/Opera . 

1. Open on https://github.com/hirakumar/jstab . 
2. In the right side corner click on "Clone or download" .
3. Click on "Download ZIP" button
4. Save it on your computer
5. Extract it
6. Open tab.html

HTML CODE

```
		<div class="tabControl" id="myTab">
			<ul class="tablinks">
				<li><a href="#page1" class="active">Page 1</a></li>
				<li><a href="#page2">Page 2</a></li>
				<li><a href="#page3" >Page 3</a></li>
			</ul>
			<div class="tabs">
				<div class="tab activeTab" id="page1">
					.... 1
				</div>
				<div class="tab" id="page2">
					.... 1
				</div>
				<div class="tab" id="page3">
					.... 1
				</div>
			</div>
		</div>
```
CSS CODE

```
.tabControl {font-family:arial,san-serif; font-size:14px;}
.tabControl  ul.tablinks {list-style:none;position:relative; top:1px; z-index:2}
.tabControl  ul.tablinks li {float:left; margin-right:5px; }
.tabControl ul.tablinks li a {border:solid 1px gray; display:inline-block; padding:5px; background:white; text-decoration:none; color:#333;}
.tabControl ul.tablinks li a.active{font-weight:bold; border-bottom:solid 1px white;}
.tabControl .tabs{clear:both; display:block; border:solid 1px gray; color:#333;}
.tabControl .tab{display:none;  padding:20px; background:white}
.tabControl .tab.activeTab{display:block; border-bottom:solid 1px white}
.tabControl .tab.activeTab{ padding:20px; }
```
JAVASCRIPT CODE : Make sure you are puting javascript at bottom of html before closing body tag </body>

```
<script src="js/jstab.js"></script>
<script>
const tabControl=new TabControl(".tabControl");
</script>
```
## Documentation

* Object : TabControl
* Constructor Parameters: String


Default Property of TabControl Object

* TabControl.activeTabLinkClass="active";
* TabControl.activeTabClass="activeLi";
* TabControl.activeTabBoxClass="activeTab";

## Contributing

Please read [CONTRIBUTING.md](https://github.com/hirakumar/jstab) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Hira Kumar Maharjan** - *Initial work* - [Responsive Images](https://github.com/hirakumar/jstab)

See also the list of [contributors](https://github.com/hirakumar/jstab/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

