import { useState, useEffect } from 'react';
import style from './Clock.module.css';

function Clock() {
	const [date, setDate] = useState(new Date());

	function refreshClock() {
		setDate(new Date());
	}
	useEffect(() => {
		const timerId = setInterval(refreshClock, 1000);
		return function cleanup() {
			clearInterval(timerId);
		};
	}, []);
	return <span className={style.clock}>{date.toLocaleTimeString()}</span>;
}
export default Clock;
