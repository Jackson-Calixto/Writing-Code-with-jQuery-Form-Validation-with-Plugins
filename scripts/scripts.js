//
$(function(){
	$("form[name='frmCollectWeights']").validate({
		rules:{
			empName:{
				required:true,
				minlength:3
			},
			empWeight:{
				required:true,
				digits:true
			}
		},
		messages:{
			empName:{
				required:"Name is required",
				minlength:"Name too short"
			},
			empWeight:{
				required:"Weight is required",
				digits:"Weight must be a number"
			}
		},
		submitHandler:{
			function(form){
				form.submit();
			}
		}
	});
});
//
let pTags = document.getElementsByTagName('p');
let inputTags = document.getElementsByTagName('input');
let xmlhttp = new XMLHttpRequest();
let file = "json.txt";
let url = "http://localhost:8000/getallrecords";
//
$(function(){
	$("form[name='frmCollectWeights']").validate({
		rules:{
			empName:{
				required:true,
				minlength:3
			},
			empWeight:{
				required:true,
				digits:true
			}
		},
		messages:{
			empName:{
				required:"Name is required",
				minlength:"Name too short"
			},
			empWeight:{
				required:"Weight is required",
				digits:"Weight must be a number"
			}
		},
		submitHandler:{
			function(form){
				form.submit();
			}
		}
	});
});
//
$(function() {
  $("#getData").click(function(){
		$.ajax({
			url:"json.txt",
			type:"GET",
			dataType:"json",
			success:function(result){
				displayData(result);
			},
			error:function(error){
				console.log(error);
			}
		});
	});
});

//
$(function(){
	jQuery.validator.addMethod("lettersOnly", function (value, element) {
		return this.optional(element) || /^[a-zA-Z]+$/i.test(value);
	}, "Please enter letters only.");
});
//
$(function(){
 $("p").mouseover(function(){
 	$(this).addClass("liYellow");
 });
 $("p").mouseout(function(){
	 $(this).removeClass("liYellow");
 });
});
//
async function getData(){
	try{
		const response = await fetch(url);
		const json = await response.json();
		displayData(json);
	} catch(err){
		console.log(err);
	}

};
//
function displayData(arr) {
	let outHTML = "";
	for(let i=0; i < arr.length; i++){
		outHTML+="<p>"+arr[i].empName + " weighed " + arr[i].empWeight + " Kgs</p>";
	}
	document.getElementById("records").innerHTML = outHTML;
}
//
