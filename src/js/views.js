App.Views = {};
App.Views.CategoryList = Backbone.View.extend({
	initialize: function() {
		var region = 'us';
		$("#categorylist").html("");
		$.getJSON('src/hp_categories.json', function(data) {
			$.each(data[region].categories, function(index,item) {
				$("#categorylist").append("<div class='panel' style='color:" + item.colors[0] + ";' onclick=\"location.href='#/category/" + item.key + "'\"><div id='cat_" + item.key + "' class='thumbnail' style='color:white; background-color:" 
					+ item.colors[0] + ";'></div>" + item.title + "</div>");
					
				$.ajaxJSONP({
					url: 'http://www.huffingtonpost.com/api/?t=featured_news&limit=1&mobile=true&link_outs=true&vertical=' + item.key + '&callback=?',
					success: function(data) {
						if (data.response[0] !== undefined && data.response[0].entry_image !== undefined)
							$('#cat_'+item.key).css("background-image", "url(" + data.response[0].entry_image + ")");  
					}
				});	
			});
			$("#categorylist").hide();
		});
	},
	render: function() {
		$("#categorylist").show();
	},
	hide: function() {
		$("#categorylist").hide();
	}
});
App.Views.CategoryList = new App.Views.CategoryList();

App.Views.Category = Backbone.View.extend({
	load: function(id) {
		$("#category").html("");
		$.ajaxJSONP({
			url: 'http://www.huffingtonpost.com/api/?t=featured_news&vertical=' + id + '&limit=50&mobile=true&link_outs=true&callback=?',
			success: function(data) {
				$("#category").html("<div class='categoryname'>"+id+"</div><br><table id='articletable'></table>");
				elem = $("#articletable");
				$.each(data.response,function(index,item) {
					if (index==0)
						elem.append("<tr> <td colspan='2'><div class='toparticle' style=\"background-image:url('"+ item.headline_image +"');\"></div></td></tr>");
					
					if (item.entry_image == "")
						img_attr = "style='display:none'";
					else
						img_attr = "style=\"background-image:url('"+ item.entry_image +"')\" ";
					
					elem.append("<tr onclick=\"location.href='#/article/"+ item.entry_id +"'\">" +
						"<td><div class='articlethumbnail' "+img_attr+"></div></td>" +
						"<td>"+item.entry_title+"</td></tr>");
				});
			}
		});	
	},
	render: function() {
		$("#category").show();
	},
	hide: function() {
		$("#category").hide();
	}
});
App.Views.Category = new App.Views.Category();

App.Views.Article = Backbone.View.extend({
	load: function(id) {
		$("#article").html("");
		$.ajaxJSONP({
			url: 'http://www.huffingtonpost.com/api/?t=entry&tags=1&ftext=1&headline=true&entry_ids=' + id + '&callback=?',
			success: function(data) {
				$.each(data.response,function(index,item) {
					$("#article").append("<center><h1>"+item.entry_title+"</h1></center>");
					if (item.entry_image)
						$("#article").append("<center><img src='"+item.entry_image.replace(/mini/g, 'large')+"'></center><br>");
					$("#article").append(item.entry_text.replace(/\n/g, '<br />'));
				});
			}
		});	
	},
	render: function() {
		$("#article").show();
	},
	hide: function() {
		$("#article").hide();
	}
});
App.Views.Article = new App.Views.Article();