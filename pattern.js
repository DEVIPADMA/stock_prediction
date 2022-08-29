var n = window.prompt("Enter number of lines: ")
for (var i = 0; i < n; i++) {
	for (var j = 0; j < i; j++) {
		document.write("* ")
	}
	document.writeln("")
}