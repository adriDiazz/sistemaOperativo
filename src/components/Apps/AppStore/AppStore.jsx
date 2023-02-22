import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { closeApp } from '../../../redux/appsSlice';
import style from './AppStore.module.css';
import StoreItem from './StoreItem';

const AppStore = ({ open, title }) => {
	const apps = useSelector(state => state.appsOpened);
	const disaptach = useDispatch();

	const close = () => {
		disaptach(
			closeApp({
				app: 'store'
			})
		);
		// disaptach(add);
	};
	return (
		open && (
			<Draggable
				defaultPosition={{
					x: 150,
					y: 100
				}}
			>
				<div className={style.window}>
					<div className={`${style.borderTop}`}>
						<img src='close.png' alt='' onClick={close} />
						<span className={style.title}>{title}</span>
					</div>
					<div className={style.app}>
						<div className={style.header}></div>
						<h2>Top downloaded Apps</h2>
						<div className={style.appList}>
							<StoreItem
								img='paint.png'
								title='Paint'
								desc='Paint va donde tu creatividad te lleve, desde bocetos rápidos hasta obras de arte que están totalmente terminadas.'
							/>
							<StoreItem
								img='Notepad.png'
								title='Notepad'
								desc='Este editor, rápido y sencillo, ha sido una grapa de Windows durante años. Úsalo para ver, editar y buscar en documentos.'
							/>
							<StoreItem
								img='calendar.png'
								title='Calendar'
								desc='Calendar es una aplicación de calendario y organizador de eventos que te permite ver todos tus eventos.'
							/>
						</div>
					</div>
				</div>
			</Draggable>
		)
	);
};

export default AppStore;
