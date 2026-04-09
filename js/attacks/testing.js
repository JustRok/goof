var ag1 = {
	type: "arrow",
	id: "ag1",
	next_time: 3.2,
	arrows: [
		{ direction: "$3", turntype: 0, target_time: 0.0, speed: 100 },
		{ direction: "$3", turntype: 0, target_time: 0.6, speed: 100 },
		{ direction: "$3", turntype: 0, target_time: 1.2, speed: 100 },
	],
	next_sets: ["p1"],
};

var p1 = {
	type: "parry",
	wait_time: 0.5,
	parry_window_start: 0.3,
	parry_window_end: 0.8,
	next_sets: ["ag1"],
};
