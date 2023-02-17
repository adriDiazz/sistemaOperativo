import Clock from './Clock';
import style from './TaskBar.module.css';

const TaskBar = () => {
	return (
		<div className={style.taskBar}>
			<img src='operating-system.png' alt='' />
			<Clock />
		</div>
	);
};

export default TaskBar;
