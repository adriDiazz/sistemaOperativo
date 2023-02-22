import { useSelector } from 'react-redux';
import Clock from './Clock';
import style from './TaskBar.module.css';

const TaskBar = () => {
	const openedApps = useSelector(state => state.appsOpened);

	const openedAppsEntries = Object.entries(openedApps);

	return (
		<div className={style.taskBar}>
			<img src='operating-system.png' alt='' />
			<div className={style.apps}>
				{openedAppsEntries.map(app => {
					const [appName, isOpen] = app;
					return (
						isOpen && (
							<div className={style.app} key={appName}>
								<img src={`${appName}.png`} alt='' className={style.app} />
							</div>
						)
					);
				})}
			</div>
			<Clock />
		</div>
	);
};

export default TaskBar;
