import { useDispatch, useSelector } from 'react-redux';
import { openApp } from '../redux/appsSlice';
import Paint from './Apps/Paint/Paint';

import AppStore from './Apps/AppStore/AppStore';
import style from './Desktop.module.css';
import Mycomputer from './Mycomputer';
import Terminal from './Terminal';
import Bloc from './Apps/NotePad/Bloc';
import Calendario from './Apps/Calendar/Calendar';
import CalendarApp from './Apps/Calendar/CalendarApp';

const Desktop = () => {
	const openedApps = useSelector(state => state.appsOpened);
	const downloadedApps = useSelector(state => state.downloadedApps);
	const dispatch = useDispatch();

	console.log(downloadedApps);
	const handleOpen = e => {
		dispatch(
			openApp({
				app: e.target.getAttribute('alt')
			})
		);
	};

	return (
		<div className={style.full}>
			<div className={style.icons}>
				<img
					src='mycomputer.png'
					alt='mycomputer'
					onClick={e => handleOpen(e)}
				/>
				<img src='terminal.png' alt='terminal' onClick={e => handleOpen(e)} />
				<img src='store.png' alt='store' onClick={e => handleOpen(e)} />
				{downloadedApps?.map((app, index) => {
					if (app.downloaded === true) {
						return (
							<img
								src={app.icon}
								alt={app.name}
								onClick={e => handleOpen(e)}
								key={app.name}
							/>
						);
					}
				})}
			</div>
			<Mycomputer open={openedApps.mycomputer} title='MyComputer' />
			<Terminal open={openedApps.terminal} title='Terminal' />
			<AppStore open={openedApps.store} title='AppStore' />
			<Paint open={openedApps.Paint} title='Paint' />
			<Bloc open={openedApps.Notepad} title='Notepad' />
			<CalendarApp open={openedApps.Calendar} title='Calendar' />
		</div>
	);
};

export default Desktop;
