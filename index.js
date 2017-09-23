var katzDeli = [];

function takeANumber(katzDeli, name) {
	katzDeli.push(name);
	return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
	katzDeli.shift();
	if (katzDeli.length === 0) {
		return `There is nobody waiting to be served!`;
	} else {
		return `Currently serving ${katzDeli[0]}`;
	}
}
