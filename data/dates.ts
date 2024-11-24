const eventDay = new Date(2024, 2, 26, 8, 59, 59);
const eventDay1Start = new Date(2024, 2, 26, 9, 59, 59);
const eventDay1End = new Date(2024, 2, 26, 17, 59, 59);

const eventDay2Start = new Date(2024, 2, 27, 9, 59, 59);
const eventDay2End = new Date(2024, 2, 27, 17, 59, 59);

const date = {
	eventDay,

	day1: {
		start: eventDay1Start,
		end: eventDay1End,
	},
	day2: {
		start: eventDay2Start,
		end: eventDay2End,
	},
};

export default date;
