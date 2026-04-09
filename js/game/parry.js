function Parry (props) {
    this.wait_time = props.wait_time || 0.2;
    this.parry_window_start = props.parry_window_start || 0.3;
    this.parry_window_end = props.parry_window_end || 0.9;
}

Parry.prototype.update = function (delta_ms) {

	if (delta_ms > this.parry_window_end) switch (gamestate.difficulty) {
    case "normal":
        heart.takeDamage(5);
        break;
    case "hard":
        heart.takeDamage(8);
        break;
    case "genocide":
        heart.takeDamage(99.99);
        break;
    default:
        heart.takeDamage(1);
	}
}