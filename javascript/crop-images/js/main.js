$(document).ready(() => {
	console.log(location.href);

	$("#pic").submit((e) => {
		e.preventDefault();
	});

	$("#pic").each((i, el) => {
		let $preview = $("#preview");
		let $currentImage = $("#image img");
		$(el).change((e) => {
			// it prevents the default event
			e.preventDefault();
			let dataFile = $(el).find("input[type='file']").prop("files")[0];
			console.log(dataFile.type);
			let reader = new FileReader();
			reader.readAsDataURL(dataFile);
			console.log(reader);


			reader.onload = (event) => {
				$currentImage.attr("src", event.target.result);
				$currentImage.cropper({
					aspectRatio: 1,
					viewMode: 1,
					preview: $preview
				});
				$currentImage.cropper("replace", event.target.result);

				// $currentImage.on("cropmove", () => {
				// 	let data = $currentImage.cropper("getCanvasData");
				// 	console.log(data);
				// });
			};
		});

		$(el).submit((e) => {
			let imageURL = $currentImage.cropper("getCroppedCanvas").toDataURL("image/png");
			// $("body").append("<img src='"+ imageURL +"'>");
			$currentImage.cropper("getCroppedCanvas").toBlob((blob) => {
				let formData = new FormData();
				formData.append("avatar", blob);
				console.log(formData.get("avatar"));
				$.ajax({
					url: "upload.php",
					method: "POST",
					data: formData,
					processData: false,
					contentType: false,
					success: (resp) => {
						console.log(resp);
					},
					error: () => {}
				});	
			});
		});
	});
});