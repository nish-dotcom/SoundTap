
    var shape = [],i;
		function onKeyDown(event) {
			if(keyData[event.key]){
				i=3+Math.floor(Math.random() * 10)
				var maxPoint = new Point(view.size.width, view.size.height);
				var randomPoint = Point.random();
				var point = maxPoint * randomPoint;
				var ObjectShape = new Path.RegularPolygon(point, i, 300);
				ObjectShape.fillColor = keyData[event.key].color;
				keyData[event.key].sound.play();
				shape.push(ObjectShape);
			}
		}

		
		// The amount of circles we want to make:
		var count = 150;

		// Create a symbol, which we will use to place instances of later:
		var path = new Path.Circle({
			center: [0, 0],
			radius: 3.5,
			fillColor: 'white',
			strokeColor: 'black'
		});

		var symbol = new Symbol(path);

		// Place the instances of the symbol:
		for (var i = 0; i < count; i++) {
			// The center position is a random point in the view:
			var center = Point.random() * view.size;
			var placedSymbol = symbol.place(center);
			placedSymbol.scale(i / count);
		}

		// The onFrame function is called up to 60 times a second:
		function onFrame(event) {
			// Run through the active layer's children list and change
			// the position of the placed symbols:
			{
				for(var i = 0; i < shape.length; i++){
					shape[i].scale(0.905);
					shape[i].fillColor.hue += 1;
					if(shape[i].area < 1){
						shape[i].remove();
					shape.splice(i, 1);
					}
				}
				}
			for (var i = 0; i < count; i++) {
				var item = project.activeLayer.children[i];
				
				// Move the item 1/20th of its width to the right. This way
				// larger circles move faster than smaller circles:
				item.position.x += item.bounds.width / 20;

				// If the item has left the view on the right, move it back
				// to the left:
				if (item.bounds.left > view.size.width) {
					item.position.x = -item.bounds.width;
				}
			}
		}
